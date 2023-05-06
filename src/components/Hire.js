import React from 'react';
import { Link } from 'react-router-dom';
import './Hire.css'

const CallToAction = () => {
  return (
    <div className="call-to-action-container">
      <div className="call-to-action">
        <p><b>Looking to hire a developer?</b></p>
        <Link to="/cv" className="cv-link">View my CV</Link>
        <Link to="/about" className="about-link">About me</Link>
        <Link to="/contact" className="contact-link">Contact me</Link>
      </div>
    </div>
  );
}

export default CallToAction;
