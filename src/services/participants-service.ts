import { CreateParticipant } from '../protocols/participant';
import { notEnoughMoneyError } from '../errors/not-enough-money';
import participantsRepository from '../repositories/participants-repository';

async function createParticipant(participant: CreateParticipant) {
  if(participant.balance < 1000) throw notEnoughMoneyError()

  return await participantsRepository.createParticipant(participant);
}

async function getParticipants() {
  return await participantsRepository.getParticipants();
}

const participantsService = { createParticipant, getParticipants };

export default participantsService;
