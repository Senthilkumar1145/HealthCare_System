const MedicineReminder = require('../models/MedicineReminder');
const Doctor = require('../models/Doctor');
const User = require('../models/User');
const Appointment = require('../models/Appointment');

// Create a medicine reminder
const createReminder = async (req, res) => {
  try {
    const { medicine, schedule, user_id } = req.body;
    
    if (!medicine || !schedule) {
      return res.status(400).json({ message: 'Medicine name and schedule are required' });
    }

    // Patients set reminders for themselves; Doctors/Nurses can set them for a specific user_id
    const targetUserId = req.user.role === 'Patient' ? req.user.id : (user_id || req.user.id);

    let docId = null;
    if (req.user.role === 'Doctor') {
      const doc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
      if (doc) docId = doc._id;
    }

    const newReminder = new MedicineReminder({
      user_id: targetUserId,
      medicine,
      schedule,
      doctor_id: docId
    });

    await newReminder.save();

    const populated = await MedicineReminder.findById(newReminder._id)
      .populate('user_id', 'name phone')
      .populate('doctor_id', 'name specialization');

    res.status(201).json({ 
      message: 'Medicine reminder created successfully', 
      reminder: populated || newReminder 
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating medicine reminder', error: err.message });
  }
};

// Update an existing medicine reminder
const updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { medicine, schedule, user_id } = req.body;

    if (!medicine || !schedule) {
      return res.status(400).json({ message: 'Medicine name and schedule are required for update' });
    }

    const reminder = await MedicineReminder.findById(id);
    if (!reminder) {
      return res.status(404).json({ message: 'Medicine reminder not found' });
    }

    const ownerId = reminder.user_id?._id ? String(reminder.user_id._id) : String(reminder.user_id);
    if (req.user.role === 'Patient' && ownerId !== String(req.user.id)) {
      return res.status(403).json({ message: 'Access denied: You can only update your own reminders' });
    }

    const updateData = {
      medicine,
      schedule,
      updatedAt: new Date().toISOString()
    };

    if (user_id && req.user.role !== 'Patient') {
      updateData.user_id = user_id;
    }

    if (req.user.role === 'Doctor') {
      const doc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
      if (doc) updateData.doctor_id = doc._id;
    }

    await MedicineReminder.findByIdAndUpdate(id, updateData);

    const updated = await MedicineReminder.findById(id)
      .populate('user_id', 'name phone')
      .populate('doctor_id', 'name specialization');

    res.status(200).json({
      message: 'Medicine reminder updated successfully',
      reminder: updated
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating medicine reminder', error: err.message });
  }
};

// Delete a medicine reminder
const deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const reminder = await MedicineReminder.findById(id);
    if (!reminder) {
      return res.status(404).json({ message: 'Medicine reminder not found' });
    }

    const ownerId = reminder.user_id?._id ? String(reminder.user_id._id) : String(reminder.user_id);
    if (req.user.role === 'Patient' && ownerId !== String(req.user.id)) {
      return res.status(403).json({ message: 'Access denied: You can only delete your own reminders' });
    }

    await MedicineReminder.findByIdAndDelete(id);
    res.status(200).json({ message: 'Medicine reminder deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting medicine reminder', error: err.message });
  }
};

// Get reminders for logged-in user or specified user
const getReminders = async (req, res) => {
  try {
    let query = {};
    if (req.user.role === 'Patient') {
      query.user_id = req.user.id;
    } else if (req.query.scope === 'personal') {
      query.user_id = req.user.id;
    } else if (req.query.user_id) {
      query.user_id = req.query.user_id;
    }

    const reminders = await MedicineReminder.find(query)
      .populate('user_id', 'name phone')
      .populate('doctor_id', 'name specialization');

    res.status(200).json(reminders || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching medicine reminders', error: err.message });
  }
};

// Get list of patients for Doctors/Nurses in Reminder Menu
const getReminderPatients = async (req, res) => {
  try {
    const patientMap = new Map();

    // 1. All registered patients with role Patient
    const allPatientUsers = await User.find({ role: 'Patient' });
    for (const u of (allPatientUsers || [])) {
      if (u && u._id) {
        patientMap.set(String(u._id), {
          _id: u._id,
          name: u.name,
          phone: u.phone,
          language: u.language || 'en'
        });
      }
    }

    // 2. Also check appointments with doctor
    let doctorDoc = null;
    if (req.user.role === 'Doctor') {
      doctorDoc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
    }

    let appointmentQuery = {};
    if (doctorDoc) {
      appointmentQuery.doctor_id = doctorDoc._id;
    }

    const appointments = await Appointment.find(appointmentQuery)
      .populate('user_id', 'name phone language');

    for (const app of (appointments || [])) {
      const patient = app.user_id;
      if (patient && patient._id) {
        const pId = String(patient._id);
        if (!patientMap.has(pId)) {
          patientMap.set(pId, {
            _id: patient._id,
            name: patient.name,
            phone: patient.phone,
            language: patient.language || 'en'
          });
        }
      }
    }

    res.status(200).json(Array.from(patientMap.values()));
  } catch (err) {
    res.status(500).json({ message: 'Error fetching patients for reminders', error: err.message });
  }
};

module.exports = { 
  createReminder, 
  updateReminder, 
  deleteReminder, 
  getReminders, 
  getReminderPatients 
};