import express from 'express';
import Appoint from '../controllers/appointment';
import verifyToken from '../middlewares/verifyToken';
const router = express.Router();

router.post('/postappoint', verifyToken, Appoint.postappointment);
router.get('/getappoint', Appoint.getAllAppointment);
router.get('/getappoint/:id', Appoint.getOneAppointment);

export default router;
