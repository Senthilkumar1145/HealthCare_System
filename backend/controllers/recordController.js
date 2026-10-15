const HealthRecord = require('../models/HealthRecord');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// Create or store a patient health record (Accessible by Doctor or Nurse)
const createHealthRecord = async (req, res) => {
  try {
    const { user_id, diagnosis, notes, doctor_id } = req.body;

    if (!user_id || !diagnosis || !notes) {
      return res.status(400).json({ message: 'Patient ID, diagnosis, and prescription notes are required' });
    }
    
    let finalDoctorId = doctor_id;
    if (!finalDoctorId && req.user.role === 'Doctor') {
      const doc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
      if (doc) finalDoctorId = doc._id;
    }

    const newRecord = new HealthRecord({
      user_id,
      diagnosis,
      notes,
      doctor_id: finalDoctorId
    });

    await newRecord.save();

    const populated = await HealthRecord.findById(newRecord._id)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization');

    res.status(201).json({ 
      message: 'Health record created successfully', 
      record: populated || newRecord 
    });
  } catch (err) {
    res.status(500).json({ message: 'Error saving health record', error: err.message });
  }
};

// Update an existing health record (Accessible by Doctor or Nurse)
const updateHealthRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { diagnosis, notes } = req.body;

    if (!diagnosis || !notes) {
      return res.status(400).json({ message: 'Diagnosis and prescription notes are required for update' });
    }

    const record = await HealthRecord.findById(id);
    if (!record) {
      return res.status(404).json({ message: 'Health record not found' });
    }

    await HealthRecord.findByIdAndUpdate(id, {
      diagnosis,
      notes,
      updatedAt: new Date().toISOString()
    });

    const updated = await HealthRecord.findById(id)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization');

    res.status(200).json({
      message: 'Health record updated successfully',
      record: updated
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating health record', error: err.message });
  }
};

// Get health records (Patients view their own; Doctors & Nurses view all or query specific patient)
const getHealthRecords = async (req, res) => {
  try {
    let query = {};

    // If the logged-in user is a Patient, restrict them to their own records
    if (req.user.role === 'Patient') {
      query.user_id = req.user.id;
    } else if (req.query.user_id) {
      // Doctors and Nurses can query a specific patient's records using ?user_id=XYZ
      query.user_id = req.query.user_id;
    }

    const records = await HealthRecord.find(query)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization');

    res.status(200).json(records || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health records', error: err.message });
  }
};

// Get list of patients with accepted appointments for Doctor or Nurse
const getAcceptedPatients = async (req, res) => {
  try {
    let appointmentQuery = { status: 'Accepted' };

    if (req.user.role === 'Doctor') {
      let doctorDoc = await Doctor.findOne({ user_id: req.user.id });
      if (!doctorDoc) {
        doctorDoc = await Doctor.findOne({ name: req.user.name });
      }
      if (doctorDoc) {
        appointmentQuery.doctor_id = doctorDoc._id;
      }
    }

    const appointments = await Appointment.find(appointmentQuery)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization availability');

    const patientMap = new Map();
    for (const app of (appointments || [])) {
      const patient = app.user_id;
      if (patient && patient._id) {
        const pId = String(patient._id);
        if (!patientMap.has(pId)) {
          patientMap.set(pId, {
            _id: patient._id,
            name: patient.name,
            phone: patient.phone,
            language: patient.language,
            appointmentDate: app.date_time,
            appointmentId: app._id,
            doctor: app.doctor_id
          });
        }
      }
    }

    res.status(200).json(Array.from(patientMap.values()));
  } catch (err) {
    res.status(500).json({ message: 'Error fetching accepted patients', error: err.message });
  }
};

module.exports = { 
  createHealthRecord, 
  updateHealthRecord, 
  getHealthRecords,
  getAcceptedPatients 
};
