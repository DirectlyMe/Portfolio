import React from 'react';
import "./styles.scss";

const ProjectTabs = ({ projectItems, selectProjectFunc }) => {
  const projectListItems = projectItems.map(item => (
    <li key={item} onClick={() => selectProjectFunc}>{item}</li>
  ));

  return (
    <ul className="project-tabs">
      {projectListItems}
    </ul>
  );
};

export default ProjectTabs;