import React from "react";
import DATA from "../data/siteData.js";
import PixelIcon from "../icons/PixelIcon.jsx";
import PixelBadge from "../icons/PixelBadge.jsx";
import BrandIcon from "../icons/BrandIcon.jsx";
import { ParallaxPxlKitIcon, PxlKitIcon } from "@pxlkit/core";
import { PixelRocket, MagicOrb, RetroJoystick } from "@pxlkit/parallax";
import { Send } from "@pxlkit/feedback";
import useTypingEffect from "../hooks/useTypingEffect.js";
import useTilt from "../hooks/useTilt.js";
import SectionFloaters from "./SectionFloaters.jsx";

export default function Hero({ scrollToId }) {
  const typed = useTypingEffect(DATA.typingWords);
  const tilt = useTilt();

  return (
    <header id="hero" className="hero">
      <SectionFloaters variant={1} />
      <div className="grid-floor" />
      <div className="container hero-grid">
        <div>
          <p className="hero-intro glow-blue">Hello, I&apos;m</p>
          <h2 className="hero-name glow-yellow">{DATA.name}</h2>
          <h1>
            {DATA.role}
            <br />
            &amp; <span className="typing-line">{typed}</span>
            <span className="cursor">&nbsp;</span>
          </h1>

          <div className="hero-stats">
            {DATA.stats.map((s) => (
              <div className="stat-box pixel-panel" key={s.label}>
                <h3 className="glow-yellow">{s.value}</h3>
                <p>{s.label}</p>
              </div>
            ))}
          </div>

          <div className="cta-group">
            <a
              href="#projects"
              className="pixel-btn"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("projects");
              }}
            >
              View Projects
              <PxlKitIcon icon={Send} size={16} appearance="solid" />
            </a>
            <div className="social-hero">
              {DATA.socials.map((s) => (
                <a
                  key={s.key}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.key}
                >
                  <PixelBadge size={38}>
                    <BrandIcon name={s.key} size={18} />
                  </PixelBadge>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="terminal-wrap">
          <div
            ref={tilt.ref}
            className="pixel-panel terminal"
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
          >
            <div className="terminal-head">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal-body">
              <p>
                <span className="k">class</span>{" "}
                <span className="c">FrontendDeveloper</span> {"{"}
              </p>
              <br />
              <p className="i1">
                <span className="k">constructor()</span>
                {" { "}
              </p>
              <p className="i2">
                <span className="t">this</span>.name ={" "}
                <span className="s">"Ilham Ramdan"</span>;
              </p>
              <p className="i2">
                <span className="t">this</span>.role =
                <span className="s">"Frontend Developer"</span>;
              </p>
              <p className="i2">
                <span className="t">this</span>.passion =
                <span className="s">"Desain Creating UI/UX"</span>;
              </p>
              <p className="i1">{"}"}</p>
              <p>{"}"}</p>
            </div>
          </div>
          <div className="floaters">
            <div className="fi fi-1">
              <ParallaxPxlKitIcon
                icon={PixelRocket}
                size={34}
                interactive={false}
              />
            </div>
            <div className="fi fi-2">
              <ParallaxPxlKitIcon
                icon={MagicOrb}
                size={34}
                interactive={false}
              />
            </div>
            <div className="fi fi-3">
              <PixelIcon name="sparkle" size={22} color="var(--pink)" />
            </div>
            <div className="fi fi-4">
              <ParallaxPxlKitIcon
                icon={RetroJoystick}
                size={40}
                interactive={false}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
