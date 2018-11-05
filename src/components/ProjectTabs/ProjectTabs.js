import React from "react";
import "./styles.scss";

const ProjectTabs = ({ projects, activeProject, selectProjectFunc }) => {
  const projectListItems = projects.map(project => {
    if (project.name === activeProject.name) {
      return (
        <li
          key={project.name}
          style={{ backgroundColor: "rgba(255, 255, 255, 0.733)"}}
        >
          {project.name}
        </li>
      );
    } else {
      return (
        <li
          key={project.name}
          onClick={e => selectProjectFunc(project)}
        >
          {project.name}
        </li>
      );
    }
  });

  return <ul className="project-tabs">{projectListItems}</ul>;
};

export default ProjectTabs;
