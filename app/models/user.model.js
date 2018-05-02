const mongood = require('mongoose');

const UserSchema = mongoose.Schema({
  forename: String,
  surname: String,
  email: String
}, {
  timeStamps: true
});

module.exports = mongoose.model('User', UserSchema);