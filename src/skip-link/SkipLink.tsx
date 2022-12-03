import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

export interface Props {
  skipTo: string;
}

function SkipLink(props: Props) {
  const [showLink, setShowLink] = React.useState(false);
  const theme = useTheme();

  return (
    <Link
      href={props.skipTo}
      className="SkipLink"
      title="Skip to Main Content"
      onFocus={() => {
        setShowLink(true);
      }}
      onBlur={() => {
        setShowLink(false);
      }}
      sx={{ position: "absolute", zIndex: 1200, color: theme.palette.text.primary }}
    >
      <Slide direction="down" in={showLink}>
        <Paper variant="outlined" sx={{ padding: 2 }}>
          Skip to Main Content
        </Paper>
      </Slide>
    </Link>
  );
}

export default SkipLink;
