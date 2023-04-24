import React from "react";
import { Line } from "./interfaces/Line";

interface Props {
  line: Line;
}

function DrawingLine(props: Props) {
  const pathData = "M " + props.line.points.map((point) => point.x + " " + point.y).join(" L ");

  return <path stroke={props.line.color} strokeWidth={props.line.width} fill="none" d={pathData} />;
}

export default DrawingLine;
