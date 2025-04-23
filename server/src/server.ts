import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { sequelize } from './models/index'; // Asegúrate que la ruta esté correcta
import appointmentRoutes from './routes/appointment.routes';
import clientRoutes from './routes/client.routes';     // opcional
import userRoutes from './routes/user.routes';         // opcional
import authRoutes from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

// Sync DB y arrancar servidor
sequelize.sync().then(() => {
  console.log('🟢 DB connected and models synced');

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

}).catch((err: any) => {
  console.error('❌ Error connecting to DB:', err);
});