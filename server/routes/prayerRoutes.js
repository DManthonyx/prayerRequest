const express = require('express');
const router = express.Router();
const prayerController = require('../controllers/prayerController');

router.get('/get_all', prayerController.getAllPrayers);
router.post('/add', prayerController.addPrayer);

module.exports = router;