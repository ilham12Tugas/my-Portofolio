import React, { useState } from "react";
import DATA from "../data/siteData.js";
import DetailModal from "./DetailModal.jsx";
import SectionFloaters from "./SectionFloaters.jsx";
import ImageWithSkeleton from "./ImageWithSkeleton.jsx";

function ProjectCard({ project, index, onClick }) {
  const [failed, setFailed] = useState(false);
  const showCover = project.cover && !failed;

  return (
    <button
      type="button"
      className="pixel-panel project-card clickable-card reveal"
      onClick={onClick}
    >
      <div className={`card-art art-${index + 1}`}>
        {showCover ? (
          <ImageWithSkeleton
            src={project.cover}
            alt={project.title}
            className="card-cover-wrap"
            onError={() => setFailed(true)}
          />
        ) : (
          project.art
        )}
      </div>
      <div className="card-content">
        <div className="card-meta">{project.meta}</div>
        <h3>{project.title}</h3>
        <p className="card-role">{project.role}</p>
        <div className="tech-stack">
          {project.tech.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </button>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="section">
      <SectionFloaters variant={1} />
      <div className="container">
        <div className="section-header reveal">
          <h2 className="glow-blue">Projects</h2>
          <p className="section-sub">
            Studi kasus mendalam dari proyek terbaik. Klik kartu untuk lihat
            detail.
          </p>
        </div>
        <div className="projects-grid">
          {DATA.projects.map((p, i) => (
            <ProjectCard
              key={p.slug}
              project={p}
              index={i}
              onClick={() => setSelected(p)}
            />
          ))}
        </div>
      </div>

      {selected && (
        <DetailModal
          title={selected.title}
          meta={selected.role}
          description={selected.description}
          slides={selected.images}
          shareId={selected.slug}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  );
}
