const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const HealthCentre = require('../models/HealthCentre');

const bookAppointment = async (req, res) => {
  try {
    const { doctor_id, date_time, hospital_id, hospitalId, centre_id } = req.body;
    const user_id = req.user.id;

    if (!doctor_id || !date_time) {
      return res.status(400).json({ message: 'doctor_id and date_time are required' });
    }

    const doctor = await Doctor.findById(doctor_id);
    if (!doctor || doctor.isActive === false) {
      return res.status(404).json({ message: 'Doctor not found or inactive' });
    }

    const doctorHospitalId = doctor.hospital_id || doctor.centre_id;
    const requestedHospitalId = hospital_id || hospitalId || centre_id || doctorHospitalId;
    if (!doctorHospitalId) {
      return res.status(400).json({ message: 'Doctor is not associated with a hospital' });
    }
    if (String(requestedHospitalId) !== String(doctorHospitalId)) {
      return res.status(400).json({ message: 'Selected doctor does not belong to the selected hospital' });
    }

    const hospital = await HealthCentre.findById(doctorHospitalId);
    if (!hospital || hospital.isActive === false) {
      return res.status(400).json({ message: 'Hospital is inactive or not found' });
    }

    const appointmentDate = new Date(date_time);
    if (isNaN(appointmentDate.getTime())) {
      return res.status(400).json({ message: 'Invalid date_time' });
    }
    if (appointmentDate < new Date()) {
      return res.status(400).json({ message: 'Cannot book an appointment in the past' });
    }

    // prevent duplicate/overlapping slot for same doctor
    const existing = await Appointment.findOne({ doctor_id, date_time: appointmentDate });
    if (existing) {
      return res.status(409).json({ message: 'This time slot is already booked' });
    }

    const newAppointment = new Appointment({
      user_id,
      doctor_id,
      hospital_id: doctorHospitalId,
      centre_id: doctorHospitalId,
      date_time: appointmentDate,
      status: 'Pending'
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully and sent for approval', appointment: newAppointment });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: 'This time slot is already booked' });
    }
    res.status(500).json({ message: 'Error booking appointment', error: err.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    let query = {};
    if (req.user && req.user.role === 'Patient') {
      query.user_id = req.user.id;
    } else if (req.user && req.user.role === 'Doctor') {
      let doctorDoc = await Doctor.findOne({ user_id: req.user.id });
      if (!doctorDoc) {
        doctorDoc = await Doctor.findOne({ name: req.user.name });
      }
      if (doctorDoc) {
        query.doctor_id = doctorDoc._id;
      }
    } else if (req.user && req.user.role === 'Nurse') {
      query = {};
    }

    const appointments = await Appointment.find(query)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization availability centre_id hospital_id');

    res.status(200).json(appointments || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['Pending', 'Scheduled', 'Accepted', 'Rejected', 'Completed', 'Cancelled'];
    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: `Invalid status '${status}'. Must be one of: ${allowedStatuses.join(', ')}`
      });
    }

    if (!req.user || !['Doctor', 'Nurse'].includes(req.user.role)) {
      return res.status(403).json({
        message: 'Permission denied. Only Doctors and Nurses can accept or reject appointments.'
      });
    }

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const updated = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    const populated = await Appointment.findById(id)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization availability');

    res.status(200).json({
      message: `Appointment ${status.toLowerCase()} successfully`,
      appointment: populated || updated
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating appointment status', error: err.message });
  }
};

const acceptAppointment = async (req, res) => {
  req.body.status = 'Accepted';
  return updateAppointmentStatus(req, res);
};

const rejectAppointment = async (req, res) => {
  req.body.status = 'Rejected';
  return updateAppointmentStatus(req, res);
};

module.exports = {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus,
  acceptAppointment,
  rejectAppointment
};
