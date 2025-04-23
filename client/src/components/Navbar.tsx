import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // 👈 Importa los estilos

const Navbar: React.FC = () => {
  const location = useLocation();

  // Oculta en login
  if (location.pathname === '/' || location.pathname === '/login') return null;

  return (
    <nav className="navbar">
      <h1 className="navbar-title">Agendify</h1>
      <div className="navbar-links">
        {location.pathname !== '/dashboard' && (
          <Link to="/dashboard">Home</Link>
        )}
        <Link to="/schedule">Citas</Link>
        <Link to="/booking">Agendar</Link>
        <Link to="/login">Salir</Link>
      </div>
    </nav>
  );
};

export default Navbar;
