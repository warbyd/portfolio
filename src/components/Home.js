import React from 'react';
import { Link } from 'react-router-dom';
import ProjectBox from './ProjectBox';
import './Home.css';

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
          <h3 className="recent-projects"></h3>
        </div>
        <div className="projects-container">
          <h2 className="projects-header">Recent projects</h2>
          <h3 className="project-name">Python Event Planner</h3>
          <Link to="/projects/python-event-planner" className= 'project-link'>
            <ProjectBox className="project-box" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
