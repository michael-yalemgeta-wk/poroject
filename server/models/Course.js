const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  image: { type: String, default: '' },
  duration: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);
