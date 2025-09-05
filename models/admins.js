const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  linkedin: String,
  twitter: String,
  facebook: String,
  instagram: String
}, { _id: false });

const adminsSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: String,
  name: String,
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  profilePicture: String,
  profileImage: String,
  password: String,
  role_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Parameters' },
  department_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Parameters' },
  permissions: [String],
  isActive: { type: Boolean, default: true },
  isLeadership: { type: Boolean, default: false },
  lastLogin: Date,
  experience: String,
  specialization: String,
  description: String,
  socialMedia: socialMediaSchema,
  achievements: [String],
  displayOrder: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' }
});

module.exports = mongoose.model('Admins', adminsSchema);
// Admins model
const mongoose = require('mongoose');

const adminsSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, default: 'admin' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Admins', adminsSchema);
