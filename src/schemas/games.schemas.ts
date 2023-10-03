import Joi from 'joi';

import { CreateGame, CreateScore } from '../protocols/game';

export const createGameSchema = Joi.object<CreateGame>({
  homeTeamName: Joi.string().required(),
  awayTeamName: Joi.string().required(),
});

export const createScoreSchema = Joi.object<CreateScore>({
  homeTeamScore: Joi.number().required(),
  awayTeamScore: Joi.number().required(),
});
