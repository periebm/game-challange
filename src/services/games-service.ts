import { Request, Response } from 'express';

async function createGame(req: Request, res: Response) {
  return 0;
}

async function finishGame(req: Request, res: Response) {
  return 0;
}

async function getGames(req: Request, res: Response) {
  return 0;
}

async function getGamesById(req: Request, res: Response) {
  return 0;
}

const gamesService = { createGame, finishGame, getGames, getGamesById };

export default gamesService;
