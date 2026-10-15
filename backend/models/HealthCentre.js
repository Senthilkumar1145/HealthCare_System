const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const healthCentreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  state: {
    type: String,
    default: ''
  },
  district: {
    type: String,
    default: ''
  },
  city: {
    type: String,
    default: 'Chennai'
  },
  address: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    required: true
  },
  pincode: {
    type: String,
    default: ''
  },
  phone: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    enum: ['Hospital', 'Clinic', 'Pharmacy'],
    required: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

healthCentreSchema.index({ state: 1, district: 1, city: 1, isActive: 1 });
healthCentreSchema.index({ name: 1, address: 1 }, { unique: true, sparse: true });

const MongooseModel = mongoose.model('HealthCentre', healthCentreSchema);
module.exports = getModel('HealthCentre', MongooseModel);
