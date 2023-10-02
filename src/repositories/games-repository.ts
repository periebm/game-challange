import prisma from '../database';
import { CreateGame } from '../protocols/game';

async function createGame(game: CreateGame) {
  return await prisma.game.create({
    data: game,
  });
}

async function getGames() {
  return await prisma.game.findMany();
}

const gamesRepository = { createGame, getGames };

export default gamesRepository;
