import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as playerController from '../controllers/player.controller';

const router = Router();

router.use(authenticate);

router.get('/', playerController.getAllPlayers);
router.get('/:id', playerController.getPlayerById);
router.post('/', authorize('ADMIN', 'ORGANIZER', 'SCOUT'), playerController.createPlayer);
router.put('/:id', authorize('ADMIN', 'ORGANIZER', 'SCOUT'), playerController.updatePlayer);
router.delete('/:id', authorize('ADMIN', 'ORGANIZER'), playerController.deletePlayer);

export default router;
