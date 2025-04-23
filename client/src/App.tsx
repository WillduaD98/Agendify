import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScheduleAppointment from './pages/ScheduleAppointment';
import PublicBooking from './pages/PublicBooking';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/schedule" element={<ScheduleAppointment />} />
      <Route path="/booking" element={<PublicBooking />} />
    </Routes>
  );
};

export default App;
