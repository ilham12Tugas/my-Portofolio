import React from "react";

export default function PixelBadge({ children, size = 40 }) {
  return (
    <span className="pixel-badge" style={{ width: size, height: size }}>
      {children}
    </span>
  );
}
