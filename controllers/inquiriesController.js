const Inquiries = require('../models/inquiries');

// Create new inquiry
exports.createInquiry = async (req, res) => {
  try {
    if (!req.body.property_id) {
      return res.status(400).json({ success: false, error: 'property_id is required' });
    }
    const inquiry = new Inquiries({
      ...req.body
    });
    await inquiry.save();
    res.status(201).json({ success: true, inquiry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Get all inquiries
exports.getAllInquiries = async (req, res) => {
  try {
    const inquiries = await Inquiries.find();
    res.json({ success: true, inquiries });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Get single inquiry by ID
exports.getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiries.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, error: 'Inquiry not found' });
    res.json({ success: true, inquiry });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// Update inquiry by ID
exports.updateInquiry = async (req, res) => {
  try {
    const updateFields = { ...req.body };
    const inquiry = await Inquiries.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!inquiry) return res.status(404).json({ success: false, error: 'Inquiry not found' });
    res.json({ success: true, inquiry });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};

// Delete inquiry by ID
exports.deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiries.findByIdAndDelete(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, error: 'Inquiry not found' });
    res.json({ success: true, message: 'Inquiry deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
