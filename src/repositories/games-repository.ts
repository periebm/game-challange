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

async function getGamesbyId(gameId: number) {
  return await prisma.game.findUnique({
    where: {
      id: gameId,
    },
    include: {
      Bet: true,
    },
  });
}

async function findGame(gameId: number) {
  return await prisma.game.findFirst({
    where: { id: gameId },
  });
}

const gamesRepository = { createGame, getGames, findGame, getGamesbyId };

export default gamesRepository;
