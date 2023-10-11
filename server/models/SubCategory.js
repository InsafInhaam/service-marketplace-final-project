const mongoose = require('mongoose');

const subcategorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category', // This refers to the 'Category' model
    required: true,
  },
}, {
  timestamps: true,
});

const SubCategory = mongoose.model('SubCategory', subcategorySchema);

module.exports = SubCategory;
