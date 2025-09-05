const AccessLogs = require('../models/accessLogs');

// Create new access log
exports.createAccessLog = async (req, res) => {
  try {
    const requiredFields = ['user_id', 'property_id'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }
    const accessLog = new AccessLogs({
      ...req.body
    });
    await accessLog.save();
    res.status(201).json({ success: true, accessLog });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all access logs
exports.getAllAccessLogs = async (req, res) => {
  try {
    const accessLogs = await AccessLogs.find();
    res.json({ success: true, accessLogs });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single access log by ID
exports.getAccessLogById = async (req, res) => {
  try {
    const accessLog = await AccessLogs.findById(req.params.id);
    if (!accessLog) return res.status(404).json({ success: false, error: 'Access log not found' });
    res.json({ success: true, accessLog });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update access log by ID
exports.updateAccessLog = async (req, res) => {
  try {
    const updateFields = { ...req.body };
    const accessLog = await AccessLogs.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!accessLog) return res.status(404).json({ success: false, error: 'Access log not found' });
    res.json({ success: true, accessLog });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete access log by ID
exports.deleteAccessLog = async (req, res) => {
  try {
    const accessLog = await AccessLogs.findByIdAndDelete(req.params.id);
    if (!accessLog) return res.status(404).json({ success: false, error: 'Access log not found' });
    res.json({ success: true, message: 'Access log deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
