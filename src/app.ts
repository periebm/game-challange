import express from 'express';
import cors from 'cors';
import router from './routers/index.router';

const app = express();
app
  .use(cors())
  .use(express.json())
  .use(router)
  .get('/health', (_req, res) => res.send('OK!'));

export default app;
