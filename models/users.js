const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  pincode: String,
  country: String
}, { _id: false });

const verificationSchema = new mongoose.Schema({
  emailVerified: Boolean,
  phoneVerified: Boolean
}, { _id: false });

const usersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  gender: String,
  address: addressSchema,
  verification: verificationSchema,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', usersSchema);
// Users model (for multiple users, if needed)
const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Users', usersSchema);
