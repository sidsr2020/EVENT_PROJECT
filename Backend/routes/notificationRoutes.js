const express = require('express');
const { sendReminder } = require('../controllers/notificationController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/sendReminder', authMiddleware, sendReminder);

module.exports = router;
