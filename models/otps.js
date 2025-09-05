const mongoose = require('mongoose');

const otpsSchema = new mongoose.Schema({
  identifier: { type: String, required: true },
  otp: { type: String, required: true },
  purpose: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  expiresAt: { type: Date, required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Otps', otpsSchema);
