import React, { useState } from "react";

/**
 * Bungkus <img> dengan skeleton pixel shimmer selagi memuat, dan
 * loading="lazy" bawaan browser supaya gambar baru diunduh saat
 * mendekati viewport (bukan langsung semua sekaligus).
 *
 * Props:
 * - src, alt        : sama seperti <img>
 * - className        : class untuk wrapper (atur ukuran/posisi dari luar)
 * - onLoad, onError  : callback opsional ke komponen pemanggil
 */
export default function ImageWithSkeleton({
  src,
  alt,
  className = "",
  onLoad,
  onError,
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`img-skeleton-wrap ${className}`}>
      {!loaded && <div className="pixel-skeleton" aria-hidden="true" />}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`skeleton-img ${loaded ? "is-loaded" : ""}`}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        onError={(e) => onError?.(e)}
      />
    </div>
  );
}
