const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/RentalGenie',
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('DB Connected!'))
  .catch(error => console.log(error.message))

module.exports = mongoose