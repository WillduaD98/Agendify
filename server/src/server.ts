import express from 'express';
import appointmentRoutes from './routes/appointment.routes';
import clientRoutes from './routes/client.routes'; //  opcional
import userRoutes from './routes/user.routes';     // opcional
import authRoutes from './routes/auth.routes';

const app = express();

app.use(express.json()); // para habilitar el parseo de JSON

// Rutas
app.use('/api/appointments', appointmentRoutes);
app.use('/api/clients', clientRoutes);  // opcional
app.use('/api/users', userRoutes);      // opcional
app.use('/api/auth', authRoutes);       // login/register


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
