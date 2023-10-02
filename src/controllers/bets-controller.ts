import { Request, Response } from 'express';
import { CreateBet } from '../protocols/bet';
import betsService from '../services/bets-service';
import httpStatus from 'http-status';


export async function createBet(req: Request, res: Response) {
  const bet = req.body as CreateBet;

  const createdBet = await betsService.createBet(bet);

  res.status(httpStatus.CREATED).send(createdBet);
}
