import router from './routes/index.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import sequelize from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`📥 [${req.method}] ${req.url}`);
  next();
});

// Agrupar todas las rutas bajo /api
app.use(router);

// Solo si estás en producción, servir frontend estático
if (process.env.NODE_ENV === 'production') {
  const __dirnamePath = path.resolve();
  app.use(express.static(path.join(__dirnamePath, 'client', 'dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirnamePath, 'client', 'dist', 'index.html'));
  });
}

// Conexión a DB y arranque
sequelize.sync().then(() => {
  console.log('🟢 DB connected and models synced');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Error connecting to DB:', err);
});
