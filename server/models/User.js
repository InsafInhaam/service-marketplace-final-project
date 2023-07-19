const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['customer', 'labour'], required: true },
  image: { type: String },
  phone: { type: String },
  city: { type: String },
  address: { type: String },
  serviceProvided: {
    type: String,
  }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;