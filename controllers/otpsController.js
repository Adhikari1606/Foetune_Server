const Otps = require('../models/otps');

// Create new OTP
exports.createOtp = async (req, res) => {
  try {
    const requiredFields = ['identifier', 'otp', 'purpose', 'expiresAt'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }
    const otp = new Otps({
      ...req.body
    });
    await otp.save();
    res.status(201).json({ success: true, otp });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all OTPs
exports.getAllOtps = async (req, res) => {
  try {
    const otps = await Otps.find();
    res.json({ success: true, otps });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single OTP by ID
exports.getOtpById = async (req, res) => {
  try {
    const otp = await Otps.findById(req.params.id);
    if (!otp) return res.status(404).json({ success: false, error: 'OTP not found' });
    res.json({ success: true, otp });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update OTP by ID
exports.updateOtp = async (req, res) => {
  try {
    const updateFields = { ...req.body };
    const otp = await Otps.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!otp) return res.status(404).json({ success: false, error: 'OTP not found' });
    res.json({ success: true, otp });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete OTP by ID
exports.deleteOtp = async (req, res) => {
  try {
    const otp = await Otps.findByIdAndDelete(req.params.id);
    if (!otp) return res.status(404).json({ success: false, error: 'OTP not found' });
    res.json({ success: true, message: 'OTP deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
