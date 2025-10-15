import React from "react";

const skillGroups = [
  {
    title: "Core Stack",
    items: ["TypeScript", "React & Next.js", "Node.js", "PostgreSQL", "GraphQL"],
  },
  {
    title: "Cloud & Automation",
    items: ["AWS", "Docker", "CI/CD", "Serverless", "Observability"],
  },
  {
    title: "Collaboration",
    items: ["Design systems", "Product strategy", "Technical writing", "Mentorship"],
  },
];

const SkillsSection = () => {
  return (
    <section className="section skills" id="skills">
      <div className="section-heading">
        <p className="eyebrow">Skills</p>
        <h2>A modern toolkit for complex products</h2>
      </div>
      <div className="skill-grid">
        {skillGroups.map((group) => (
          <div key={group.title} className="skill-card">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
