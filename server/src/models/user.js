const mongoose = require('./index');

const userSchema = mongoose.Schema({
  googleId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('agent', userSchema);

module.exports = User;