import React from "react";
import { BRAND_ICONS } from "./brandIcons.js";

export default function BrandIcon({ name, size = 18, color, className = "", style = {} }) {
  const Icon = BRAND_ICONS[name];
  if (!Icon) return null;
  return <Icon size={size} className={className} style={{ color, ...style }} aria-hidden="true" />;
}
