import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const protect = (req: Request & { user?: string }, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY || '');
    req.user = (decoded as any).username;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
