const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  forename: String,
  surname: String,
  email: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);