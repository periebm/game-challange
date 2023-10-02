import prisma from '../database';
import { CreateBet } from '../protocols/bet';

async function createBet(bet: CreateBet) {
  return await prisma.bet.create({
    data: { ...bet, status: 'PENDING' },
  });
}

async function findByIds(gameId: number, participantId: number) {
  return await prisma.bet.findFirst({
    where: {
      gameId: gameId,
      participantId: participantId,
    },
  });
}

const betsRepository = { createBet, findByIds };

export default betsRepository;
