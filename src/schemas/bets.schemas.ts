import Joi from 'joi';
import { CreateBet } from '../protocols/bet';


export const createBetSchema = Joi.object<CreateBet>({
  homeTeamScore: Joi.number().required(),
  awayTeamScore: Joi.number().required(),
  amountBet: Joi.number().required(),
  gameId: Joi.number().required(),
  participantId: Joi.number().required(),
});
