import { Router } from 'express';
import { clientRouter } from './client.routes.js';
import { userRouter } from './user.routes.js';
import { appointmentRouter } from './appointment.routes.js';
import authRoutes from '../auth.routes.js'; // 👈 Importar auth

const router = Router();

router.use('/clients', clientRouter);
router.use('/users', userRouter);
router.use('/apopointment', appointmentRouter);
router.use('/', authRoutes);
export default router;