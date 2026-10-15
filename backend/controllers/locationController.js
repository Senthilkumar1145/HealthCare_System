const HealthCentre = require('../models/HealthCentre');

const getStates = async (req, res) => {
  try {
    const all = await HealthCentre.find({});
    const centres = Array.isArray(all) ? all.filter((c) => c.isActive !== false) : [];
    const states = [...new Set(centres.map((c) => c.state).filter(Boolean))].sort();
    res.status(200).json(states);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching states', error: err.message });
  }
};

const getDistricts = async (req, res) => {
  try {
    const { state } = req.query;
    if (!state) return res.status(400).json({ message: 'state is required' });
    const all = await HealthCentre.find({ state });
    const centres = Array.isArray(all) ? all.filter((c) => c.isActive !== false) : [];
    const districts = [...new Set(centres.map((c) => c.district).filter(Boolean))].sort();
    res.status(200).json(districts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching districts', error: err.message });
  }
};

const getCities = async (req, res) => {
  try {
    const { state, district } = req.query;
    if (!state || !district) return res.status(400).json({ message: 'state and district are required' });
    const all = await HealthCentre.find({ state, district });
    const centres = Array.isArray(all) ? all.filter((c) => c.isActive !== false) : [];
    const cities = [...new Set(centres.map((c) => c.city).filter(Boolean))].sort();
    res.status(200).json(cities);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching cities', error: err.message });
  }
};

module.exports = { getStates, getDistricts, getCities };
