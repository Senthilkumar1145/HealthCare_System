const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['Patient', 'Doctor', 'Nurse'], default: 'Patient' },
  language: { type: String, default: 'en' },
  centre_id: { type: mongoose.Schema.Types.Mixed, ref: 'HealthCentre', default: null }
}, { timestamps: true });

const MongooseModel = mongoose.model('User', userSchema);
module.exports = getModel('User', MongooseModel);
