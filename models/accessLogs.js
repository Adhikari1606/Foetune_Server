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
// AccessLogs model
const mongoose = require('mongoose');

const accessLogsSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,
  timestamp: { type: Date, default: Date.now },
  details: Object
});

module.exports = mongoose.model('AccessLogs', accessLogsSchema);
