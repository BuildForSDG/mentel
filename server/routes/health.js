import express from 'express';
import health from '../controllers/healthprofessionalSignup';
import getAllHealth from '../controllers/getAllHealth';
import deleteHealth from '../controllers/deleteHealth';
import upload from '../middlewares/multer';
const router = express.Router();

router.post('/register', upload.single('image'), health.register);
router.get('/gethealth', getAllHealth.getAllHealth);
router.delete('/health/:id', deleteHealth.deleteSingleHealth);
router.delete('/health', deleteHealth.deleteHealth);

export default router;
