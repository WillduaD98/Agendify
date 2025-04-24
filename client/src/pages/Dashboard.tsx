import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Asegúrate de tener este archivo

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="dashboard-box">
        <h2>Welcome to Agendify 👋</h2>
        <p>Manage your appointments and clients quickly and easily.</p>
        <div className="dashboard-buttons">
          <button onClick={() => navigate('/schedule')}>📅 View Schedule</button>
          <button onClick={() => navigate('/book')}>➕ Book New Appointment</button>
          <button onClick={() => navigate('/clients')}>👥 View/Create Clients</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
