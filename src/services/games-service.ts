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

async function getGamesById() {
  return 0;
}

const gamesService = { createGame, finishGame, getGames, getGamesById };

export default gamesService;
