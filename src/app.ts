import express from 'express';
import "express-async-errors";

import cors from 'cors';
import router from './routers/index.router';
import { handleApplicationErrors } from './middlewares/error-handler';

const app = express();
app
  .use(cors())
  .use(express.json())
  .get('/health', (_req, res) => res.send('OK!'))
  .use(router)
  .use(handleApplicationErrors);

export default app;
