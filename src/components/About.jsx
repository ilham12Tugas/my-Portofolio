import React, { useState } from "react";
import DATA from "../data/siteData.js";
import PixelIcon from "../icons/PixelIcon.jsx";
import SectionFloaters from "./SectionFloaters.jsx";
import ImageWithSkeleton from "./ImageWithSkeleton.jsx";

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);
  const showPhoto = DATA.about.photo && !photoFailed;

  return (
    <section id="about" className="section">
      <SectionFloaters variant={2} />
      <div className="container">
        <div className="section-header reveal">
          <h2 className="glow-blue">About</h2>
        </div>
        <div className="about-grid">
          <div className="pixel-panel avatar-frame reveal">
            {showPhoto ? (
              <ImageWithSkeleton
                src={DATA.about.photo}
                alt={DATA.name}
                onError={() => setPhotoFailed(true)}
              />
            ) : (
              <span>IR</span>
            )}
          </div>
          <div className="about-cards">
            <div className="pixel-panel reveal">
              <h3>
                <PixelIcon name="user" size={16} color="var(--yellow)" /> Bio
                Singkat
              </h3>
              <p>{DATA.about.bio}</p>
            </div>
            <div className="pixel-panel reveal">
              <h4>
                <PixelIcon name="bulb" size={16} color="var(--yellow)" /> Value
                Proposition
              </h4>
              <p>{DATA.about.value}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
