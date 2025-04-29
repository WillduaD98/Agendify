import React, {useState, useEffect} from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Navbar.css';
import auth from '../services/auth'

const Navbar: React.FC = () => {
  const [loginCheck, setLoginCheck] = useState(false);

  const checkLogin = () => {
    if(auth.loggedIn()) {
      setLoginCheck(true)
    }
  };

  const navigate = useNavigate()
  useEffect(() => {
    console.log(loginCheck);
    checkLogin();
  }, [loginCheck])

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
         <button type='button' onClick={() => {
          auth.logout();
          navigate('/')
        }} >Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
