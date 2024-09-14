const sendEmail = require('../utils/sendEmail');

const sendReminder = async (req, res) => {
    const { to, subject, text } = req.body;
    try {
        await sendEmail(to, subject, text);
        res.status(200).json({ message: 'Email sent' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = { sendReminder };
