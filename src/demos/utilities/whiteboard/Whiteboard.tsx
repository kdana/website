import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import VolumeUp from "@mui/icons-material/VolumeUp";
import VolumeDown from "@mui/icons-material/VolumeDown";
import Clear from "@mui/icons-material/Clear";
import Undo from "@mui/icons-material/Undo";
import Drawing from "./Drawing";
import { Line } from "./interfaces/Line";
import { Point } from "./interfaces/Point";
import { Typography } from "@mui/material";

function Whiteboard() {
  const drawingArea = React.useRef<HTMLElement>();
  const theme = useTheme();

  const [toolsDrawerOpen, setToolsDrawerOpen] = React.useState(false);
  const [lines, setLines] = React.useState<Line[]>([]);
  const [isDrawing, setIsDrawing] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(theme.palette.primary.main);
  const [selectedWidth, setSelectedWidth] = React.useState(2);

  React.useEffect(() => {
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const handleMouseDown = (event: React.MouseEvent) => {
    if (event.button !== 0) {
      return;
    }

    setIsDrawing(true);
    const point = getRelativeCoordinates(event);
    setLines([...lines, { points: [point], color: selectedColor, width: selectedWidth }]);
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDrawing) {
      return;
    }

    let lastLine = lines[lines.length - 1];

    if (lastLine) {
      const point = getRelativeCoordinates(event);
      lastLine.points = lastLine.points.concat(point);

      // replace last line
      lines.splice(lines.length - 1, 1, lastLine);
      setLines(lines.concat());
    }
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const getRelativeCoordinates = (event: React.MouseEvent): Point => {
    const boundingRect = drawingArea.current?.getBoundingClientRect() || { left: 0, top: 0 };
    return {
      x: event.clientX - boundingRect.left,
      y: event.clientY - boundingRect.top,
    };
  };

  const undo = () => {
    setLines(lines.slice(0, -1));
  };

  const clear = () => {
    setLines([]);
  };

  return (
    <Box>
      <Drawer
        PaperProps={{ sx: { zIndex: theme.zIndex.appBar - 1, p: toolsDrawerOpen ? 2 : 0, pt: 2 } }}
        variant="persistent"
        open={true}
      >
        <Toolbar />
        <Box sx={{ display: "flex", justifyContent: toolsDrawerOpen ? "flex-end" : "center" }}>
          <IconButton
            onClick={() => {
              setToolsDrawerOpen(!toolsDrawerOpen);
            }}
            aria-label={toolsDrawerOpen ? "Close Drawer" : "Open Drawer"}
          >
            {(theme.direction === "rtl") === toolsDrawerOpen ? <ChevronRight /> : <ChevronLeft />}
          </IconButton>
        </Box>

        {toolsDrawerOpen ? (
          <>
            <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
              <span style={{ height: "1px", width: "8px", backgroundColor: theme.palette.primary.main }}></span>
              <Slider
                aria-label="Line width"
                size="small"
                min={1}
                value={selectedWidth}
                onChange={(event, newValue) => setSelectedWidth(newValue as number)}
              />
              <span style={{ height: "4px", width: "16px", backgroundColor: theme.palette.primary.main }}></span>
            </Stack>
            <Divider orientation="horizontal" />
            <Button startIcon={<Undo />} onClick={undo}>
              Undo
            </Button>
            <Button startIcon={<Clear />} onClick={clear} color="error">
              Clear
            </Button>
          </>
        ) : (
          <>
            <IconButton onClick={() => {  }}>
              <span style={{ height: "4px", width: "16px", backgroundColor: theme.palette.primary.main }}></span>
            </IconButton>
            <Divider orientation="horizontal" />
            <IconButton onClick={undo} color="primary" title="Undo">
              <Undo />
            </IconButton>
            <IconButton onClick={clear} color="error" title="Clear">
              <Clear />
            </IconButton>
          </>
        )}
      </Drawer>
      <Box ref={drawingArea} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} sx={{ height: "100vh" }}>
        <Typography
          variant="h3"
          textAlign="center"
          sx={{ visibility: lines.length ? "hidden" : "visible", position: "absolute", top: "50vh", left: "40vh" }}
        >
          Draw Anywhere
        </Typography>
        <Drawing lines={lines}></Drawing>
      </Box>
    </Box>
  );
}

export default Whiteboard;
