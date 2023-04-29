import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBox = ({ title, githubLink }) => {
  return (
    <div className="project-box">
      <Link to={githubLink}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default ProjectBox;
