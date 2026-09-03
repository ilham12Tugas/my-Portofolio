import React from "react";
import { PIXEL_PATTERNS } from "./pixelPatterns.js";

export default function PixelIcon({ name, size = 20, color = "currentColor", className = "" }) {
  const pattern = PIXEL_PATTERNS[name] || PIXEL_PATTERNS.sparkle;
  const rows = pattern.length;
  const cols = Math.max(...pattern.map((r) => r.length));
  const cells = [];

  pattern.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === "#") {
        cells.push(<rect key={`${x}-${y}`} x={x} y={y} width="1.05" height="1.05" fill={color} />);
      }
    }
  });

  return (
    <svg
      width={size}
      height={(size * rows) / cols}
      viewBox={`0 0 ${cols} ${rows}`}
      className={`pixel-icon ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {cells}
    </svg>
  );
}
