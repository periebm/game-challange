import { Router } from 'express';
import { createBet } from '../services/bets-service';

const betsRouter = Router();

betsRouter.post('/', createBet);

export { betsRouter };
