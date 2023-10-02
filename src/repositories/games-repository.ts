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

async function findGame(gameId: number) {
  return await prisma.game.findFirst({
    where: { id: gameId },
  });
}

const gamesRepository = { createGame, getGames, findGame };

export default gamesRepository;
