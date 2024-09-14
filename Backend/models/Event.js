const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    venue: { type: String, required: true },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Event', EventSchema);
