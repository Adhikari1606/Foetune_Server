// Example configuration loader
const dotenv = require('dotenv');
dotenv.config();

// TODO: Load other configs as needed (db, cloudinary, etc.)

module.exports = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGO_URI,
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  // Add other config exports as needed
};
