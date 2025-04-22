import React from 'react';
import { Routes, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ScheduleAppointment from './pages/ScheduleAppointment';
import PublicBooking from './pages/PublicBooking';

const App: React,FC = () => {
    return (
        <div>
            <Navbar />
            <main style={{ padding: '1rem'}}>
                <Routes>
                    <Route path= "/" element={<Dashboard />} />
                    <Route path= "/login" element={<Login />} />
                    <Route path= "/appointments" element={<ScheduleAppointment />} />
                    <Route path= "/book" element={<PublicBooking />} />
                </Routes>
            </main>
        </div>
    );
};

export default App;