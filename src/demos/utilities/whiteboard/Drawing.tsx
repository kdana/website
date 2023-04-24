import React from "react";
import DrawingLine from "./DrawingLine";
import { Line } from "./interfaces/Line";

interface Props {
  lines: Line[];
}

function Drawing(props: Props) {
  return (
    <svg height="100%" width="100%">
      {props.lines.map((line, index) => (
        <DrawingLine key={index} line={line} />
      ))}
    </svg>
  );
}

export default Drawing;
