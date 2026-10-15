const express = require('express');
const router = express.Router();
const { 
  startConsultation, 
  signalConsultation,
  getActiveCall,
  updateConsultationStatus, 
  getConsultationDetails,
  getConsultations
} = require('../controllers/consultationController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', verifyToken, authorizeRoles('Doctor', 'Patient'), getConsultations);
router.get('/active-call', verifyToken, authorizeRoles('Doctor', 'Patient'), getActiveCall);
router.post('/start', verifyToken, authorizeRoles('Doctor'), startConsultation);
router.post('/:id/signal', verifyToken, authorizeRoles('Doctor', 'Patient'), signalConsultation);
router.patch('/:id/status', verifyToken, authorizeRoles('Doctor', 'Patient'), updateConsultationStatus);
router.get('/:appointment_id', verifyToken, authorizeRoles('Doctor', 'Patient'), getConsultationDetails);

module.exports = router;
