const Event = require('../models/Event');

const createEvent = async (req, res) => {
    const { name, description, date, venue } = req.body;
    try {
        const event = new Event({ name, description, date, venue });
        await event.save();
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteEvent = async (req, res) => {
    const { id } = req.params;
    try {
        await Event.findByIdAndDelete(id);
        res.status(200).json({ message: 'Event deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { createEvent, getEvents, deleteEvent };
