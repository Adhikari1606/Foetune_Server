const express = require('express');
const router = express.Router();

router.use('/admin/auth', require('./adminAuth'));
router.use('/admin/management', require('./adminManagement'));
router.use('/categories', require('./categories'));
router.use('/developers', require('./developers'));
router.use('/files', require('./files'));
router.use('/inquiries', require('./inquiries'));
router.use('/parameters', require('./parameters'));
router.use('/properties', require('./properties'));
router.use('/statuses', require('./statuses'));
router.use('/team', require('./team'));

module.exports = router;
