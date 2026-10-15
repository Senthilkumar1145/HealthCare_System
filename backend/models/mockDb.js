const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const supabase = require('../config/supabase');

const DATA_DIR_BACKEND = path.join(__dirname, '../data');
const DB_FILE_BACKEND = path.join(DATA_DIR_BACKEND, 'database.json');
const DATA_DIR_ROOT = path.resolve(__dirname, '../../data');
const DB_FILE_ROOT = path.join(DATA_DIR_ROOT, 'database.json');

const DATA_DIR = DATA_DIR_ROOT;
const DB_FILE = DB_FILE_ROOT;

// Pre-hashed password for demo users: "password123"
const hashedPassword = bcrypt.hashSync('password123', 10);

const defaultStore = {
  users: [
    {
      _id: 'user_doc_1',
      name: 'Dr. Sarah Jenkins',
      phone: '9876543210',
      password: hashedPassword,
      role: 'Doctor',
      language: 'en',
      centre_id: 'centre_1',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'user_patient_1',
      name: 'Ravi Kumar',
      phone: '9123456780',
      password: hashedPassword,
      role: 'Patient',
      language: 'en',
      createdAt: new Date().toISOString()
    }
  ],
  doctors: [
    {
      _id: 'doc_1',
      user_id: 'user_doc_1',
      name: 'Dr. Sarah Jenkins',
      specialization: 'General Physician',
      availability: 'Mon - Fri (9:00 AM - 2:00 PM)',
      centre_id: 'centre_1',
      createdAt: new Date().toISOString()
    }
  ],
  centres: [
    {
      _id: 'centre_1',
      name: 'Fortis Malar Hospital',
      state: 'Tamil Nadu',
      district: 'Chennai',
      city: 'Chennai',
      address: '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020',
      location: '52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020',
      type: 'Hospital',
      isActive: true,
      createdAt: new Date().toISOString()
    }
  ],
  appointments: [
    {
      _id: 'app_1',
      user_id: 'user_patient_1',
      doctor_id: 'doc_1',
      date_time: new Date(Date.now() + 86400000 * 2).toISOString(),
      status: 'Scheduled',
      createdAt: new Date().toISOString()
    }
  ],
  records: [
    {
      _id: 'rec_1',
      user_id: 'user_patient_1',
      diagnosis: 'Seasonal Viral Flu & Mild Cough',
      notes: 'Prescribed hydration, steam inhalation, and Paracetamol 500mg twice daily.',
      doctor_id: 'doc_1',
      createdAt: new Date().toISOString()
    }
  ],
  reminders: [
    {
      _id: 'rem_1',
      user_id: 'user_patient_1',
      medicine: 'Paracetamol 500mg',
      schedule: 'Morning & Night (After food)',
      createdAt: new Date().toISOString()
    }
  ],
  consultations: []
};

let currentStore = null;
let lastMtime = 0;

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR_BACKEND)) {
    fs.mkdirSync(DATA_DIR_BACKEND, { recursive: true });
  }
  if (!fs.existsSync(DATA_DIR_ROOT)) {
    fs.mkdirSync(DATA_DIR_ROOT, { recursive: true });
  }

  if (fs.existsSync(DB_FILE_ROOT) && !fs.existsSync(DB_FILE_BACKEND)) {
    fs.copyFileSync(DB_FILE_ROOT, DB_FILE_BACKEND);
  } else if (fs.existsSync(DB_FILE_BACKEND) && !fs.existsSync(DB_FILE_ROOT)) {
    fs.copyFileSync(DB_FILE_BACKEND, DB_FILE_ROOT);
  } else if (!fs.existsSync(DB_FILE_ROOT) && !fs.existsSync(DB_FILE_BACKEND)) {
    const initialContent = JSON.stringify(defaultStore, null, 2);
    fs.writeFileSync(DB_FILE_ROOT, initialContent, 'utf8');
    fs.writeFileSync(DB_FILE_BACKEND, initialContent, 'utf8');
  }

  try {
    if (fs.existsSync(DB_FILE_ROOT)) fs.chmodSync(DB_FILE_ROOT, 0o666);
    if (fs.existsSync(DB_FILE_BACKEND)) fs.chmodSync(DB_FILE_BACKEND, 0o666);
  } catch {}
}

