const Admins = require('../models/admins');

// Create new admin
exports.createAdmin = async (req, res) => {
  try {
    const requiredFields = ['firstName', 'email', 'phoneNumber'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }
    const admin = new Admins({
      ...req.body
    });
    await admin.save();
    res.status(201).json({ success: true, admin });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await Admins.find();
    res.json({ success: true, admins });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single admin by ID
exports.getAdminById = async (req, res) => {
  try {
    const admin = await Admins.findById(req.params.id);
    if (!admin) return res.status(404).json({ success: false, error: 'Admin not found' });
    res.json({ success: true, admin });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update admin by ID
exports.updateAdmin = async (req, res) => {
  try {
    const updateFields = { ...req.body, updatedAt: Date.now() };
    const admin = await Admins.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!admin) return res.status(404).json({ success: false, error: 'Admin not found' });
    res.json({ success: true, admin });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete admin by ID
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admins.findByIdAndDelete(req.params.id);
    if (!admin) return res.status(404).json({ success: false, error: 'Admin not found' });
    res.json({ success: true, message: 'Admin deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
