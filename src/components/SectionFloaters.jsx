import React from "react";
import { ParallaxPxlKitIcon, PxlKitIcon, AnimatedPxlKitIcon } from "@pxlkit/core";
import { PixelRocket, MagicOrb } from "@pxlkit/parallax";
import { PulsingSun, CrescentMoon } from "@pxlkit/weather";

/**
 * Dekorasi latar pesawat + planet yang mengambang, pakai ikon animasi
 * dari pxlkit (@pxlkit/parallax & @pxlkit/weather). Taruh sebagai anak
 * PERTAMA di dalam elemen section (yang sudah position:relative).
 *
 * variant 1 -> pesawat di kiri-atas, planet di kanan-bawah
 * variant 2 -> pesawat di kanan-atas (menghadap sebaliknya), planet di kiri-bawah
 */
export default function SectionFloaters({ variant = 1 }) {
  return (
    <div
      className={`section-floaters sf-variant-${variant}`}
      aria-hidden="true"
    >
      <div className="sf-item sf-rocket">
        <ParallaxPxlKitIcon icon={PixelRocket} size={30} interactive={false} />
      </div>
      <div className="sf-item sf-moon">
        <ParallaxPxlKitIcon icon={MagicOrb} size={34} interactive={false} />
      </div>
      <div className="sf-item sf-sun">
        <AnimatedPxlKitIcon icon={PulsingSun} size={34} />
      </div>
      <div className="sf-item sf-cmoon">
        <PxlKitIcon icon={CrescentMoon} size={26} appearance="solid" color="var(--yellow)" />
      </div>
    </div>
  );
}
