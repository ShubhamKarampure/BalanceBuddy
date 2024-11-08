import express from 'express';
import { registerParent, registerChild, login } from '../controllers/authController.js';

const router = express.Router();

router.post('/register/parent', registerParent);
router.post('/register/child', registerChild);
router.post('/login', login);

export default router;