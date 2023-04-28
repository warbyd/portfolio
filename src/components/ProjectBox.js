import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';

const ProjectBox = ({ title, link }) => {
  return (
    <div className="project-box">
      <Link to={link}>
        <h3>{title}</h3>
      </Link>
    </div>
  );
};

export default ProjectBox;
