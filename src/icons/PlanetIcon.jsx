import React from "react";

export default function PlanetIcon({ size = 22, color = "var(--yellow)" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className="pixel-icon" aria-hidden="true">
      <circle cx="12" cy="12" r="5.5" fill={color} />
      <ellipse cx="12" cy="12" rx="10.5" ry="3" fill="none" stroke={color} strokeWidth="1.6" transform="rotate(-18 12 12)" />
    </svg>
  );
}
