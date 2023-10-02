import { Router } from 'express';
import { createGame, finishGame, getGames, getGamesById } from '../controllers/games-controller';
import { validateSchemaMiddleware } from '../middlewares/validation-middleware';
import { createGameSchema } from '../schemas/games.schemas';

const gamesRouter = Router();

gamesRouter
  .post('/', validateSchemaMiddleware(createGameSchema), createGame)
  .post('/:id', finishGame)
  .get('/', getGames)
  .get('/:id', getGamesById);

export { gamesRouter };
