import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { authRoutes } from './app/modules/auth/auth.route';
import { tipsRoutes } from './app/modules/tips/tips.route';
import { gardenersRoutes } from './app/modules/gardeners/gardeners.route';
import { globalErrorHandler } from './app/middleware/globalErrorHandler';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Base route
app.get('/', (req: Request, res: Response) => {
  res.send('Gardening Guidance Server is running smoothly...');
});

// Feature routes
app.use('/api', authRoutes);
app.use('/api', tipsRoutes);
app.use('/api', gardenersRoutes);

// Global error handler
app.use(globalErrorHandler);

export default app;
