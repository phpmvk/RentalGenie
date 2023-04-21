const mongoose = require('./index')

const eventSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  agency_id: {
    type: String,
    required: true,
  },
  listing_id: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model('events', eventSchema)

module.exports = Event;