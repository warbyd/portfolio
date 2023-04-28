import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams();

  // fetch project details from API or database using the id parameter

  const project = {
    id: 1,
    title: 'Python Event Planner',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut lorem sed erat imperdiet mattis eu id ipsum. Nulla facilisi.',
    githubLink: 'https://github.com/warbyd/Python-Project-Events-Planner'
  };

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>GitHub Link: <a href={project.githubLink}>{project.githubLink}</a></p>
    </div>
  );
};

export default ProjectDetail;
