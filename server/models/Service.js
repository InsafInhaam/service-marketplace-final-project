const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  hours: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  provider: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to a User model (assuming you have a User model)
  },
  location: {
    type: String,
  },
  ratings: {
    type: Number,
    default: 0,
  },
  reviews: [{
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', // Reference to a User model (assuming you have a User model)
    },
    rating: Number,
    comment: String,
  }],
  images: [{
    url: String,
    altText: String,
  }],
  // You can add more fields as needed for your service model
  // Example: service type, availability, tags, etc.
  // ...
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
