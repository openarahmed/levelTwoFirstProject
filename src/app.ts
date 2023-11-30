/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, Request, Response } from 'express';

import cors from 'cors';
import globalErrorHnalder from './app/middlewares/globalError';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// perser
app.use(express.json());
app.use(cors());

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  const a = 'broh';

  res.send(a);
});

// eslint-disable-next-line no-unused-vars
app.use(globalErrorHnalder);
app.use(notFound);

export default app;
