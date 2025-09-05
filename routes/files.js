
const express = require('express');
const router = express.Router();
const multer = require('multer');
const cloudinary = require('../config/cloudinary');
const streamifier = require('streamifier');

// Test GET endpoint for /api/files/upload
router.get('/upload', (req, res) => {
	res.status(200).json({ success: true, message: 'Upload endpoint is registered. Use POST to upload files.' });
});

const upload = multer();

// POST /api/files/upload
const filesController = require('../controllers/filesController');
router.post('/upload', upload.single('file'), filesController.uploadImage);

module.exports = router;
