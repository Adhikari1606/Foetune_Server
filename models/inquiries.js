const mongoose = require('mongoose');

const guestInfoSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String
}, { _id: false });

const inquiriesSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Users' },
  guestInfo: guestInfoSchema,
  property_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Properties', required: true },
  message: String,
  preferredLocation: String,
  apartmentType: String,
  budget: Number,
  Assigned_to: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiries', inquiriesSchema);
// Inquiries model
const mongoose = require('mongoose');

const inquiriesSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Properties' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Inquiries', inquiriesSchema);
