import React from "react";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";

export interface Props {
  skipTo: string;
}

function SkipLink(props: Props) {
  const [transition, setTransition] = React.useState("ease-out");
  const [transform, setTransform] = React.useState("translateY(-100%)");
  const theme = useTheme();

  return (
    <Link
      className="skip-link"
      href={props.skipTo}
      onFocus={(event) => {
        setTransform("unset");
        setTransition("ease-in");
      }}
      onBlur={(event) => {
        setTransform("translateY(-100%)");
        setTransition("ease-out");
      }}
      sx={{
        position: "absolute",
        zIndex: 1200,
        transition: "transform .2s",
        transitionTimingFunction: transition,
        transform: transform,
      }}
    >
      <Paper variant="outlined" sx={{ padding: 2, color: theme.palette.text.primary }}>
        Skip to Main Content
      </Paper>
    </Link>
  );
}

export default SkipLink;
