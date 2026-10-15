const User = require('../models/User');
const Doctor = require('../models/Doctor');
const HealthCentre = require('../models/HealthCentre');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User (Patient, Doctor, Nurse)
const registerUser = async (req, res) => {
  try {
    const { 
      name, 
      phone, 
      language, 
      role, 
      password, 
      specialization, 
      availability, 
      centre_id, 
      hospital_id, 
      hospitalId,
      state: inputState,
      district: inputDistrict,
      city: inputCity
    } = req.body;
    const selectedHospId = hospital_id || hospitalId || centre_id || null;

    // Check if user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this phone number already exists.' });
    }

    if (role === 'Doctor' && !selectedHospId) {
      return res.status(400).json({ message: 'Please select your area location and hospital to complete Doctor registration.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user in the database
    const newUser = new User({
      name,
      phone,
      language: language || 'en',
      role: role || 'Patient',
      password: hashedPassword,
      centre_id: (role === 'Doctor' || role === 'Nurse') ? selectedHospId : null
    });

    await newUser.save();

    // If role is Doctor, also create Doctor profile in the Doctor collection
    let doctorProfile = null;
    let hospitalInfo = null;
    if (role === 'Doctor') {
      let state = inputState || '';
      let district = inputDistrict || '';
      let city = inputCity || '';
      if (selectedHospId) {
        try {
          const h = await HealthCentre.findById(selectedHospId);
          if (h) {
            state = state || h.state || '';
            district = district || h.district || '';
            city = city || h.city || '';
            hospitalInfo = {
              _id: h._id,
              name: h.name,
              location: h.location,
              address: h.address,
              city: h.city,
              state: h.state,
              district: h.district,
              phone: h.phone
            };
          }
        } catch (e) {}
      }

      doctorProfile = new Doctor({
        user_id: newUser._id,
        name: newUser.name,
        specialization: specialization || 'General Physician',
        availability: availability || 'Mon - Fri (9:00 AM - 5:00 PM)',
        centre_id: selectedHospId,
        hospital_id: selectedHospId,
        state,
        district,
        city,
        profileCompleted: !!selectedHospId
      });
      await doctorProfile.save();
      doctorProfile = { ...doctorProfile, hospital: hospitalInfo };
    }

    res.status(201).json({ 
      message: 'User registered successfully! Please login with your phone and password.', 
      userId: newUser._id,
      role: newUser.role,
      centre_id: newUser.centre_id,
      doctor: doctorProfile 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration', error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { phone, password, hospital_id, hospitalId, centre_id } = req.body;
    const selectedHospId = hospital_id || hospitalId || centre_id;

    // Find user by phone
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    let doctorProfile = null;
    let hospitalInfo = null;

    if (user.role === 'Doctor') {
      let doctor = await Doctor.findOne({ user_id: user._id });
      if (!doctor) {
        doctor = await Doctor.findOne({ name: user.name });
      }

      // If doctor selected a hospital during login, bind it immediately
      if (selectedHospId) {
        const h = await HealthCentre.findById(selectedHospId);
        if (h) {
          hospitalInfo = {
            _id: h._id,
            name: h.name,
            location: h.location,
            address: h.address,
            city: h.city,
            state: h.state,
            district: h.district,
            phone: h.phone
          };

          if (doctor) {
            doctor = await Doctor.findByIdAndUpdate(doctor._id, {
              hospital_id: selectedHospId,
              centre_id: selectedHospId,
              state: h.state || doctor.state || '',
              district: h.district || doctor.district || '',
              city: h.city || doctor.city || '',
              profileCompleted: true
            });
            doctor.hospital_id = selectedHospId;
            doctor.centre_id = selectedHospId;
            doctor.state = h.state || doctor.state || '';
            doctor.district = h.district || doctor.district || '';
            doctor.city = h.city || doctor.city || '';
            doctor.profileCompleted = true;
          } else {
            doctor = await Doctor.create({
              user_id: user._id,
              name: user.name,
              specialization: 'General Physician',
              availability: 'Mon - Fri (9:00 AM - 5:00 PM)',
              centre_id: selectedHospId,
              hospital_id: selectedHospId,
              state: h.state || '',
              district: h.district || '',
              city: h.city || '',
              profileCompleted: true
            });
          }

          await User.findByIdAndUpdate(user._id, { centre_id: selectedHospId });
          user.centre_id = selectedHospId;
        }
      }

      if (doctor) {
        const hid = doctor.hospital_id || doctor.centre_id;
        if (hid && !hospitalInfo) {
          try {
            const h = await HealthCentre.findById(hid);
            if (h) {
              hospitalInfo = {
                _id: h._id,
                name: h.name,
                location: h.location,
                address: h.address,
                city: h.city,
                state: h.state,
                district: h.district,
                phone: h.phone
              };
            }
          } catch (e) {}
        }
        doctorProfile = { ...doctor, hospital: hospitalInfo };
      }
    }

    // Create JWT Token
    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        language: user.language,
        centre_id: user.centre_id || (doctorProfile && (doctorProfile.hospital_id || doctorProfile.centre_id)) || null,
        hospital_id: (doctorProfile && (doctorProfile.hospital_id || doctorProfile.centre_id)) || user.centre_id || null,
        hospital: hospitalInfo || null
      },
      doctor: doctorProfile
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login', error: err.message });
  }
};

module.exports = { registerUser, loginUser };
