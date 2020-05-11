import express from 'express';
const router = express.Router();
const models = require('../models');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = router;
