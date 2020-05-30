import express from 'express';
import health from '../controllers/healthprofessionalSignup';
import upload from '../middlewares/multer';
const router = express.Router();

router.post('/register', upload.single('image'), health.register);

export default router;
