const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

exports.uploadImage = async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ success: false, error: 'No file uploaded' });
		}
		// Upload to Cloudinary using stream
		const streamUpload = (fileBuffer) => {
			return new Promise((resolve, reject) => {
				const stream = cloudinary.uploader.upload_stream((error, result) => {
					if (result) {
						resolve(result);
					} else {
						reject(error);
					}
				});
				streamifier.createReadStream(fileBuffer).pipe(stream);
			});
		};
		const result = await streamUpload(req.file.buffer);
		res.status(200).json({ success: true, url: result.secure_url });
	} catch (error) {
		res.status(500).json({ success: false, error: error.message });
	}
};
