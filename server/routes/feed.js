import express from 'express';
import feed from '../controllers/feed';
import verifyToken from '../middlewares/verifyToken';
const router = express.Router();

router.post('/postfeed', verifyToken, feed.postfeed);
router.get('/getfeed', feed.getAllfeed);

export default router;
