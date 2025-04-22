import { Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import generateToken from '../utils/generateToken';

export const register = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const existingUser = await User.findOne({ where: { username } });
    if (existingUser) return res.status(400).json({ message: 'User exists' });

    await User.create({ username, password });
    return res.status(201).json({ message: 'User created' });
  } catch (err) {
    return res.status(500).json({ message: 'Error registering user' });
  }
};

export const login = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    const user: any = await User.findOne({ where: { username } });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).json({ message: 'Invalid credentials' });

    const token = generateToken(user.username);
    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ message: 'Login error' });
  }
};

export const getProfile = async (req: Request, res: Response) => {
  return res.json({ user: req.user });
};
