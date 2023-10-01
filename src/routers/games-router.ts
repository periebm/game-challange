import { Router } from 'express';
import { createGame, finishGame, getGames, getGamesById } from '../controllers/games-controller';

const gamesRouter = Router();

gamesRouter.post('/', createGame).post('/:id', finishGame).get('/', getGames).get('/:id', getGamesById);

export { gamesRouter };
