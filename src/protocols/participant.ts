import { Participant } from "@prisma/client";

export type CreateParticipant = Pick<Participant, 'name' | 'balance'>;
