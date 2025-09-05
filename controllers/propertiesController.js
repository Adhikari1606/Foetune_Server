const Properties = require('../models/properties');

// Create new property
exports.createProperty = async (req, res) => {
  try {
    const requiredFields = ['title', 'description', 'developer_id'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }
    const property = new Properties({
      ...req.body
    });
    await property.save();
    res.status(201).json({ success: true, property });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all properties
exports.getAllProperties = async (req, res) => {
  try {
    const properties = await Properties.find();
    res.json({ success: true, properties });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single property by ID
exports.getPropertyById = async (req, res) => {
  try {
    const property = await Properties.findById(req.params.id);
    if (!property) return res.status(404).json({ success: false, error: 'Property not found' });
    res.json({ success: true, property });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update property by ID
exports.updateProperty = async (req, res) => {
  try {
    const updateFields = { ...req.body, updatedAt: Date.now() };
    const property = await Properties.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!property) return res.status(404).json({ success: false, error: 'Property not found' });
    res.json({ success: true, property });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete property by ID
exports.deleteProperty = async (req, res) => {
  try {
    const property = await Properties.findByIdAndDelete(req.params.id);
    if (!property) return res.status(404).json({ success: false, error: 'Property not found' });
    res.json({ success: true, message: 'Property deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
