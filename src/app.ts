import express, { Application, Request, Response } from 'express';
import cors from "cors";
import { globalErrorHandler } from './app/middleware/globalErrorHandler';

export const app: Application = express();


app.use(cors());
app.use(express.json());
// app.use("/api", routingpaths); // its contain routes in routingpaths


app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running successfully');
});

