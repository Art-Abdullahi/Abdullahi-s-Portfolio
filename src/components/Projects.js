import React from "react";
import { Project } from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="container"
      style={{
        height: "100vh",
        width: "100%",
        border: "5px solid white",
      }}
    >
      <h1 className="text-center ">featured preojects</h1>
      <Project />
    </div>
  );
};

export default Projects;
