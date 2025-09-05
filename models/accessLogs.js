const mongoose = require('mongoose');

const verificationStatusSchema = new mongoose.Schema({
  emailVerified: Boolean,
  phoneVerified: Boolean
}, { _id: false });

const accessLogsSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users', required: true },
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Properties', required: true },
  accessGranted: { type: Boolean, default: false },
  verificationStatus: verificationStatusSchema,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('AccessLogs', accessLogsSchema);

