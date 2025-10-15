import React, { useState } from "react";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header" id="top">
      <div className="header-inner">
        <a className="brand" href="#hero" onClick={closeMenu}>
          Abdullahi.
        </a>
        <button
          className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={toggleMenu}
        >
          <span className="sr-only">Toggle navigation</span>
          <span />
          <span />
          <span />
        </button>
        <nav
          id="primary-navigation"
          className={`site-nav ${isMenuOpen ? "open" : ""}`}
        >
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a
            className="resume-link"
            href="https://drive.google.com/file/d/1lC8_tRjR7eZP4uI2C-iN8dnZN1vEH0u8/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Résumé
          </a>
        </nav>
      </div>
    </header>
  );
};

export default SiteHeader;
