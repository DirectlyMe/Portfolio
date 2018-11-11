import React from "react";
import Project from "./ProjectMobile/ProjectMobile";

const ProjectList = ({ projects }) => {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const backgroundColors = ["FCFFB3", "8FD7E1", "AAFFE7", "FFC95F"];

  let index = 0;
  
  const mobileProjects = projects.map(project => {
    let color = backgroundColors[index];
    index++;

    return (
      <Project key={project.github} project={project} backgroundColor={color} />
    );
  });

  return <div >{mobileProjects}</div>;
};

export default ProjectList;
