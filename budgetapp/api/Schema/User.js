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
  bestFriend: mongoose.SchemaTypes.ObjectId,
  hoobies: [String],
})

module.exports = mongoose.model("User", userSchema);