// TeamMembers model
const mongoose = require('mongoose');

const teamMembersSchema = new mongoose.Schema({
  name: String,
  role: String,
  bio: String,
  image: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('TeamMembers', teamMembersSchema);
