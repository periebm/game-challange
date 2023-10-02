import { Router } from 'express';
import { createBet } from '../controllers/bets-controller';
import { validateSchemaMiddleware } from '../middlewares/validation-middleware';
import { createBetSchema } from '../schemas/bets.schemas';

const betsRouter = Router();

betsRouter.post('/', validateSchemaMiddleware(createBetSchema), createBet);

export { betsRouter };
