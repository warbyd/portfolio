import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
  return (
    <nav>
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
