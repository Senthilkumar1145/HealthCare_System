const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctorProfile, updateDoctorProfile, getMyDoctorProfile, getDoctorAvailability } = require('../controllers/doctorController');
const { verifyToken, optionalToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', optionalToken, getDoctors);
router.get('/availability', optionalToken, getDoctorAvailability);
router.get('/me/profile', verifyToken, authorizeRoles('Doctor'), getMyDoctorProfile);
router.get('/:id', optionalToken, getDoctorById);
router.post('/', verifyToken, authorizeRoles('Doctor'), createDoctorProfile);
router.put('/profile', verifyToken, authorizeRoles('Doctor'), updateDoctorProfile);

module.exports = router;
