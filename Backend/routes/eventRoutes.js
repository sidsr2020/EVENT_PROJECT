const express = require('express');
const { createEvent, getEvents, deleteEvent } = require('../controllers/eventController');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, createEvent);
router.get('/', getEvents);
router.delete('/:id', authMiddleware, deleteEvent);

module.exports = router;
