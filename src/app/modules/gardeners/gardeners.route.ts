import { Router } from 'express';
import { verifyToken } from '../../middleware/auth';
import { checkRole } from '../../middleware/checkRole';
import validateRequest from '../../middleware/validateRequest';
import { GardenerSchema } from './gardeners.validation';
import {
    getActiveGardeners,
    getAllActiveGardeners,
    getAllGardeners,
    getGardenerById,
    addGardener,
    updateGardener,
    deleteGardener,
} from './gardeners.controller';

const router = Router();

router.get('/gardeners', getActiveGardeners);

router.get('/active-gardener', getAllActiveGardeners);

router.get('/allgardeners', getAllGardeners);

router.get('/gardener/:id', getGardenerById);

router.post('/gardener', verifyToken, checkRole('admin'), validateRequest(GardenerSchema), addGardener);


router.put('/gardener/:id', verifyToken, checkRole('admin'), validateRequest(GardenerSchema), updateGardener);

router.delete('/gardener/:id', verifyToken, checkRole('admin'), deleteGardener);

export const gardenersRoutes = router;