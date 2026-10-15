const express = require('express');
const router = express.Router();
const { 
  createReminder, 
  updateReminder, 
  deleteReminder, 
  getReminders, 
  getReminderPatients 
} = require('../controllers/reminderController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// Get list of patients for Doctors and Nurses to select from dropdown
router.get('/patients', verifyToken, authorizeRoles('Doctor', 'Nurse'), getReminderPatients);

// Add a new medicine reminder
router.post('/add', verifyToken, createReminder);

// Update an existing medicine reminder
router.put('/:id', verifyToken, updateReminder);
router.patch('/:id', verifyToken, updateReminder);

// Delete a medicine reminder
router.delete('/:id', verifyToken, deleteReminder);

// Get reminders (Patient gets own; Doctor/Nurse can filter or scope)
router.get('/', verifyToken, getReminders);

module.exports = router;