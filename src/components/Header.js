import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from './logo.jpg'; // Import the image file with the correct name

const Header = () => {
  return (
    <nav>
      <div className="logo-container"> {/* Add a container for the logo */}
        <img src={logo} alt="Logo" className="logo" /> {/* Add the logo image */}
      </div>
      <ul>
        <li><NavLink to="/portfolio">Home</NavLink></li>
        <li><NavLink to="/cv">CV</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
}

export default Header;
