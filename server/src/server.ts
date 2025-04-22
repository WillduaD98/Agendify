import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {sequelize} from './models';

//Import routes (add as they are ready)

import authRoutes from './routes/authRoutes';
import userRoutes from './routes/user.routes';
import clientRoutes from './routes/client.routes';
import appointmentRoutes from './routes/appointment.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/clients', clientRoutes);
app.use('api/appointments', appointmentRoutes);

//Database conection and starting server
sequelize.sync().then(() => {
    console.log('🟢 DB connected and models synced');
    app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    }); 
}).catch((err) => {
    console.log('❌ Error connecting to DB:', err);
    
});