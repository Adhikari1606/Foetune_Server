// PropertyParameters model
const mongoose = require('mongoose');

const propertyParametersSchema = new mongoose.Schema({
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Properties' },
  key: String,
  value: String
});

module.exports = mongoose.model('PropertyParameters', propertyParametersSchema);
