const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  address: String,
  fullAddress: String,
  city: String,
  state: String,
  pincode: String,
  coordinates: {},
  landmarks: [String],
  nearbyPlaces: [String]
}, { _id: false });

const specificationsSchema = new mongoose.Schema({
  beds: Number,
  baths: Number,
  area: String,
  floors: Number,
  parking: Boolean,
  balconies: Number,
  facing: String,
  furnishingStatus: String,
  ageOfProperty: String
}, { _id: false });

const imageSchema = new mongoose.Schema({
  url: String,
  alt: String,
  isPrimary: Boolean,
  category: String
}, { _id: false });

const documentSchema = new mongoose.Schema({
  url: String,
  name: String,
  type: String
}, { _id: false });

const seoSchema = new mongoose.Schema({
  metaTitle: String,
  metaDescription: String,
  keywords: [String],
  slug: String
}, { _id: false });

const accessControlSchema = new mongoose.Schema({
  requiresVerification: Boolean,
  verificationLevel: String,
  restrictedContent: Boolean
}, { _id: false });

const propertiesSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  developer_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Developers', required: true },
  location: locationSchema,
  possession: { type: String, default: 'under-construction' },
  constructionStatus: { type: String, default: 'under-construction' },
  possessionDate: Date,
  specifications: specificationsSchema,
  amenities: [String],
  images: [imageSchema],
  documents: [documentSchema],
  rating: { type: Number, default: 4.0 },
  reviews: { type: Number, default: 0 },
  floorPlan: String,
  seo: seoSchema,
  accessControl: accessControlSchema,
  propertyType_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Parameters' },
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Parameters' },
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' },
  updatedAt: { type: Date, default: Date.now },
  updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Admins' }
});

module.exports = mongoose.model('Properties', propertiesSchema);
// Properties model
const mongoose = require('mongoose');

const propertiesSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  location: String,
  images: [String],
  developer: { type: mongoose.Schema.Types.ObjectId, ref: 'Developers' },
  parameters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PropertyParameters' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Properties', propertiesSchema);
