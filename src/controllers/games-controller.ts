import { Request, Response } from 'express';
import { CreateGame } from '../protocols/game';
import gamesService from '../services/games-service';
import httpStatus from 'http-status';
import { isValid } from '../utils/id-validator';

export async function createGame(req: Request, res: Response) {
  const game = req.body as CreateGame;

  const createdGame = await gamesService.createGame(game);
  res.status(httpStatus.CREATED).send(createdGame);
}

export async function finishGame(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (!isValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  return 0;
}

export async function getGames(req: Request, res: Response) {
  const games = await gamesService.getGames();

  res.send(games);
}

export async function getGamesById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (!isValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  const games = await gamesService.getGamesById(id);

  res.send(games);
}
