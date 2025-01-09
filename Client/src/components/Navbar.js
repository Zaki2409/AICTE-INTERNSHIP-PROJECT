import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav aria-label="Main Navigation">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>
        <li className="navbar-item"><Link to="/news" className="navbar-link">News</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;