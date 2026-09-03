import React, { useState } from "react";
import DATA from "../data/siteData.js";
import PixelIcon from "../icons/PixelIcon.jsx";
import BrandIcon from "../icons/BrandIcon.jsx";
import SectionFloaters from "./SectionFloaters.jsx";

/** Ubah nomor lokal (08xxxx) jadi format internasional wa.me (62xxxx) */
function toWhatsappNumber(raw) {
  const digits = raw.replace(/\D/g, "");
  return digits.startsWith("0") ? `62${digits.slice(1)}` : digits;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [waName, setWaName] = useState("");
  const [waMessage, setWaMessage] = useState("");

  const handleChange = (field) => (e) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  const openModal = () => {
    setWaName(form.name);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleSendWhatsapp = () => {
    if (!waMessage.trim()) return;
    const phone = toWhatsappNumber(DATA.whatsappNumber);
    const text = `Halo, saya ${waName.trim() || "seseorang"}.\n\n${waMessage.trim()}`;
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setModalOpen(false);
    setWaMessage("");
  };

  return (
    <section id="contact" className="section">
      <SectionFloaters variant={2} />
      <div className="container contact-wrapper reveal">
        <h2>
          Mari Mulai Sesuatu <span className="glow-pink">Yang Hebat.</span>
        </h2>
        <p>
          Tertarik berkolaborasi atau sekadar ingin menyapa? Saya selalu terbuka
          untuk diskusi proyek baru.
        </p>

        <div className="pixel-panel contact-form">
          <button
            type="button"
            className="envelope-trigger"
            onClick={openModal}
          >
            <BrandIcon
              name="email"
              size={44}
              color="var(--yellow)"
              className="envelope-wiggle"
            />
            <span>Tap To Send Message</span>
          </button>
        </div>

        <div className="contact-methods">
          {DATA.contactMethods.map((m) => (
            <a
              className="method"
              href={m.url}
              target={m.url.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              key={m.key}
            >
              <BrandIcon name={m.key} size={16} color="var(--neon-blue)" />
              <span>{m.label}</span>
            </a>
          ))}
        </div>
      </div>

      {modalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div
            className="pixel-panel modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={closeModal}
              aria-label="Tutup"
            >
              ×
            </button>
            <h3 className="modal-title glow-blue">
              <BrandIcon name="email" size={18} color="var(--yellow)" /> Kirim
              Pesan
            </h3>

            <div className="form-group">
              <label htmlFor="waName">Nama</label>
              <input
                id="waName"
                type="text"
                placeholder="Nama kamu"
                value={waName}
                onChange={(e) => setWaName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="waMessage">Pesan</label>
              <textarea
                id="waMessage"
                rows="4"
                placeholder="Tulis pesanmu..."
                value={waMessage}
                onChange={(e) => setWaMessage(e.target.value)}
              />
            </div>

            <button
              type="button"
              className="pixel-btn full-width"
              onClick={handleSendWhatsapp}
              disabled={!waMessage.trim()}
            >
              Send Message <PixelIcon name="send" size={16} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
