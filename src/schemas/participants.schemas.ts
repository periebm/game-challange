import Joi from 'joi';
import { Participant } from '@prisma/client';
import { CreateParticipant } from '../protocols/participant';


export const createParticipantSchema = Joi.object<CreateParticipant>({
  name: Joi.string().required(),
  balance: Joi.number().required(),
});
