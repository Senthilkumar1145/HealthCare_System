const HealthCentre = require('../models/HealthCentre');

const getHealthCentres = async (req, res) => {
  try {
    const { type, location, city, state, district, name, search, active } = req.query;
    let query = {};

    if (active === 'false') {
      query.isActive = false;
    } else if (active === 'all') {
      // no filter
    } else {
      query.isActive = true;
    }

    if (type && type !== 'All') {
      query.type = type;
    }
    if (state && state !== 'All') {
      query.state = new RegExp(`^${state}$`, 'i');
    }
    if (district && district !== 'All') {
      query.district = new RegExp(`^${district}$`, 'i');
    }
    if (city && city !== 'All') {
      query.city = new RegExp(`^${city}$`, 'i');
    }
    if (location) {
      query.location = new RegExp(location, 'i');
    }
    const searchTerm = name || search;
    if (searchTerm) {
      query.name = new RegExp(searchTerm, 'i');
    }

    const centres = await HealthCentre.find(query);
    res.status(200).json(centres);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health centres', error: err.message });
  }
};

const getHealthCentreById = async (req, res) => {
  try {
    const centre = await HealthCentre.findById(req.params.id);
    if (!centre) return res.status(404).json({ message: 'Health centre not found' });
    res.status(200).json(centre);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health centre', error: err.message });
  }
};

const addHealthCentre = async (req, res) => {
  try {
    const { name, location, state, district, city, address, pincode, phone, type } = req.body;
    if (!name || !location || !type) {
      return res.status(400).json({ message: 'name, location and type are required' });
    }

    const existing = await HealthCentre.findOne({ name, address: address || location });
    if (existing) {
      return res.status(409).json({ message: 'Hospital already exists at this address', centre: existing });
    }

    const newCentre = new HealthCentre({
      name,
      state: state || '',
      district: district || '',
      city: city || '',
      address: address || location,
      location,
      pincode: pincode || '',
      phone: phone || '',
      type,
      isActive: true
    });

    await newCentre.save();
    res.status(201).json({ message: 'Health centre added successfully', centre: newCentre });
  } catch (err) {
    res.status(500).json({ message: 'Error adding health centre', error: err.message });
  }
};

module.exports = { getHealthCentres, getHealthCentreById, addHealthCentre };
