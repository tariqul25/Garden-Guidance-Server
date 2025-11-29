import { Router } from 'express';
import { registerUser, loginUser } from './auth.controller';
import validateRequest from '../../middleware/validateRequest';
import { RegisterSchema, LoginSchema } from './auth.validation';

const router = Router();

router.post('/register', validateRequest(RegisterSchema), registerUser);
router.post('/login', validateRequest(LoginSchema), loginUser);

export const authRoutes = router;
