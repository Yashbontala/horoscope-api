
const User = require('../models/User');

const horoscopes = {
  Aries: "Today is a great day for Aries to take bold steps.",
  Taurus: "Stay grounded and focus on your goals today.",
  Gemini: "Communication will lead you to success today.",
  Cancer: "Embrace your emotions and share with someone close.",
  Leo: "Step into the spotlight and shine bright today.",
  Virgo: "Pay attention to the little details.",
  Libra: "Seek balance and harmony in decisions.",
  Scorpio: "Let your passion drive your actions today.",
  Sagittarius: "Adventure awaits. Be open to new ideas.",
  Capricorn: "Hard work pays off. Stay determined.",
  Aquarius: "Innovate. Let your creativity flow.",
  Pisces: "Dream big, and act with empathy."
};

exports.getTodayHoroscope = async (req, res) => {
  const user = await User.findById(req.user.id);
  const today = new Date().toISOString().slice(0, 10);
  const text = horoscopes[user.zodiacSign] || "Your stars are aligning mysteriously today.";

  user.history.push({ date: today, horoscope: text });
  await user.save();

  res.json({ date: today, horoscope: text });
};

exports.getHistory = async (req, res) => {
  const user = await User.findById(req.user.id);
  const last7 = user.history.slice(-7);
  res.json(last7);
};
