import { Router } from 'express';
import { betsRouter } from './bets-router';
import { gamesRouter } from './games-router';
import { participantsRouter } from './participants-router';

const router = Router();

router.use(participantsRouter);
router.use(betsRouter);
router.use(gamesRouter);

export default router;
