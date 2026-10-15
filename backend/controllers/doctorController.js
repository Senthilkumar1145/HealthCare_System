const Doctor = require('../models/Doctor');
const User = require('../models/User');
const HealthCentre = require('../models/HealthCentre');
const Appointment = require('../models/Appointment');

const getDoctors = async (req, res) => {
  try {
    const { specialization, centre_id, hospitalId, hospital_id, search, name } = req.query;
    const hospId = centre_id || hospitalId || hospital_id;

    let query = {};
    if (specialization) query.specialization = new RegExp(specialization, 'i');
    const searchTerm = search || name;
    if (searchTerm) query.name = new RegExp(searchTerm, 'i');

    let doctors = await Doctor.find(query).populate('user_id', 'name phone language');
    doctors = (Array.isArray(doctors) ? doctors : []).filter((d) => d.isActive !== false);
    if (hospId) {
      doctors = doctors.filter((d) => String(d.hospital_id || d.centre_id) === String(hospId));
    }
    // attach hospital info lazily
    const result = [];
    for (const d of doctors) {
      const doc = { ...d };
      const hid = d.hospital_id || d.centre_id;
      if (hid) {
        try {
          const h = await HealthCentre.findById(hid);
          if (h) {
            doc.hospital = { _id: h._id, name: h.name, location: h.location, address: h.address, city: h.city, state: h.state, district: h.district, phone: h.phone };
          }
        } catch (e) {}
      }
      result.push(doc);
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctors', error: err.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('user_id', 'name phone language');
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    const result = { ...doctor };
    const hid = doctor.hospital_id || doctor.centre_id;
    if (hid) {
      try {
        const h = await HealthCentre.findById(hid);
        if (h) result.hospital = { _id: h._id, name: h.name, location: h.location, address: h.address, city: h.city, state: h.state, district: h.district, phone: h.phone };
      } catch (e) {}
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctor', error: err.message });
  }
};

const createDoctorProfile = async (req, res) => {
  try {
    const { user_id, name, specialization, availability, centre_id, hospital_id, state, district, city, contact } = req.body;
    if (!user_id || !name || !specialization) {
      return res.status(400).json({ message: 'user_id, name and specialization are required' });
    }

    const existing = await Doctor.findOne({ user_id });
    if (existing) {
      return res.status(409).json({ message: 'Doctor profile already exists', doctor: existing });
    }

    const hospId = hospital_id || centre_id || null;
    if (hospId) {
      const h = await HealthCentre.findById(hospId);
      if (!h || h.isActive === false) return res.status(400).json({ message: 'Selected hospital not found or inactive' });
      if (state && h.state && state.toLowerCase() !== h.state.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected state' });
      }
      if (district && h.district && district.toLowerCase() !== h.district.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected district' });
      }
      if (city && h.city && city.toLowerCase() !== h.city.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected city' });
      }
    }

    const newDoctor = new Doctor({
      user_id,
      name,
      specialization,
      availability: availability || 'Mon - Fri (9:00 AM - 5:00 PM)',
      centre_id: hospId,
      hospital_id: hospId,
      state: state || '',
      district: district || '',
      city: city || '',
      contact: contact || '',
      profileCompleted: !!hospId,
      isActive: true
    });

    await newDoctor.save();
    res.status(201).json({ message: 'Doctor profile created successfully', doctor: newDoctor });
  } catch (err) {
    res.status(500).json({ message: 'Error creating doctor profile', error: err.message });
  }
};

const updateDoctorProfile = async (req, res) => {
  try {
    const { name, specialization, availability, hospitalId, hospital_id, centre_id, state, district, city, contact } = req.body;
    const userId = req.user.id;

    const hospId = hospitalId || hospital_id || centre_id || null;

    if (hospId) {
      const h = await HealthCentre.findById(hospId);
      if (!h || h.isActive === false) return res.status(400).json({ message: 'Selected hospital not found or inactive' });
      if (state && h.state && state.toLowerCase() !== h.state.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected state' });
      }
      if (district && h.district && district.toLowerCase() !== h.district.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected district' });
      }
      if (city && h.city && city.toLowerCase() !== h.city.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected city' });
      }
    }

    let doctor = await Doctor.findOne({ user_id: userId });

    if (!doctor) {
      const user = await User.findById(userId);
      doctor = await Doctor.create({
        user_id: userId,
        name: name || (user && user.name) || '',
        specialization: specialization || 'General Physician',
        availability: availability || 'Mon - Fri (9:00 AM - 5:00 PM)',
        centre_id: hospId,
        hospital_id: hospId,
        state: state || '',
        district: district || '',
        city: city || '',
        contact: contact || '',
        profileCompleted: !!hospId,
        isActive: true
      });
      return res.status(200).json({ message: 'Doctor profile updated successfully', doctor });
    }

    const update = {};
    if (name) update.name = name;
    if (specialization) update.specialization = specialization;
    if (availability) update.availability = availability;
    if (hospId) {
      update.centre_id = hospId;
      update.hospital_id = hospId;
    }
    if (state) update.state = state;
    if (district) update.district = district;
    if (city) update.city = city;
    if (contact) update.contact = contact;
    update.profileCompleted = !!(hospId || doctor.hospital_id || doctor.centre_id);

    const updated = await Doctor.findByIdAndUpdate(doctor._id, update, { new: true });
    res.status(200).json({ message: 'Doctor profile updated successfully', doctor: updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating doctor profile', error: err.message });
  }
};

const getMyDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ user_id: req.user.id });
    if (!doctor) return res.status(404).json({ message: 'Doctor profile not found' });
    const result = { ...doctor };
    const hid = doctor.hospital_id || doctor.centre_id;
    if (hid) {
      try {
        const h = await HealthCentre.findById(hid);
        if (h) result.hospital = { _id: h._id, name: h.name, location: h.location, address: h.address, city: h.city, state: h.state, district: h.district, phone: h.phone };
      } catch (e) {}
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctor profile', error: err.message });
  }
};

const getDoctorAvailability = async (req, res) => {
  try {
    const { doctorId, doctor_id, date } = req.query;
    const id = doctorId || doctor_id;
    if (!id || !date) return res.status(400).json({ message: 'doctorId and date are required' });
    const allBooked = await Appointment.find({ doctor_id: id });
    const start = new Date(`${date}T00:00:00`);
    const end = new Date(`${date}T23:59:59`);
    const booked = (Array.isArray(allBooked) ? allBooked : []).filter((a) => {
      const dt = new Date(a.date_time);
      return dt >= start && dt <= end;
    });
    const bookedSlots = booked.map((a) => {
      const d = new Date(a.date_time);
      return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    });
    res.status(200).json({ doctorId: id, date, bookedSlots });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching availability', error: err.message });
  }
};

module.exports = { getDoctors, getDoctorById, createDoctorProfile, updateDoctorProfile, getMyDoctorProfile, getDoctorAvailability };
