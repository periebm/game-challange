import { Router } from 'express';
import { createParticipant, getParticipants } from '../services/participants-service';

const participantsRouter = Router();

participantsRouter.post('/', createParticipant).get('/', getParticipants);

export { participantsRouter };
