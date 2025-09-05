const express = require('express');
const router = express.Router();
const developersController = require('../controllers/developersController');

// Create new developer
router.post('/', developersController.createDeveloper);

// Get all developers
router.get('/', developersController.getAllDevelopers);

// Get single developer by ID
router.get('/:id', developersController.getDeveloperById);

// Update developer by ID
router.put('/:id', developersController.updateDeveloper);

// Delete developer by ID
router.delete('/:id', developersController.deleteDeveloper);

module.exports = router;
