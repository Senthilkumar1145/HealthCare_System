const express = require('express');
const router = express.Router();
const { getHealthCentres, getHealthCentreById, addHealthCentre } = require('../controllers/centreController');
const { verifyToken, optionalToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', optionalToken, getHealthCentres);
router.get('/:id', optionalToken, getHealthCentreById);
router.post('/add', verifyToken, addHealthCentre);

module.exports = router;
