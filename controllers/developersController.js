const Developers = require('../models/developers');



// Create new developer
exports.createDeveloper = async (req, res) => {
  try {
    // Validate required fields
    const requiredFields = ['name', 'description', 'specialization', 'founded', 'image'];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ success: false, error: `${field} is required` });
      }
    }
    // Save all fields from frontend
    const developer = new Developers({ ...req.body });
    await developer.save();
    res.status(201).json({ success: true, developer });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};


// Get all developers
exports.getAllDevelopers = async (req, res) => {
  try {
    const developers = await Developers.find();
    res.json({ success: true, developers });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};


// Get single developer by ID
exports.getDeveloperById = async (req, res) => {
  try {
    const developer = await Developers.findById(req.params.id);
    if (!developer) return res.status(404).json({ success: false, error: 'Developer not found' });
    res.json({ success: true, developer });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};



// Update developer by ID
exports.updateDeveloper = async (req, res) => {
  try {
    const updateFields = { ...req.body, updatedAt: Date.now() };
    const developer = await Developers.findByIdAndUpdate(req.params.id, updateFields, { new: true });
    if (!developer) return res.status(404).json({ success: false, error: 'Developer not found' });
    res.json({ success: true, developer });
  } catch (err) {
    res.status(400).json({ success: false, error: err.message });
  }
};


// Delete developer by ID
exports.deleteDeveloper = async (req, res) => {
  try {
    const developer = await Developers.findByIdAndDelete(req.params.id);
    if (!developer) return res.status(404).json({ success: false, error: 'Developer not found' });
    res.json({ success: true, message: 'Developer deleted' });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
