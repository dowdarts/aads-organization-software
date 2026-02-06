import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as rosterController from '../controllers/roster.controller';

const router = Router();

router.use(authenticate);

router.get('/', rosterController.getAllRosters);
router.get('/event/:eventId', rosterController.getRostersByEvent);
router.post('/', authorize('ADMIN', 'ORGANIZER'), rosterController.createRoster);
router.put('/:id', authorize('ADMIN', 'ORGANIZER'), rosterController.updateRoster);
router.delete('/:id', authorize('ADMIN', 'ORGANIZER'), rosterController.deleteRoster);

export default router;
