import express from 'express';
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
}).catch((err: any) => {
  console.log('❌ Error connecting to DB:', err);
});
