const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const healthRecordSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.Mixed, 
    ref: 'User', 
    required: true 
  },
  diagnosis: { 
    type: String, 
    required: true 
  },
  notes: { 
    type: String, 
    required: true 
  },
  doctor_id: { 
    type: mongoose.Schema.Types.Mixed, 
    ref: 'Doctor' 
  }
}, { timestamps: true });

const MongooseModel = mongoose.model('HealthRecord', healthRecordSchema);
module.exports = getModel('HealthRecord', MongooseModel);