// Table name mapping between mockDb collections and Supabase tables
const SUPABASE_TABLES = {
  users: 'users',
  doctors: 'doctors',
  centres: 'health_centres',
  appointments: 'appointments',
  records: 'health_records',
  reminders: 'reminders',
  consultations: 'consultations'
};

// 1. Initial Load: Fetch cloud data from Supabase into memory
async function loadFromSupabase() {
  if (!supabase) return;
  try {
    if (!currentStore) getStore();
    for (const [collection, table] of Object.entries(SUPABASE_TABLES)) {
      const { data, error } = await supabase.from(table).select('*');
      if (error) {
        continue;
      }
      if (data && data.length > 0) {
        currentStore[collection] = data.map(item => ({
          ...item,
          _id: item.id || item._id,
          isActive: item.is_active !== undefined ? item.is_active : item.isActive,
          profileCompleted: item.profile_completed !== undefined ? item.profile_completed : item.profileCompleted,
          medicine: item.medicine_name || item.medicine
        }));
      } else if (defaultStore[collection] && defaultStore[collection].length > 0) {
        // Auto-seed Supabase with initial demo data if table is currently empty
        for (const seedItem of defaultStore[collection]) {
          await syncItemToSupabase(collection, seedItem);
        }
      }
    }
    console.log('✅ Supabase cloud data synced into memory successfully');
  } catch (err) {
    console.warn('[Supabase Sync Error]', err.message);
  }
}

// 2. Real-Time Write: Save any inserted or updated item into Supabase
async function syncItemToSupabase(collectionName, item) {
  if (!supabase) return;
  try {
    const table = SUPABASE_TABLES[collectionName];
    if (!table) return;

    const payload = {
      ...item,
      id: item._id || item.id,
      is_active: item.isActive !== undefined ? item.isActive : item.is_active,
      profile_completed: item.profileCompleted !== undefined ? item.profileCompleted : item.profile_completed,
      medicine_name: item.medicine || item.medicine_name
    };
    delete payload._id;
    delete payload.isActive;
    delete payload.profileCompleted;
    delete payload.medicine;

    const { error } = await supabase.from(table).upsert(payload);
    if (error) {
      console.warn(`[Supabase Write Note on ${table}]:`, error.message);
    }
  } catch (err) {
    console.warn(`[Supabase Sync Exception on ${collectionName}]:`, err.message);
  }
}

// 3. Delete Sync: Remove item from Supabase when deleted
async function syncDeleteToSupabase(collectionName, id) {
  if (!supabase) return;
  try {
    const table = SUPABASE_TABLES[collectionName];
    if (!table) return;
    await supabase.from(table).delete().eq('id', id);
  } catch (err) {
    console.warn(`[Supabase Delete Exception on ${collectionName}]:`, err.message);
  }
}

// Dynamically retrieves and automatically syncs store from disk if modified
function getStore() {
  try {
    ensureDataFile();
    const targetFile = fs.existsSync(DB_FILE_ROOT) ? DB_FILE_ROOT : DB_FILE_BACKEND;
    const stat = fs.statSync(targetFile);
    if (!currentStore || stat.mtimeMs > lastMtime) {
      const content = fs.readFileSync(targetFile, 'utf8');
      const parsed = JSON.parse(content);
      currentStore = {
        users: Array.isArray(parsed.users) ? parsed.users : [],
        doctors: Array.isArray(parsed.doctors) ? parsed.doctors : [],
        centres: Array.isArray(parsed.centres) ? parsed.centres : [],
        appointments: Array.isArray(parsed.appointments) ? parsed.appointments : [],
        records: Array.isArray(parsed.records) ? parsed.records : [],
        reminders: Array.isArray(parsed.reminders) ? parsed.reminders : [],
        consultations: Array.isArray(parsed.consultations) ? parsed.consultations : []
      };
      lastMtime = stat.mtimeMs;
    }
  } catch (err) {
    console.warn('[mockDb] Could not read database.json, using current memory state:', err.message);
    if (!currentStore) currentStore = { ...defaultStore };
  }
  return currentStore;
}

function persistStore() {
  try {
    ensureDataFile();
    if (!currentStore) currentStore = getStore();
    const json = JSON.stringify(currentStore, null, 2);
    
    // Write atomically to both locations if running locally
    try {
      fs.writeFileSync(DB_FILE_ROOT, json, 'utf8');
      try { fs.chmodSync(DB_FILE_ROOT, 0o666); } catch {}
      fs.writeFileSync(DB_FILE_BACKEND, json, 'utf8');
      try { fs.chmodSync(DB_FILE_BACKEND, 0o666); } catch {}
      lastMtime = fs.statSync(DB_FILE_ROOT).mtimeMs;
    } catch {}
  } catch (err) {
    console.warn('[mockDb] Failed to persist database to file:', err.message);
  }
}

