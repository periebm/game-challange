import prisma from '../database';
import { CreateParticipant } from '../protocols/participant';

async function createParticipant(participant: CreateParticipant) {
  return await prisma.participant.create({
    data: participant,
  });
}

async function getParticipants() {
  return await prisma.participant.findMany();
}

const participantsRepository = { createParticipant, getParticipants };

export default participantsRepository;
