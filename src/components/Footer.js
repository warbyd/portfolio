import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="hire">
        <h2>Hire me!</h2>
        <p>Like what you see?<br /><br />Arrange an informal chat via Email or<br />LinkedIn to see if I’m a good fit!</p>
        <div className="hire-buttons">
          <a href="mailto:email@example.com" className="hire-button">Email</a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer" className="hire-button">LinkedIn</a>
        </div>
      </div>
      <div className="navigation">
        <h2>Navigation</h2>
        <ul className="nav-links">
          <li><Link to="/portfolio">Home</Link></li>
          <li><Link to="/cv">View my CV</Link></li>
          <li><Link to="/about">About me</Link></li>
          <li><Link to="/contact">Contact me</Link></li>
        </ul>
      </div>
      <p className="built-by">&copy; 2023 built by Dale Warburton</p>
    </footer>
  );
}

export default Footer;

