const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const doctorSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'User',
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  availability: {
    type: String,
    default: 'Mon - Fri (9:00 AM - 5:00 PM)'
  },
  centre_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'HealthCentre',
    default: null
  },
  hospital_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'HealthCentre',
    default: null
  },
  state: { type: String, default: '' },
  district: { type: String, default: '' },
  city: { type: String, default: '' },
  contact: { type: String, default: '' },
  isActive: { type: Boolean, default: true },
  profileCompleted: { type: Boolean, default: false }
}, { timestamps: true });

doctorSchema.index({ centre_id: 1 });
doctorSchema.index({ hospital_id: 1 });

const MongooseModel = mongoose.model('Doctor', doctorSchema);
module.exports = getModel('Doctor', MongooseModel);
