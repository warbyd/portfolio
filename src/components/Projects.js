import React from 'react';
import { NavLink } from 'react-router-dom';

const Projects = () => {
  const projects = [
    { id: 1, title: 'Python Event Planner' },
    // add other projects here
  ];

  return (
    <div>
      <h2>My Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <NavLink to={`/projects/${project.id}`}>{project.title}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
