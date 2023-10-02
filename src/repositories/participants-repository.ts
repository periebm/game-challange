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

async function findParticipant(participantId: number) {
  return await prisma.participant.findFirst({
    where: { id: participantId },
  });
}

async function updateBalance(participantId: number, newBalance: number) {
  return await prisma.participant.update({
    where: { id: participantId },
    data: { balance: newBalance },
  });
}

const participantsRepository = { createParticipant, getParticipants, findParticipant, updateBalance };

export default participantsRepository;
