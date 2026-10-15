const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const consultationSchema = new mongoose.Schema({
  appointment_id: { 
    type: mongoose.Schema.Types.Mixed, 
    ref: 'Appointment', 
    required: true 
  },
  mode: { 
    type: String, 
    default: 'Audio' 
  },
  status: { 
    type: String, 
    enum: ['Pending', 'In-Progress', 'Finished'], 
    default: 'In-Progress' 
  }
}, { timestamps: true });

const MongooseModel = mongoose.model('Consultation', consultationSchema);
module.exports = getModel('Consultation', MongooseModel);
