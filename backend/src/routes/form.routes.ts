import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as formController from '../controllers/form.controller';

const router = Router();

router.use(authenticate);

router.get('/', formController.getAllForms);
router.get('/:id', formController.getFormById);
router.post('/', authorize('ADMIN', 'ORGANIZER'), formController.createForm);
router.put('/:id', authorize('ADMIN', 'ORGANIZER'), formController.updateForm);
router.delete('/:id', authorize('ADMIN', 'ORGANIZER'), formController.deleteForm);

// Form responses
router.post('/:id/responses', formController.submitFormResponse);
router.get('/:id/responses', formController.getFormResponses);

export default router;
