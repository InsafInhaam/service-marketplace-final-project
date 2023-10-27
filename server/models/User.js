const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  phone: { type: String },
  city: { type: String },
  address: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  description: { type: String },
  points: { type: Number, default: 0 },
}, {
  timestamps: true,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;