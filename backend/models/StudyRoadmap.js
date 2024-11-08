
const mongoose = require('mongoose');

const studyRoadmapSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  subject: { type: String, required: true },
  roadmap: [{ date: Date, topic: String, completed: { type: Boolean, default: false } }],
});

module.exports = mongoose.model('StudyRoadmap', studyRoadmapSchema);
