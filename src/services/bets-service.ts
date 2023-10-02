import { conflictError } from '../errors/conflict-error';
import { notEnoughMoneyError } from '../errors/not-enough-money';
import { notFoundError } from '../errors/notfound-error';
import { unauthorizedError } from '../errors/unauthorized-error';
import { CreateBet } from '../protocols/bet';
import betsRepository from '../repositories/bets-repository';
import gamesRepository from '../repositories/games-repository';
import participantsRepository from '../repositories/participants-repository';

async function createBet(bet: CreateBet) {
  const participant = await participantsRepository.findParticipant(bet.participantId);
  if (!participant) throw notFoundError('Participant not found.');

  const game = await gamesRepository.findGame(bet.gameId);
  if (!game) throw notFoundError('Game not found.');

  const existingBet = await betsRepository.findByIds(bet.gameId, participant.id);
  if(existingBet) throw conflictError('Bet already exists.')

  if (participant.balance < bet.amountBet) throw notEnoughMoneyError();
  if (game.isFinished === true) throw unauthorizedError('Game already ended.');

  const newBalance = participant.balance - bet.amountBet;
  await participantsRepository.updateBalance(participant.id, newBalance);

  return await betsRepository.createBet(bet);
}

const betsService = { createBet };

export default betsService;
