import express from 'express';
import getAllHealth from '../controllers/getAllHealth';
const router = express.Router();

router.get('/gethealth', getAllHealth.getAllHealth);

export default router;
