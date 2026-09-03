import React, { useState } from "react";
import DATA from "../data/siteData.js";
import DetailModal from "./DetailModal.jsx";
import SectionFloaters from "./SectionFloaters.jsx";

export default function Timeline() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="timeline" className="section">
      <SectionFloaters variant={1} />
      <div className="container">
        <div className="section-header reveal">
          <h2 className="glow-blue">Log Timeline</h2>
        </div>
        <div className="timeline-container">
          <div className="timeline-line" />
          {DATA.timeline.map((t) => {
            const card = (
              <button
                type="button"
                className="timeline-content clickable-card pixel-panel"
                onClick={() => setSelected(t)}
              >
                {t.badge && <span className="tl-badge">{t.badge}</span>}
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
              </button>
            );

            return (
              <div className="timeline-item reveal" key={t.slug}>
                {t.side === "right" ? (
                  <>
                    <div className="left-year">{t.year}</div>
                    <div className="timeline-dot" />
                    <div className="right-content">{card}</div>
                  </>
                ) : (
                  <>
                    <div className="left-content">{card}</div>
                    <div className="timeline-dot" />
                    <div className="right-year">{t.year}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selected && (
        <DetailModal
          title={selected.title}
          meta={selected.year}
          description={selected.desc}
          slides={selected.images}
          shareId={selected.slug}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
