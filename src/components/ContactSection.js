import React from "react";

const ContactSection = () => {
  return (
    <section className="section contact" id="contact">
      <div className="section-heading">
        <p className="eyebrow">Contact</p>
        <h2>Let’s build the next thing together</h2>
      </div>
      <div className="contact-content">
        <p>
          Whether you are validating an idea, scaling a product, or need a
          partner to modernize legacy systems, I would love to hear from you.
          Share a bit about your project, timeline, and what success looks like
          — I will reply within two business days.
        </p>
        <div className="contact-actions">
          <a className="button primary" href="mailto:hello@abdullahi.dev">
            hello@abdullahi.dev
          </a>
          <a
            className="button ghost"
            href="https://cal.com/abdullahi/intro"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a call
          </a>
        </div>
        <ul className="contact-meta">
          <li>Based in Lagos · collaborating remotely worldwide</li>
          <li>Current focus: Dispatch intelligence, civic tech, design systems</li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
