import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';

const validateRequest = (schema: any) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body); 
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: 'Validation error',
          errors: error.issues.map(issue => ({
            field: issue.path.length ? issue.path.join('.') : 'body',
            message: issue.message,
          })),
        });
      }

      console.error(error);
      return res.status(500).json({
        success: false,
        message: 'Something went wrong during validation',
      });
    }
  };
};

export default validateRequest;
