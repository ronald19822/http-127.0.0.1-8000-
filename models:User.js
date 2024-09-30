const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  ID: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
