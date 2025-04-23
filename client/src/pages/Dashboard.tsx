import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Welcome to Agendify 👋</h2>
      <p>Manage your appointments and clients quickly and easily.</p>

      <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
        <button onClick={() => navigate('/appointments')}>
          View Schedule
        </button>
        <button onClick={() => navigate('/book')}>
          Book New Appointment
        </button>
        <button onClick={() => alert('Clients feature coming soon')}>
          View Clients
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
