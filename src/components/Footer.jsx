import React from "react";
import DATA from "../data/siteData.js";
import BrandIcon from "../icons/BrandIcon.jsx";

const footerSocials = [
  { key: "github", label: "GitHub" },
  { key: "linkedin", label: "LinkedIn" },
  { key: "instagram", label: "Instagram" },
  { key: "email", label: "Email" },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/images/icon.svg" alt="" className="footer-logo-icon" />
              <div>
                <span className="footer-name">{DATA.name}</span>
                <span className="footer-role">{DATA.role}</span>
                <span className="footer-tags">UI/UX &bull; Frontend &bull; Creative</span>
              </div>
            </div>
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Navigation</h4>
            <ul>
              {DATA.navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-middle">
          <div className="footer-available">
            <span className="footer-status-dot" />
            Available for Opportunities
          </div>
          <div className="footer-socials">
            {footerSocials.map((s) => (
              <a key={s.key} href={DATA.contactMethods.find((c) => c.key === s.key)?.url || "#"} target="_blank" rel="noreferrer">
                <BrandIcon name={s.key} size={14} />
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; 2026 {DATA.name}</span>
          <span>Made with <span className="footer-heart">&hearts;</span></span>
        </div>
      </div>
    </footer>
  );
}
