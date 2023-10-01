import { Request, Response } from 'express';
import { CreateParticipant } from '../protocols/participant';
import participantsService from '../services/participants-service';
import httpStatus from 'http-status';

export async function createParticipant(req: Request, res: Response) {
  const participant = req.body as CreateParticipant;

  const createdParticipant = await participantsService.createParticipant(participant);
  res.status(httpStatus.CREATED).send(createdParticipant);
}

export async function getParticipants(req: Request, res: Response) {
  const participants = await participantsService.getParticipants();

  res.send(participants);
}
