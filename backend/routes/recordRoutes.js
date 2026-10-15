const express = require('express');
const router = express.Router();
const { 
  createHealthRecord, 
  updateHealthRecord, 
  getHealthRecords,
  getAcceptedPatients 
} = require('../controllers/recordController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// Get accepted patients for Doctors and Nurses
router.get('/patients', verifyToken, authorizeRoles('Doctor', 'Nurse'), getAcceptedPatients);

// Create medical records (Doctor or Nurse)
router.post('/add', verifyToken, authorizeRoles('Doctor', 'Nurse'), createHealthRecord);

// Edit medical records (Doctor or Nurse)
router.put('/:id', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateHealthRecord);
router.patch('/:id', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateHealthRecord);

// View records (Patient sees own; Doctor & Nurse can see all / filter by user_id)
router.get('/', verifyToken, authorizeRoles('Patient', 'Doctor', 'Nurse'), getHealthRecords);

module.exports = router;
