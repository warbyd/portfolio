import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="hire">
        <h2>Hire me!</h2>
        <p>Like what you see?<br /><br />Arrange an informal chat via Email or<br />LinkedIn to see if I’m a good fit!</p>
        <div className="hire-buttons">
          <a href="mailto:email@example.com" className="hire-button"><i className="far fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer" className="hire-button"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hire-button"><i className="fab fa-github"></i></a>
        </div>
      </div>
      <ul className="nav-links">
        <h2>Navigation</h2>
        <li><Link to="/portfolio" className="nav-link">Home</Link></li>
        <li><Link to="/cv" className="nav-link">View my CV</Link></li>
        <li><Link to="/about" className="nav-link">About me</Link></li>
        <li><Link to="/contact" className="nav-link">Contact me</Link></li>
      </ul>
      <p className="built-by">&copy; 2023 built by Dale Warburton</p>
    </footer>
  );
}

export default Footer;
