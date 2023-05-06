import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import CallToAction from './Hire';
import Header from './Header';
import './Home.css';
import lilypad from './lilypad.png';
import eventsplanner from './eventsplanner.png';
import './Projects.css';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-container">
        <div className="hero-text">
          <h1 className="name">Dale Warburton</h1>
          <p className="welcome">I am a junior full stack developer,<br/>welcome to my portfolio site.</p>
          <h3 className="recent-projects">Recent projects</h3>
        </div>
        <div className="projects-container">
          <div className="project-box">
            <h4 className="project-title">PlanPerfect</h4>
            <p className="project-description">An Event and Task Management app.</p>
            <h4 className="project-tools">Python, Flask, SQL</h4>
            <Link to="/eventsplanner">
              <img src={eventsplanner} alt="Events Planner" className="project-image" />
            </Link>
          </div>
          <div className="project-box">
            <h4 className="project-title">LilyPad</h4>
            <p className="project-description">A social media app for Frogs!</p>
            <h4 className="project-tools">JavaScript, React, MongoDB</h4>
            <Link to="/lilypad">
              <img src={lilypad} alt="LilyPad Project" className="project-image" />
            </Link>
          </div>
        </div>
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
