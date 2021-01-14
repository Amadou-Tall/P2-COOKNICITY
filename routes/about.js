const express = require('express');
const router = express.Router();
const aboutCtrl = require('../controllers/aboutC');

router.get('/', aboutCtrl.showAbout);

module.exports = router;