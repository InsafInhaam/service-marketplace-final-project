const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
