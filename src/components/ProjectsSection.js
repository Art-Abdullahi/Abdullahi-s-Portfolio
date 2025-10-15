import React from "react";

const projects = [
  {
    title: "Dispatch Intelligence Platform",
    description:
      "Data-driven dashboard that orchestrates live dispatch operations, blending geospatial insights with predictive routing for faster decisions.",
    tech: ["React", "Mapbox", "Node.js", "PostgreSQL"],
    action: {
      label: "Read case study",
      url: "https://example.com/dispatch-intelligence",
    },
  },
  {
    title: "Community Aid Network",
    description:
      "A responsive web app connecting volunteers with hyperlocal relief requests. Features offline-first experience and multi-language support.",
    tech: ["Next.js", "Supabase", "Tailwind CSS"],
    action: {
      label: "View prototype",
      url: "https://example.com/community-aid",
    },
  },
  {
    title: "Funding Readiness Toolkit",
    description:
      "Self-serve toolkit that guides founders through compliance and financial modelling with automated document generation and analytics.",
    tech: ["TypeScript", "AWS", "Serverless"],
    action: {
      label: "Explore product", 
      url: "https://example.com/funding-toolkit",
    },
  },
];

const ProjectsSection = () => {
  return (
    <section className="section projects" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
        <h2>Projects that shipped outcomes, not just features</h2>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <header>
              <h3>{project.title}</h3>
            </header>
            <p>{project.description}</p>
            <ul className="tech-list">
              {project.tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <a
              className="project-link"
              href={project.action.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.action.label}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
