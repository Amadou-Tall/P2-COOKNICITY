const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviews');

router.post('/recipes/:id/reviews', reviewCtrl.create);

module.exports = router;