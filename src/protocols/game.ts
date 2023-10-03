import { Game } from "@prisma/client";

export type CreateGame = Pick<Game, 'homeTeamName' | 'awayTeamName'>;

export type CreateScore = Pick<Game, 'homeTeamScore' | 'awayTeamScore'>;
