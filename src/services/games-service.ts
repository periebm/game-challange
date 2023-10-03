import { conflictError } from '../errors/conflict-error';
import { notFoundError } from '../errors/notfound-error';
import { CreateGame, CreateScore } from '../protocols/game';
import betsRepository from '../repositories/bets-repository';
import gamesRepository from '../repositories/games-repository';
import participantsRepository from '../repositories/participants-repository';

async function createGame(game: CreateGame) {
  return await gamesRepository.createGame(game);
}

async function finishGame(id: number, game: CreateScore) {
  const existingGame = await gamesRepository.findGame(id);
  if (!existingGame) throw notFoundError('Game not found.');

  if (existingGame.isFinished === true) throw conflictError('Game already ended.');
  const finishedGame = await gamesRepository.finishGame(id, game);

  const gameInfo = await gamesRepository.getGamesbyId(id);

  if (gameInfo.Bet) calcBetsWinnings(gameInfo.Bet, game);

  return finishedGame;
}

async function getGames() {
  return await gamesRepository.getGames();
}

async function getGamesById(id: number) {
  const existingGame = await gamesRepository.findGame(id);
  if (!existingGame) throw notFoundError('Game not found.');

  const game = await gamesRepository.getGamesbyId(id);
  if (game) {
    const formattedGame = {
      ...game,
      bets: game.Bet,
    };
    delete formattedGame.Bet;
    return formattedGame;
  }

  return game;
}

async function calcBetsWinnings(bets, game: CreateScore) {
  let totalBet = 0;
  let totalWinningBet = 0;
  bets.forEach((e) => {
    totalBet += e.amountBet;
    if (e.homeTeamScore === game.homeTeamScore && e.awayTeamScore === game.awayTeamScore) {
      totalWinningBet += e.amountBet;
    }
  });

  for (let e of bets){
    if (e.homeTeamScore === game.homeTeamScore && e.awayTeamScore === game.awayTeamScore) {
      const winnings = Math.floor((e.amountBet / totalWinningBet) * totalBet * 0.7);
      await betsRepository.updateBet(e.id, 'WON', winnings);
      const participant = await participantsRepository.findParticipant(e.participantId);
      await participantsRepository.updateBalance(participant.id, participant.balance + winnings)
    } else {
      betsRepository.updateBet(e.id, 'LOST', 0);
    }
  };
}

const gamesService = { createGame, finishGame, getGames, getGamesById };

export default gamesService;
