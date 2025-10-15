import React from "react";

const experiences = [
  {
    role: "Lead Frontend Engineer",
    company: "DispatchOps",
    period: "2023 — Present",
    summary:
      "Scaling mission-critical dispatch tooling used by 2K+ operators daily while introducing design systems that cut delivery time by 40%.",
  },
  {
    role: "Senior Full-Stack Consultant",
    company: "Freelance",
    period: "2021 — 2023",
    summary:
      "Partnered with startups to launch greenfield products, architecting cloud-native infrastructures and mentoring hybrid teams across 4 timezones.",
  },
  {
    role: "Software Engineer",
    company: "Q-Digital Labs",
    period: "2019 — 2021",
    summary:
      "Built accessible web platforms, automated CI/CD pipelines, and introduced performance budgets that improved Core Web Vitals by 25%.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="section experience" id="experience">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Impact built through multidisciplinary teams</h2>
      </div>
      <div className="experience-list">
        {experiences.map((item) => (
          <article key={item.role} className="experience-card">
            <header>
              <h3>{item.role}</h3>
              <span className="period">{item.period}</span>
            </header>
            <p className="company">{item.company}</p>
            <p>{item.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
