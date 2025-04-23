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
=======
import dotenv from 'dotenv';
import cors from 'cors';
import { sequelize } from '../models/index'; 
import authRoutes from '../routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Sync DB y arrancar servidor
sequelize.sync().then(() => {
  console.log('🟢 DB connected and models synced');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);

    }); 
}).catch((err) => {
    console.log('❌ Error connecting to DB:', err);
    
});

=======
  });
}).catch((err: any) => {
  console.log('❌ Error connecting to DB:', err);
});

