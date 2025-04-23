import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  // Ocultar navbar en login
  if (location.pathname === '/' || location.pathname === '/login') return null;

  return (
    <nav style={{ 
      padding: '1rem', 
      backgroundColor: '#1e3a8a', 
      color: 'white', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center' 
    }}>
      <h1 style={{ margin: 0 }}>Agendify</h1>
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        {/* Mostrar 'Home' solo si NO estamos en el dashboard */}
        {location.pathname !== '/dashboard' && (
          <Link to="/dashboard" style={{ color: 'white' }}>Home</Link>
        )}
        <Link to="/schedule" style={{ color: 'white' }}>Citas</Link>
        <Link to="/booking" style={{ color: 'white' }}>Agendar</Link>
        <Link to="/login" style={{ color: 'white' }}>Salir</Link>
      </div>
    </nav>
  );
};

export default Navbar;
