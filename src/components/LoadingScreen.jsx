import React from "react";
import { ParallaxPxlKitIcon } from "@pxlkit/core";
import { PixelRocket } from "@pxlkit/parallax";

/**
 * Splash screen pixel-art yang tampil sampai halaman selesai load.
 * Dikontrol lewat prop `show` dari App.jsx.
 */
export default function LoadingScreen({ show }) {
  return (
    <div
      className={`loading-screen ${show ? "" : "is-hidden"}`}
      aria-hidden={!show}
    >
      <div className="loading-rocket">
        <ParallaxPxlKitIcon icon={PixelRocket} size={44} interactive={false} />
      </div>
      <p className="loading-brand">
        <span className="pulse-dot" aria-hidden="true" />
        loading
      </p>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}
