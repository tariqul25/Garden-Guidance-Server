import { Request, Response, NextFunction } from 'express';


export const checkRole = (...allowedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user;

    // No user or role not allowed
    if (!user || !allowedRoles.includes(user.role)) {
      return res.status(403).json({
        success: false,
        message: 'Forbidden: You do not have access to this route',
      });
    }
    
    next();
  };
};