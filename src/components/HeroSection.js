import React from "react";
import heroIllustration from "../images/hero2.svg";

const HeroSection = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="eyebrow">Full-Stack Engineer · Systems Thinker</p>
        <h1>
          Abdullahi builds resilient digital products for teams that want to
          move faster without breaking what matters.
        </h1>
        <p>
          From ideation to launch, I help startups and enterprises design,
          develop, and ship end-to-end web experiences. My work blends clean
          aesthetics with a deep understanding of distributed systems,
          accessibility, and measurable business impact.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore my work
          </a>
          <a className="button ghost" href="#contact">
            Book a discovery call
          </a>
        </div>
      </div>
      <div className="hero-visual">
        <img src={heroIllustration} alt="Illustration of developer at work" />
        <div className="status-card">
          <span className="status-dot" aria-hidden="true" />
          <div>
            <p>Now open for 2025 collaborations</p>
            <small>Next availability: April 2025</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
