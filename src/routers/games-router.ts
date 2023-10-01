import { Router } from 'express';
import { createGame, finishGame, getGames, getGamesById } from '../services/games-service';

const gamesRouter = Router();

gamesRouter.post('/', createGame).post('/:id', finishGame).get('/', getGames).get('/:id', getGamesById);

export { gamesRouter };
