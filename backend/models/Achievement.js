
const mongoose = require('mongoose');

const achievementSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  achievements: [{ title: String, date: Date, points: Number }],
});

module.exports = mongoose.model('Achievement', achievementSchema);
