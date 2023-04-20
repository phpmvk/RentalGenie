const mongoose = require('./index');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('agent', userSchema);

module.exports = User;
