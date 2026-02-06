import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as contactController from '../controllers/contact.controller';

const router = Router();

router.use(authenticate);

router.get('/', contactController.getAllContacts);
router.get('/:id', contactController.getContactById);
router.post('/', authorize('ADMIN', 'ORGANIZER'), contactController.createContact);
router.put('/:id', authorize('ADMIN', 'ORGANIZER'), contactController.updateContact);
router.delete('/:id', authorize('ADMIN', 'ORGANIZER'), contactController.deleteContact);

export default router;
