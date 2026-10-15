const mongoose = require('mongoose');
const { getModel } = require('./mockDb');

const medicineReminderSchema = new mongoose.Schema({
  user_id: { 
    type: mongoose.Schema.Types.Mixed, 
    ref: 'User', 
    required: true 
  },
  medicine: { 
    type: String, 
    required: true 
  },
  schedule: { 
    type: String, 
    required: true 
  },
  doctor_id: {
    type: mongoose.Schema.Types.Mixed,
    ref: 'Doctor',
    default: null
  }
}, { timestamps: true });

const MongooseModel = mongoose.model('MedicineReminder', medicineReminderSchema);
module.exports = getModel('MedicineReminder', MongooseModel);
