
const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  pincode: String,
  country: { type: String, default: 'India' }
}, { _id: false });

const contactInfoSchema = new mongoose.Schema({
  email: String,
  phone: String,
  website: String,
  address: addressSchema
}, { _id: false });

const socialMediaSchema = new mongoose.Schema({
  facebook: String,
  twitter: String,
  instagram: String,
  linkedin: String
}, { _id: false });

const developersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  logo: String,
  logoUrl: String,
  description: { type: String, required: true },
  specialization: { type: String, required: true },
  founded: { type: Number, required: true },
  developerRating: { type: Number, default: 4.0 },
  totalReviews: { type: Number, default: 0 },
  totalProjects: { type: Number, default: 0 },
  completedProjects: { type: Number, default: 0 },
  ongoingProjects: { type: Number, default: 0 },
  image: { type: String, required: true },
  contactInfo: contactInfoSchema,
  socialMedia: socialMediaSchema,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' }
});

module.exports = mongoose.model('Developers', developersSchema);
