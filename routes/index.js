const express = require('express');
const router = express.Router();
const { getProfile } = require('../controller/profile');

// Define routes
router.get('/profile', getProfile);

module.exports = router;
