const express = require('express');
const router = express.Router();
const { getStates, getDistricts, getCities } = require('../controllers/locationController');
const { optionalToken } = require('../middleware/authMiddleware');

router.get('/states', optionalToken, getStates);
router.get('/districts', optionalToken, getDistricts);
router.get('/cities', optionalToken, getCities);

module.exports = router;
