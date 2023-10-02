import Joi from 'joi';

import { CreateGame } from '../protocols/game';

export const createGameSchema = Joi.object<CreateGame>({
  homeTeamName: Joi.string().required(),
  awayTeamName: Joi.string().required(),
});
