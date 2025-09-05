const Parameters = require('../models/parameters');

// Create new parameter
exports.createParameter = async (req, res) => {
  try {
    const requiredFields = ['name', 'category'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }
    const parameter = new Parameters({
      ...req.body
    });
    await parameter.save();
    res.status(201).json({ success: true, parameter });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all parameters
exports.getAllParameters = async (req, res) => {
  try {
    const parameters = await Parameters.find();
    res.json({ success: true, parameters });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single parameter by ID
exports.getParameterById = async (req, res) => {
  try {
    const parameter = await Parameters.findById(req.params.id);
    if (!parameter) return res.status(404).json({ success: false, error: 'Parameter not found' });
    res.json({ success: true, parameter });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update parameter by ID
exports.updateParameter = async (req, res) => {
  try {
    const updateFields = { ...req.body };
    const parameter = await Parameters.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!parameter) return res.status(404).json({ success: false, error: 'Parameter not found' });
    res.json({ success: true, parameter });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete parameter by ID
exports.deleteParameter = async (req, res) => {
  try {
    const parameter = await Parameters.findByIdAndDelete(req.params.id);
    if (!parameter) return res.status(404).json({ success: false, error: 'Parameter not found' });
    res.json({ success: true, message: 'Parameter deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
