import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <h2>Welcome to Agendify 👋</h2>
      <p className="dashboard-subtitle">Manage your appointments and clients quickly and easily.</p>

      <div className="dashboard-actions">
        <button onClick={() => navigate('/appointments')}>📅 View Schedule</button>
        <button onClick={() => navigate('/book')}>➕ Book New Appointment</button>
        <button onClick={() => alert('Clients feature coming soon')}>👥 View Clients</button>
      </div>
    </div>
  );
};

export default Dashboard;
