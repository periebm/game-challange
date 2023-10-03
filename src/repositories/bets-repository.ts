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

async function updateBet(betId: number, status: string, amount: number){
  return await prisma.bet.update({
    where: { id: betId },
    data: { status: status, amountWon: amount },
  });
}

const betsRepository = { createBet, findByIds, updateBet };

export default betsRepository;