function reloadStore() {
  lastMtime = 0;
  return getStore();
}

// Initial local load and Supabase cloud sync
getStore();
loadFromSupabase();

function generateId(prefix = 'id') {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

class MockQuery {
  constructor(data, populateHandler) {
    this.data = data;
    this.populateHandler = populateHandler;
  }

  populate(path, select) {
    if (this.populateHandler) {
      if (Array.isArray(this.data)) {
        this.data = this.data.map(item => this.populateHandler(item, path, select));
      } else if (this.data) {
        this.data = this.populateHandler(this.data, path, select);
      }
    }
    return this;
  }

  then(resolve, reject) {
    return Promise.resolve(this.data).then(resolve, reject);
  }

  catch(reject) {
    return Promise.resolve(this.data).catch(reject);
  }
}

function matchesFilter(item, filter) {
  if (!filter || Object.keys(filter).length === 0) return true;
  for (const [key, val] of Object.entries(filter)) {
    if (val === undefined) continue;
    if (val instanceof RegExp) {
      if (!val.test(item[key] || '')) return false;
    } else if (typeof val === 'object' && val !== null && !(val instanceof Date)) {
      if (String(item[key]) !== String(val)) return false;
    } else {
      if (String(item[key]) !== String(val)) return false;
    }
  }
  return true;
}

function createMockModel(collectionName, entityName, populateFn) {
  function MockModel(data) {
    this._id = data._id || generateId(collectionName.slice(0, 3));
    Object.assign(this, data);
    this.createdAt = this.createdAt || new Date().toISOString();
    this.updatedAt = new Date().toISOString();
  }

  MockModel.prototype.save = async function() {
    const store = getStore();
    const collection = store[collectionName];
    const existingIndex = collection.findIndex(item => item._id === this._id);
    const plain = { ...this };
    if (existingIndex >= 0) {
      collection[existingIndex] = plain;
    } else {
      collection.push(plain);
    }
    persistStore();

    // Automatically sync insert/update to Supabase
    syncItemToSupabase(collectionName, plain);

    return plain;
  };

  MockModel.create = async function(data) {
    const instance = new MockModel(data);
    return await instance.save();
  };

  MockModel.find = function(filter = {}) {
    const store = getStore();
    const collection = store[collectionName] || [];
    const matched = collection
      .filter(item => matchesFilter(item, filter))
      .map(item => ({ ...item }));
    return new MockQuery(matched, populateFn);
  };

  MockModel.findOne = function(filter = {}) {
    const store = getStore();
    const collection = store[collectionName] || [];
    const found = collection.find(item => matchesFilter(item, filter));
    const result = found ? new MockModel(found) : null;
    return new MockQuery(result, populateFn);
  };

  MockModel.findById = function(id) {
    const store = getStore();
    const collection = store[collectionName] || [];
    const found = collection.find(item => String(item._id) === String(id));
    const result = found ? new MockModel(found) : null;
    return new MockQuery(result, populateFn);
  };

  MockModel.findByIdAndUpdate = async function(id, update = {}) {
    const store = getStore();
    const collection = store[collectionName] || [];
    const item = collection.find(i => String(i._id) === String(id));
    if (!item) return null;
    Object.assign(item, update, { updatedAt: new Date().toISOString() });
    persistStore();

    // Automatically sync update to Supabase
    syncItemToSupabase(collectionName, item);

    return { ...item };
  };

  MockModel.findByIdAndDelete = async function(id) {
    const store = getStore();
    const collection = store[collectionName] || [];
    const index = collection.findIndex(i => String(i._id) === String(id));
    if (index === -1) return null;
    const [removed] = collection.splice(index, 1);
    persistStore();

    // Automatically delete from Supabase
    syncDeleteToSupabase(collectionName, id);

    return removed;
  };

  return MockModel;
}

// Populate handlers
function populateUser(userId) {
  if (typeof userId === 'object' && userId !== null && userId._id) {
    return userId;
  }
  const store = getStore();
  const user = store.users.find(u => String(u._id) === String(userId));
  if (!user) return null;
  return {
    _id: user._id,
    name: user.name,
    phone: user.phone,
    language: user.language,
    role: user.role,
    centre_id: user.centre_id || null
  };
}

function populateHospital(centreId) {
  if (!centreId) return null;
  if (typeof centreId === 'object' && centreId !== null && centreId._id) return centreId;
  const store = getStore();
  const h = store.centres.find(c => String(c._id) === String(centreId));
  if (!h) return null;
  return {
    _id: h._id,
    name: h.name,
    location: h.location,
    address: h.address,
    city: h.city,
    state: h.state,
    district: h.district,
    phone: h.phone,
    type: h.type
  };
}

function populateDoctor(docId) {
  if (!docId) return null;
  const store = getStore();
  let doc = null;
  if (typeof docId === 'object' && docId !== null && docId._id) {
    doc = { ...docId };
  } else {
    const found = store.doctors.find(d => String(d._id) === String(docId));
    if (found) doc = { ...found };
  }
  if (!doc) return null;
  const hid = doc.hospital_id || doc.centre_id;
  let hospital = doc.hospital || null;
  if (!hospital && hid) {
    hospital = populateHospital(hid);
  }
  return {
    _id: doc._id,
    name: doc.name,
    specialization: doc.specialization,
    availability: doc.availability,
    centre_id: doc.centre_id || hid || null,
    hospital_id: hid || null,
    state: doc.state || '',
    district: doc.district || '',
    city: doc.city || '',
    hospital
  };
}

const mockModels = {
  User: createMockModel('users', 'User', (item) => item),
  Doctor: createMockModel('doctors', 'Doctor', (item, path) => {
    if (path === 'user_id' || (typeof path === 'object' && path.path === 'user_id')) {
      return { ...item, user_id: populateUser(item.user_id) };
    }
    return item;
  }),
  HealthCentre: createMockModel('centres', 'HealthCentre', (item) => item),
  Appointment: createMockModel('appointments', 'Appointment', (item, path) => {
    const pathStr = typeof path === 'object' ? path.path : path;
    const res = { ...item };
    if (pathStr === 'user_id') {
      res.user_id = populateUser(item.user_id);
    } else if (pathStr === 'doctor_id') {
      res.doctor_id = populateDoctor(item.doctor_id);
    }
    const hid = res.hospital_id || res.centre_id || (res.doctor_id && (res.doctor_id.hospital_id || res.doctor_id.centre_id));
    if (hid) {
      res.hospital = populateHospital(hid);
    }
    return res;
  }),
  HealthRecord: createMockModel('records', 'HealthRecord', (item, path) => {
    const pathStr = typeof path === 'object' ? path.path : path;
    const res = { ...item };
    if (pathStr === 'user_id') {
      res.user_id = populateUser(item.user_id);
    } else if (pathStr === 'doctor_id') {
      res.doctor_id = populateDoctor(item.doctor_id);
    }
    return res;
  }),
  MedicineReminder: createMockModel('reminders', 'MedicineReminder', (item, path) => {
    const pathStr = typeof path === 'object' ? path.path : path;
    const res = { ...item };
    if (pathStr === 'user_id') {
      res.user_id = populateUser(item.user_id);
    } else if (pathStr === 'doctor_id') {
      res.doctor_id = populateDoctor(item.doctor_id);
    }
    return res;
  }),
  Consultation: createMockModel('consultations', 'Consultation', (item, path) => {
    const pathStr = typeof path === 'object' ? path.path : path;
    const res = { ...item };
    if (pathStr === 'appointment_id') {
      const store = getStore();
      const app = store.appointments.find(a => String(a._id) === String(item.appointment_id));
      if (app) {
        res.appointment_id = {
          ...app,
          user_id: populateUser(app.user_id),
          doctor_id: populateDoctor(app.doctor_id)
        };
      }
    }
    return res;
  })
};

function getModel(name, MongooseModel) {
  return new Proxy(MongooseModel, {
    get(target, prop) {
      if (mongoose.connection && mongoose.connection.readyState === 1) {
        return target[prop];
      }
      const mock = mockModels[name];
      if (mock && prop in mock) {
        return mock[prop];
      }
      return target[prop];
    },
    construct(target, args) {
      if (mongoose.connection && mongoose.connection.readyState === 1) {
        return new target(...args);
      }
      const mock = mockModels[name];
      return new mock(...args);
    }
  });
}

module.exports = { getModel, getStore, reloadStore, persistStore, DB_FILE };
