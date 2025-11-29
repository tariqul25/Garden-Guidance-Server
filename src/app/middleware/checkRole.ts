import { Request, Response, NextFunction } from 'express';

export const checkRole = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;
    if (!user?.role || !allowedRoles.includes(user.role)) {
      return res.status(403).json({ message: 'Forbidden: You do not have access' });
    }
    next();
  };
};
