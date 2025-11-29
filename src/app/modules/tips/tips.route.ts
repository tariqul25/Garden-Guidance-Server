import { Router } from 'express';
import { verifyToken } from '../../middleware/auth';
import { checkRole } from '../../middleware/checkRole';
import validateRequest from '../../middleware/validateRequest';
import { TipSchema } from './tips.validation';
import {
    getPublicTips,
    getTipById,
    getTipsByEmail,
    addTip,
    updateTip,
    deleteTip,
    getAllTips,
    getTopTrendingTips,
} from './tips.controller';

const router = Router();

router.get('/alltips', getAllTips);

router.get('/top-trending', getTopTrendingTips);

router.get('/publictips', getPublicTips);

router.get('/publictips/:id', getTipById);

router.get('/sharetips/:email', getTipsByEmail);

router.post('/sharetips', verifyToken, checkRole('admin', 'user'), validateRequest(TipSchema), addTip);

router.put('/updatetips/:id', verifyToken, checkRole('admin', 'user'), validateRequest(TipSchema), updateTip);

router.delete('/sharetips/:id', verifyToken, checkRole('admin'), deleteTip);

export const tipsRoutes = router;