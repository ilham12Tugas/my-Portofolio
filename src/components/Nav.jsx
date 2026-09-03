import React, { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import DATA from "../data/siteData.js";

export default function Nav({ activeSection, scrollToId }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (id) => {
    scrollToId(id);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="pixel-nav">
        <div className="container nav-wrap">
          <a
            href="#hero"
            className="logo"
            onClick={(e) => {
              e.preventDefault();
              handleClick("hero");
            }}
          >
            <img src="/images/icon.svg" alt="" className="logo-icon" aria-hidden="true" />
            {DATA.brand}
            <span className="dot"></span>
          </a>

          <ul className="nav-links">
            {DATA.navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            className="hamburger"
            aria-label="Buka menu"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars size={18} />
          </button>
        </div>
      </nav>

      {/* overlay gelap di belakang sidebar, klik untuk menutup */}
      <div
        className={`nav-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* sidebar mobile */}
      <aside className={`nav-sidebar ${menuOpen ? "open" : ""}`}>
        <button
          className="sidebar-close"
          aria-label="Tutup menu"
          onClick={() => setMenuOpen(false)}
        >
          <FaXmark size={18} />
        </button>
        <ul className="sidebar-links">
          {DATA.navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.id);
                }}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}
