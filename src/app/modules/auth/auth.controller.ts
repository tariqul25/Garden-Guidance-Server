import { Request, Response, NextFunction } from 'express';
import { registerUserService, loginUserService } from './auth.service';

export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await registerUserService(req.body);
    res.status(201).json({ success: true, user });
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await loginUserService(req.body.email, req.body.password);
    res.json({ success: true, ...data });
  } catch (err) {
    next(err);
  }
};
