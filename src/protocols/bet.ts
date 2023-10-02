import { Bet } from '@prisma/client';

export type CreateBet = Pick<Bet, 'homeTeamScore' | 'awayTeamScore' | 'amountBet' | 'gameId'| 'participantId'>;
