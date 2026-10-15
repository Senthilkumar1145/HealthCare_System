const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const appointmentSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'User',
    required: true
  },
  doctor_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Doctor',
    required: true
  },
  hospital_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'HealthCentre',
    default: null
  },
  centre_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'HealthCentre',
    default: null
  },
  date_time: {
    type: Date,
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Scheduled', 'Accepted', 'Rejected', 'Completed', 'Cancelled'],
    default: 'Pending'
  }
}, { timestamps: true });

appointmentSchema.index({ doctor_id: 1, date_time: 1 }, { unique: true });

const MongooseModel = mongoose.model('Appointment', appointmentSchema);
module.exports = getModel('Appointment', MongooseModel);
