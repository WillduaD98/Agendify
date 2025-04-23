import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const location = useLocation();

  // Hide Navbar on login page
  if (location.pathname === '/' || location.pathname === '/login') return null;

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Agendify</h1>
      <div className="navbar-links">
        {location.pathname !== '/dashboard' && (
          <Link to="/dashboard">Home</Link>
        )}
        <Link to="/schedule">Schedule</Link>
        <Link to="/booking">Book</Link>
        <Link to="/login">Logout</Link>
      </div>
    </nav>
  );
};

export default Navbar;
