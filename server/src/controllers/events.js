const Event = require('../models/event');

const addEvent = async (req, res) => {
  try {
    console.log('Add event request received')
    const newEvent = req.body;
    const savedEvent = await Event.create(newEvent);
    res.status(201).json(savedEvent);
  } catch (e) {
    console.log(e)
    res.status(500).send('Error adding event')
  }
};

const getAllEvents = async (req, res) => {
  try {
    console.log('Get all events request received')
    const allEvents = await Event.find();
    res.status(200).send(allEvents)
  } catch (e) {
    console.log(e)
    res.status(500).send('Error getting all events')
  }
};

module.exports = {
  addEvent,
  getAllEvents,
}