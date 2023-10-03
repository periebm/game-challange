import { notFoundError } from '../errors/notfound-error';
import { CreateGame } from '../protocols/game';
import gamesRepository from '../repositories/games-repository';

async function createGame(game: CreateGame) {
  return await gamesRepository.createGame(game);
}

async function finishGame() {
  return 0;
}

async function getGames() {
  return await gamesRepository.getGames();
}

async function getGamesById(id: number) {
  const existingGame = await gamesRepository.findGame(id);
  if(!existingGame) throw notFoundError("Game not found.");

  const game = await gamesRepository.getGamesbyId(id);
  if (game) {
    const formattedGame = {
      ...game,
      bets: game.Bet,
    };
    delete formattedGame.Bet;
    return  formattedGame;
  }

  return game;
}

const gamesService = { createGame, finishGame, getGames, getGamesById };

export default gamesService;
