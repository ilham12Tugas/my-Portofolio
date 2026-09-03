import React, { useRef } from "react";
import DATA from "../data/siteData.js";
import PixelIcon from "../icons/PixelIcon.jsx";
import useSkillBars from "../hooks/useSkillBars.js";
import SectionFloaters from "./SectionFloaters.jsx";

function SkillBarGroup({ items, visible }) {
  return items.map((s) => (
    <div className="bar-item" key={s.name}>
      <div className="bar-info">
        <span>{s.name}</span>
        <span>{s.pct}%</span>
      </div>
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: visible ? `${s.pct}%` : "0%" }}
        />
      </div>
    </div>
  ));
}

export default function Skills() {
  const sectionRef = useRef(null);
  const barsVisible = useSkillBars(sectionRef);

  return (
    <section id="skills" className="section" ref={sectionRef}>
      <SectionFloaters variant={2} />
      <div className="container">
        <div className="section-header reveal">
          <h2 className="glow-blue">Skills</h2>
        </div>
        <div className="skills-wrapper">
          <div className="pixel-panel skill-category reveal">
            <h3>
              <PixelIcon name="wrench" size={16} color="var(--yellow)" /> Hard
              Skills
            </h3>
            <SkillBarGroup items={DATA.skills.hard} visible={barsVisible} />
          </div>

          <div className="pixel-panel skill-category reveal">
            <h3>
              <PixelIcon name="layers" size={16} color="var(--yellow)" />{" "}
              Framework
            </h3>
            <SkillBarGroup
              items={DATA.skills.framework}
              visible={barsVisible}
            />
          </div>

          <div className="pixel-panel skill-category reveal">
            <h3>
              <PixelIcon name="user" size={16} color="var(--yellow)" /> Soft
              Skills
            </h3>
            <div className="tag-wrap">
              {DATA.skills.soft.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="pixel-panel skill-category reveal">
            <h3>
              <PixelIcon name="gear" size={16} color="var(--yellow)" /> Tools
            </h3>
            <div className="tag-wrap">
              {DATA.skills.tools.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
