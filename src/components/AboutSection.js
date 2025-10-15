import React from "react";

const AboutSection = () => {
  return (
    <section className="section about" id="about">
      <div className="section-heading">
        <p className="eyebrow">About</p>
        <h2>Rooted in curiosity, refined by delivery</h2>
      </div>
      <div className="about-grid">
        <p>
          I am a product-minded engineer with a knack for translating complex
          problems into thoughtful, scalable solutions. Over the past few years
          I have helped cross-functional teams launch platforms in fintech,
          logistics, edtech, and community impact — always with a focus on
          maintainability, resilience, and inclusive user experiences.
        </p>
        <p>
          Beyond shipping features, I care about design systems, developer
          enablement, and documentation that brings clarity. Whether I am
          architecting a new React application, building serverless APIs, or
          mentoring early-career developers, I show up with empathy, intent, and
          a bias towards measurable impact.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
