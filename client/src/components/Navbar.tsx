
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  // Optional: hidde Navbar at login
  if (location.pathname === '/login') return null;

  return (
    <nav style={{ padding: '1rem', backgroundColor: '#3b82f6', color: 'white' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Agendify</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <Link to="/" style={{ color: 'white' }}>Dashboard</Link>
        <Link to="/appointments" style={{ color: 'white' }}>Citas</Link>
        <Link to="/book" style={{ color: 'white' }}>Agendar</Link>
        <Link to="/login" style={{ color: 'white' }}>Salir</Link>
      </div>
    </nav>
  );
};

export default Navbar;
