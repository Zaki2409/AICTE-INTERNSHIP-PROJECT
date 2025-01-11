import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the authentication token and other session data
    localStorage.clear();

    // Redirect to login page
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/home" className="navbar-logo">
          News Platform
        </Link>
        <ul className="navbar-links">
          <li><Link to="/home" className="navbar-link">Home</Link></li>
          <li><Link to="/news" className="navbar-link">News</Link></li>
          <li>
            <button className="navbar-logout" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
