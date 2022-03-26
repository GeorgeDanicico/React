const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  address: String,
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  password: String,
})

module.exports = mongoose.model("users", userSchema);