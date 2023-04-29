import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 'python-event-planner',
    title: 'Python Event Planner',
    description: 'A python based Event and Task Management app',
    githubLink: 'https://github.com/warbyd/Python-Project-Events-Planner'
  },
  {
    id: 'lilypad',
    title: 'LilyPad',
    description: 'A JavaScript based social media app created for Frogs!',
    githubLink: 'https://github.com/efgeri/LilyPad'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();

  // find the project with the matching id
  const project = projects.find(p => p.id === id);

  // if project is not found, display an error message
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>GitHub Link: <a href={project.githubLink}>{project.githubLink}</a></p>
    </div>
  );
};

export default ProjectDetail;
