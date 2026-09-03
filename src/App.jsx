import React, { useEffect, useState } from "react";
import DATA from "./data/siteData.js";
import useScrollSpy from "./hooks/useScrollSpy.js";
import useReveal from "./hooks/useReveal.js";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Timeline from "./components/Timeline.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";

const SECTION_IDS = DATA.navItems.map((item) => item.id);

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS);
  const [loading, setLoading] = useState(true);
  useReveal();

  useEffect(() => {
    const MIN_DURATION = 2000; // ms — biar splash tidak "kedip" kalau load-nya cepat banget
    const start = Date.now();

    const finish = () => {
      const remaining = Math.max(MIN_DURATION - (Date.now() - start), 0);
      setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, []);

  const scrollToId = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    const navH = document.querySelector(".pixel-nav")?.offsetHeight || 64;
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - navH + 1,
      behavior: "smooth",
    });
  };

  return (
    <div className="pf-root">
      <LoadingScreen show={loading} />
      <Nav activeSection={activeSection} scrollToId={scrollToId} />
      <Hero scrollToId={scrollToId} />
      <About />
      <Timeline />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
