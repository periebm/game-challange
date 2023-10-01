import { Router } from 'express';
import { createParticipant, getParticipants } from '../controllers/participants-controller';
import { validateSchemaMiddleware } from '../middlewares/validation-middleware';
import { createParticipantSchema } from '../schemas/participants.schemas';

const participantsRouter = Router();

participantsRouter
  .post('/', validateSchemaMiddleware(createParticipantSchema), createParticipant)
  .get('/', getParticipants);

export { participantsRouter };
