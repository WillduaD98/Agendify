import { Router } from 'express';
import { clientRouter } from './client.routes';
import { userRouter } from './user.routes';
import { appointmentRouter } from './appointment.routes';

const router = Router();

router.use('/client', clientRouter);
router.use('/users', userRouter);
router.use('/apopointment', appointmentRouter);

export default router;