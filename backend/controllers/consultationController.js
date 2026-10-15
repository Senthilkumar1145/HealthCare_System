const Consultation = require('../models/Consultation');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// Start or initiate a consultation call for an appointment (Doctor only)
const startConsultation = async (req, res) => {
  try {
    const { appointment_id, mode, notes } = req.body;

    if (!appointment_id) {
      return res.status(400).json({ message: 'appointment_id is required' });
    }

    // Verify user role: Only Doctors can initiate call
    if (req.user && req.user.role !== 'Doctor') {
      return res.status(403).json({ 
        message: 'Only doctors can initiate teleconsultation calls.' 
      });
    }

    // Verify appointment exists
    const appointment = await Appointment.findById(appointment_id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    // Check if consultation already exists for this appointment
    let consultation = await Consultation.findOne({ appointment_id });
    if (consultation) {
      consultation.status = 'Calling';
      consultation.offer = null;
      consultation.answer = null;
      consultation.candidates = [];
      if (notes) consultation.notes = notes;
      await consultation.save();

      return res.status(200).json({ 
        message: 'Calling patient for consultation session', 
        consultation,
        appointment
      });
    }

    consultation = new Consultation({
      appointment_id,
      mode: mode || 'Audio',
      status: 'Calling',
      notes: notes || '',
      offer: null,
      answer: null,
      candidates: []
    });

    await consultation.save();
    res.status(201).json({ 
      message: 'Consultation audio call initiated successfully', 
      consultation,
      appointment
    });
  } catch (err) {
    res.status(500).json({ message: 'Error starting consultation', error: err.message });
  }
};

// WebRTC signal exchange (offer, answer, candidate, status updates)
const signalConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const { offer, answer, candidate, status, notes } = req.body;

    const consultation = await Consultation.findById(id);
    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found.' });
    }

    if (offer) consultation.offer = offer;
    if (answer) consultation.answer = answer;
    if (status) consultation.status = status;
    if (notes !== undefined) consultation.notes = notes;

    if (candidate) {
      const existing = consultation.candidates || [];
      consultation.candidates = [...existing, candidate];
    }

    await consultation.save();
    res.status(200).json({ message: 'Signal updated', consultation });
  } catch (err) {
    res.status(500).json({ message: 'Error processing WebRTC signal', error: err.message });
  }
};

// Update consultation status & notes (e.g., Finish call, save notes)
const updateConsultationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body; // 'Calling', 'In-Progress', 'Finished', 'Declined'

    const updateData = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const consultation = await Consultation.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found.' });
    }

    res.status(200).json({ message: 'Consultation status updated', consultation });
  } catch (err) {
    res.status(500).json({ message: 'Error updating consultation', error: err.message });
  }
};

// Get active call status for logged in user (e.g., incoming call for Patient)
const getActiveCall = async (req, res) => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;

    const consultations = await Consultation.find({
      status: { $in: ['Calling', 'In-Progress'] }
    }).populate({
      path: 'appointment_id',
      populate: [
        { path: 'user_id', select: 'name phone language' },
        { path: 'doctor_id', select: 'name specialization' }
      ]
    });

    if (!consultations || consultations.length === 0) {
      return res.status(200).json({ activeCall: null });
    }

    // Filter relevant call for current user
    let userCall = null;
    for (const c of consultations) {
      if (!c.appointment_id) continue;

      const patientUserId = c.appointment_id.user_id?._id || c.appointment_id.user_id;
      const doctorObj = c.appointment_id.doctor_id;

      if (userRole === 'Patient' && String(patientUserId) === String(userId)) {
        userCall = c;
        break;
      } else if (userRole === 'Doctor') {
        userCall = c;
        break;
      }
    }

    res.status(200).json({ activeCall: userCall });
  } catch (err) {
    res.status(500).json({ message: 'Error checking active call', error: err.message });
  }
};

// Get consultation details by appointment ID
const getConsultationDetails = async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const consultation = await Consultation.findOne({ appointment_id }).populate({
      path: 'appointment_id',
      populate: [
        { path: 'user_id', select: 'name phone language' },
        { path: 'doctor_id', select: 'name specialization' }
      ]
    });

    if (!consultation) {
      return res.status(404).json({ message: 'No consultation found for this appointment.' });
    }

    res.status(200).json(consultation);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching consultation details', error: err.message });
  }
};

// Get user's consultations list
const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().populate({
      path: 'appointment_id',
      populate: [
        { path: 'user_id', select: 'name phone language' },
        { path: 'doctor_id', select: 'name specialization' }
      ]
    });
    res.status(200).json(consultations || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching consultations', error: err.message });
  }
};

module.exports = { 
  startConsultation, 
  signalConsultation,
  getActiveCall,
  updateConsultationStatus, 
  getConsultationDetails,
  getConsultations
};
