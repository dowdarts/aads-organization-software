import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as eventController from '../controllers/event.controller';

const router = Router();

router.use(authenticate);

router.get('/', eventController.getAllEvents);
router.get('/:id', eventController.getEventById);
router.post('/', authorize('ADMIN', 'ORGANIZER'), eventController.createEvent);
router.put('/:id', authorize('ADMIN', 'ORGANIZER'), eventController.updateEvent);
router.delete('/:id', authorize('ADMIN', 'ORGANIZER'), eventController.deleteEvent);

export default router;
