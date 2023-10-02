import { Game } from "@prisma/client";

export type CreateGame = Pick<Game, 'homeTeamName' | 'awayTeamName'>;
