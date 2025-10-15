import React from "react";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} Abdullahi. Built with empathy, curiosity,
        and just enough caffeine.
      </p>
      <div className="footer-links">
        <a
          href="https://github.com/abdullahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/abdullahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://twitter.com/abdullahi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter/X
        </a>
      </div>
    </footer>
  );
};

export default Footer;
