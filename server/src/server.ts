import router from './routes/index.js';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import sequelize from './config/db.js';
import { fileURLToPath } from 'url';

// Setup __dirname equivalent for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Move up one level to project root
const rootPath = path.resolve(__dirname, '..');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`📥 [${req.method}] ${req.url}`);
  next();
});

// Agrupar rutas bajo /api
app.use(router);

// ✅ Serve frontend static files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(rootPath, 'client', 'dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(rootPath, 'client', 'dist', 'index.html'));
  });
}

sequelize.sync().then(() => {
  console.log('🟢 DB connected and models synced');
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('❌ Error connecting to DB:', err);
});
