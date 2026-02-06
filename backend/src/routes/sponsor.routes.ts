import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth';
import * as sponsorController from '../controllers/sponsor.controller';

const router = Router();

router.use(authenticate);

router.get('/', sponsorController.getAllSponsors);
router.get('/:id', sponsorController.getSponsorById);
router.post('/', authorize('ADMIN', 'ORGANIZER', 'SCOUT'), sponsorController.createSponsor);
router.put('/:id', authorize('ADMIN', 'ORGANIZER', 'SCOUT'), sponsorController.updateSponsor);
router.delete('/:id', authorize('ADMIN', 'ORGANIZER'), sponsorController.deleteSponsor);

export default router;
