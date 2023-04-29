import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBox from './ProjectBox';
import './Home.css';

const projects = [
  {
    id: 1,
    name: 'PlanPerfect',
    description: 'A python based Event and Task Management app',
    link: '/projects/python-event-planner',
    githubLink: 'https://github.com/warbyd/Python-Project-Events-Planner'
  },
  {
    id: 2,
    name: 'LilyPad',
    description: 'A JavaScript based social media app created for Frogs!',
    link: '/projects/lilypad',
    githubLink: 'https://github.com/efgeri/LilyPad'
  }
];

const Home = () => {
  return (
    <div>
      <header className="header">
        <nav>
          <ul>
            <li><Link to="/portfolio">Home</Link></li>
            <li><Link to="/cv">CV</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <div className="main-container">
        <div className="hero-text">
          <h1 className="name">Dale Warburton</h1>
          <p className="welcome">I am a junior full stack developer,<br/>welcome to my portfolio site</p>
          <h3 className="recent-projects">Recent projects</h3>
        </div>
        <div className="projects-container">
          <div className="projects-wrapper">
            {projects.map(project => (
              <div className="project-item" key={project.id}>
                <h3 className="project-name">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                <Link to={project.link} className='project-link'>
                  <ProjectBox className="project-box" githubLink={project.githubLink} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
