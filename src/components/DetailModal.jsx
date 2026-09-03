import React, { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Terminal,
  Bookmark,
  Share2,
  X,
} from "lucide-react";
import PixelIcon from "../icons/PixelIcon.jsx";
import { ParallaxPxlKitIcon } from "@pxlkit/core";
import { PixelRocket, MagicOrb } from "@pxlkit/parallax";
import ImageWithSkeleton from "./ImageWithSkeleton.jsx";

export default function DetailModal({
  title,
  meta,
  description,
  slides,
  shareId,
  onClose,
}) {
  const [index, setIndex] = useState(0);
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [failedImages, setFailedImages] = useState({});
  const touchX = useRef(null);

  const markImageFailed = (i) =>
    setFailedImages((prev) => ({ ...prev, [i]: true }));

  const go = (dir) =>
    setIndex((i) => (i + dir + slides.length) % slides.length);

  const handleTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    if (touchX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (delta > 40) go(-1);
    else if (delta < -40) go(1);
    touchX.current = null;
  };

  const flash = (msg) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(""), 1800);
  };

  const buildLink = () =>
    `${window.location.origin}${window.location.pathname}#${shareId}`;

  const handleCommand = async () => {
    try {
      await navigator.clipboard.writeText(`portfolio --open ${shareId}`);
      flash("Command disalin!");
    } catch {
      flash("Gagal menyalin");
    }
  };

  const handleShare = async () => {
    const link = buildLink();
    if (navigator.share) {
      try {
        await navigator.share({ title, text: description, url: link });
      } catch {
        /* dibatalkan pengguna — abaikan */
      }
      return;
    }
    try {
      await navigator.clipboard.writeText(link);
      flash("Link disalin!");
    } catch {
      /* noop */
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="pixel-panel detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Tutup"
        >
          <X size={18} />
        </button>

        <div
          className="detail-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="detail-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((slide, i) => {
              const showPhoto = slide.src && !failedImages[i];
              return (
                <div
                  className={`detail-slide ${showPhoto ? "" : `art-${slide.variant}`}`}
                  key={i}
                >
                  {showPhoto ? (
                    <>
                      <ImageWithSkeleton
                        src={slide.src}
                        alt={slide.label}
                        className="detail-slide-img-wrap"
                        onError={() => markImageFailed(i)}
                      />
                      <span className="detail-slide-caption">
                        {slide.label}
                      </span>
                    </>
                  ) : (
                    <span className="detail-slide-label">{slide.label}</span>
                  )}
                  <div className="floaters">
                    {i % 2 === 0 ? (
                      <div className="fi fi-1">
                        <ParallaxPxlKitIcon
                          icon={PixelRocket}
                          size={30}
                          interactive={false}
                        />
                      </div>
                    ) : (
                      <div className="fi fi-2">
                        <ParallaxPxlKitIcon
                          icon={MagicOrb}
                          size={30}
                          interactive={false}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {slides.length > 1 && (
            <>
              <button
                type="button"
                className="carousel-nav prev"
                onClick={() => go(-1)}
                aria-label="Sebelumnya"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                className="carousel-nav next"
                onClick={() => go(1)}
                aria-label="Berikutnya"
              >
                <ChevronRight size={18} />
              </button>
              <div className="carousel-dots">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`dot ${i === index ? "active" : ""}`}
                    onClick={() => setIndex(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="detail-body">
          <h3 className="modal-title">{title}</h3>
          {meta && <p className="detail-meta">{meta}</p>}
          <p className="detail-desc">{description}</p>

          <div className="action-bar">
            <button
              type="button"
              className={`action-btn ${liked ? "active" : ""}`}
              onClick={() => setLiked((v) => !v)}
            >
              <PixelIcon
                name="heart"
                size={16}
                color={liked ? "var(--pink)" : "currentColor"}
              />
              <span>Suka</span>
            </button>
            <button
              type="button"
              className="action-btn"
              onClick={handleCommand}
            >
              <Terminal size={16} />
              <span>Command</span>
            </button>
            <button
              type="button"
              className={`action-btn ${saved ? "active" : ""}`}
              onClick={() => setSaved((v) => !v)}
            >
              <Bookmark size={16} fill={saved ? "currentColor" : "none"} />
              <span>Simpan</span>
            </button>
            <button type="button" className="action-btn" onClick={handleShare}>
              <Share2 size={16} />
              <span>Bagikan</span>
            </button>
          </div>
          {feedback && <p className="action-feedback">{feedback}</p>}
        </div>
      </div>
    </div>
  );
}
