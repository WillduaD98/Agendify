import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(403).json({ message: 'Token no proporcionado' });

  try {
    const secretKey = process.env.JWT_SECRET_KEY || 'secretkey';
    const decoded = jwt.verify(token, secretKey);
    (req as any).user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
