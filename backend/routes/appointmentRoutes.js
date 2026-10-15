const express = require('express');
const router = express.Router();
const { 
  bookAppointment, 
  getAppointments, 
  updateAppointmentStatus,
  acceptAppointment,
  rejectAppointment
} = require('../controllers/appointmentController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware'); 

router.post('/book', verifyToken, bookAppointment);
router.get('/', verifyToken, getAppointments);

// Doctor & Nurse routes for accepting and rejecting appointments
router.patch('/:id/status', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateAppointmentStatus);
router.put('/:id/status', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateAppointmentStatus);
router.post('/:id/status', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateAppointmentStatus);
router.post('/:id/accept', verifyToken, authorizeRoles('Doctor', 'Nurse'), acceptAppointment);
router.post('/:id/reject', verifyToken, authorizeRoles('Doctor', 'Nurse'), rejectAppointment);

module.exports = router;
