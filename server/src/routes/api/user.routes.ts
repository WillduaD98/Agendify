import { Router } from 'express';
import { getProfile, updateProfile } from '../../controllers/user.controller.js';
import { verifyToken } from '../../utils/authMiddleware.js';

const router = Router();

router.get('/profile', verifyToken, getProfile);
router.put('/profile', verifyToken, updateProfile);

export {router as userRouter };
