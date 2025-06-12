
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  birthdate: Date,
  zodiacSign: String,
  history: [{ date: String, horoscope: String }]
});

module.exports = mongoose.model('User', userSchema);
