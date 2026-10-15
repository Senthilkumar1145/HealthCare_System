# HealthCare System - Complete Project Codebase

> Comprehensive, single-file codebase documentation of the complete **Rural Healthcare & Telemedicine System**.
> Generated from the repository source code.

---

## 1. System Overview & Architecture

The **HealthCare System** is a full-stack, offline-capable digital healthcare platform tailored for rural and semi-urban communities. It bridges the gap between rural patients, local health centres, and remote specialized medical practitioners.

### Key Modules & Capabilities:
- **Multi-Role Authentication**: Secure JWT-based authentication for Patients, Doctors, and Administrators.
- **Telemedicine & Virtual Consultations**: In-browser real-time video/audio calling room with WebRTC peer connections, interactive chat, vitals recording, and prescription generation.
- **Appointment Scheduling**: Real-time slot booking for hospital visits and digital consultations.
- **Health Centre & Location Services**: Geographic location-based mapping of primary health centres, emergency contacts, ambulance tracking, and offline cache.
- **Multilingual Localization**: Broad Indian language support (English, Hindi, Bengali, Tamil, Telugu, Marathi, Kannada, Gujarati, Malayalam, Punjabi, Odia) powered by dynamic translation dictionaries.
- **Medicine Reminders & Digital Health Records**: Prescription tracking, dosage alarms, and centralized health record vaults.
- **Offline-First Mock Database**: Resilient file-backed JSON database engine (`mockDb.js`) supporting CRUD operations without requiring external database servers.

---

## 2. Technology Stack

| Component | Technology | Description |
|---|---|---|
| **Backend Runtime** | Node.js / Express.js | RESTful API server with modular controllers and routers |
| **Authentication** | JWT (jsonwebtoken) + bcryptjs | Token-based auth and secure password hashing |
| **Data Persistence** | File-backed JSON DB (`database.json`) | Lightweight, self-contained persistence engine |
| **Frontend Framework** | React 18 + Vite | High-performance SPA with client-side routing and state management |
| **Styling** | Vanilla CSS + CSS Modules | Custom responsive design with mobile-first layouts |
| **Telemedicine** | WebRTC + WebSocket / Polling | Peer-to-peer audio/video streaming room |

---

## 3. Getting Started & Installation

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun package manager

### Quick Start
```bash
# 1. Install Backend Dependencies
cd healthCareSystem-main/backend
npm install

# 2. Start Backend Server (runs on http://localhost:5000)
npm run dev

# 3. Install Frontend Dependencies (in another terminal)
cd ../frontend
npm install

# 4. Start Frontend Development Server (runs on http://localhost:5173)
npm run dev
```

---

## 4. Table of Contents & File Index

### 4.1. Root Configuration & Server Files
- [package.json](#file-packagejson)
- [metadata.json](#file-metadatajson)
- [.env](#file-env)
- [.env.example](#file-envexample)
- [server.js](#file-serverjs)

### 4.2. Backend - Server & Middleware
- [backend/package.json](#file-backend-packagejson)
- [backend/server.js](#file-backend-serverjs)
- [backend/middleware/authMiddleware.js](#file-backend-middleware-authmiddlewarejs)

### 4.3. Backend - Models & Database Mock
- [backend/models/mockDb.js](#file-backend-models-mockdbjs)
- [backend/models/User.js](#file-backend-models-userjs)
- [backend/models/Doctor.js](#file-backend-models-doctorjs)
- [backend/models/HealthCentre.js](#file-backend-models-healthcentrejs)
- [backend/models/Appointment.js](#file-backend-models-appointmentjs)
- [backend/models/Consultation.js](#file-backend-models-consultationjs)
- [backend/models/HealthRecord.js](#file-backend-models-healthrecordjs)
- [backend/models/MedicineReminder.js](#file-backend-models-medicinereminderjs)

### 4.4. Backend - Controllers
- [backend/controllers/authController.js](#file-backend-controllers-authcontrollerjs)
- [backend/controllers/doctorController.js](#file-backend-controllers-doctorcontrollerjs)
- [backend/controllers/centreController.js](#file-backend-controllers-centrecontrollerjs)
- [backend/controllers/appointmentController.js](#file-backend-controllers-appointmentcontrollerjs)
- [backend/controllers/consultationController.js](#file-backend-controllers-consultationcontrollerjs)
- [backend/controllers/recordController.js](#file-backend-controllers-recordcontrollerjs)
- [backend/controllers/reminderController.js](#file-backend-controllers-remindercontrollerjs)
- [backend/controllers/locationController.js](#file-backend-controllers-locationcontrollerjs)

### 4.5. Backend - Routes
- [backend/routes/authRoutes.js](#file-backend-routes-authroutesjs)
- [backend/routes/doctorRoutes.js](#file-backend-routes-doctorroutesjs)
- [backend/routes/centreRoutes.js](#file-backend-routes-centreroutesjs)
- [backend/routes/appointmentRoutes.js](#file-backend-routes-appointmentroutesjs)
- [backend/routes/consultationRoutes.js](#file-backend-routes-consultationroutesjs)
- [backend/routes/recordRoutes.js](#file-backend-routes-recordroutesjs)
- [backend/routes/reminderRoutes.js](#file-backend-routes-reminderroutesjs)
- [backend/routes/locationRoutes.js](#file-backend-routes-locationroutesjs)

### 4.6. Database Seed / Store
- [backend/data/database.json](#file-backend-data-databasejson)
- [data/database.json](#file-data-databasejson)

### 4.7. Frontend - Configuration & Entry
- [frontend/package.json](#file-frontend-packagejson)
- [frontend/vite.config.js](#file-frontend-viteconfigjs)
- [frontend/index.html](#file-frontend-indexhtml)
- [frontend/.oxlintrc.json](#file-frontend-oxlintrcjson)
- [frontend/.gitignore](#file-frontend-gitignore)
- [frontend/README.md](#file-frontend-readmemd)
- [frontend/src/main.jsx](#file-frontend-src-mainjsx)
- [frontend/src/index.css](#file-frontend-src-indexcss)
- [frontend/src/App.css](#file-frontend-src-appcss)

### 4.8. Frontend - Services, Internationalization & Core App
- [frontend/src/services/api.js](#file-frontend-src-services-apijs)
- [frontend/src/i18n/translations.js](#file-frontend-src-i18n-translationsjs)
- [frontend/src/App.jsx](#file-frontend-src-appjsx)

### 4.9. Frontend - Pages
- [frontend/src/pages/Login.jsx](#file-frontend-src-pages-loginjsx)
- [frontend/src/pages/Dashboard.jsx](#file-frontend-src-pages-dashboardjsx)

### 4.10. Frontend - Components
- [frontend/src/components/DoctorProfileOnboarding.jsx](#file-frontend-src-components-doctorprofileonboardingjsx)
- [frontend/src/components/HamburgerButton.jsx](#file-frontend-src-components-hamburgerbuttonjsx)
- [frontend/src/components/LanguageDrawer.jsx](#file-frontend-src-components-languagedrawerjsx)
- [frontend/src/components/LocationBooking.jsx](#file-frontend-src-components-locationbookingjsx)
- [frontend/src/components/TelemedicineRoom.jsx](#file-frontend-src-components-telemedicineroomjsx)

### 4.11. Frontend - Static Assets & SVGs
- [frontend/public/favicon.svg](#file-frontend-public-faviconsvg)
- [frontend/public/icons.svg](#file-frontend-public-iconssvg)
- [frontend/src/assets/react.svg](#file-frontend-src-assets-reactsvg)
- [frontend/src/assets/vite.svg](#file-frontend-src-assets-vitesvg)
- [frontend/src/assets/hero.png](#file-frontend-src-assets-heropng)

---

## 5. Source Code & Configuration Files

## Root Configuration & Server Files

<a id="file-packagejson"></a>
### File: `package.json`
**Path:** `healthCareSystem-main/package.json`  
**Size:** 721 bytes  

```json
{
  "name": "rural-health-care-system",
  "version": "1.0.0",
  "private": true,
  "type": "commonjs",
  "scripts": {
    "dev": "node server.js",
    "build": "vite build frontend",
    "lint": "oxlint frontend/src",
    "start": "node server.js"
  },
  "dependencies": {
    "axios": "^1.7.9",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.4.7",
    "express": "^4.21.2",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.9.5",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^7.1.5"
  },
  "devDependencies": {
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "@vitejs/plugin-react": "^4.3.4",
    "oxlint": "^0.15.11",
    "vite": "^6.0.7"
  }
}
```

---

<a id="file-metadatajson"></a>
### File: `metadata.json`
**Path:** `healthCareSystem-main/metadata.json`  
**Size:** 319 bytes  

```json
{
  "name": "Rural Health Care System",
  "description": "Digital healthcare platform for rural communities providing appointment scheduling, telemedicine, electronic health records, medicine reminders, and nearby healthcare centre directories.",
  "capabilities": [
    "MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"
  ]
}
```

---

<a id="file-env"></a>
### File: `.env`
**Path:** `healthCareSystem-main/.env`  
**Size:** 40 bytes  

```ini
JWT_SECRET=supersecrethealthcarekey2026
```

---

<a id="file-envexample"></a>
### File: `.env.example`
**Path:** `healthCareSystem-main/.env.example`  
**Size:** 142 bytes  

```ini
# JWT Secret Key for user authentication tokens
JWT_SECRET=supersecrethealthcarekey2026

MONGO_URI=mongodb://localhost:27017/rural_healthcare
```

---

<a id="file-serverjs"></a>
### File: `server.js`
**Path:** `healthCareSystem-main/server.js`  
**Size:** 11,802 bytes  

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config({ override: true });

// Ensure fallback JWT secret if not configured in environment
process.env.JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-healthcare-jwt-key-2026';

const app = express();

// Core Middleware
app.use(express.json());
app.use(cors());

// Import Backend Routes
const authRoutes = require('./backend/routes/authRoutes');
const doctorRoutes = require('./backend/routes/doctorRoutes');
const appointmentRoutes = require('./backend/routes/appointmentRoutes');
const consultationRoutes = require('./backend/routes/consultationRoutes');
const recordRoutes = require('./backend/routes/recordRoutes');
const reminderRoutes = require('./backend/routes/reminderRoutes');
const centreRoutes = require('./backend/routes/centreRoutes');
const locationRoutes = require('./backend/routes/locationRoutes');
const { getStore, reloadStore, DB_FILE } = require('./backend/models/mockDb');
const fs = require('fs');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/records', recordRoutes);
app.use('/api/reminders', reminderRoutes);
app.use('/api/centres', centreRoutes);
app.use('/api/hospitals', centreRoutes);
app.use('/api/locations', locationRoutes);

// Health check and database status API
app.get('/api/health', (req, res) => {
  const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;
  res.json({
    status: 'ok',
    database: isMongoConnected ? 'mongodb-connected' : 'persistent-file-store',
    dbName: isMongoConnected ? mongoose.connection.name : 'database.json',
    host: isMongoConnected ? mongoose.connection.host : 'local',
    message: isMongoConnected 
      ? `Connected directly to MongoDB (${mongoose.connection.name}) — Compass Ready!` 
      : 'Using persistent disk-backed database (database.json). Enter MongoDB URI to save to MongoDB Compass.',
    timestamp: new Date().toISOString()
  });
});

// Helper: Migrate existing JSON data to MongoDB
async function migrateJsonToMongo() {
  try {
    const store = getStore();
    const User = require('./backend/models/User');
    const Doctor = require('./backend/models/Doctor');
    const HealthCentre = require('./backend/models/HealthCentre');
    const Appointment = require('./backend/models/Appointment');
    const HealthRecord = require('./backend/models/HealthRecord');
    const MedicineReminder = require('./backend/models/MedicineReminder');

    if (store.users && store.users.length > 0) {
      for (const u of store.users) {
        const exists = await User.findOne({ phone: u.phone });
        if (!exists) {
          await User.create(u);
        }
      }
    }
    if (store.doctors && store.doctors.length > 0) {
      for (const d of store.doctors) {
        const exists = await Doctor.findOne({ name: d.name });
        if (!exists) {
          await Doctor.create(d);
        }
      }
    }
    if (store.centres && store.centres.length > 0) {
      for (const c of store.centres) {
        const exists = await HealthCentre.findOne({ name: c.name });
        if (!exists) {
          await HealthCentre.create(c);
        }
      }
    }
    if (store.appointments && store.appointments.length > 0) {
      for (const a of store.appointments) {
        const exists = await Appointment.findOne({ date_time: a.date_time, user_id: a.user_id });
        if (!exists) {
          await Appointment.create(a);
        }
      }
    }
    if (store.records && store.records.length > 0) {
      for (const r of store.records) {
        const exists = await HealthRecord.findOne({ diagnosis: r.diagnosis, user_id: r.user_id });
        if (!exists) {
          await HealthRecord.create(r);
        }
      }
    }
    if (store.reminders && store.reminders.length > 0) {
      for (const m of store.reminders) {
        const exists = await MedicineReminder.findOne({ medicine: m.medicine, user_id: m.user_id });
        if (!exists) {
          await MedicineReminder.create(m);
        }
      }
    }
    console.log('[Migration] Database records migrated to MongoDB successfully!');
  } catch (err) {
    console.warn('[Migration] Error during JSON to Mongo migration:', err.message);
  }
}

// Connect dynamically to external MongoDB (Atlas / Compass)
app.post('/api/database/connect-mongo', async (req, res) => {
  const { mongoUri } = req.body;
  if (!mongoUri || (!mongoUri.startsWith('mongodb://') && !mongoUri.startsWith('mongodb+srv://'))) {
    return res.status(400).json({ error: 'Please enter a valid MongoDB URI starting with mongodb:// or mongodb+srv://' });
  }

  try {
    if (mongoose.connection && mongoose.connection.readyState !== 0) {
      await mongoose.disconnect();
    }
    await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 8000 });

    // Save to .env
    const envPath = path.join(__dirname, '.env');
    let envContent = fs.existsSync(envPath) ? fs.readFileSync(envPath, 'utf8') : '';
    if (envContent.includes('MONGO_URI=')) {
      envContent = envContent.replace(/MONGO_URI=.*(\r?\n|$)/, `MONGO_URI=${mongoUri}$1`);
    } else {
      envContent += `\nMONGO_URI=${mongoUri}\n`;
    }
    fs.writeFileSync(envPath, envContent, 'utf8');

    // Migrate any data from database.json to MongoDB
    await migrateJsonToMongo();

    res.json({
      success: true,
      message: `Connected successfully to MongoDB! You can now open MongoDB Compass and connect to the same URI.`,
      host: mongoose.connection.host,
      database: mongoose.connection.name
    });
  } catch (err) {
    console.error('Failed to connect to MongoDB:', err.message);
    res.status(500).json({ error: `Connection failed: ${err.message}` });
  }
});

// Live Database State & Sync API
app.get('/api/database', async (req, res) => {
  try {
    const isMongoConnected = mongoose.connection && mongoose.connection.readyState === 1;
    let counts = { users: 0, doctors: 0, appointments: 0, centres: 0, records: 0, reminders: 0 };
    let data = null;

    if (isMongoConnected) {
      const User = require('./backend/models/User');
      const Doctor = require('./backend/models/Doctor');
      const Appointment = require('./backend/models/Appointment');
      const HealthCentre = require('./backend/models/HealthCentre');
      const HealthRecord = require('./backend/models/HealthRecord');
      const MedicineReminder = require('./backend/models/MedicineReminder');

      const [users, doctors, appointments, centres, records, reminders] = await Promise.all([
        User.find(),
        Doctor.find(),
        Appointment.find(),
        HealthCentre.find(),
        HealthRecord.find(),
        MedicineReminder.find()
      ]);

      counts = {
        users: users.length,
        doctors: doctors.length,
        appointments: appointments.length,
        centres: centres.length,
        records: records.length,
        reminders: reminders.length
      };

      data = { users, doctors, appointments, centres, records, reminders };

      res.json({
        success: true,
        source: 'mongodb',
        host: mongoose.connection.host,
        dbName: mongoose.connection.name,
        lastModified: new Date(),
        counts,
        data
      });
    } else {
      const store = getStore();
      const stat = fs.existsSync(DB_FILE) ? fs.statSync(DB_FILE) : null;
      res.json({
        success: true,
        source: 'file',
        filePath: 'backend/data/database.json',
        lastModified: stat ? stat.mtime : new Date(),
        counts: {
          users: store.users?.length || 0,
          doctors: store.doctors?.length || 0,
          appointments: store.appointments?.length || 0,
          centres: store.centres?.length || 0,
          records: store.records?.length || 0,
          reminders: store.reminders?.length || 0
        },
        data: store
      });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/database/reload', (req, res) => {
  try {
    const store = reloadStore();
    res.json({
      success: true,
      message: 'Database reloaded successfully',
      counts: {
        users: store.users?.length || 0,
        doctors: store.doctors?.length || 0,
        appointments: store.appointments?.length || 0,
        centres: store.centres?.length || 0,
        records: store.records?.length || 0,
        reminders: store.reminders?.length || 0
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Explicit download / direct access endpoints for database.json
app.get(['/data/database.json', '/backend/data/database.json', '/api/database/download'], (req, res) => {
  const rootPath = path.join(__dirname, 'data/database.json');
  const backendPath = path.join(__dirname, 'backend/data/database.json');
  const targetPath = fs.existsSync(rootPath) ? rootPath : backendPath;

  if (!fs.existsSync(targetPath)) {
    return res.status(404).json({ error: 'Database file not found' });
  }

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.sendFile(targetPath);
});

// Database Connection Handling
mongoose.set('bufferCommands', false);
const mongoUri = process.env.MONGO_URI || process.env.MONGODB_URI;

if (mongoUri && (mongoUri.startsWith('mongodb://') || mongoUri.startsWith('mongodb+srv://')) && !mongoUri.includes('<username>')) {
  mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 2000 })
    .then(() => console.log('MongoDB Connected Successfully to:', mongoUri.split('@').pop()))
    .catch((err) => {
      console.warn(`MongoDB not accessible (${err.message}) — using persistent file-based database`);
    });
} else {
  console.log('Using persistent file-based database (backend/data/database.json)');
}

// Error middleware for handling Mongoose connection drops gracefully
app.use((err, req, res, next) => {
  if (err.name === 'MongooseError' || err.name === 'MongoNetworkError' || (err.message && err.message.includes('buffering timed out'))) {
    console.warn('[AI Studio] Database offline — returning fallback response');
    if (req.method === 'GET') {
      return res.json(req.path.endsWith('s') || req.path.endsWith('s/') ? [] : {});
    }
    return res.status(503).json({ error: 'Service temporarily unavailable (database offline)' });
  }
  next(err);
});

const PORT = 3000;
const HOST = '0.0.0.0';

async function startServer() {
  if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, 'frontend/dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    try {
      const { createServer: createViteServer } = await import('vite');
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: 'spa',
        root: path.join(__dirname, 'frontend')
      });
      app.use(vite.middlewares);
    } catch (viteErr) {
      console.warn('Vite middleware could not be loaded, falling back to static files:', viteErr.message);
      const distPath = path.join(__dirname, 'frontend/dist');
      app.use(express.static(distPath));
      app.get('*', (req, res) => {
        res.sendFile(path.join(distPath, 'index.html'));
      });
    }
  }

  app.listen(PORT, HOST, () => {
    console.log(`Rural Health Care System running on http://localhost:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
```

---

## Backend - Server & Middleware

<a id="file-backend-packagejson"></a>
### File: `backend/package.json`
**Path:** `healthCareSystem-main/backend/package.json`  
**Size:** 538 bytes  

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
    "bcryptjs": "^3.0.3",
    "cors": "^2.8.6",
    "dotenv": "^18.0.3",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.3",
    "mongoose": "^9.10.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
}
```

---

<a id="file-backend-serverjs"></a>
### File: `backend/server.js`
**Path:** `healthCareSystem-main/backend/server.js`  
**Size:** 1,831 bytes  

```javascript
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const { bookAppointment, getAppointments } = require('./controllers/appointmentController');
const { verifyToken } = require('./middleware/authMiddleware');
// Import Routes
const authRoutes = require('./routes/authRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');


// Import Consultation Routes
const consultationRoutes = require('./routes/consultationRoutes');

// Import Health Record Routes
const recordRoutes = require('./routes/recordRoutes');

// Import Reminder Routes
const reminderRoutes = require('./routes/reminderRoutes');

// Import Health Centre Routes
const centreRoutes = require('./routes/centreRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Temporary inline route test for appointments

// API Routes

app.use('/api/auth', authRoutes);
app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);
//app.use('/api/appointments', appointmentRoutes);

// Register under API routes
app.use('/api/consultations', consultationRoutes);

// Register under API routes
app.use('/api/records', recordRoutes);

// Register under API routes
app.use('/api/reminders', reminderRoutes);

app.use('/api/centres', centreRoutes);


// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected Successfully'))
.catch((err) => console.log('Database connection error: ', err));

// Test Route
app.get('/', (req, res) => {
  res.send('Rural Health Care System API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

---

<a id="file-backend-middleware-authmiddlewarejs"></a>
### File: `backend/middleware/authMiddleware.js`
**Path:** `healthCareSystem-main/backend/middleware/authMiddleware.js`  
**Size:** 1,417 bytes  

```javascript
const jwt = require('jsonwebtoken');

// Verify Token and Attach User to Request
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Contains id, role, etc.
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }
};

// Optional token extractor for public endpoints that may provide customized data for logged in users
const optionalToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];
    try {
      req.user = jwt.verify(token, process.env.JWT_SECRET);
    } catch (_) {}
  }
  next();
};

// Role-Based Access Control Middleware
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ 
        message: `Access forbidden: Role '${req.user ? req.user.role : 'Unknown'}' is not authorized.` 
      });
    }
    next();
  };
};

module.exports = { verifyToken, optionalToken, authorizeRoles };
```

---

## Backend - Models & Database Mock

<a id="file-backend-models-mockdbjs"></a>
### File: `backend/models/mockDb.js`
**Path:** `healthCareSystem-main/backend/models/mockDb.js`  
**Size:** 13,918 bytes  

```javascript
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

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
  // Ensure both data directories exist
  if (!fs.existsSync(DATA_DIR_BACKEND)) {
    fs.mkdirSync(DATA_DIR_BACKEND, { recursive: true });
  }
  if (!fs.existsSync(DATA_DIR_ROOT)) {
    fs.mkdirSync(DATA_DIR_ROOT, { recursive: true });
  }

  // If one exists, copy to the other; if neither exists, create both
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
    
    // Write atomically to both locations
    fs.writeFileSync(DB_FILE_ROOT, json, 'utf8');
    try { fs.chmodSync(DB_FILE_ROOT, 0o666); } catch {}

    fs.writeFileSync(DB_FILE_BACKEND, json, 'utf8');
    try { fs.chmodSync(DB_FILE_BACKEND, 0o666); } catch {}

    lastMtime = fs.statSync(DB_FILE_ROOT).mtimeMs;
  } catch (err) {
    console.warn('[mockDb] Failed to persist database to file:', err.message);
  }
}

function reloadStore() {
  lastMtime = 0;
  return getStore();
}

// Initial load
getStore();

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
    return { ...item };
  };

  MockModel.findByIdAndDelete = async function(id) {
    const store = getStore();
    const collection = store[collectionName] || [];
    const index = collection.findIndex(i => String(i._id) === String(id));
    if (index === -1) return null;
    const [removed] = collection.splice(index, 1);
    persistStore();
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
```

---

<a id="file-backend-models-userjs"></a>
### File: `backend/models/User.js`
**Path:** `healthCareSystem-main/backend/models/User.js`  
**Size:** 618 bytes  

```javascript
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
```

---

<a id="file-backend-models-doctorjs"></a>
### File: `backend/models/Doctor.js`
**Path:** `healthCareSystem-main/backend/models/Doctor.js`  
**Size:** 1,125 bytes  

```javascript
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
```

---

<a id="file-backend-models-healthcentrejs"></a>
### File: `backend/models/HealthCentre.js`
**Path:** `healthCareSystem-main/backend/models/HealthCentre.js`  
**Size:** 1,022 bytes  

```javascript
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
```

---

<a id="file-backend-models-appointmentjs"></a>
### File: `backend/models/Appointment.js`
**Path:** `healthCareSystem-main/backend/models/Appointment.js`  
**Size:** 955 bytes  

```javascript
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
```

---

<a id="file-backend-models-consultationjs"></a>
### File: `backend/models/Consultation.js`
**Path:** `healthCareSystem-main/backend/models/Consultation.js`  
**Size:** 572 bytes  

```javascript
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
```

---

<a id="file-backend-models-healthrecordjs"></a>
### File: `backend/models/HealthRecord.js`
**Path:** `healthCareSystem-main/backend/models/HealthRecord.js`  
**Size:** 581 bytes  

```javascript
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
```

---

<a id="file-backend-models-medicinereminderjs"></a>
### File: `backend/models/MedicineReminder.js`
**Path:** `healthCareSystem-main/backend/models/MedicineReminder.js`  
**Size:** 615 bytes  

```javascript
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
```

---

## Backend - Controllers

<a id="file-backend-controllers-authcontrollerjs"></a>
### File: `backend/controllers/authController.js`
**Path:** `healthCareSystem-main/backend/controllers/authController.js`  
**Size:** 7,402 bytes  

```javascript
const User = require('../models/User');
const Doctor = require('../models/Doctor');
const HealthCentre = require('../models/HealthCentre');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register User (Patient, Doctor, Nurse)
const registerUser = async (req, res) => {
  try {
    const { 
      name, 
      phone, 
      language, 
      role, 
      password, 
      specialization, 
      availability, 
      centre_id, 
      hospital_id, 
      hospitalId,
      state: inputState,
      district: inputDistrict,
      city: inputCity
    } = req.body;
    const selectedHospId = hospital_id || hospitalId || centre_id || null;

    // Check if user already exists
    const existingUser = await User.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this phone number already exists.' });
    }

    if (role === 'Doctor' && !selectedHospId) {
      return res.status(400).json({ message: 'Please select your area location and hospital to complete Doctor registration.' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user in the database
    const newUser = new User({
      name,
      phone,
      language: language || 'en',
      role: role || 'Patient',
      password: hashedPassword,
      centre_id: (role === 'Doctor' || role === 'Nurse') ? selectedHospId : null
    });

    await newUser.save();

    // If role is Doctor, also create Doctor profile in the Doctor collection
    let doctorProfile = null;
    let hospitalInfo = null;
    if (role === 'Doctor') {
      let state = inputState || '';
      let district = inputDistrict || '';
      let city = inputCity || '';
      if (selectedHospId) {
        try {
          const h = await HealthCentre.findById(selectedHospId);
          if (h) {
            state = state || h.state || '';
            district = district || h.district || '';
            city = city || h.city || '';
            hospitalInfo = {
              _id: h._id,
              name: h.name,
              location: h.location,
              address: h.address,
              city: h.city,
              state: h.state,
              district: h.district,
              phone: h.phone
            };
          }
        } catch (e) {}
      }

      doctorProfile = new Doctor({
        user_id: newUser._id,
        name: newUser.name,
        specialization: specialization || 'General Physician',
        availability: availability || 'Mon - Fri (9:00 AM - 5:00 PM)',
        centre_id: selectedHospId,
        hospital_id: selectedHospId,
        state,
        district,
        city,
        profileCompleted: !!selectedHospId
      });
      await doctorProfile.save();
      doctorProfile = { ...doctorProfile, hospital: hospitalInfo };
    }

    res.status(201).json({ 
      message: 'User registered successfully! Please login with your phone and password.', 
      userId: newUser._id,
      role: newUser.role,
      centre_id: newUser.centre_id,
      doctor: doctorProfile 
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during registration', error: err.message });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { phone, password, hospital_id, hospitalId, centre_id } = req.body;
    const selectedHospId = hospital_id || hospitalId || centre_id;

    // Find user by phone
    const user = await User.findOne({ phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Validate password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    let doctorProfile = null;
    let hospitalInfo = null;

    if (user.role === 'Doctor') {
      let doctor = await Doctor.findOne({ user_id: user._id });
      if (!doctor) {
        doctor = await Doctor.findOne({ name: user.name });
      }

      // If doctor selected a hospital during login, bind it immediately
      if (selectedHospId) {
        const h = await HealthCentre.findById(selectedHospId);
        if (h) {
          hospitalInfo = {
            _id: h._id,
            name: h.name,
            location: h.location,
            address: h.address,
            city: h.city,
            state: h.state,
            district: h.district,
            phone: h.phone
          };

          if (doctor) {
            doctor = await Doctor.findByIdAndUpdate(doctor._id, {
              hospital_id: selectedHospId,
              centre_id: selectedHospId,
              state: h.state || doctor.state || '',
              district: h.district || doctor.district || '',
              city: h.city || doctor.city || '',
              profileCompleted: true
            });
            doctor.hospital_id = selectedHospId;
            doctor.centre_id = selectedHospId;
            doctor.state = h.state || doctor.state || '';
            doctor.district = h.district || doctor.district || '';
            doctor.city = h.city || doctor.city || '';
            doctor.profileCompleted = true;
          } else {
            doctor = await Doctor.create({
              user_id: user._id,
              name: user.name,
              specialization: 'General Physician',
              availability: 'Mon - Fri (9:00 AM - 5:00 PM)',
              centre_id: selectedHospId,
              hospital_id: selectedHospId,
              state: h.state || '',
              district: h.district || '',
              city: h.city || '',
              profileCompleted: true
            });
          }

          await User.findByIdAndUpdate(user._id, { centre_id: selectedHospId });
          user.centre_id = selectedHospId;
        }
      }

      if (doctor) {
        const hid = doctor.hospital_id || doctor.centre_id;
        if (hid && !hospitalInfo) {
          try {
            const h = await HealthCentre.findById(hid);
            if (h) {
              hospitalInfo = {
                _id: h._id,
                name: h.name,
                location: h.location,
                address: h.address,
                city: h.city,
                state: h.state,
                district: h.district,
                phone: h.phone
              };
            }
          } catch (e) {}
        }
        doctorProfile = { ...doctor, hospital: hospitalInfo };
      }
    }

    // Create JWT Token
    const token = jwt.sign(
      { id: user._id, role: user.role, name: user.name },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        phone: user.phone,
        role: user.role,
        language: user.language,
        centre_id: user.centre_id || (doctorProfile && (doctorProfile.hospital_id || doctorProfile.centre_id)) || null,
        hospital_id: (doctorProfile && (doctorProfile.hospital_id || doctorProfile.centre_id)) || user.centre_id || null,
        hospital: hospitalInfo || null
      },
      doctor: doctorProfile
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login', error: err.message });
  }
};

module.exports = { registerUser, loginUser };
```

---

<a id="file-backend-controllers-doctorcontrollerjs"></a>
### File: `backend/controllers/doctorController.js`
**Path:** `healthCareSystem-main/backend/controllers/doctorController.js`  
**Size:** 8,642 bytes  

```javascript
const Doctor = require('../models/Doctor');
const User = require('../models/User');
const HealthCentre = require('../models/HealthCentre');
const Appointment = require('../models/Appointment');

const getDoctors = async (req, res) => {
  try {
    const { specialization, centre_id, hospitalId, hospital_id, search, name } = req.query;
    const hospId = centre_id || hospitalId || hospital_id;

    let query = {};
    if (specialization) query.specialization = new RegExp(specialization, 'i');
    const searchTerm = search || name;
    if (searchTerm) query.name = new RegExp(searchTerm, 'i');

    let doctors = await Doctor.find(query).populate('user_id', 'name phone language');
    doctors = (Array.isArray(doctors) ? doctors : []).filter((d) => d.isActive !== false);
    if (hospId) {
      doctors = doctors.filter((d) => String(d.hospital_id || d.centre_id) === String(hospId));
    }
    // attach hospital info lazily
    const result = [];
    for (const d of doctors) {
      const doc = { ...d };
      const hid = d.hospital_id || d.centre_id;
      if (hid) {
        try {
          const h = await HealthCentre.findById(hid);
          if (h) {
            doc.hospital = { _id: h._id, name: h.name, location: h.location, address: h.address, city: h.city, state: h.state, district: h.district, phone: h.phone };
          }
        } catch (e) {}
      }
      result.push(doc);
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctors', error: err.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate('user_id', 'name phone language');
    if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
    const result = { ...doctor };
    const hid = doctor.hospital_id || doctor.centre_id;
    if (hid) {
      try {
        const h = await HealthCentre.findById(hid);
        if (h) result.hospital = { _id: h._id, name: h.name, location: h.location, address: h.address, city: h.city, state: h.state, district: h.district, phone: h.phone };
      } catch (e) {}
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctor', error: err.message });
  }
};

const createDoctorProfile = async (req, res) => {
  try {
    const { user_id, name, specialization, availability, centre_id, hospital_id, state, district, city, contact } = req.body;
    if (!user_id || !name || !specialization) {
      return res.status(400).json({ message: 'user_id, name and specialization are required' });
    }

    const existing = await Doctor.findOne({ user_id });
    if (existing) {
      return res.status(409).json({ message: 'Doctor profile already exists', doctor: existing });
    }

    const hospId = hospital_id || centre_id || null;
    if (hospId) {
      const h = await HealthCentre.findById(hospId);
      if (!h || h.isActive === false) return res.status(400).json({ message: 'Selected hospital not found or inactive' });
      if (state && h.state && state.toLowerCase() !== h.state.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected state' });
      }
      if (district && h.district && district.toLowerCase() !== h.district.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected district' });
      }
      if (city && h.city && city.toLowerCase() !== h.city.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected city' });
      }
    }

    const newDoctor = new Doctor({
      user_id,
      name,
      specialization,
      availability: availability || 'Mon - Fri (9:00 AM - 5:00 PM)',
      centre_id: hospId,
      hospital_id: hospId,
      state: state || '',
      district: district || '',
      city: city || '',
      contact: contact || '',
      profileCompleted: !!hospId,
      isActive: true
    });

    await newDoctor.save();
    res.status(201).json({ message: 'Doctor profile created successfully', doctor: newDoctor });
  } catch (err) {
    res.status(500).json({ message: 'Error creating doctor profile', error: err.message });
  }
};

const updateDoctorProfile = async (req, res) => {
  try {
    const { name, specialization, availability, hospitalId, hospital_id, centre_id, state, district, city, contact } = req.body;
    const userId = req.user.id;

    const hospId = hospitalId || hospital_id || centre_id || null;

    if (hospId) {
      const h = await HealthCentre.findById(hospId);
      if (!h || h.isActive === false) return res.status(400).json({ message: 'Selected hospital not found or inactive' });
      if (state && h.state && state.toLowerCase() !== h.state.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected state' });
      }
      if (district && h.district && district.toLowerCase() !== h.district.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected district' });
      }
      if (city && h.city && city.toLowerCase() !== h.city.toLowerCase()) {
        return res.status(400).json({ message: 'Hospital does not belong to selected city' });
      }
    }

    let doctor = await Doctor.findOne({ user_id: userId });

    if (!doctor) {
      const user = await User.findById(userId);
      doctor = await Doctor.create({
        user_id: userId,
        name: name || (user && user.name) || '',
        specialization: specialization || 'General Physician',
        availability: availability || 'Mon - Fri (9:00 AM - 5:00 PM)',
        centre_id: hospId,
        hospital_id: hospId,
        state: state || '',
        district: district || '',
        city: city || '',
        contact: contact || '',
        profileCompleted: !!hospId,
        isActive: true
      });
      return res.status(200).json({ message: 'Doctor profile updated successfully', doctor });
    }

    const update = {};
    if (name) update.name = name;
    if (specialization) update.specialization = specialization;
    if (availability) update.availability = availability;
    if (hospId) {
      update.centre_id = hospId;
      update.hospital_id = hospId;
    }
    if (state) update.state = state;
    if (district) update.district = district;
    if (city) update.city = city;
    if (contact) update.contact = contact;
    update.profileCompleted = !!(hospId || doctor.hospital_id || doctor.centre_id);

    const updated = await Doctor.findByIdAndUpdate(doctor._id, update, { new: true });
    res.status(200).json({ message: 'Doctor profile updated successfully', doctor: updated });
  } catch (err) {
    res.status(500).json({ message: 'Error updating doctor profile', error: err.message });
  }
};

const getMyDoctorProfile = async (req, res) => {
  try {
    const doctor = await Doctor.findOne({ user_id: req.user.id });
    if (!doctor) return res.status(404).json({ message: 'Doctor profile not found' });
    const result = { ...doctor };
    const hid = doctor.hospital_id || doctor.centre_id;
    if (hid) {
      try {
        const h = await HealthCentre.findById(hid);
        if (h) result.hospital = { _id: h._id, name: h.name, location: h.location, address: h.address, city: h.city, state: h.state, district: h.district, phone: h.phone };
      } catch (e) {}
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching doctor profile', error: err.message });
  }
};

const getDoctorAvailability = async (req, res) => {
  try {
    const { doctorId, doctor_id, date } = req.query;
    const id = doctorId || doctor_id;
    if (!id || !date) return res.status(400).json({ message: 'doctorId and date are required' });
    const allBooked = await Appointment.find({ doctor_id: id });
    const start = new Date(`${date}T00:00:00`);
    const end = new Date(`${date}T23:59:59`);
    const booked = (Array.isArray(allBooked) ? allBooked : []).filter((a) => {
      const dt = new Date(a.date_time);
      return dt >= start && dt <= end;
    });
    const bookedSlots = booked.map((a) => {
      const d = new Date(a.date_time);
      return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
    });
    res.status(200).json({ doctorId: id, date, bookedSlots });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching availability', error: err.message });
  }
};

module.exports = { getDoctors, getDoctorById, createDoctorProfile, updateDoctorProfile, getMyDoctorProfile, getDoctorAvailability };
```

---

<a id="file-backend-controllers-centrecontrollerjs"></a>
### File: `backend/controllers/centreController.js`
**Path:** `healthCareSystem-main/backend/controllers/centreController.js`  
**Size:** 2,597 bytes  

```javascript
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
```

---

<a id="file-backend-controllers-appointmentcontrollerjs"></a>
### File: `backend/controllers/appointmentController.js`
**Path:** `healthCareSystem-main/backend/controllers/appointmentController.js`  
**Size:** 5,146 bytes  

```javascript
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');
const HealthCentre = require('../models/HealthCentre');

const bookAppointment = async (req, res) => {
  try {
    const { doctor_id, date_time, hospital_id, hospitalId, centre_id } = req.body;
    const user_id = req.user.id;

    if (!doctor_id || !date_time) {
      return res.status(400).json({ message: 'doctor_id and date_time are required' });
    }

    const doctor = await Doctor.findById(doctor_id);
    if (!doctor || doctor.isActive === false) {
      return res.status(404).json({ message: 'Doctor not found or inactive' });
    }

    const doctorHospitalId = doctor.hospital_id || doctor.centre_id;
    const requestedHospitalId = hospital_id || hospitalId || centre_id || doctorHospitalId;
    if (!doctorHospitalId) {
      return res.status(400).json({ message: 'Doctor is not associated with a hospital' });
    }
    if (String(requestedHospitalId) !== String(doctorHospitalId)) {
      return res.status(400).json({ message: 'Selected doctor does not belong to the selected hospital' });
    }

    const hospital = await HealthCentre.findById(doctorHospitalId);
    if (!hospital || hospital.isActive === false) {
      return res.status(400).json({ message: 'Hospital is inactive or not found' });
    }

    const appointmentDate = new Date(date_time);
    if (isNaN(appointmentDate.getTime())) {
      return res.status(400).json({ message: 'Invalid date_time' });
    }
    if (appointmentDate < new Date()) {
      return res.status(400).json({ message: 'Cannot book an appointment in the past' });
    }

    // prevent duplicate/overlapping slot for same doctor
    const existing = await Appointment.findOne({ doctor_id, date_time: appointmentDate });
    if (existing) {
      return res.status(409).json({ message: 'This time slot is already booked' });
    }

    const newAppointment = new Appointment({
      user_id,
      doctor_id,
      hospital_id: doctorHospitalId,
      centre_id: doctorHospitalId,
      date_time: appointmentDate,
      status: 'Pending'
    });

    await newAppointment.save();
    res.status(201).json({ message: 'Appointment booked successfully and sent for approval', appointment: newAppointment });
  } catch (err) {
    if (err && err.code === 11000) {
      return res.status(409).json({ message: 'This time slot is already booked' });
    }
    res.status(500).json({ message: 'Error booking appointment', error: err.message });
  }
};

const getAppointments = async (req, res) => {
  try {
    let query = {};
    if (req.user && req.user.role === 'Patient') {
      query.user_id = req.user.id;
    } else if (req.user && req.user.role === 'Doctor') {
      let doctorDoc = await Doctor.findOne({ user_id: req.user.id });
      if (!doctorDoc) {
        doctorDoc = await Doctor.findOne({ name: req.user.name });
      }
      if (doctorDoc) {
        query.doctor_id = doctorDoc._id;
      }
    } else if (req.user && req.user.role === 'Nurse') {
      query = {};
    }

    const appointments = await Appointment.find(query)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization availability centre_id hospital_id');

    res.status(200).json(appointments || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching appointments', error: err.message });
  }
};

const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const allowedStatuses = ['Pending', 'Scheduled', 'Accepted', 'Rejected', 'Completed', 'Cancelled'];
    if (!status || !allowedStatuses.includes(status)) {
      return res.status(400).json({
        message: `Invalid status '${status}'. Must be one of: ${allowedStatuses.join(', ')}`
      });
    }

    if (!req.user || !['Doctor', 'Nurse'].includes(req.user.role)) {
      return res.status(403).json({
        message: 'Permission denied. Only Doctors and Nurses can accept or reject appointments.'
      });
    }

    const appointment = await Appointment.findById(id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }

    const updated = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    const populated = await Appointment.findById(id)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization availability');

    res.status(200).json({
      message: `Appointment ${status.toLowerCase()} successfully`,
      appointment: populated || updated
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating appointment status', error: err.message });
  }
};

const acceptAppointment = async (req, res) => {
  req.body.status = 'Accepted';
  return updateAppointmentStatus(req, res);
};

const rejectAppointment = async (req, res) => {
  req.body.status = 'Rejected';
  return updateAppointmentStatus(req, res);
};

module.exports = {
  bookAppointment,
  getAppointments,
  updateAppointmentStatus,
  acceptAppointment,
  rejectAppointment
};
```

---

<a id="file-backend-controllers-consultationcontrollerjs"></a>
### File: `backend/controllers/consultationController.js`
**Path:** `healthCareSystem-main/backend/controllers/consultationController.js`  
**Size:** 6,337 bytes  

```javascript
const Consultation = require('../models/Consultation');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// Start or initiate a consultation call for an appointment (Doctor only)
const startConsultation = async (req, res) => {
  try {
    const { appointment_id, mode, notes } = req.body;

    if (!appointment_id) {
      return res.status(400).json({ message: 'appointment_id is required' });
    }

    // Verify user role: Only Doctors can initiate call
    if (req.user && req.user.role !== 'Doctor') {
      return res.status(403).json({ 
        message: 'Only doctors can initiate teleconsultation calls.' 
      });
    }

    // Verify appointment exists
    const appointment = await Appointment.findById(appointment_id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found.' });
    }

    // Check if consultation already exists for this appointment
    let consultation = await Consultation.findOne({ appointment_id });
    if (consultation) {
      consultation.status = 'Calling';
      consultation.offer = null;
      consultation.answer = null;
      consultation.candidates = [];
      if (notes) consultation.notes = notes;
      await consultation.save();

      return res.status(200).json({ 
        message: 'Calling patient for consultation session', 
        consultation,
        appointment
      });
    }

    consultation = new Consultation({
      appointment_id,
      mode: mode || 'Audio',
      status: 'Calling',
      notes: notes || '',
      offer: null,
      answer: null,
      candidates: []
    });

    await consultation.save();
    res.status(201).json({ 
      message: 'Consultation audio call initiated successfully', 
      consultation,
      appointment
    });
  } catch (err) {
    res.status(500).json({ message: 'Error starting consultation', error: err.message });
  }
};

// WebRTC signal exchange (offer, answer, candidate, status updates)
const signalConsultation = async (req, res) => {
  try {
    const { id } = req.params;
    const { offer, answer, candidate, status, notes } = req.body;

    const consultation = await Consultation.findById(id);
    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found.' });
    }

    if (offer) consultation.offer = offer;
    if (answer) consultation.answer = answer;
    if (status) consultation.status = status;
    if (notes !== undefined) consultation.notes = notes;

    if (candidate) {
      const existing = consultation.candidates || [];
      consultation.candidates = [...existing, candidate];
    }

    await consultation.save();
    res.status(200).json({ message: 'Signal updated', consultation });
  } catch (err) {
    res.status(500).json({ message: 'Error processing WebRTC signal', error: err.message });
  }
};

// Update consultation status & notes (e.g., Finish call, save notes)
const updateConsultationStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body; // 'Calling', 'In-Progress', 'Finished', 'Declined'

    const updateData = {};
    if (status) updateData.status = status;
    if (notes !== undefined) updateData.notes = notes;

    const consultation = await Consultation.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found.' });
    }

    res.status(200).json({ message: 'Consultation status updated', consultation });
  } catch (err) {
    res.status(500).json({ message: 'Error updating consultation', error: err.message });
  }
};

// Get active call status for logged in user (e.g., incoming call for Patient)
const getActiveCall = async (req, res) => {
  try {
    const userId = req.user?.id;
    const userRole = req.user?.role;

    const consultations = await Consultation.find({
      status: { $in: ['Calling', 'In-Progress'] }
    }).populate({
      path: 'appointment_id',
      populate: [
        { path: 'user_id', select: 'name phone language' },
        { path: 'doctor_id', select: 'name specialization' }
      ]
    });

    if (!consultations || consultations.length === 0) {
      return res.status(200).json({ activeCall: null });
    }

    // Filter relevant call for current user
    let userCall = null;
    for (const c of consultations) {
      if (!c.appointment_id) continue;

      const patientUserId = c.appointment_id.user_id?._id || c.appointment_id.user_id;
      const doctorObj = c.appointment_id.doctor_id;

      if (userRole === 'Patient' && String(patientUserId) === String(userId)) {
        userCall = c;
        break;
      } else if (userRole === 'Doctor') {
        userCall = c;
        break;
      }
    }

    res.status(200).json({ activeCall: userCall });
  } catch (err) {
    res.status(500).json({ message: 'Error checking active call', error: err.message });
  }
};

// Get consultation details by appointment ID
const getConsultationDetails = async (req, res) => {
  try {
    const { appointment_id } = req.params;
    const consultation = await Consultation.findOne({ appointment_id }).populate({
      path: 'appointment_id',
      populate: [
        { path: 'user_id', select: 'name phone language' },
        { path: 'doctor_id', select: 'name specialization' }
      ]
    });

    if (!consultation) {
      return res.status(404).json({ message: 'No consultation found for this appointment.' });
    }

    res.status(200).json(consultation);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching consultation details', error: err.message });
  }
};

// Get user's consultations list
const getConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().populate({
      path: 'appointment_id',
      populate: [
        { path: 'user_id', select: 'name phone language' },
        { path: 'doctor_id', select: 'name specialization' }
      ]
    });
    res.status(200).json(consultations || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching consultations', error: err.message });
  }
};

module.exports = { 
  startConsultation, 
  signalConsultation,
  getActiveCall,
  updateConsultationStatus, 
  getConsultationDetails,
  getConsultations
};
```

---

<a id="file-backend-controllers-recordcontrollerjs"></a>
### File: `backend/controllers/recordController.js`
**Path:** `healthCareSystem-main/backend/controllers/recordController.js`  
**Size:** 4,662 bytes  

```javascript
const HealthRecord = require('../models/HealthRecord');
const Appointment = require('../models/Appointment');
const Doctor = require('../models/Doctor');

// Create or store a patient health record (Accessible by Doctor or Nurse)
const createHealthRecord = async (req, res) => {
  try {
    const { user_id, diagnosis, notes, doctor_id } = req.body;

    if (!user_id || !diagnosis || !notes) {
      return res.status(400).json({ message: 'Patient ID, diagnosis, and prescription notes are required' });
    }
    
    let finalDoctorId = doctor_id;
    if (!finalDoctorId && req.user.role === 'Doctor') {
      const doc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
      if (doc) finalDoctorId = doc._id;
    }

    const newRecord = new HealthRecord({
      user_id,
      diagnosis,
      notes,
      doctor_id: finalDoctorId
    });

    await newRecord.save();

    const populated = await HealthRecord.findById(newRecord._id)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization');

    res.status(201).json({ 
      message: 'Health record created successfully', 
      record: populated || newRecord 
    });
  } catch (err) {
    res.status(500).json({ message: 'Error saving health record', error: err.message });
  }
};

// Update an existing health record (Accessible by Doctor or Nurse)
const updateHealthRecord = async (req, res) => {
  try {
    const { id } = req.params;
    const { diagnosis, notes } = req.body;

    if (!diagnosis || !notes) {
      return res.status(400).json({ message: 'Diagnosis and prescription notes are required for update' });
    }

    const record = await HealthRecord.findById(id);
    if (!record) {
      return res.status(404).json({ message: 'Health record not found' });
    }

    await HealthRecord.findByIdAndUpdate(id, {
      diagnosis,
      notes,
      updatedAt: new Date().toISOString()
    });

    const updated = await HealthRecord.findById(id)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization');

    res.status(200).json({
      message: 'Health record updated successfully',
      record: updated
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating health record', error: err.message });
  }
};

// Get health records (Patients view their own; Doctors & Nurses view all or query specific patient)
const getHealthRecords = async (req, res) => {
  try {
    let query = {};

    // If the logged-in user is a Patient, restrict them to their own records
    if (req.user.role === 'Patient') {
      query.user_id = req.user.id;
    } else if (req.query.user_id) {
      // Doctors and Nurses can query a specific patient's records using ?user_id=XYZ
      query.user_id = req.query.user_id;
    }

    const records = await HealthRecord.find(query)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization');

    res.status(200).json(records || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching health records', error: err.message });
  }
};

// Get list of patients with accepted appointments for Doctor or Nurse
const getAcceptedPatients = async (req, res) => {
  try {
    let appointmentQuery = { status: 'Accepted' };

    if (req.user.role === 'Doctor') {
      let doctorDoc = await Doctor.findOne({ user_id: req.user.id });
      if (!doctorDoc) {
        doctorDoc = await Doctor.findOne({ name: req.user.name });
      }
      if (doctorDoc) {
        appointmentQuery.doctor_id = doctorDoc._id;
      }
    }

    const appointments = await Appointment.find(appointmentQuery)
      .populate('user_id', 'name phone language')
      .populate('doctor_id', 'name specialization availability');

    const patientMap = new Map();
    for (const app of (appointments || [])) {
      const patient = app.user_id;
      if (patient && patient._id) {
        const pId = String(patient._id);
        if (!patientMap.has(pId)) {
          patientMap.set(pId, {
            _id: patient._id,
            name: patient.name,
            phone: patient.phone,
            language: patient.language,
            appointmentDate: app.date_time,
            appointmentId: app._id,
            doctor: app.doctor_id
          });
        }
      }
    }

    res.status(200).json(Array.from(patientMap.values()));
  } catch (err) {
    res.status(500).json({ message: 'Error fetching accepted patients', error: err.message });
  }
};

module.exports = { 
  createHealthRecord, 
  updateHealthRecord, 
  getHealthRecords,
  getAcceptedPatients 
};
```

---

<a id="file-backend-controllers-remindercontrollerjs"></a>
### File: `backend/controllers/reminderController.js`
**Path:** `healthCareSystem-main/backend/controllers/reminderController.js`  
**Size:** 6,303 bytes  

```javascript
const MedicineReminder = require('../models/MedicineReminder');
const Doctor = require('../models/Doctor');
const User = require('../models/User');
const Appointment = require('../models/Appointment');

// Create a medicine reminder
const createReminder = async (req, res) => {
  try {
    const { medicine, schedule, user_id } = req.body;
    
    if (!medicine || !schedule) {
      return res.status(400).json({ message: 'Medicine name and schedule are required' });
    }

    // Patients set reminders for themselves; Doctors/Nurses can set them for a specific user_id
    const targetUserId = req.user.role === 'Patient' ? req.user.id : (user_id || req.user.id);

    let docId = null;
    if (req.user.role === 'Doctor') {
      const doc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
      if (doc) docId = doc._id;
    }

    const newReminder = new MedicineReminder({
      user_id: targetUserId,
      medicine,
      schedule,
      doctor_id: docId
    });

    await newReminder.save();

    const populated = await MedicineReminder.findById(newReminder._id)
      .populate('user_id', 'name phone')
      .populate('doctor_id', 'name specialization');

    res.status(201).json({ 
      message: 'Medicine reminder created successfully', 
      reminder: populated || newReminder 
    });
  } catch (err) {
    res.status(500).json({ message: 'Error creating medicine reminder', error: err.message });
  }
};

// Update an existing medicine reminder
const updateReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const { medicine, schedule, user_id } = req.body;

    if (!medicine || !schedule) {
      return res.status(400).json({ message: 'Medicine name and schedule are required for update' });
    }

    const reminder = await MedicineReminder.findById(id);
    if (!reminder) {
      return res.status(404).json({ message: 'Medicine reminder not found' });
    }

    const ownerId = reminder.user_id?._id ? String(reminder.user_id._id) : String(reminder.user_id);
    if (req.user.role === 'Patient' && ownerId !== String(req.user.id)) {
      return res.status(403).json({ message: 'Access denied: You can only update your own reminders' });
    }

    const updateData = {
      medicine,
      schedule,
      updatedAt: new Date().toISOString()
    };

    if (user_id && req.user.role !== 'Patient') {
      updateData.user_id = user_id;
    }

    if (req.user.role === 'Doctor') {
      const doc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
      if (doc) updateData.doctor_id = doc._id;
    }

    await MedicineReminder.findByIdAndUpdate(id, updateData);

    const updated = await MedicineReminder.findById(id)
      .populate('user_id', 'name phone')
      .populate('doctor_id', 'name specialization');

    res.status(200).json({
      message: 'Medicine reminder updated successfully',
      reminder: updated
    });
  } catch (err) {
    res.status(500).json({ message: 'Error updating medicine reminder', error: err.message });
  }
};

// Delete a medicine reminder
const deleteReminder = async (req, res) => {
  try {
    const { id } = req.params;
    const reminder = await MedicineReminder.findById(id);
    if (!reminder) {
      return res.status(404).json({ message: 'Medicine reminder not found' });
    }

    const ownerId = reminder.user_id?._id ? String(reminder.user_id._id) : String(reminder.user_id);
    if (req.user.role === 'Patient' && ownerId !== String(req.user.id)) {
      return res.status(403).json({ message: 'Access denied: You can only delete your own reminders' });
    }

    await MedicineReminder.findByIdAndDelete(id);
    res.status(200).json({ message: 'Medicine reminder deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting medicine reminder', error: err.message });
  }
};

// Get reminders for logged-in user or specified user
const getReminders = async (req, res) => {
  try {
    let query = {};
    if (req.user.role === 'Patient') {
      query.user_id = req.user.id;
    } else if (req.query.scope === 'personal') {
      query.user_id = req.user.id;
    } else if (req.query.user_id) {
      query.user_id = req.query.user_id;
    }

    const reminders = await MedicineReminder.find(query)
      .populate('user_id', 'name phone')
      .populate('doctor_id', 'name specialization');

    res.status(200).json(reminders || []);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching medicine reminders', error: err.message });
  }
};

// Get list of patients for Doctors/Nurses in Reminder Menu
const getReminderPatients = async (req, res) => {
  try {
    const patientMap = new Map();

    // 1. All registered patients with role Patient
    const allPatientUsers = await User.find({ role: 'Patient' });
    for (const u of (allPatientUsers || [])) {
      if (u && u._id) {
        patientMap.set(String(u._id), {
          _id: u._id,
          name: u.name,
          phone: u.phone,
          language: u.language || 'en'
        });
      }
    }

    // 2. Also check appointments with doctor
    let doctorDoc = null;
    if (req.user.role === 'Doctor') {
      doctorDoc = await Doctor.findOne({ user_id: req.user.id }) || await Doctor.findOne({ name: req.user.name });
    }

    let appointmentQuery = {};
    if (doctorDoc) {
      appointmentQuery.doctor_id = doctorDoc._id;
    }

    const appointments = await Appointment.find(appointmentQuery)
      .populate('user_id', 'name phone language');

    for (const app of (appointments || [])) {
      const patient = app.user_id;
      if (patient && patient._id) {
        const pId = String(patient._id);
        if (!patientMap.has(pId)) {
          patientMap.set(pId, {
            _id: patient._id,
            name: patient.name,
            phone: patient.phone,
            language: patient.language || 'en'
          });
        }
      }
    }

    res.status(200).json(Array.from(patientMap.values()));
  } catch (err) {
    res.status(500).json({ message: 'Error fetching patients for reminders', error: err.message });
  }
};

module.exports = { 
  createReminder, 
  updateReminder, 
  deleteReminder, 
  getReminders, 
  getReminderPatients 
};
```

---

<a id="file-backend-controllers-locationcontrollerjs"></a>
### File: `backend/controllers/locationController.js`
**Path:** `healthCareSystem-main/backend/controllers/locationController.js`  
**Size:** 1,640 bytes  

```javascript
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
```

---

## Backend - Routes

<a id="file-backend-routes-authroutesjs"></a>
### File: `backend/routes/authRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/authRoutes.js`  
**Size:** 247 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/authController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;
```

---

<a id="file-backend-routes-doctorroutesjs"></a>
### File: `backend/routes/doctorRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/doctorRoutes.js`  
**Size:** 768 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { getDoctors, getDoctorById, createDoctorProfile, updateDoctorProfile, getMyDoctorProfile, getDoctorAvailability } = require('../controllers/doctorController');
const { verifyToken, optionalToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', optionalToken, getDoctors);
router.get('/availability', optionalToken, getDoctorAvailability);
router.get('/me/profile', verifyToken, authorizeRoles('Doctor'), getMyDoctorProfile);
router.get('/:id', optionalToken, getDoctorById);
router.post('/', verifyToken, authorizeRoles('Doctor'), createDoctorProfile);
router.put('/profile', verifyToken, authorizeRoles('Doctor'), updateDoctorProfile);

module.exports = router;
```

---

<a id="file-backend-routes-centreroutesjs"></a>
### File: `backend/routes/centreRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/centreRoutes.js`  
**Size:** 460 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { getHealthCentres, getHealthCentreById, addHealthCentre } = require('../controllers/centreController');
const { verifyToken, optionalToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', optionalToken, getHealthCentres);
router.get('/:id', optionalToken, getHealthCentreById);
router.post('/add', verifyToken, addHealthCentre);

module.exports = router;
```

---

<a id="file-backend-routes-appointmentroutesjs"></a>
### File: `backend/routes/appointmentRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/appointmentRoutes.js`  
**Size:** 1,007 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { 
  bookAppointment, 
  getAppointments, 
  updateAppointmentStatus,
  acceptAppointment,
  rejectAppointment
} = require('../controllers/appointmentController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware'); 

router.post('/book', verifyToken, bookAppointment);
router.get('/', verifyToken, getAppointments);

// Doctor & Nurse routes for accepting and rejecting appointments
router.patch('/:id/status', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateAppointmentStatus);
router.put('/:id/status', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateAppointmentStatus);
router.post('/:id/status', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateAppointmentStatus);
router.post('/:id/accept', verifyToken, authorizeRoles('Doctor', 'Nurse'), acceptAppointment);
router.post('/:id/reject', verifyToken, authorizeRoles('Doctor', 'Nurse'), rejectAppointment);

module.exports = router;
```

---

<a id="file-backend-routes-consultationroutesjs"></a>
### File: `backend/routes/consultationRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/consultationRoutes.js`  
**Size:** 943 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { 
  startConsultation, 
  signalConsultation,
  getActiveCall,
  updateConsultationStatus, 
  getConsultationDetails,
  getConsultations
} = require('../controllers/consultationController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

router.get('/', verifyToken, authorizeRoles('Doctor', 'Patient'), getConsultations);
router.get('/active-call', verifyToken, authorizeRoles('Doctor', 'Patient'), getActiveCall);
router.post('/start', verifyToken, authorizeRoles('Doctor'), startConsultation);
router.post('/:id/signal', verifyToken, authorizeRoles('Doctor', 'Patient'), signalConsultation);
router.patch('/:id/status', verifyToken, authorizeRoles('Doctor', 'Patient'), updateConsultationStatus);
router.get('/:appointment_id', verifyToken, authorizeRoles('Doctor', 'Patient'), getConsultationDetails);

module.exports = router;
```

---

<a id="file-backend-routes-recordroutesjs"></a>
### File: `backend/routes/recordRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/recordRoutes.js`  
**Size:** 998 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { 
  createHealthRecord, 
  updateHealthRecord, 
  getHealthRecords,
  getAcceptedPatients 
} = require('../controllers/recordController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// Get accepted patients for Doctors and Nurses
router.get('/patients', verifyToken, authorizeRoles('Doctor', 'Nurse'), getAcceptedPatients);

// Create medical records (Doctor or Nurse)
router.post('/add', verifyToken, authorizeRoles('Doctor', 'Nurse'), createHealthRecord);

// Edit medical records (Doctor or Nurse)
router.put('/:id', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateHealthRecord);
router.patch('/:id', verifyToken, authorizeRoles('Doctor', 'Nurse'), updateHealthRecord);

// View records (Patient sees own; Doctor & Nurse can see all / filter by user_id)
router.get('/', verifyToken, authorizeRoles('Patient', 'Doctor', 'Nurse'), getHealthRecords);

module.exports = router;
```

---

<a id="file-backend-routes-reminderroutesjs"></a>
### File: `backend/routes/reminderRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/reminderRoutes.js`  
**Size:** 918 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { 
  createReminder, 
  updateReminder, 
  deleteReminder, 
  getReminders, 
  getReminderPatients 
} = require('../controllers/reminderController');
const { verifyToken, authorizeRoles } = require('../middleware/authMiddleware');

// Get list of patients for Doctors and Nurses to select from dropdown
router.get('/patients', verifyToken, authorizeRoles('Doctor', 'Nurse'), getReminderPatients);

// Add a new medicine reminder
router.post('/add', verifyToken, createReminder);

// Update an existing medicine reminder
router.put('/:id', verifyToken, updateReminder);
router.patch('/:id', verifyToken, updateReminder);

// Delete a medicine reminder
router.delete('/:id', verifyToken, deleteReminder);

// Get reminders (Patient gets own; Doctor/Nurse can filter or scope)
router.get('/', verifyToken, getReminders);

module.exports = router;
```

---

<a id="file-backend-routes-locationroutesjs"></a>
### File: `backend/routes/locationRoutes.js`
**Path:** `healthCareSystem-main/backend/routes/locationRoutes.js`  
**Size:** 409 bytes  

```javascript
const express = require('express');
const router = express.Router();
const { getStates, getDistricts, getCities } = require('../controllers/locationController');
const { optionalToken } = require('../middleware/authMiddleware');

router.get('/states', optionalToken, getStates);
router.get('/districts', optionalToken, getDistricts);
router.get('/cities', optionalToken, getCities);

module.exports = router;
```

---

## Database Seed / Store

<a id="file-backend-data-databasejson"></a>
### File: `backend/data/database.json`
**Path:** `healthCareSystem-main/backend/data/database.json`  
**Size:** 18,586 bytes  

```json
{
  "users": [
    {},
    {
      "_id": "use_1792072522891_h6gsp",
      "name": "suresh",
      "phone": "789",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$0kB7AAGhKincdtT9aF0apuyle4yDgc54OGqoNZnTF4iDeQqUFYGIK",
      "centre_id": "centre_1",
      "createdAt": "2026-10-15T13:55:22.891Z",
      "updatedAt": "2026-10-15T13:55:22.891Z"
    },
    {
      "_id": "use_1792072585453_im1fu",
      "name": "simhan",
      "phone": "7890",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$7JWogJhWXRlYC2DArPneCOv0FvbY97.zjR7rIBgmmOqfLmLt3Y0aa",
      "centre_id": "centre_1",
      "createdAt": "2026-10-15T13:56:25.453Z",
      "updatedAt": "2026-10-15T13:56:25.453Z"
    },
    {
      "_id": "use_1792072841868_h892o",
      "name": "siddharth",
      "phone": "456",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$AYf5VPwfUr425BrSvjDFDuGdYqzl0WVX8XiiaGfpEZC62SOoCV2BC",
      "centre_id": "centre_chn_2",
      "createdAt": "2026-10-15T14:00:41.869Z",
      "updatedAt": "2026-10-15T14:00:41.869Z"
    },
    {
      "_id": "use_1792073110350_6zxq5",
      "name": "santhosh",
      "phone": "4567",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$5u8Cw5MaYRdDlp3NGTYpu.wcA1gi5Y5NnaU1CsYSQbf52ZwyNNvSq",
      "centre_id": "centre_chn_2",
      "createdAt": "2026-10-15T14:05:10.350Z",
      "updatedAt": "2026-10-15T14:05:10.350Z"
    },
    {
      "_id": "use_1792073434237_4cxvl",
      "name": "srijith",
      "phone": "1234",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$N8m4aUmstBiL46uArMdp6.kIJl8XEQMm65w0Z9iFgYfczTIJhCVtm",
      "centre_id": "centre_chn_2",
      "createdAt": "2026-10-15T14:10:34.237Z",
      "updatedAt": "2026-10-15T14:10:34.237Z"
    },
    {
      "_id": "use_1792073628469_up9rl",
      "name": "senthil",
      "phone": "123",
      "language": "en",
      "role": "Patient",
      "password": "$2a$10$QzAP9mI.PZ3tlw44amWQ2uLO2aBG2jmK1QSYD6qtIOOlFwO6pm0nu",
      "centre_id": null,
      "createdAt": "2026-10-15T14:13:48.469Z",
      "updatedAt": "2026-10-15T14:13:48.469Z"
    },
    {
      "_id": "use_1792074108126_phski",
      "name": "sentamil",
      "phone": "111",
      "language": "en",
      "role": "Nurse",
      "password": "$2a$10$p79Z0RwhVYTTywhhNvyO9e2gsSmtCJnZdDrYj75Yp6sReYPkppEmy",
      "centre_id": "centre_1",
      "createdAt": "2026-10-15T14:21:48.126Z",
      "updatedAt": "2026-10-15T14:21:48.126Z"
    }
  ],
  "doctors": [
    {},
    {
      "_id": "doc_1792072522905_w05ey",
      "user_id": "use_1792072522891_h6gsp",
      "name": "suresh",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_1",
      "hospital_id": "centre_1",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T13:55:22.905Z",
      "updatedAt": "2026-10-15T13:55:22.905Z"
    },
    {
      "_id": "doc_1792072585461_sky0k",
      "user_id": "use_1792072585453_im1fu",
      "name": "simhan",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_1",
      "hospital_id": "centre_1",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T13:56:25.461Z",
      "updatedAt": "2026-10-15T13:56:25.461Z"
    },
    {
      "_id": "doc_1792072841879_sgv2d",
      "user_id": "use_1792072841868_h892o",
      "name": "siddharth",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_chn_2",
      "hospital_id": "centre_chn_2",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T14:00:41.879Z",
      "updatedAt": "2026-10-15T14:00:41.879Z"
    },
    {
      "_id": "doc_1792073110361_5t19i",
      "user_id": "use_1792073110350_6zxq5",
      "name": "santhosh",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_chn_2",
      "hospital_id": "centre_chn_2",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T14:05:10.362Z",
      "updatedAt": "2026-10-15T14:05:10.362Z"
    },
    {
      "_id": "doc_1792073434251_4yx35",
      "user_id": "use_1792073434237_4cxvl",
      "name": "srijith",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_chn_2",
      "hospital_id": "centre_chn_2",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T14:10:34.251Z",
      "updatedAt": "2026-10-15T14:10:34.252Z"
    }
  ],
  "centres": [
    {
      "_id": "centre_1",
      "name": "Fortis Malar Hospital",
      "location": "52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020",
      "city": "Chennai",
      "type": "Hospital",
      "phone": "+91 44 4289 2222",
      "createdAt": "2026-09-26T12:38:41.941Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_chn_2",
      "name": "Apollo Hospitals Greams Road",
      "location": "21 Greams Lane, Thousand Lights, Chennai",
      "city": "Chennai",
      "type": "Hospital",
      "phone": "+91 44 2829 0200",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "21 Greams Lane, Thousand Lights, Chennai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_chn_3",
      "name": "Adyar Primary Health Centre",
      "location": "3rd Cross Street, Gandhinagar, Adyar, Chennai",
      "city": "Chennai",
      "type": "Clinic",
      "phone": "+91 44 2441 5533",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "3rd Cross Street, Gandhinagar, Adyar, Chennai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_chn_4",
      "name": "Apollo 24|7 Pharmacy T. Nagar",
      "location": "45 Venkatnarayana Road, T. Nagar, Chennai",
      "city": "Chennai",
      "type": "Pharmacy",
      "phone": "+91 44 2434 8899",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "45 Venkatnarayana Road, T. Nagar, Chennai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_1",
      "name": "Coimbatore Medical College Hospital",
      "location": "Trichy Road, Coimbatore",
      "city": "Coimbatore",
      "type": "Hospital",
      "phone": "+91 422 230 1393",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "Trichy Road, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_2",
      "name": "Ganga Hospital & Trauma Care",
      "location": "313 Mettupalayam Road, Coimbatore",
      "city": "Coimbatore",
      "type": "Hospital",
      "phone": "+91 422 248 5000",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "313 Mettupalayam Road, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_3",
      "name": "RS Puram Urban Health Clinic",
      "location": "DB Road, RS Puram, Coimbatore",
      "city": "Coimbatore",
      "type": "Clinic",
      "phone": "+91 422 254 1122",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "DB Road, RS Puram, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_4",
      "name": "MedPlus Pharmacy Gandhipuram",
      "location": "Cross Cut Road, Gandhipuram, Coimbatore",
      "city": "Coimbatore",
      "type": "Pharmacy",
      "phone": "+91 422 223 4455",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "Cross Cut Road, Gandhipuram, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_1",
      "name": "Government Rajaji Hospital",
      "location": "Panagal Road, Shenoy Nagar, Madurai",
      "city": "Madurai",
      "type": "Hospital",
      "phone": "+91 452 253 2535",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "Panagal Road, Shenoy Nagar, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_2",
      "name": "Meenakshi Mission Hospital & Research Centre",
      "location": "Melur Road, Madurai",
      "city": "Madurai",
      "type": "Hospital",
      "phone": "+91 452 258 8000",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "Melur Road, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_3",
      "name": "KK Nagar Community Clinic",
      "location": "80 Feet Road, KK Nagar, Madurai",
      "city": "Madurai",
      "type": "Clinic",
      "phone": "+91 452 252 6677",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "80 Feet Road, KK Nagar, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_4",
      "name": "Apollo Pharmacy Goripalayam",
      "location": "Alagar Kovil Road, Goripalayam, Madurai",
      "city": "Madurai",
      "type": "Pharmacy",
      "phone": "+91 452 253 1188",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "Alagar Kovil Road, Goripalayam, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_1",
      "name": "Victoria Hospital & Medical College",
      "location": "Fort Road, Near City Market, Bengaluru",
      "city": "Bengaluru",
      "type": "Hospital",
      "phone": "+91 80 2670 1150",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "Fort Road, Near City Market, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_2",
      "name": "Manipal Hospital HAL Old Airport Road",
      "location": "98 HAL Old Airport Rd, Kodihalli, Bengaluru",
      "city": "Bengaluru",
      "type": "Hospital",
      "phone": "+91 80 2502 4444",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "98 HAL Old Airport Rd, Kodihalli, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_3",
      "name": "Koramangala Primary Health Centre",
      "location": "5th Block, Koramangala, Bengaluru",
      "city": "Bengaluru",
      "type": "Clinic",
      "phone": "+91 80 2553 1244",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "5th Block, Koramangala, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_4",
      "name": "Apollo Pharmacy Indiranagar",
      "location": "100 Feet Road, Indiranagar, Bengaluru",
      "city": "Bengaluru",
      "type": "Pharmacy",
      "phone": "+91 80 2521 3344",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "100 Feet Road, Indiranagar, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_1",
      "name": "Osmania General Hospital",
      "location": "Afzal Gunj, Hyderabad",
      "city": "Hyderabad",
      "type": "Hospital",
      "phone": "+91 40 2460 0121",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Afzal Gunj, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_2",
      "name": "Yashoda Hospitals Somajiguda",
      "location": "Raj Bhavan Road, Somajiguda, Hyderabad",
      "city": "Hyderabad",
      "type": "Hospital",
      "phone": "+91 40 4567 4567",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Raj Bhavan Road, Somajiguda, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_3",
      "name": "Banjara Hills Community Wellness Clinic",
      "location": "Road No. 12, Banjara Hills, Hyderabad",
      "city": "Hyderabad",
      "type": "Clinic",
      "phone": "+91 40 2339 8811",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Road No. 12, Banjara Hills, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_4",
      "name": "MedPlus Pharmacy HITEC City",
      "location": "Cyber Towers Junction, Madhapur, Hyderabad",
      "city": "Hyderabad",
      "type": "Pharmacy",
      "phone": "+91 40 6678 1234",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Cyber Towers Junction, Madhapur, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_1",
      "name": "All India Institute of Medical Sciences (AIIMS)",
      "location": "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
      "city": "Delhi",
      "type": "Hospital",
      "phone": "+91 11 2658 8500",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_2",
      "name": "Safdarjung Hospital",
      "location": "Ring Road, Opposite AIIMS, New Delhi",
      "city": "Delhi",
      "type": "Hospital",
      "phone": "+91 11 2616 5060",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "Ring Road, Opposite AIIMS, New Delhi",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_3",
      "name": "Hauz Khas Dispensary & Polyclinic",
      "location": "E-Block, Hauz Khas, New Delhi",
      "city": "Delhi",
      "type": "Clinic",
      "phone": "+91 11 2656 3322",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "E-Block, Hauz Khas, New Delhi",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_4",
      "name": "Fortis HealthWorld Pharmacy Connaught Place",
      "location": "Inner Circle, Connaught Place, New Delhi",
      "city": "Delhi",
      "type": "Pharmacy",
      "phone": "+91 11 4151 7788",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "Inner Circle, Connaught Place, New Delhi",
      "isActive": true,
      "pincode": ""
    }
  ],
  "appointments": [
    {},
    {
      "_id": "app_1792073705431_96or4",
      "user_id": "use_1792073628469_up9rl",
      "doctor_id": "doc_1792072522905_w05ey",
      "hospital_id": "centre_1",
      "centre_id": "centre_1",
      "date_time": "2026-10-16T03:30:00.000Z",
      "status": "Accepted",
      "createdAt": "2026-10-15T14:15:05.431Z",
      "updatedAt": "2026-10-15T14:15:20.017Z"
    }
  ],
  "records": [
    {},
    {
      "_id": "rec_1792073880002_ncb55",
      "user_id": "use_1792073628469_up9rl",
      "diagnosis": "Mild Fever",
      "notes": "Take Light Foods ",
      "doctor_id": "doc_1792072522905_w05ey",
      "createdAt": "2026-10-15T14:18:00.002Z",
      "updatedAt": "2026-10-15T14:18:00.002Z"
    }
  ],
  "reminders": [
    {},
    {
      "_id": "rem_1792073963737_j95za",
      "user_id": "use_1792073628469_up9rl",
      "medicine": "Paracetamol",
      "schedule": "Morning  & Night After meals (2 days)",
      "doctor_id": "doc_1792072522905_w05ey",
      "createdAt": "2026-10-15T14:19:23.737Z",
      "updatedAt": "2026-10-15T14:19:23.737Z"
    }
  ],
  "consultations": [
    {},
    {
      "_id": "con_1792074040610_j2dq1",
      "appointment_id": "app_1792073705431_96or4",
      "mode": "Audio-2G-GSM",
      "status": "Finished",
      "notes": "",
      "offer": {
        "sdp": "v=0\r\no=- 1262657151186872911 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 029a8967-7e93-447e-a8d5-41e4a8754ede\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:OUWD\r\na=ice-pwd:XF0UidRQRwPZflQMyfpCrZ50\r\na=ice-options:trickle\r\na=fingerprint:sha-256 F7:FE:4C:6E:88:42:F4:7D:9D:BB:9C:C8:CC:48:F1:B5:25:23:F8:74:D2:F5:84:15:BC:CC:C8:39:02:EB:5E:9B\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:029a8967-7e93-447e-a8d5-41e4a8754ede c2abe166-dcc3-4d39-99a9-2da75a398b39\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtcp-xr:rcvr-rtt=all\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:32247800 cname:D3QOQ1zRFu7DY6VR\r\na=ssrc:32247800 msid:029a8967-7e93-447e-a8d5-41e4a8754ede c2abe166-dcc3-4d39-99a9-2da75a398b39\r\n",
        "type": "offer"
      },
      "answer": null,
      "candidates": [],
      "createdAt": "2026-10-15T14:20:40.610Z",
      "updatedAt": "2026-10-15T14:20:48.907Z"
    }
  ]
}
```

---

<a id="file-data-databasejson"></a>
### File: `data/database.json`
**Path:** `healthCareSystem-main/data/database.json`  
**Size:** 18,586 bytes  

```json
{
  "users": [
    {},
    {
      "_id": "use_1792072522891_h6gsp",
      "name": "suresh",
      "phone": "789",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$0kB7AAGhKincdtT9aF0apuyle4yDgc54OGqoNZnTF4iDeQqUFYGIK",
      "centre_id": "centre_1",
      "createdAt": "2026-10-15T13:55:22.891Z",
      "updatedAt": "2026-10-15T13:55:22.891Z"
    },
    {
      "_id": "use_1792072585453_im1fu",
      "name": "simhan",
      "phone": "7890",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$7JWogJhWXRlYC2DArPneCOv0FvbY97.zjR7rIBgmmOqfLmLt3Y0aa",
      "centre_id": "centre_1",
      "createdAt": "2026-10-15T13:56:25.453Z",
      "updatedAt": "2026-10-15T13:56:25.453Z"
    },
    {
      "_id": "use_1792072841868_h892o",
      "name": "siddharth",
      "phone": "456",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$AYf5VPwfUr425BrSvjDFDuGdYqzl0WVX8XiiaGfpEZC62SOoCV2BC",
      "centre_id": "centre_chn_2",
      "createdAt": "2026-10-15T14:00:41.869Z",
      "updatedAt": "2026-10-15T14:00:41.869Z"
    },
    {
      "_id": "use_1792073110350_6zxq5",
      "name": "santhosh",
      "phone": "4567",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$5u8Cw5MaYRdDlp3NGTYpu.wcA1gi5Y5NnaU1CsYSQbf52ZwyNNvSq",
      "centre_id": "centre_chn_2",
      "createdAt": "2026-10-15T14:05:10.350Z",
      "updatedAt": "2026-10-15T14:05:10.350Z"
    },
    {
      "_id": "use_1792073434237_4cxvl",
      "name": "srijith",
      "phone": "1234",
      "language": "en",
      "role": "Doctor",
      "password": "$2a$10$N8m4aUmstBiL46uArMdp6.kIJl8XEQMm65w0Z9iFgYfczTIJhCVtm",
      "centre_id": "centre_chn_2",
      "createdAt": "2026-10-15T14:10:34.237Z",
      "updatedAt": "2026-10-15T14:10:34.237Z"
    },
    {
      "_id": "use_1792073628469_up9rl",
      "name": "senthil",
      "phone": "123",
      "language": "en",
      "role": "Patient",
      "password": "$2a$10$QzAP9mI.PZ3tlw44amWQ2uLO2aBG2jmK1QSYD6qtIOOlFwO6pm0nu",
      "centre_id": null,
      "createdAt": "2026-10-15T14:13:48.469Z",
      "updatedAt": "2026-10-15T14:13:48.469Z"
    },
    {
      "_id": "use_1792074108126_phski",
      "name": "sentamil",
      "phone": "111",
      "language": "en",
      "role": "Nurse",
      "password": "$2a$10$p79Z0RwhVYTTywhhNvyO9e2gsSmtCJnZdDrYj75Yp6sReYPkppEmy",
      "centre_id": "centre_1",
      "createdAt": "2026-10-15T14:21:48.126Z",
      "updatedAt": "2026-10-15T14:21:48.126Z"
    }
  ],
  "doctors": [
    {},
    {
      "_id": "doc_1792072522905_w05ey",
      "user_id": "use_1792072522891_h6gsp",
      "name": "suresh",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_1",
      "hospital_id": "centre_1",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T13:55:22.905Z",
      "updatedAt": "2026-10-15T13:55:22.905Z"
    },
    {
      "_id": "doc_1792072585461_sky0k",
      "user_id": "use_1792072585453_im1fu",
      "name": "simhan",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_1",
      "hospital_id": "centre_1",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T13:56:25.461Z",
      "updatedAt": "2026-10-15T13:56:25.461Z"
    },
    {
      "_id": "doc_1792072841879_sgv2d",
      "user_id": "use_1792072841868_h892o",
      "name": "siddharth",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_chn_2",
      "hospital_id": "centre_chn_2",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T14:00:41.879Z",
      "updatedAt": "2026-10-15T14:00:41.879Z"
    },
    {
      "_id": "doc_1792073110361_5t19i",
      "user_id": "use_1792073110350_6zxq5",
      "name": "santhosh",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_chn_2",
      "hospital_id": "centre_chn_2",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T14:05:10.362Z",
      "updatedAt": "2026-10-15T14:05:10.362Z"
    },
    {
      "_id": "doc_1792073434251_4yx35",
      "user_id": "use_1792073434237_4cxvl",
      "name": "srijith",
      "specialization": "General Physician",
      "availability": "Mon - Fri (9:00 AM - 5:00 PM)",
      "centre_id": "centre_chn_2",
      "hospital_id": "centre_chn_2",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "city": "Chennai",
      "profileCompleted": true,
      "createdAt": "2026-10-15T14:10:34.251Z",
      "updatedAt": "2026-10-15T14:10:34.252Z"
    }
  ],
  "centres": [
    {
      "_id": "centre_1",
      "name": "Fortis Malar Hospital",
      "location": "52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020",
      "city": "Chennai",
      "type": "Hospital",
      "phone": "+91 44 4289 2222",
      "createdAt": "2026-09-26T12:38:41.941Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "52, 1st Main Road, Gandhi Nagar, Adyar, Chennai - 600020",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_chn_2",
      "name": "Apollo Hospitals Greams Road",
      "location": "21 Greams Lane, Thousand Lights, Chennai",
      "city": "Chennai",
      "type": "Hospital",
      "phone": "+91 44 2829 0200",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "21 Greams Lane, Thousand Lights, Chennai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_chn_3",
      "name": "Adyar Primary Health Centre",
      "location": "3rd Cross Street, Gandhinagar, Adyar, Chennai",
      "city": "Chennai",
      "type": "Clinic",
      "phone": "+91 44 2441 5533",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "3rd Cross Street, Gandhinagar, Adyar, Chennai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_chn_4",
      "name": "Apollo 24|7 Pharmacy T. Nagar",
      "location": "45 Venkatnarayana Road, T. Nagar, Chennai",
      "city": "Chennai",
      "type": "Pharmacy",
      "phone": "+91 44 2434 8899",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Chennai",
      "address": "45 Venkatnarayana Road, T. Nagar, Chennai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_1",
      "name": "Coimbatore Medical College Hospital",
      "location": "Trichy Road, Coimbatore",
      "city": "Coimbatore",
      "type": "Hospital",
      "phone": "+91 422 230 1393",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "Trichy Road, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_2",
      "name": "Ganga Hospital & Trauma Care",
      "location": "313 Mettupalayam Road, Coimbatore",
      "city": "Coimbatore",
      "type": "Hospital",
      "phone": "+91 422 248 5000",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "313 Mettupalayam Road, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_3",
      "name": "RS Puram Urban Health Clinic",
      "location": "DB Road, RS Puram, Coimbatore",
      "city": "Coimbatore",
      "type": "Clinic",
      "phone": "+91 422 254 1122",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "DB Road, RS Puram, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_cbe_4",
      "name": "MedPlus Pharmacy Gandhipuram",
      "location": "Cross Cut Road, Gandhipuram, Coimbatore",
      "city": "Coimbatore",
      "type": "Pharmacy",
      "phone": "+91 422 223 4455",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Coimbatore",
      "address": "Cross Cut Road, Gandhipuram, Coimbatore",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_1",
      "name": "Government Rajaji Hospital",
      "location": "Panagal Road, Shenoy Nagar, Madurai",
      "city": "Madurai",
      "type": "Hospital",
      "phone": "+91 452 253 2535",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "Panagal Road, Shenoy Nagar, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_2",
      "name": "Meenakshi Mission Hospital & Research Centre",
      "location": "Melur Road, Madurai",
      "city": "Madurai",
      "type": "Hospital",
      "phone": "+91 452 258 8000",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "Melur Road, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_3",
      "name": "KK Nagar Community Clinic",
      "location": "80 Feet Road, KK Nagar, Madurai",
      "city": "Madurai",
      "type": "Clinic",
      "phone": "+91 452 252 6677",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "80 Feet Road, KK Nagar, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_mdu_4",
      "name": "Apollo Pharmacy Goripalayam",
      "location": "Alagar Kovil Road, Goripalayam, Madurai",
      "city": "Madurai",
      "type": "Pharmacy",
      "phone": "+91 452 253 1188",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Tamil Nadu",
      "district": "Madurai",
      "address": "Alagar Kovil Road, Goripalayam, Madurai",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_1",
      "name": "Victoria Hospital & Medical College",
      "location": "Fort Road, Near City Market, Bengaluru",
      "city": "Bengaluru",
      "type": "Hospital",
      "phone": "+91 80 2670 1150",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "Fort Road, Near City Market, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_2",
      "name": "Manipal Hospital HAL Old Airport Road",
      "location": "98 HAL Old Airport Rd, Kodihalli, Bengaluru",
      "city": "Bengaluru",
      "type": "Hospital",
      "phone": "+91 80 2502 4444",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "98 HAL Old Airport Rd, Kodihalli, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_3",
      "name": "Koramangala Primary Health Centre",
      "location": "5th Block, Koramangala, Bengaluru",
      "city": "Bengaluru",
      "type": "Clinic",
      "phone": "+91 80 2553 1244",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "5th Block, Koramangala, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_blr_4",
      "name": "Apollo Pharmacy Indiranagar",
      "location": "100 Feet Road, Indiranagar, Bengaluru",
      "city": "Bengaluru",
      "type": "Pharmacy",
      "phone": "+91 80 2521 3344",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Karnataka",
      "district": "Bengaluru Urban",
      "address": "100 Feet Road, Indiranagar, Bengaluru",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_1",
      "name": "Osmania General Hospital",
      "location": "Afzal Gunj, Hyderabad",
      "city": "Hyderabad",
      "type": "Hospital",
      "phone": "+91 40 2460 0121",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Afzal Gunj, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_2",
      "name": "Yashoda Hospitals Somajiguda",
      "location": "Raj Bhavan Road, Somajiguda, Hyderabad",
      "city": "Hyderabad",
      "type": "Hospital",
      "phone": "+91 40 4567 4567",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Raj Bhavan Road, Somajiguda, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_3",
      "name": "Banjara Hills Community Wellness Clinic",
      "location": "Road No. 12, Banjara Hills, Hyderabad",
      "city": "Hyderabad",
      "type": "Clinic",
      "phone": "+91 40 2339 8811",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Road No. 12, Banjara Hills, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_hyd_4",
      "name": "MedPlus Pharmacy HITEC City",
      "location": "Cyber Towers Junction, Madhapur, Hyderabad",
      "city": "Hyderabad",
      "type": "Pharmacy",
      "phone": "+91 40 6678 1234",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Telangana",
      "district": "Hyderabad",
      "address": "Cyber Towers Junction, Madhapur, Hyderabad",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_1",
      "name": "All India Institute of Medical Sciences (AIIMS)",
      "location": "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
      "city": "Delhi",
      "type": "Hospital",
      "phone": "+91 11 2658 8500",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "Sri Aurobindo Marg, Ansari Nagar, New Delhi",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_2",
      "name": "Safdarjung Hospital",
      "location": "Ring Road, Opposite AIIMS, New Delhi",
      "city": "Delhi",
      "type": "Hospital",
      "phone": "+91 11 2616 5060",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "Ring Road, Opposite AIIMS, New Delhi",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_3",
      "name": "Hauz Khas Dispensary & Polyclinic",
      "location": "E-Block, Hauz Khas, New Delhi",
      "city": "Delhi",
      "type": "Clinic",
      "phone": "+91 11 2656 3322",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "E-Block, Hauz Khas, New Delhi",
      "isActive": true,
      "pincode": ""
    },
    {
      "_id": "centre_del_4",
      "name": "Fortis HealthWorld Pharmacy Connaught Place",
      "location": "Inner Circle, Connaught Place, New Delhi",
      "city": "Delhi",
      "type": "Pharmacy",
      "phone": "+91 11 4151 7788",
      "createdAt": "2026-10-14T10:00:00.000Z",
      "state": "Delhi",
      "district": "New Delhi",
      "address": "Inner Circle, Connaught Place, New Delhi",
      "isActive": true,
      "pincode": ""
    }
  ],
  "appointments": [
    {},
    {
      "_id": "app_1792073705431_96or4",
      "user_id": "use_1792073628469_up9rl",
      "doctor_id": "doc_1792072522905_w05ey",
      "hospital_id": "centre_1",
      "centre_id": "centre_1",
      "date_time": "2026-10-16T03:30:00.000Z",
      "status": "Accepted",
      "createdAt": "2026-10-15T14:15:05.431Z",
      "updatedAt": "2026-10-15T14:15:20.017Z"
    }
  ],
  "records": [
    {},
    {
      "_id": "rec_1792073880002_ncb55",
      "user_id": "use_1792073628469_up9rl",
      "diagnosis": "Mild Fever",
      "notes": "Take Light Foods ",
      "doctor_id": "doc_1792072522905_w05ey",
      "createdAt": "2026-10-15T14:18:00.002Z",
      "updatedAt": "2026-10-15T14:18:00.002Z"
    }
  ],
  "reminders": [
    {},
    {
      "_id": "rem_1792073963737_j95za",
      "user_id": "use_1792073628469_up9rl",
      "medicine": "Paracetamol",
      "schedule": "Morning  & Night After meals (2 days)",
      "doctor_id": "doc_1792072522905_w05ey",
      "createdAt": "2026-10-15T14:19:23.737Z",
      "updatedAt": "2026-10-15T14:19:23.737Z"
    }
  ],
  "consultations": [
    {},
    {
      "_id": "con_1792074040610_j2dq1",
      "appointment_id": "app_1792073705431_96or4",
      "mode": "Audio-2G-GSM",
      "status": "Finished",
      "notes": "",
      "offer": {
        "sdp": "v=0\r\no=- 1262657151186872911 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS 029a8967-7e93-447e-a8d5-41e4a8754ede\r\nm=audio 9 UDP/TLS/RTP/SAVPF 111 63 9 0 8 13 110 126\r\nc=IN IP4 0.0.0.0\r\na=rtcp:9 IN IP4 0.0.0.0\r\na=ice-ufrag:OUWD\r\na=ice-pwd:XF0UidRQRwPZflQMyfpCrZ50\r\na=ice-options:trickle\r\na=fingerprint:sha-256 F7:FE:4C:6E:88:42:F4:7D:9D:BB:9C:C8:CC:48:F1:B5:25:23:F8:74:D2:F5:84:15:BC:CC:C8:39:02:EB:5E:9B\r\na=setup:actpass\r\na=mid:0\r\na=extmap:1 urn:ietf:params:rtp-hdrext:ssrc-audio-level\r\na=extmap:2 http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time\r\na=extmap:3 http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01\r\na=extmap:4 urn:ietf:params:rtp-hdrext:sdes:mid\r\na=sendrecv\r\na=msid:029a8967-7e93-447e-a8d5-41e4a8754ede c2abe166-dcc3-4d39-99a9-2da75a398b39\r\na=rtcp-mux\r\na=rtcp-rsize\r\na=rtcp-xr:rcvr-rtt=all\r\na=rtpmap:111 opus/48000/2\r\na=rtcp-fb:111 transport-cc\r\na=fmtp:111 minptime=10;useinbandfec=1\r\na=rtpmap:63 red/48000/2\r\na=fmtp:63 111/111\r\na=rtpmap:9 G722/8000\r\na=rtpmap:0 PCMU/8000\r\na=rtpmap:8 PCMA/8000\r\na=rtpmap:13 CN/8000\r\na=rtpmap:110 telephone-event/48000\r\na=rtpmap:126 telephone-event/8000\r\na=ssrc:32247800 cname:D3QOQ1zRFu7DY6VR\r\na=ssrc:32247800 msid:029a8967-7e93-447e-a8d5-41e4a8754ede c2abe166-dcc3-4d39-99a9-2da75a398b39\r\n",
        "type": "offer"
      },
      "answer": null,
      "candidates": [],
      "createdAt": "2026-10-15T14:20:40.610Z",
      "updatedAt": "2026-10-15T14:20:48.907Z"
    }
  ]
}
```

---

## Frontend - Configuration & Entry

<a id="file-frontend-packagejson"></a>
### File: `frontend/package.json`
**Path:** `healthCareSystem-main/frontend/package.json`  
**Size:** 517 bytes  

```json
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "oxlint",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^1.20.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8",
    "react-router-dom": "^7.18.4"
  },
  "devDependencies": {
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "oxlint": "^1.81.0",
    "vite": "^8.3.0"
  }
}
```

---

<a id="file-frontend-viteconfigjs"></a>
### File: `frontend/vite.config.js`
**Path:** `healthCareSystem-main/frontend/vite.config.js`  
**Size:** 213 bytes  

```javascript
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000
  }
})
```

---

<a id="file-frontend-indexhtml"></a>
### File: `frontend/index.html`
**Path:** `healthCareSystem-main/frontend/index.html`  
**Size:** 1,304 bytes  

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Rural Health Care System</title>
    <meta name="description" content="Digital healthcare platform for rural communities providing appointment scheduling, telemedicine, electronic health records, medicine reminders, and nearby healthcare centre directories." />
    <meta property="og:title" content="Rural Health Care System" />
    <meta property="og:description" content="Digital healthcare platform for rural communities providing appointment scheduling, telemedicine, electronic health records, medicine reminders, and nearby healthcare centre directories." />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Noto+Sans+Devanagari:wght@400;600;700&family=Noto+Sans+Tamil:wght@400;600;700&family=Noto+Sans+Telugu:wght@400;600;700&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

<a id="file-frontend-oxlintrcjson"></a>
### File: `frontend/.oxlintrc.json`
**Path:** `healthCareSystem-main/frontend/.oxlintrc.json`  
**Size:** 231 bytes  

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

---

<a id="file-frontend-gitignore"></a>
### File: `frontend/.gitignore`
**Path:** `healthCareSystem-main/frontend/.gitignore`  
**Size:** 253 bytes  

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

---

<a id="file-frontend-readmemd"></a>
### File: `frontend/README.md`
**Path:** `healthCareSystem-main/frontend/README.md`  
**Size:** 1,009 bytes  

```markdown
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.
```

---

<a id="file-frontend-src-mainjsx"></a>
### File: `frontend/src/main.jsx`
**Path:** `healthCareSystem-main/frontend/src/main.jsx`  
**Size:** 229 bytes  

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

---

<a id="file-frontend-src-indexcss"></a>
### File: `frontend/src/index.css`
**Path:** `healthCareSystem-main/frontend/src/index.css`  
**Size:** 1,258 bytes  

```css
:root {
  --primary-green: #059669;
  --primary-green-dark: #047857;
  --primary-green-light: #10b981;
  --green-border: #10b981;
  --green-border-light: #a7f3d0;
  --green-border-subtle: #d1fae5;
  --green-bg-light: #ecfdf5;
  --green-glow: rgba(16, 185, 129, 0.16);
  
  --text-main: #0f172a;
  --text-muted: #475569;
  --text-light: #64748b;
  
  --bg-page: #f8fafc;
  --bg-surface: #ffffff;
  
  --sans: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Noto Sans', 'Noto Sans Devanagari', 'Noto Sans Tamil', 'Noto Sans Telugu', sans-serif;
  
  font-family: var(--sans);
  color: var(--text-main);
  background-color: var(--bg-page);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f0fdf4;
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 20%),
    radial-gradient(circle at 90% 80%, rgba(5, 150, 105, 0.06) 0%, transparent 25%);
  min-height: 100vh;
  color: #0f172a;
}

#root {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

button, input, select, textarea {
  font-family: inherit;
}
```

---

<a id="file-frontend-src-appcss"></a>
### File: `frontend/src/App.css`
**Path:** `healthCareSystem-main/frontend/src/App.css`  
**Size:** 10,363 bytes  

```css
/* Healthcare Green Theme Styles */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

@keyframes pulseGlow {
  0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
  70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

/* Master Outer Container with Green Border */
.health-app-shell {
  background: #ffffff;
  border: 2px solid #10b981;
  border-top: 5px solid #059669;
  border-radius: 16px;
  box-shadow: 0 12px 35px -5px rgba(5, 150, 105, 0.12), 0 4px 12px rgba(0, 0, 0, 0.03);
  transition: border-color 0.3s ease;
  overflow: hidden;
}

/* Attractive Card with Green Border */
.green-card {
  background: #ffffff;
  border: 1.5px solid #a7f3d0;
  border-radius: 12px;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 2px 6px rgba(16, 185, 129, 0.04);
}

.green-card:hover {
  border-color: #10b981;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px -3px rgba(16, 185, 129, 0.15), 0 2px 6px rgba(0, 0, 0, 0.04);
}

/* Dashboard Centered 5-Grid Box Arrangement */
.dashboard-modules-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 1140px;
}

.dashboard-module-card {
  flex: 0 1 calc(33.333% - 20px);
  min-width: 280px;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  cursor: pointer;
  text-align: left;
}

@media (max-width: 980px) {
  .dashboard-module-card {
    flex: 0 1 calc(50% - 20px);
    max-width: 440px;
  }
}

@media (max-width: 640px) {
  .dashboard-module-card {
    flex: 1 1 100%;
    min-width: 100%;
    max-width: 100%;
  }
}

/* Interactive Navigation Tabs with Green Border */
.nav-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 10px 18px;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.18s ease;
  border: 1.5px solid #a7f3d0;
  background: #ffffff;
  color: #065f46;
  white-space: nowrap;
}

.nav-tab-btn:hover {
  border-color: #10b981;
  background: #ecfdf5;
  color: #047857;
  transform: translateY(-1px);
}

.nav-tab-btn.active {
  background: #059669;
  border-color: #047857;
  color: #ffffff;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
}

/* Primary Green Action Button */
.btn-green-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  border: 1.5px solid #047857;
  border-radius: 8px;
  padding: 12px 22px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 12px rgba(5, 150, 105, 0.25);
}

.btn-green-primary:hover {
  background: linear-gradient(135deg, #047857 0%, #065f46 100%);
  border-color: #065f46;
  box-shadow: 0 6px 16px rgba(5, 150, 105, 0.35);
  transform: translateY(-1px);
}

.btn-green-primary:active {
  transform: translateY(0);
}

/* Secondary Button with Green Border */
.btn-green-outline {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background: #ffffff;
  color: #059669;
  border: 1.5px solid #10b981;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.btn-green-outline:hover {
  background: #ecfdf5;
  border-color: #059669;
  color: #047857;
}

/* Form Inputs with Green Focus Border */
.form-input-green {
  width: 100%;
  padding: 11px 14px;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  font-size: 14px;
  color: #0f172a;
  background-color: #ffffff;
  transition: all 0.2s ease;
  outline: none;
  box-sizing: border-box;
}

.form-input-green:hover {
  border-color: #94a3b8;
}

.form-input-green:focus {
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
  background-color: #ffffff;
}

/* Green Badges & Status */
.badge-green {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #ecfdf5;
  border: 1px solid #6ee7b7;
  color: #065f46;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-green-dot {
  width: 8px;
  height: 8px;
  background-color: #10b981;
  border-radius: 50%;
  display: inline-block;
  animation: pulseGlow 2s infinite;
}

.badge-amber {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fffbeb;
  border: 1px solid #fcd34d;
  color: #b45309;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

.badge-red {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #b91c1c;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
}

/* Accept & Reject Action Buttons for Doctors and Nurses */
.btn-accept-green {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  border: 1.5px solid #047857;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: 0 2px 6px rgba(5, 150, 105, 0.25);
}

.btn-accept-green:hover {
  background: linear-gradient(135deg, #047857 0%, #065f46 100%);
  border-color: #065f46;
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(5, 150, 105, 0.35);
}

.btn-accept-green:active {
  transform: translateY(0);
}

.btn-reject-red {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #ffffff;
  color: #dc2626;
  border: 1.5px solid #f87171;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.18s ease;
}

.btn-reject-red:hover {
  background: #fef2f2;
  border-color: #dc2626;
  color: #b91c1c;
  transform: translateY(-1px);
}

.btn-reject-red:active {
  transform: translateY(0);
}

/* Hamburger Language Selector Button with Green Border */
.hamburger-lang-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  background-color: #ffffff;
  border: 2px solid #10b981 !important;
  border-radius: 10px;
  color: #065f46;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.14);
  transition: all 0.2s ease;
}

.hamburger-lang-btn:hover {
  background-color: #ecfdf5 !important;
  border-color: #059669 !important;
  color: #047857;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.22) !important;
}

.hamburger-lang-btn:active {
  transform: translateY(0);
}

/* Form Group Layout */
.form-group {
  margin-bottom: 16px;
}

.form-label {
  display: block;
  margin-bottom: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #334155;
}

/* Custom Scrollbar for Smooth UX */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
}

::-webkit-scrollbar-thumb {
  background: #a7f3d0;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #10b981;
}

/* Incoming Call Modal Overlay */
.incoming-call-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(15, 23, 42, 0.75);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: fadeIn 0.3s ease;
}

.incoming-call-card {
  background: #ffffff;
  border: 2px solid #10b981;
  border-radius: 20px;
  padding: 32px 28px;
  max-width: 440px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 40px rgba(16, 185, 129, 0.25), 0 0 0 1px rgba(16, 185, 129, 0.1);
  animation: popUp 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.incoming-call-ring-icon {
  width: 76px;
  height: 76px;
  margin: 0 auto 18px auto;
  border-radius: 50%;
  background: #ecfdf5;
  border: 2px solid #34d399;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 38px;
  animation: ringPulse 1.2s infinite ease-in-out;
}

@keyframes ringPulse {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    transform: scale(1.1);
    box-shadow: 0 0 0 20px rgba(16, 185, 129, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

@keyframes popUp {
  0% { transform: scale(0.8); opacity: 0; }
  100% { transform: scale(1); opacity: 1; }
}

.btn-accept-call {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(5, 150, 105, 0.3);
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-accept-call:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(5, 150, 105, 0.4);
}

.btn-decline-call {
  background: #fef2f2;
  color: #b91c1c;
  border: 1.5px solid #fca5a5;
  padding: 12px 24px;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-decline-call:hover {
  background: #fee2e2;
  transform: translateY(-2px);
}

/* Persistent Floating Call Header Banner */
.floating-call-banner {
  position: sticky;
  top: 12px;
  z-index: 9000;
  background: linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%);
  border: 2px solid #10b981;
  border-radius: 14px;
  padding: 12px 20px;
  margin-bottom: 20px;
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.22);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  animation: slideDown 0.3s ease;
}

@keyframes slideDown {
  0% { transform: translateY(-10px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

/* Custom masked password input to prevent browser breached-password popups */
.password-mask-input {
  -webkit-text-security: disc !important;
  text-security: disc !important;
  letter-spacing: 2px;
}

.password-mask-input.unmasked {
  -webkit-text-security: none !important;
  text-security: none !important;
  letter-spacing: normal;
}
```

---

## Frontend - Services, Internationalization & Core App

<a id="file-frontend-src-services-apijs"></a>
### File: `frontend/src/services/api.js`
**Path:** `healthCareSystem-main/frontend/src/services/api.js`  
**Size:** 946 bytes  

```javascript
import axios from 'axios';

// Create an Axios instance pointing to the unified backend server
const API = axios.create({
  baseURL: '/api',
});

// Automatically attach JWT token to requests if available in localStorage
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Response interceptor to handle authentication expiry cleanly
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('auth-logout'));
      }
    }
    return Promise.reject(error);
  }
);

export default API;
```

---

<a id="file-frontend-src-i18n-translationsjs"></a>
### File: `frontend/src/i18n/translations.js`
**Path:** `healthCareSystem-main/frontend/src/i18n/translations.js`  
**Size:** 67,164 bytes  

```javascript
// Multi-language translations for Rural Health Care System
// Supported languages: English (en), Hindi (hi), Tamil (ta), Telugu (te)

export const LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧', hint: 'Default language' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', hint: 'ग्रामीण समुदाय के लिए' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', hint: 'கிராமப்புற சமூகத்திற்கு' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', hint: 'గ్రామీణ ప్రజల కోసం' }
];

export const translations = {
  en: {
    // App Header & Branding
    appName: 'Rural Health Care System',
    appTagline: 'Community Health Access Platform',
    selectLanguage: 'Language',
    changeLanguage: 'Change Language',
    dbActive: 'Database Active',
    dbConnected: 'MongoDB Connected',

    // Hamburger & Language Drawer
    menuTitle: 'Menu & Language',
    chooseLanguageTitle: 'Select Your Language',
    chooseLanguageSubtitle: 'The entire interface will update immediately',
    closeMenu: 'Close Menu',
    activeLanguageBadge: 'Active',

    // Auth & Login / Register
    login: 'Login',
    register: 'Register New Account',
    registerTitle: 'Create Patient or Doctor Account',
    loginTitle: 'Welcome Back, Please Login',
    fullName: 'Full Name:',
    fullNamePlaceholder: 'e.g. Dr. Ramesh Kumar or Priya Sharma',
    phoneNumber: 'Phone Number (Username):',
    phonePlaceholder: 'e.g. 9876543210',
    password: 'Password:',
    passwordPlaceholder: 'Enter your password',
    accountRole: 'Account Role:',
    rolePatient: 'Patient',
    roleDoctor: 'Doctor',
    roleNurse: 'Nurse',
    medicalSpecialization: 'Medical Specialization:',
    specializationPlaceholder: 'e.g. General Physician, Pediatrician, Cardiologist',
    consultationAvailability: 'Consultation Availability:',
    availabilityPlaceholder: 'e.g. Mon - Fri (9:00 AM - 5:00 PM)',
    preferredLanguage: 'Preferred Communication Language:',
    registerBtn: 'Register Account',
    loginBtn: 'Login to Portal',
    alreadyRegistered: 'Already registered? Login here',
    dontHaveAccount: "Don't have an account? Register here",
    quickDemoTitle: 'Quick Demo Sign In:',
    fillDemoPatient: 'Fill Demo Patient',
    fillDemoDoctor: 'Fill Demo Doctor',

    // Dashboard Header
    dashboardTitle: 'Rural Health Care Dashboard',
    welcomeUser: 'Welcome,',
    logout: 'Logout',

    // Navigation Tabs
    navHome: 'Home',
    navAppointments: 'Appointments',
    navTelemedicine: 'Telemedicine',
    navRecords: 'Records',
    navReminders: 'Reminders',
    navCentres: 'Nearby Centres',

    // Overview Tab
    overviewTitle: 'Healthcare Portal Overview',
    overviewDesc: 'Select a module from the menu above to manage consultations, access medical history, set pill reminders, or locate healthcare centres in your area.',
    cardAppointmentsTitle: '📅 Appointments',
    cardAppointmentsDesc: 'Book and track scheduled consultations with verified specialist doctors.',
    cardTelemedicineTitle: '🎙️ Telemedicine',
    cardTelemedicineDesc: 'Bandwidth-optimized audio consultations tailored for rural connectivity.',
    cardRecordsTitle: '📁 Medical Records',
    cardRecordsDesc: 'Access clinical diagnosis, physician notes, and prescription history.',
    cardRemindersTitle: '⏰ Medicine Reminders',
    cardRemindersDesc: 'Never miss daily doses with timely medicine dosage reminders.',
    cardCentresTitle: '🏥 Health Centres',
    cardCentresDesc: 'Find nearest primary health centers, government hospitals, and pharmacies.',

    // Appointments Tab
    bookAppointmentTitle: 'Book Doctor Appointment',
    selectDoctorLabel: 'Select Specialist Doctor:',
    chooseDoctorOption: '-- Choose a Doctor --',
    appointmentDateTimeLabel: 'Date & Time:',
    appointmentDateLabel: 'Appointment Date:',
    appointmentTimeSlotLabel: 'Time Slot (9:00 AM - 5:00 PM):',
    availableSlotsScrollerTitle: 'Select 30-Minute Consultation Slot:',
    workingHoursNotice: 'Clinic Working Hours: 9:00 AM - 5:00 PM (30 Mins Interval)',
    selectedSlotSummary: 'Selected Slot:',
    bookNowBtn: 'Book Appointment Now',
    patientRoleNotice: 'Logged in as {role}. Only Patients can book appointments with registered doctors.',
    yourAppointmentsTitle: 'Your Scheduled Appointments',
    noAppointmentsFound: 'No appointments found yet.',
    doctorLabel: 'Doctor:',
    assignedSpecialist: 'Assigned Specialist',
    dateTimeLabel: 'Date/Time:',
    statusLabel: 'Status:',
    statusScheduled: 'Scheduled',
    statusCompleted: 'Completed',
    statusPending: 'Pending Approval',
    statusAccepted: 'Accepted',
    statusRejected: 'Rejected',
    patientLabel: 'Patient:',
    patientPhone: 'Phone:',
    acceptBtn: 'Accept',
    rejectBtn: 'Reject',
    doctorNurseActions: 'Doctor & Nurse Actions:',
    appointmentAcceptedMsg: 'Appointment accepted successfully!',
    appointmentRejectedMsg: 'Appointment has been rejected.',
    manageAppointmentsTitle: 'Patient Appointments for Review',

    // Telemedicine Tab
    telemedicineHeading: 'Telemedicine / Remote Audio Consultation',
    telemedicineDoctorDesc: 'Conduct low-latency remote audio consultation calls with patients.',
    telemedicinePatientDesc: 'Connect directly with your doctor over an audio call from home.',
    audioChannelTitle: 'Rural Bandwidth Audio Channel',
    audioChannelDesc: 'Optimized for low-bandwidth 2G/3G mobile networks in rural and village areas.',
    startCallBtn: '📞 Start / Join Audio Consultation',
    callConnectingMsg: 'Connecting to secure rural telemedicine channel... Audio session active.',

    // Medical Records Tab
    recordsHeading: 'Patient Healthcare Records',
    noRecordsFound: 'No medical records found.',
    diagnosisLabel: 'Diagnosis:',
    prescriptionNotesLabel: 'Notes & Prescription:',
    prescribedBy: 'Prescribed by:',
    editRecordBtn: 'Edit Record',
    saveChangesBtn: 'Save Changes',
    cancelBtn: 'Cancel',
    addNewRecordBtn: '+ Add Patient Record',
    recordUpdatedSuccess: 'Medical record updated successfully! Visible on both dashboards.',
    recordCreatedSuccess: 'Medical record created successfully! Visible on patient dashboard.',
    selectPatientLabel: 'Select Accepted Patient:',
    filterByPatient: 'Filter by Patient:',
    allPatientsOption: 'All Patients',
    noAcceptedPatientsNotice: 'No patients with accepted appointments yet. Once you accept an appointment schedule, the patient will appear here for record creation & editing.',
    goToRecordsBtn: '📝 Medical Records',
    lastUpdatedLabel: 'Last updated:',
    doctorNurseEditorTitle: 'Clinical Records & Prescription Management',
    patientRecordsSubtitle: 'Review your official medical records, prescriptions, and diagnosis notes entered by healthcare staff.',
    editRecordTitle: 'Edit Medical Record',
    newRecordTitle: 'Create New Medical Record for Accepted Patient',
    diagnosisPlaceholder: 'e.g. Acute Viral Fever, Type 2 Diabetes, Hypertension...',
    prescriptionPlaceholder: 'e.g. Tab Paracetamol 650mg TDS x 3 days, drink plenty of fluids...',

    // Medicine Reminders Tab
    remindersHeading: 'Medicine Schedules & Dosage Reminders',
    medNameLabel: 'Medicine Name & Dosage:',
    medNamePlaceholder: 'e.g. Paracetamol 500mg, Amoxicillin 250mg',
    medScheduleLabel: 'Schedule & Instructions:',
    medSchedulePlaceholder: 'e.g. Morning & Night after meals, Once daily at 8 AM',
    addReminderBtn: 'Add Medicine Reminder',
    activeRemindersTitle: 'Active Reminders',
    noRemindersFound: 'No active medicine reminders set.',
    medicineLabel: 'Medicine:',
    scheduleLabel: 'Schedule:',
    patientRemindersSubtab: '👥 Patient Reminders',
    myRemindersSubtab: '🩺 My Personal Reminders',
    selectPatientForReminder: 'Select Patient:',
    choosePatientOption: '-- Choose Patient --',
    prescribeReminderTitle: 'Prescribe / Set Patient Medicine Reminder',
    updateReminderTitle: 'Update Medicine Reminder',
    saveReminderChangesBtn: 'Save Changes',
    cancelEditReminderBtn: 'Cancel',
    editReminderBtn: 'Edit',
    deleteReminderBtn: 'Delete',
    prescribedByDoctor: 'Prescribed by',
    doctorPrescribedBadge: 'Doctor Prescribed',
    personalReminderBadge: 'Personal Schedule',
    liveSyncBadge: 'Live Synced',
    refreshRemindersBtn: 'Refresh',
    reminderUpdatedSuccess: 'Medicine reminder updated successfully! The patient will see the latest dosage.',
    reminderDeletedSuccess: 'Medicine reminder deleted successfully.',
    noPatientRemindersNotice: 'No medicine reminders registered for this patient yet.',
    noPersonalRemindersNotice: 'No personal reminders set.',

    // Nearby Centres Tab
    centresHeading: 'Nearby Hospitals, Health Clinics & Pharmacies',
    selectCityLabel: 'Select City / Region:',
    allCitiesOption: 'All Cities (Tamil Nadu & Metros)',
    filterByTypeLabel: 'Facility Type:',
    allTypesOption: 'All Facilities (Hospitals, Clinics, Pharmacies)',
    showingCentresCount: 'Showing {count} verified healthcare facilities',
    callFacilityLabel: 'Call Facility',
    locationLabel: 'Location:',
    noCentresFound: 'No nearby centres listed for this selection.',

    // Alerts & Notifications
    loginSuccessMsg: 'Logged in successfully as {name} ({role})!',
    loginFailedMsg: 'Login failed. Please check your phone number and password.',
    regSuccessMsg: 'Registration successful! Please login with your phone number and password.',
    regFailedMsg: 'Registration failed. Please try again.',
    appointmentSuccessMsg: 'Appointment booked successfully with doctor!',
    appointmentErrorMsg: 'Could not book appointment. Please try again.',
    reminderSuccessMsg: 'Medicine reminder saved successfully!',
    reminderErrorMsg: 'Could not save reminder. Please try again.'
  },

  hi: {
    // App Header & Branding
    appName: 'ग्रामीण स्वास्थ्य सेवा प्रणाली',
    appTagline: 'सामुदायिक स्वास्थ्य सुविधा मंच',
    selectLanguage: 'भाषा',
    changeLanguage: 'भाषा बदलें',
    dbActive: 'डेटाबेस सक्रिय',
    dbConnected: 'मोंगोडीबी कनेक्टेड',

    // Hamburger & Language Drawer
    menuTitle: 'मेनू और भाषा चयन',
    chooseLanguageTitle: 'अपनी भाषा चुनें',
    chooseLanguageSubtitle: 'पूरा इंटरफ़ेस तुरंत इस भाषा में बदल जाएगा',
    closeMenu: 'मेनू बंद करें',
    activeLanguageBadge: 'सक्रिय',

    // Auth & Login / Register
    login: 'लॉग इन करें',
    register: 'नया खाता बनाएं',
    registerTitle: 'मरीज़ या डॉक्टर खाता पंजीकृत करें',
    loginTitle: 'पुनः स्वागत है, कृपया लॉग इन करें',
    fullName: 'पूरा नाम:',
    fullNamePlaceholder: 'जैसे: डॉ. रमेश कुमार या प्रिया शर्मा',
    phoneNumber: 'फ़ोन नंबर (यूज़रनेम):',
    phonePlaceholder: 'जैसे: 9876543210',
    password: 'पासवर्ड:',
    passwordPlaceholder: 'अपना पासवर्ड दर्ज करें',
    accountRole: 'खाता भूमिका:',
    rolePatient: 'मरीज़ (Patient)',
    roleDoctor: 'डॉक्टर (Doctor)',
    roleNurse: 'नर्स (Nurse)',
    medicalSpecialization: 'चिकित्सा विशेषज्ञता:',
    specializationPlaceholder: 'जैसे: सामान्य चिकित्सक, बाल रोग विशेषज्ञ, हृदय रोग विशेषज्ञ',
    consultationAvailability: 'परामर्श उपलब्धता:',
    availabilityPlaceholder: 'जैसे: सोम - शुक्र (सुबह 9:00 - शाम 5:00)',
    preferredLanguage: 'पसंदीदा बातचीत की भाषा:',
    registerBtn: 'खाता पंजीकृत करें',
    loginBtn: 'पोर्टल में लॉग इन करें',
    alreadyRegistered: 'पहले से पंजीकृत हैं? यहाँ लॉग इन करें',
    dontHaveAccount: 'खाता नहीं है? यहाँ नया पंजीकरण करें',
    quickDemoTitle: 'त्वरित डेमो लॉगिन:',
    fillDemoPatient: 'डेमो मरीज़ भरें',
    fillDemoDoctor: 'डेमो डॉक्टर भरें',

    // Dashboard Header
    dashboardTitle: 'ग्रामीण स्वास्थ्य सेवा डैशबोर्ड',
    welcomeUser: 'स्वागत है,',
    logout: 'लॉग आउट',

    // Navigation Tabs
    navHome: 'होम',
    navAppointments: 'अपॉइंटमेंट',
    navTelemedicine: 'टेलीमेडिसिन',
    navRecords: 'स्वास्थ्य रिकॉर्ड',
    navReminders: 'दवा अनुस्मारक',
    navCentres: 'नज़दीकी केंद्र',

    // Overview Tab
    overviewTitle: 'स्वास्थ्य पोर्टल अवलोकन',
    overviewDesc: 'अपॉइंटमेंट बुक करने, मेडिकल रिकॉर्ड देखने, दवा के समय का अनुस्मारक सेट करने या अपने क्षेत्र में नज़दीकी स्वास्थ्य केंद्र खोजने के लिए ऊपर दिए गए मेनू का उपयोग करें।',
    cardAppointmentsTitle: '📅 अपॉइंटमेंट',
    cardAppointmentsDesc: 'सत्यापित विशेषज्ञ डॉक्टरों के साथ परामर्श का समय तय करें और ट्रैक करें।',
    cardTelemedicineTitle: '🎙️ टेलीमेडिसिन',
    cardTelemedicineDesc: 'कमज़ोर इंटरनेट नेटवर्क वाले ग्रामीण क्षेत्रों के लिए अनुकूलित ऑडियो परामर्श।',
    cardRecordsTitle: '📁 स्वास्थ्य रिकॉर्ड',
    cardRecordsDesc: 'डॉक्टर द्वारा दी गई निदान रिपोर्ट, नैदानिक नोट्स और पर्चे का इतिहास देखें।',
    cardRemindersTitle: '⏰ दवा अनुस्मारक',
    cardRemindersDesc: 'समय पर खुराक लेने के लिए दवा अनुस्मारक सेट करें ताकि दवा न छूटे।',
    cardCentresTitle: '🏥 स्वास्थ्य केंद्र',
    cardCentresDesc: 'नज़दीकी प्राथमिक स्वास्थ्य केंद्र, सरकारी अस्पताल और दवा दुकानें खोजें।',

    // Appointments Tab
    bookAppointmentTitle: 'डॉक्टर अपॉइंटमेंट बुक करें',
    selectDoctorLabel: 'विशेषज्ञ डॉक्टर चुनें:',
    chooseDoctorOption: '-- डॉक्टर का चयन करें --',
    appointmentDateTimeLabel: 'तारीख और समय:',
    appointmentDateLabel: 'अपॉइंटमेंट की तारीख:',
    appointmentTimeSlotLabel: 'समय स्लॉट (सुबह 9:00 - शाम 5:00):',
    availableSlotsScrollerTitle: '30 मिनट का परामर्श स्लॉट चुनें:',
    workingHoursNotice: 'क्लिनिक का समय: सुबह 9:00 - शाम 5:00 (30 मिनट का अंतराल)',
    selectedSlotSummary: 'चयनित स्लॉट:',
    bookNowBtn: 'अभी अपॉइंटमेंट बुक करें',
    patientRoleNotice: '{role} के रूप में लॉग इन हैं। केवल मरीज़ ही डॉक्टरों के साथ अपॉइंटमेंट बुक कर सकते हैं।',
    yourAppointmentsTitle: 'आपके निर्धारित अपॉइंटमेंट',
    noAppointmentsFound: 'अभी तक कोई अपॉइंटमेंट नहीं मिला।',
    doctorLabel: 'डॉक्टर:',
    assignedSpecialist: 'नियुक्त विशेषज्ञ',
    dateTimeLabel: 'तारीख/समय:',
    statusLabel: 'स्थिति:',
    statusScheduled: 'निर्धारित (Scheduled)',
    statusCompleted: 'पूर्ण (Completed)',
    statusPending: 'अनुमोदन लंबित',
    statusAccepted: 'स्वीकृत (Accepted)',
    statusRejected: 'अस्वीकृत (Rejected)',
    patientLabel: 'मरीज़:',
    patientPhone: 'फ़ोन:',
    acceptBtn: 'स्वीकार करें',
    rejectBtn: 'अस्वीकार करें',
    doctorNurseActions: 'डॉक्टर और नर्स कार्रवाई:',
    appointmentAcceptedMsg: 'अपॉइंटमेंट सफलतापूर्वक स्वीकार कर लिया गया!',
    appointmentRejectedMsg: 'अपॉइंटमेंट अस्वीकार कर दिया गया है।',
    manageAppointmentsTitle: 'समीक्षा हेतु मरीज़ अपॉइंटमेंट',

    // Telemedicine Tab
    telemedicineHeading: 'टेलीमेडिसिन / दूरस्थ ऑडियो परामर्श',
    telemedicineDoctorDesc: 'मरीजों के साथ त्वरित रिमोट ऑडियो परामर्श कॉल शुरू और प्रबंधित करें।',
    telemedicinePatientDesc: 'घर बैठे अपने डॉक्टर के साथ सुरक्षित ऑडियो कॉल से जुड़ें।',
    audioChannelTitle: 'ग्रामीण बैंडविड्थ ऑडियो चैनल',
    audioChannelDesc: 'ग्रामीण और दूरदराज़ क्षेत्रों के 2G/3G मोबाइल नेटवर्क के लिए विशेष रूप से अनुकूलित।',
    startCallBtn: '📞 ऑडियो परामर्श शुरू करें / शामिल हों',
    callConnectingMsg: 'सुरक्षित ग्रामीण टेलीमेडिसिन चैनल से कनेक्ट हो रहा है... ऑडियो सत्र सक्रिय है।',

    // Medical Records Tab
    recordsHeading: 'मरीज़ स्वास्थ्य एवं निदान रिकॉर्ड',
    noRecordsFound: 'कोई मेडिकल रिकॉर्ड उपलब्ध नहीं है।',
    diagnosisLabel: 'निदान (रोग पहचान):',
    prescriptionNotesLabel: 'दवा नुस्खा व डॉक्टर के नोट्स:',
    prescribedBy: 'डॉक्टर द्वारा निर्धारित:',
    editRecordBtn: 'रिकॉर्ड संपादित करें',
    saveChangesBtn: 'परिवर्तन सहेजें',
    cancelBtn: 'रद्द करें',
    addNewRecordBtn: '+ नया मेडिकल रिकॉर्ड जोड़ें',
    recordUpdatedSuccess: 'मेडिकल रिकॉर्ड सफलतापूर्वक अपडेट किया गया! दोनों डैशबोर्ड पर दिखाई देगा।',
    recordCreatedSuccess: 'मेडिकल रिकॉर्ड सफलतापूर्वक बनाया गया! मरीज़ डैशबोर्ड पर दिखाई देगा।',
    selectPatientLabel: 'स्वीकृत मरीज़ चुनें:',
    filterByPatient: 'मरीज़ के अनुसार फ़िल्टर करें:',
    allPatientsOption: 'सभी मरीज़',
    noAcceptedPatientsNotice: 'अभी तक कोई स्वीकृत अपॉइंटमेंट वाला मरीज़ नहीं है। रिकॉर्ड बनाने व संपादित करने के लिए पहले अपॉइंटमेंट स्वीकार करें।',
    goToRecordsBtn: '📝 मेडिकल रिकॉर्ड',
    lastUpdatedLabel: 'अंतिम अपडेट:',
    doctorNurseEditorTitle: 'क्लिनिकल रिकॉर्ड और प्रिस्क्रिप्शन प्रबंधन',
    patientRecordsSubtitle: 'स्वास्थ्य कर्मचारियों द्वारा दर्ज किए गए अपने आधिकारिक मेडिकल रिकॉर्ड, दवा नुस्खे और निदान नोट्स देखें।',
    editRecordTitle: 'मेडिकल रिकॉर्ड संपादित करें',
    newRecordTitle: 'स्वीकृत मरीज़ के लिए नया मेडिकल रिकॉर्ड बनाएं',
    diagnosisPlaceholder: 'जैसे: वायरल बुखार, टाइप 2 मधुमेह, उच्च रक्तचाप...',
    prescriptionPlaceholder: 'जैसे: पैरासिटामोल 650mg दिन में 3 बार 3 दिन तक, पर्याप्त पानी पिएं...',

    // Medicine Reminders Tab
    remindersHeading: 'दवा समय सारणी और खुराक अनुस्मारक',
    medNameLabel: 'दवा का नाम और मात्रा:',
    medNamePlaceholder: 'जैसे: पैरासिटामोल 500mg, अमोक्सिसिलिन 250mg',
    medScheduleLabel: 'खुराक का समय और निर्देश:',
    medSchedulePlaceholder: 'जैसे: सुबह और रात भोजन के बाद, रोजाना सुबह 8 बजे',
    addReminderBtn: 'दवा अनुस्मारक जोड़ें',
    activeRemindersTitle: 'सक्रिय दवा अनुस्मारक',
    noRemindersFound: 'कोई सक्रिय दवा अनुस्मारक सेट नहीं है।',
    medicineLabel: 'दवा:',
    scheduleLabel: 'समय सारणी:',
    patientRemindersSubtab: '👥 मरीज अनुस्मारक',
    myRemindersSubtab: '🩺 मेरा निजी अनुस्मारक',
    selectPatientForReminder: 'मरीज चुनें:',
    choosePatientOption: '-- मरीज चुनें --',
    prescribeReminderTitle: 'मरीज के लिए दवा अनुस्मारक सेट करें',
    updateReminderTitle: 'दवा अनुस्मारक अपडेट करें',
    saveReminderChangesBtn: 'परिवर्तन सहेजें',
    cancelEditReminderBtn: 'रद्द करें',
    editReminderBtn: 'संपादित करें',
    deleteReminderBtn: 'हटाएं',
    prescribedByDoctor: 'द्वारा निर्धारित',
    doctorPrescribedBadge: 'डॉक्टर द्वारा निर्धारित',
    personalReminderBadge: 'व्यक्तिगत समय सारणी',
    liveSyncBadge: 'लाइव सिंक सक्रिय',
    refreshRemindersBtn: 'ताज़ा करें',
    reminderUpdatedSuccess: 'दवा अनुस्मारक सफलतापूर्वक अपडेट हो गया! मरीज को नवीनतम खुराक दिखेगी।',
    reminderDeletedSuccess: 'दवा अनुस्मारक सफलतापूर्वक हटा दिया गया।',
    noPatientRemindersNotice: 'इस मरीज के लिए अभी कोई दवा अनुस्मारक नहीं है।',
    noPersonalRemindersNotice: 'कोई व्यक्तिगत अनुस्मारक सेट नहीं है।',

    // Nearby Centres Tab
    centresHeading: 'नज़दीकी अस्पताल, क्लीनिक और दवा की दुकानें',
    selectCityLabel: 'शहर / क्षेत्र चुनें:',
    allCitiesOption: 'सभी शहर (तमिलनाडु और मेट्रो शहर)',
    filterByTypeLabel: 'सुविधा प्रकार:',
    allTypesOption: 'सभी सुविधाएं (अस्पताल, क्लीनिक, फ़ार्मेसी)',
    showingCentresCount: '{count} सत्यापित स्वास्थ्य सुविधाएं उपलब्ध हैं',
    callFacilityLabel: 'फ़ोन करें',
    locationLabel: 'स्थान व पता:',
    noCentresFound: 'इस चयन के लिए कोई नज़दीकी केंद्र सूचीबद्ध नहीं है।',

    // Alerts & Notifications
    loginSuccessMsg: '{name} ({role}) के रूप में सफलतापूर्वक लॉग इन किया!',
    loginFailedMsg: 'लॉग इन विफल रहा। कृपया अपना फ़ोन नंबर और पासवर्ड जांचें।',
    regSuccessMsg: 'पंजीकरण सफल रहा! कृपया अपने फ़ोन नंबर और पासवर्ड से लॉग इन करें।',
    regFailedMsg: 'पंजीकरण विफल रहा। कृपया पुन: प्रयास करें।',
    appointmentSuccessMsg: 'डॉक्टर के साथ अपॉइंटमेंट सफलतापूर्वक बुक हो गया!',
    appointmentErrorMsg: 'अपॉइंटमेंट बुक नहीं हो सका। कृपया पुन: प्रयास करें।',
    reminderSuccessMsg: 'दवा अनुस्मारक सफलतापूर्वक सहेजा गया!',
    reminderErrorMsg: 'अनुस्मारक सहेजा नहीं जा सका। कृपया पुन: प्रयास करें।'
  },

  ta: {
    // App Header & Branding
    appName: 'கிராமப்புற சுகாதார சேவை அமைப்பு',
    appTagline: 'சமூக சுகாதார அணுகல் தளம்',
    selectLanguage: 'மொழி',
    changeLanguage: 'மொழியை மாற்றுக',
    dbActive: 'தரவுத்தளம் செயலில் உள்ளது',
    dbConnected: 'மோங்கோடிபி இணைக்கப்பட்டுள்ளது',

    // Hamburger & Language Drawer
    menuTitle: 'மெனு & மொழித் தேர்வு',
    chooseLanguageTitle: 'உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்',
    chooseLanguageSubtitle: 'முழு பயன்பாடும் உடனடியாக இந்த மொழியில் மாறும்',
    closeMenu: 'மெனுவை மூடு',
    activeLanguageBadge: 'செயலில்',

    // Auth & Login / Register
    login: 'உள்நுழைக',
    register: 'புதிய கணக்கை பதிவு செய்க',
    registerTitle: 'நோயாளி அல்லது மருத்துவர் கணக்கை உருவாக்குங்கள்',
    loginTitle: 'மீண்டும் வருக, தயவுசெய்து உள்நுழையவும்',
    fullName: 'முழு பெயர்:',
    fullNamePlaceholder: 'எ.கா: டாக்டர் ரமேஷ் குமார் அல்லது பிரியா சர்மா',
    phoneNumber: 'தொலைபேசி எண் (பயனர்பெயர்):',
    phonePlaceholder: 'எ.கா: 9876543210',
    password: 'கடவுச்சொல்:',
    passwordPlaceholder: 'உங்கள் கடவுச்சொல்லை உள்ளிடவும்',
    accountRole: 'கணக்கு பங்கு:',
    rolePatient: 'நோயாளி (Patient)',
    roleDoctor: 'மருத்துவர் (Doctor)',
    roleNurse: 'செவிலியர் (Nurse)',
    medicalSpecialization: 'மருத்துவ நிபுணத்துவம்:',
    specializationPlaceholder: 'எ.கா: பொது மருத்துவர், குழந்தை நல மருத்துவர், இதய நோய் நிபுணர்',
    consultationAvailability: 'ஆலோசனை கிடைக்கும் நேரம்:',
    availabilityPlaceholder: 'எ.கா: திங்கள் - வெள்ளி (காலை 9:00 - மாலை 5:00)',
    preferredLanguage: 'விருப்பமான தொடர்பு மொழி:',
    registerBtn: 'கணக்கை பதிவு செய்',
    loginBtn: 'போர்ட்டலில் உள்நுழைக',
    alreadyRegistered: 'ஏற்கனவே பதிவு செய்தவரா? இங்கே உள்நுழையவும்',
    dontHaveAccount: 'கணக்கு இல்லையா? இங்கே பதிவு செய்யுங்கள்',
    quickDemoTitle: 'விரைவு டெமோ உள்நுழைவு:',
    fillDemoPatient: 'டெமோ நோயாளி நிரப்பவும்',
    fillDemoDoctor: 'டெமோ மருத்துவர் நிரப்பவும்',

    // Dashboard Header
    dashboardTitle: 'கிராமப்புற சுகாதார சேவை டாஷ்போர்டு',
    welcomeUser: 'வரவேற்கிறோம்,',
    logout: 'வெளியேறு',

    // Navigation Tabs
    navHome: 'முகப்பு',
    navAppointments: 'முன்பதிவுகள்',
    navTelemedicine: 'தொலைமருத்துவம்',
    navRecords: 'மருத்துவ பதிவுகள்',
    navReminders: 'மருந்து நினைவூட்டல்',
    navCentres: 'அருகிலுள்ள மையங்கள்',

    // Overview Tab
    overviewTitle: 'சுகாதார போர்ட்டல் மேலோட்டம்',
    overviewDesc: 'மருத்துவ ஆலோசனைகளை முன்பதிவு செய்ய, முந்தைய மருத்துவ பதிவுகளைப் பார்க்க, மருந்து நினைவூட்டல்களை அமைக்க அல்லது உங்கள் பகுதியில் உள்ள சுகாதார மையங்களைக் கண்டறிய மேலே உள்ள தொகுதியைத் தேர்ந்தெடுக்கவும்.',
    cardAppointmentsTitle: '📅 முன்பதிவுகள்',
    cardAppointmentsDesc: 'சரிபார்க்கப்பட்ட சிறப்பு மருத்துவர்களுடன் மருத்துவ ஆலோசனைகளை முன்பதிவு செய்து கண்காணிக்கவும்.',
    cardTelemedicineTitle: '🎙️ தொலைமருத்துவம்',
    cardTelemedicineDesc: 'கிராமப்புற குறைந்த இணைய வசதிக்காக பிரத்யேகமாக வடிவமைக்கப்பட்ட ஆடியோ ஆலோசனை.',
    cardRecordsTitle: '📁 மருத்துவ பதிவுகள்',
    cardRecordsDesc: 'மருத்துவர் வழங்கிய நோயறிதல், மருத்துவ குறிப்புகள் மற்றும் மருந்துச்சீட்டு வரலாறு.',
    cardRemindersTitle: '⏰ மருந்து நினைவூட்டல்',
    cardRemindersDesc: 'தினசரி மாத்திரைகளை சரியான நேரத்தில் எடுக்க தானியங்கி நினைவூட்டல்களை அமைக்கவும்.',
    cardCentresTitle: '🏥 சுகாதார மையங்கள்',
    cardCentresDesc: 'அருகிலுள்ள ஆரம்ப சுகாதார நிலையங்கள், அரசு மருத்துவமனைகள் மற்றும் மருந்தகங்களைக் கண்டறியவும்.',

    // Appointments Tab
    bookAppointmentTitle: 'மருத்துவர் ஆலோசனை முன்பதிவு',
    selectDoctorLabel: 'சிறப்பு மருத்துவரைத் தேர்ந்தெடுக்கவும்:',
    chooseDoctorOption: '-- மருத்துவரைத் தேர்ந்தெடுக்கவும் --',
    appointmentDateTimeLabel: 'தேதி மற்றும் நேரம்:',
    appointmentDateLabel: 'முன்பதிவு தேதி:',
    appointmentTimeSlotLabel: 'நேர இடைவெளி (காலை 9:00 - மாலை 5:00):',
    availableSlotsScrollerTitle: '30 நிமிட மருத்துவ ஆலோசனை நேரத்தைத் தேர்வுசெய்க:',
    workingHoursNotice: 'மருத்துவமனை நேரம்: காலை 9:00 - மாலை 5:00 (30 நிமிட இடைவெளி)',
    selectedSlotSummary: 'தேர்ந்தெடுக்கப்பட்ட நேரம்:',
    bookNowBtn: 'இப்போது முன்பதிவு செய்',
    patientRoleNotice: '{role} ஆக உள்நுழைந்துள்ளீர்கள். நோயாளிகள் மட்டுமே மருத்துவர்களிடம் முன்பதிவு செய்ய முடியும்.',
    yourAppointmentsTitle: 'உங்கள் திட்டமிடப்பட்ட முன்பதிவுகள்',
    noAppointmentsFound: 'முன்பதிவுகள் எதுவும் இன்னும் இல்லை.',
    doctorLabel: 'மருத்துவர்:',
    assignedSpecialist: 'நியமிக்கப்பட்ட நிபுணர்',
    dateTimeLabel: 'தேதி/நேரம்:',
    statusLabel: 'நிலை:',
    statusScheduled: 'திட்டமிடப்பட்டது (Scheduled)',
    statusCompleted: 'முடிவடைந்தது (Completed)',
    statusPending: 'ஒப்புதல் நிலுவையில் உள்ளது',
    statusAccepted: 'ஏற்றுக்கொள்ளப்பட்டது (Accepted)',
    statusRejected: 'நிராகரிக்கப்பட்டது (Rejected)',
    patientLabel: 'நோயாளி:',
    patientPhone: 'தொலைபேசி:',
    acceptBtn: 'ஏற்கவும்',
    rejectBtn: 'நிராகரிக்கவும்',
    doctorNurseActions: 'மருத்துவர் & செவிலியர் செயல்கள்:',
    appointmentAcceptedMsg: 'முன்பதிவு வெற்றிகரமாக ஏற்றுக்கொள்ளப்பட்டது!',
    appointmentRejectedMsg: 'முன்பதிவு நிராகரிக்கப்பட்டது.',
    manageAppointmentsTitle: 'மதிப்பாய்விற்கான நோயாளி முன்பதிவுகள்',

    // Telemedicine Tab
    telemedicineHeading: 'தொலைமருத்துவம் / தொலைதூர ஆடியோ ஆலோசனை',
    telemedicineDoctorDesc: 'நோயாளிகளுடன் குறைந்த தாமத ஆடியோ ஆலோசனை அழைப்புகளைத் தொடங்கி நிர்வகிக்கவும்.',
    telemedicinePatientDesc: 'வீட்டிலிருந்தபடியே உங்கள் மருத்துவருடன் ஆடியோ அழைப்பில் நேரடியாக இணையுங்கள்.',
    audioChannelTitle: 'கிராமப்புற அலைவரிசை ஆடியோ தடம்',
    audioChannelDesc: 'கிராமப்புறங்களில் உள்ள 2G/3G மொபைல் நெட்வொர்க்குகளுக்கு ஏற்றவாறு உகந்ததாக வடிவமைக்கப்பட்டது.',
    startCallBtn: '📞 ஆடியோ ஆலோசனையைத் தொடங்கு / இணை',
    callConnectingMsg: 'பாதுகாப்பான கிராமப்புற தொலைமருத்துவ இணைப்புடன் இணைகிறது... ஆடியோ அமர்வு செயலில் உள்ளது.',

    // Medical Records Tab
    recordsHeading: 'நோயாளி சுகாதார பதிவுகள்',
    noRecordsFound: 'மருத்துவ பதிவுகள் எதுவும் கிடைக்கவில்லை.',
    diagnosisLabel: 'நோயறிதல் (காரணம்):',
    prescriptionNotesLabel: 'மருந்து குறிப்புகள் & மருந்துச்சீட்டு:',
    prescribedBy: 'பரிந்துரைத்த மருத்துவர்:',
    editRecordBtn: 'பதிவைத் திருத்து',
    saveChangesBtn: 'மாற்றங்களைச் சேமி',
    cancelBtn: 'ரத்து செய்',
    addNewRecordBtn: '+ புதிய மருத்துவ பதிவைச் சேர்',
    recordUpdatedSuccess: 'மருத்துவ பதிவு வெற்றிகரமாக புதுப்பிக்கப்பட்டது! இரண்டு டாஷ்போர்டுகளிலும் தெரியும்.',
    recordCreatedSuccess: 'மருத்துவ பதிவு வெற்றிகரமாக உருவாக்கப்பட்டது! நோயாளி டாஷ்போர்டில் தெரியும்.',
    selectPatientLabel: 'ஏற்றுக்கொள்ளப்பட்ட நோயாளியைத் தேர்ந்தெடுக்கவும்:',
    filterByPatient: 'நோயாளி வாரியாக வடிகட்டவும்:',
    allPatientsOption: 'அனைத்து நோயாளிகள்',
    noAcceptedPatientsNotice: 'இதுவரை ஏற்றுக்கொள்ளப்பட்ட முன்பதிவுகள் கொண்ட நோயாளிகள் இல்லை. பதிவுகளை உருவாக்க மற்றும் திருத்த முதலில் ஒரு முன்பதிவை ஏற்கவும்.',
    goToRecordsBtn: '📝 மருத்துவ பதிவுகள்',
    lastUpdatedLabel: 'கடைசியாக புதுப்பிக்கப்பட்டது:',
    doctorNurseEditorTitle: 'மருத்துவ பதிவுகள் மற்றும் மருந்துச்சீட்டு மேலாண்மை',
    patientRecordsSubtitle: 'சுகாதார ஊழியர்களால் உள்ளிடப்பட்ட உங்கள் உத்தியோகபூர்வ மருத்துவ பதிவுகள், மருந்துகள் மற்றும் நோயறிதல் குறிப்புகளை மதிப்பாய்வு செய்யவும்.',
    editRecordTitle: 'மருத்துவ பதிவைத் திருத்து',
    newRecordTitle: 'ஏற்றுக்கொள்ளப்பட்ட நோயாளிக்கு புதிய மருத்துவ பதிவை உருவாக்கு',
    diagnosisPlaceholder: 'எ.கா: தீவிர வைரஸ் காய்ச்சல், வகை 2 நீரிழிவு, உயர் இரத்த அழுத்தம்...',
    prescriptionPlaceholder: 'எ.கா: பாராசிட்டமால் 650mg 3 வேளை 3 நாட்களுக்கு, அதிக தண்ணீர் குடிக்கவும்...',

    // Medicine Reminders Tab
    remindersHeading: 'மருந்து அட்டவணைகள் & டோஸ் நினைவூட்டல்கள்',
    medNameLabel: 'மருந்தின் பெயர் மற்றும் அளவு:',
    medNamePlaceholder: 'எ.கா: பாராசிட்டமால் 500mg, அமாக்சிசிலின் 250mg',
    medScheduleLabel: 'அட்டவணை மற்றும் வழிமுறைகள்:',
    medSchedulePlaceholder: 'எ.கா: காலை மற்றும் இரவு உணவுக்குப் பின், தினமும் காலை 8 மணிக்கு',
    addReminderBtn: 'நினைவூட்டலைச் சேர்',
    activeRemindersTitle: 'செயலில் உள்ள நினைவூட்டல்கள்',
    noRemindersFound: 'செயலில் உள்ள நினைவூட்டல்கள் எதுவும் இல்லை.',
    medicineLabel: 'மருந்து:',
    scheduleLabel: 'அட்டவணை:',
    patientRemindersSubtab: '👥 நோயாளி நினைவூட்டல்கள்',
    myRemindersSubtab: '🩺 என் சொந்த நினைவூட்டல்',
    selectPatientForReminder: 'நோயாளியைத் தேர்ந்தெடுக்கவும்:',
    choosePatientOption: '-- நோயாளியைத் தேர்வுசெய்க --',
    prescribeReminderTitle: 'நோயாளிக்கான மருந்து நினைவூட்டலை அமைக்கவும்',
    updateReminderTitle: 'மருந்து நினைவூட்டலைப் புதுப்பிக்கவும்',
    saveReminderChangesBtn: 'சேமிக்க',
    cancelEditReminderBtn: 'ரத்து',
    editReminderBtn: 'திருத்து',
    deleteReminderBtn: 'நீக்கு',
    prescribedByDoctor: 'பரிந்துரைத்தவர்',
    doctorPrescribedBadge: 'மருத்துவர் பரிந்துரை',
    personalReminderBadge: 'சுய அட்டவணை',
    liveSyncBadge: 'நேரலை ஒத்திசைவு',
    refreshRemindersBtn: 'புதுப்பி',
    reminderUpdatedSuccess: 'மருந்து நினைவூட்டல் வெற்றிகரமாக புதுப்பிக்கப்பட்டது! நோயாளி புதிய அளவைக் காண்பார்.',
    reminderDeletedSuccess: 'மருந்து நினைவூட்டல் வெற்றிகரமாக நீக்கப்பட்டது.',
    noPatientRemindersNotice: 'இந்த நோயாளிக்கு இன்னும் நினைவூட்டல்கள் இல்லை.',
    noPersonalRemindersNotice: 'சொந்த நினைவூட்டல்கள் எதுவும் இல்லை.',

    // Nearby Centres Tab
    centresHeading: 'அருகிலுள்ள மருத்துவமனைகள், கிளினிக்குகள் & மருந்தகங்கள்',
    selectCityLabel: 'நகரம் / பகுதியைத் தேர்ந்தெடுக்கவும்:',
    allCitiesOption: 'அனைத்து நகரங்கள் (தமிழ்நாடு & பெருநகரங்கள்)',
    filterByTypeLabel: 'வசதி வகை:',
    allTypesOption: 'அனைத்து வசதிகள் (மருத்துவமனை, கிளினிக், மருந்தகம்)',
    showingCentresCount: '{count} சரிபார்க்கப்பட்ட சுகாதார வசதிகள் காட்டப்படுகின்றன',
    callFacilityLabel: 'அழைக்கவும்',
    locationLabel: 'இடம் & முகவரி:',
    noCentresFound: 'இந்த தேர்வுக்கு அருகிலுள்ள மையங்கள் எதுவும் பட்டியலிடப்படவில்லை.',

    // Alerts & Notifications
    loginSuccessMsg: '{name} ({role}) ஆக வெற்றிகரமாக உள்நுழைந்துள்ளீர்கள்!',
    loginFailedMsg: 'உள்நுழைவு தோல்வியடைந்தது. தொலைபேசி எண் மற்றும் கடவுச்சொல்லைச் சரிபார்க்கவும்.',
    regSuccessMsg: 'பதிவு வெற்றிகரமானது! தயவுசெய்து உங்கள் தொலைபேசி எண் மூலம் உள்நுழையவும்.',
    regFailedMsg: 'பதிவு தோல்வியடைந்தது. மீண்டும் முயற்சிக்கவும்.',
    appointmentSuccessMsg: 'மருத்துவர் ஆலோசனை வெற்றிகரமாக முன்பதிவு செய்யப்பட்டது!',
    appointmentErrorMsg: 'முன்பதிவு செய்ய முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    reminderSuccessMsg: 'மருந்து நினைவூட்டல் வெற்றிகரமாக சேமிக்கப்பட்டது!',
    reminderErrorMsg: 'நினைவூட்டலைச் சேமிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.'
  },

  te: {
    // App Header & Branding
    appName: 'గ్రామీణ ఆరోగ్య సంరక్షణ వ్యవస్థ',
    appTagline: 'కమ్యూనిటీ ఆరోగ్య సదుపాయ వేదిక',
    selectLanguage: 'భాష',
    changeLanguage: 'భాషను మార్చండి',
    dbActive: 'డేటాబేస్ యాక్టివ్‌గా ఉంది',
    dbConnected: 'మోంగోడీబీ కనెక్ట్ చేయబడింది',

    // Hamburger & Language Drawer
    menuTitle: 'మెనూ & భాష ఎంపిక',
    chooseLanguageTitle: 'మీ భాషను ఎంచుకోండి',
    chooseLanguageSubtitle: 'మొత్తం ఇంటర్‌ఫేస్ వెంటనే ఈ భాషలోకి మారుతుంది',
    closeMenu: 'మెనూ మూసివేయి',
    activeLanguageBadge: 'క్రియాశీలం',

    // Auth & Login / Register
    login: 'లాగిన్ చేయండి',
    register: 'కొత్త ఖాతాను నమోదు చేయండి',
    registerTitle: 'రోగి లేదా వైద్యుడి ఖాతాను సృష్టించండి',
    loginTitle: 'తిరిగి స్వాగతం, దయచేసి లాగిన్ అవ్వండి',
    fullName: 'పూర్తి పేరు:',
    fullNamePlaceholder: 'ఉదా: డాక్టర్ రమేష్ కుమార్ లేదా ప్రియా శర్మ',
    phoneNumber: 'ఫోన్ నంబర్ (యూజర్ పేరు):',
    phonePlaceholder: 'ఉదా: 9876543210',
    password: 'పాస్‌వర్డ్:',
    passwordPlaceholder: 'మీ పాస్‌వర్డ్‌ను నమోదు చేయండి',
    accountRole: 'ఖాతా పాత్ర:',
    rolePatient: 'రోగి (Patient)',
    roleDoctor: 'వైద్యుడు (Doctor)',
    roleNurse: 'నర్సు (Nurse)',
    medicalSpecialization: 'వైద్య ప్రత్యేకత:',
    specializationPlaceholder: 'ఉదా: జనరల్ ఫిజీషియన్, పీడియాట్రీషియన్, కార్డియాలజిస్ట్',
    consultationAvailability: 'సంప్రదింపుల సమయం:',
    availabilityPlaceholder: 'ఉదా: సోమ - శుక్ర (ఉదయం 9:00 - సాయంత్రం 5:00)',
    preferredLanguage: 'ఇష్టపడే కమ్యూనికేషన్ భాష:',
    registerBtn: 'ఖాతాను నమోదు చేయండి',
    loginBtn: 'పోర్టల్‌లోకి లాగిన్ అవ్వండి',
    alreadyRegistered: 'ఇప్పటికే నమోదయ్యారా? ఇక్కడ లాగిన్ అవ్వండి',
    dontHaveAccount: 'ఖాతా లేదా? ఇక్కడ నమోదు చేసుకోండి',
    quickDemoTitle: 'త్వరిత డెమో లాగిన్:',
    fillDemoPatient: 'డెమో రోగిని నింపండి',
    fillDemoDoctor: 'డెమో వైద్యుడిని నింపండి',

    // Dashboard Header
    dashboardTitle: 'గ్రామీణ ఆరోగ్య సంరక్షణ డ్యాష్‌బోర్డ్',
    welcomeUser: 'స్వాగతం,',
    logout: 'లాగ్ అవుట్',

    // Navigation Tabs
    navHome: 'హోమ్',
    navAppointments: 'అపాయింట్‌మెంట్లు',
    navTelemedicine: 'టెలిమెడిసిన్',
    navRecords: 'వైద్య రికార్డులు',
    navReminders: 'మందుల రిమైండర్లు',
    navCentres: 'సమీప కేంద్రాలు',

    // Overview Tab
    overviewTitle: 'ఆరోగ్య పోర్టల్ అవలోకనం',
    overviewDesc: 'వైద్యుల సంప్రదింపులను బుక్ చేయడానికి, మునుపటి వైద్య రికార్డులను చూడటానికి, మందుల రిమైండర్‌లను సెట్ చేయడానికి లేదా మీ ప్రాంతంలోని ఆరోగ్య కేంద్రాలను కనుగొనడానికి పై మెనూ నుండి ఎంచుకోండి.',
    cardAppointmentsTitle: '📅 అపాయింట్‌మెంట్లు',
    cardAppointmentsDesc: 'ధృవీకరించబడిన నిపుణులైన వైద్యులతో సంప్రదింపులను బుక్ చేయండి మరియు ట్రాక్ చేయండి.',
    cardTelemedicineTitle: '🎙️ టెలిమెడిసిన్',
    cardTelemedicineDesc: 'గ్రామీణ తక్కువ ఇంటర్నెట్ సౌకర్యం కోసం ప్రత్యేకంగా ఆప్టిమైజ్ చేయబడిన ఆడియో సంప్రదింపులు.',
    cardRecordsTitle: '📁 వైద్య రికార్డులు',
    cardRecordsDesc: 'వైద్యుల నిర్ధారణ నివేదికలు, క్లినికల్ గమనికలు మరియు ప్రిస్క్రిప్షన్ చరిత్రను యాక్సెస్ చేయండి.',
    cardRemindersTitle: '⏰ మందుల రిమైండర్లు',
    cardRemindersDesc: 'సకాలంలో మోతాదులను తీసుకోవడానికి మందుల రిమైండర్‌లతో ఎప్పుడూ మందులను మరచిపోకండి.',
    cardCentresTitle: '🏥 ఆరోగ్య కేంద్రాలు',
    cardCentresDesc: 'సమీపంలోని ప్రాథమిక ఆరోగ్య కేంద్రాలు, ప్రభుత్వ ఆసుపత్రులు మరియు ఫార్మసీలను కనుగొనండి.',

    // Appointments Tab
    bookAppointmentTitle: 'డాక్టర్ అపాయింట్‌మెంట్ బుక్ చేయండి',
    selectDoctorLabel: 'నిపుణులైన వైద్యుడిని ఎంచుకోండి:',
    chooseDoctorOption: '-- వైద్యుడిని ఎంచుకోండి --',
    appointmentDateTimeLabel: 'తేదీ మరియు సమయం:',
    appointmentDateLabel: 'అపాయింట్‌మెంట్ తేదీ:',
    appointmentTimeSlotLabel: 'సమయ స్లాట్ (ఉదయం 9:00 - సాయంత్రం 5:00):',
    availableSlotsScrollerTitle: '30 నిమిషాల కన్సల్టేషన్ స్లాట్‌ను ఎంచుకోండి:',
    workingHoursNotice: 'క్లినిక్ పని వేళలు: ఉదయం 9:00 - సాయంత్రం 5:00 (30 నిమిషాల వ్యవధి)',
    selectedSlotSummary: 'ఎంచుకున్న స్లాట్:',
    bookNowBtn: 'ఇప్పుడే అపాయింట్‌మెంట్ బుక్ చేయండి',
    patientRoleNotice: '{role} గా లాగిన్ అయ్యారు. రోగులు మాత్రమే వైద్యులతో అపాయింట్‌మెంట్‌లను బుక్ చేసుకోగలరు.',
    yourAppointmentsTitle: 'మీ షెడ్యూల్ చేసిన అపాయింట్‌మెంట్లు',
    noAppointmentsFound: 'ఇంకా ఎలాంటి అపాయింట్‌మెంట్‌లు లేవు.',
    doctorLabel: 'వైద్యుడు:',
    assignedSpecialist: 'నియమిత నిపుణుడు',
    dateTimeLabel: 'తేదీ/సమయం:',
    statusLabel: 'స్థితి:',
    statusScheduled: 'షెడ్యూల్ చేయబడింది (Scheduled)',
    statusCompleted: 'పూర్తయింది (Completed)',
    statusPending: 'ఆమోదం కోసం వేచి ఉంది',
    statusAccepted: 'ఆమోదించబడింది (Accepted)',
    statusRejected: 'తిరస్కరించబడింది (Rejected)',
    patientLabel: 'రోగి:',
    patientPhone: 'ఫోన్:',
    acceptBtn: 'ఆమోదించండి',
    rejectBtn: 'తిరస్కరించండి',
    doctorNurseActions: 'డాక్టర్ & నర్స్ చర్యలు:',
    appointmentAcceptedMsg: 'అపాయింట్‌మెంట్ విజయవంతంగా ఆమోదించబడింది!',
    appointmentRejectedMsg: 'అపాయింట్‌మెంట్ తిరస్కరించబడింది.',
    manageAppointmentsTitle: 'సమీక్ష కోసం రోగి అపాయింట్‌మెంట్లు',

    // Telemedicine Tab
    telemedicineHeading: 'టెలిమెడిసిన్ / రిమోట్ ఆడియో సంప్రదింపులు',
    telemedicineDoctorDesc: 'రోగులతో తక్కువ-లేటెన్సీ రిమోట్ ఆడియో సంప్రదింపు కాల్‌లను ప్రారంభించండి మరియు నిర్వహించండి.',
    telemedicinePatientDesc: 'ఇంటి నుంచే నేరుగా మీ వైద్యుడితో ఆడియో కాల్‌లో మాట్లాడండి.',
    audioChannelTitle: 'గ్రామీణ బ్యాండ్‌విడ్త్ ఆడియో ఛానల్',
    audioChannelDesc: 'గ్రామాల్లోని 2G/3G మొబైల్ నెట్‌వర్క్‌ల కోసం ప్రత్యేకంగా ఆప్టిమైజ్ చేయబడింది.',
    startCallBtn: '📞 ఆడియో సంప్రదింపును ప్రారంభించండి / చేరండి',
    callConnectingMsg: 'సురక్షిత గ్రామీణ టెలిమెడిసిన్ ఛానెల్‌కి కనెక్ట్ అవుతోంది... ఆడియో సెషన్ సక్రియంగా ఉంది.',

    // Medical Records Tab
    recordsHeading: 'రోగి ఆరోగ్య రికార్డులు',
    noRecordsFound: 'వైద్య రికార్డులు ఏవీ కనుగొనబడలేదు.',
    diagnosisLabel: 'రోగ నిర్ధారణ (డయాగ్నసిస్):',
    prescriptionNotesLabel: 'గమనికలు & ప్రిస్క్రిప్షన్:',
    prescribedBy: 'సూచించిన వైద్యుడు:',
    editRecordBtn: 'రికార్డును సవరించండి',
    saveChangesBtn: 'మార్పులను సేవ్ చేయండి',
    cancelBtn: 'రద్దు చేయండి',
    addNewRecordBtn: '+ కొత్త వైద్య రికార్డును జోడించండి',
    recordUpdatedSuccess: 'వైద్య రికార్డు విజయవంతంగా నవీకరించబడింది! రెండు డ్యాష్‌బోర్డ్‌లలో కనిపిస్తుంది.',
    recordCreatedSuccess: 'వైద్య రికార్డు విజయవంతంగా సృష్టించబడింది! రోగి డ్యాష్‌బోర్డ్‌లో కనిపిస్తుంది.',
    selectPatientLabel: 'ఆమోదించబడిన రోగిని ఎంచుకోండి:',
    filterByPatient: 'రోగి వారీగా ఫిల్టర్ చేయండి:',
    allPatientsOption: 'అందరు రోగులు',
    noAcceptedPatientsNotice: 'ఇంకా ఆమోదించబడిన అపాయింట్‌మెంట్‌లు ఉన్న రోగులు ఎవరూ లేరు. రికార్డులను సృష్టించడానికి మరియు సవరించడానికి మొదట అపాయింట్‌మెంట్‌ను ఆమోదించండి.',
    goToRecordsBtn: '📝 వైద్య రికార్డులు',
    lastUpdatedLabel: 'చివరిగా నవీకరించబడింది:',
    doctorNurseEditorTitle: 'క్లినికల్ రికార్డులు మరియు ప్రిస్క్రిప్షన్ నిర్వహణ',
    patientRecordsSubtitle: 'ఆరోగ్య సిబ్బంది నమోదు చేసిన మీ అధికారిక వైద్య రికార్డులు, మందులు మరియు రోగ నిర్ధారణ గమనికలను సమీక్షించండి.',
    editRecordTitle: 'వైద్య రికార్డును సవరించండి',
    newRecordTitle: 'ఆమోదించబడిన రోగి కోసం కొత్త వైద్య రికార్డును సృష్టించండి',
    diagnosisPlaceholder: 'ఉదా: వైరల్ జ్వరం, టైప్ 2 మధుమేహం, రక్తపోటు...',
    prescriptionPlaceholder: 'ఉదా: పారాసిటమాల్ 650mg రోజుకు 3 సార్లు 3 రోజులు, పుష్కలంగా నీరు త్రాగాలి...',

    // Medicine Reminders Tab
    remindersHeading: 'మందుల షెడ్యూల్‌లు & మోతాదు రిమైండర్లు',
    medNameLabel: 'మందు పేరు మరియు మోతాదు:',
    medNamePlaceholder: 'ఉదా: పారాసిటమాల్ 500mg, అమోక్సిసిలిన్ 250mg',
    medScheduleLabel: 'షెడ్యూల్ మరియు సూచనలు:',
    medSchedulePlaceholder: 'ఉదా: ఉదయం మరియు రాత్రి భోజనం తర్వాత, ప్రతిరోజూ ఉదయం 8 గంటలకు',
    addReminderBtn: 'మందుల రిమైండర్ జోడించండి',
    activeRemindersTitle: 'క్రియాశీల రిమైండర్లు',
    noRemindersFound: 'క్రియాశీల మందుల రిమైండర్‌లు ఏవీ లేవు.',
    medicineLabel: 'మందు:',
    scheduleLabel: 'షెడ్యూల్:',
    patientRemindersSubtab: '👥 రోగి రిమైండర్లు',
    myRemindersSubtab: '🩺 నా స్వంత రిమైండర్',
    selectPatientForReminder: 'రోగిని ఎంచుకోండి:',
    choosePatientOption: '-- రోగిని ఎంచుకోండి --',
    prescribeReminderTitle: 'రోగి కోసం మందుల రిమైండర్ సెట్ చేయండి',
    updateReminderTitle: 'మందుల రిమైండర్‌ను అప్‌డేట్ చేయండి',
    saveReminderChangesBtn: 'మార్పులను సేవ్ చేయండి',
    cancelEditReminderBtn: 'రద్దు చేయండి',
    editReminderBtn: 'సవరించు',
    deleteReminderBtn: 'తొలగించు',
    prescribedByDoctor: 'సూచించిన వైద్యుడు',
    doctorPrescribedBadge: 'వైద్యుని సూచన',
    personalReminderBadge: 'వ్యక్తిగత షెడ్యూల్',
    liveSyncBadge: 'లైవ్ సింక్ సక్రియం',
    refreshRemindersBtn: 'రిఫ్రెష్ చేయండి',
    reminderUpdatedSuccess: 'మందుల రిమైండర్ విజయవంతంగా నవీకరించబడింది! రోగి తాజా వివరాలను చూడగలరు.',
    reminderDeletedSuccess: 'మందుల రిమైండర్ విజయవంతంగా తొలగించబడింది.',
    noPatientRemindersNotice: 'ఈ రోగికి ఇంకా మందుల రిమైండర్‌లు లేవు.',
    noPersonalRemindersNotice: 'వ్యక్తిగత రిమైండర్‌లు ఏవీ లేవు.',

    // Nearby Centres Tab
    centresHeading: 'సమీపంలోని ఆసుపత్రులు, క్లినిక్‌లు & ఫార్మసీలు',
    selectCityLabel: 'నగరం / ప్రాంతాన్ని ఎంచుకోండి:',
    allCitiesOption: 'అన్ని నగరాలు (తమిళనాడు మరియు మెట్రోలు)',
    filterByTypeLabel: 'సౌకర్య రకం:',
    allTypesOption: 'అన్ని సౌకర్యాలు (ఆసుపత్రులు, క్లినిక్‌లు, ఫార్మసీలు)',
    showingCentresCount: '{count} ధృవీకరించబడిన ఆరోగ్య సంరక్షణ సౌకర్యాలు చూపబడుతున్నాయి',
    callFacilityLabel: 'కాల్ చేయండి',
    locationLabel: 'స్థానం & చిరునామా:',
    noCentresFound: 'ఈ ఎంపికకు సమీప కేంద్రాలు ఏవీ జాబితా చేయబడలేదు.',

    // Alerts & Notifications
    loginSuccessMsg: '{name} ({role}) గా విజయవంతంగా లాగిన్ అయ్యారు!',
    loginFailedMsg: 'లాగిన్ విఫలమైంది. దయచేసి మీ ఫోన్ నంబర్ మరియు పాస్‌వర్డ్‌ను తనిఖీ చేయండి.',
    regSuccessMsg: 'నమోదు విజయవంతమైంది! దయచేసి మీ ఫోన్ నంబర్ మరియు పాస్‌వర్డ్‌తో లాగిన్ అవ్వండి.',
    regFailedMsg: 'నమోదు విఫలమైంది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    appointmentSuccessMsg: 'వైద్యుడితో అపాయింట్‌మెంట్ విజయవంతంగా బుక్ చేయబడింది!',
    appointmentErrorMsg: 'అపాయింట్‌మెంట్ బుక్ చేయడం సాధ్యం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.',
    reminderSuccessMsg: 'మందుల రిమైండర్ విజయవంతంగా సేవ్ చేయబడింది!',
    reminderErrorMsg: 'రిమైండర్ సేవ్ చేయడం సాధ్యం కాలేదు. దయచేసి మళ్లీ ప్రయత్నించండి.'
  }
};

export const getTranslation = (lang = 'en', key = '', params = {}) => {
  const selectedLang = translations[lang] || translations.en;
  let text = selectedLang[key] || translations.en[key] || key;
  
  // Replace {param} placeholders if provided
  Object.keys(params).forEach(param => {
    text = text.replace(new RegExp(`\\{${param}\\}`, 'g'), params[param]);
  });
  
  return text;
};
```

---

<a id="file-frontend-src-appjsx"></a>
### File: `frontend/src/App.jsx`
**Path:** `healthCareSystem-main/frontend/src/App.jsx`  
**Size:** 145,261 bytes  

```jsx
import React, { useState, useEffect, useCallback } from 'react';
import API from './services/api';
import './App.css';
import { getTranslation } from './i18n/translations';
import HamburgerButton from './components/HamburgerButton';
import DoctorProfileOnboarding from './components/DoctorProfileOnboarding';
import LocationBooking from './components/LocationBooking';
import LanguageDrawer from './components/LanguageDrawer';
import TelemedicineRoom from './components/TelemedicineRoom';

// 30-minute consultation slots within 9:00 AM - 5:00 PM clinic working hours
const WORKING_HOUR_SLOTS = [
  { value: '09:00', label: '09:00 AM' },
  { value: '09:30', label: '09:30 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '10:30', label: '10:30 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '13:30', label: '01:30 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '14:30', label: '02:30 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '15:30', label: '03:30 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '16:30', label: '04:30 PM' },
  { value: '17:00', label: '05:00 PM' }
];

const AVAILABLE_CITIES = [
  { id: 'All', name: 'All Cities (Tamil Nadu & Metros)', icon: '🌐' },
  { id: 'Chennai', name: 'Chennai', state: 'Tamil Nadu', icon: '🏛️' },
  { id: 'Coimbatore', name: 'Coimbatore', state: 'Tamil Nadu', icon: '🏭' },
  { id: 'Madurai', name: 'Madurai', state: 'Tamil Nadu', icon: '🛕' },
  { id: 'Bengaluru', name: 'Bengaluru', state: 'Karnataka', icon: '💻' },
  { id: 'Hyderabad', name: 'Hyderabad', state: 'Telangana', icon: '💎' },
  { id: 'Delhi', name: 'Delhi / NCR', state: 'National Capital Region', icon: '🚩' }
];

const FACILITY_TYPES = [
  { id: 'All', name: 'All Facilities', icon: '🏥' },
  { id: 'Hospital', name: 'Hospitals', icon: '🏥' },
  { id: 'Clinic', name: 'Clinics & Dispensaries', icon: '🩺' },
  { id: 'Pharmacy', name: 'Pharmacies', icon: '💊' }
];

const getTodayDateString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

function App() {
  // Language State - stored in localStorage with fallback to English
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    try {
      const storedLang = localStorage.getItem('app_language');
      if (storedLang && ['en', 'hi', 'ta', 'te'].includes(storedLang)) {
        return storedLang;
      }
    } catch {
      // ignore localStorage error
    }
    return 'en';
  });

  // Hamburger Drawer state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Translation helper function
  const t = (key, params) => getTranslation(currentLanguage, key, params);

  const changeLanguage = (langCode) => {
    setCurrentLanguage(langCode);
    try {
      localStorage.setItem('app_language', langCode);
    } catch {
      // ignore
    }
  };

  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      const storedToken = localStorage.getItem('token');
      if (storedUser && storedToken) {
        return JSON.parse(storedUser);
      }
    } catch {
      // ignore parsing error
    }
    return null;
  });

  const [isRegistering, setIsRegistering] = useState(false);
  
  // Auth Form States
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [role, setRole] = useState('Patient');
  const [docRegState, setDocRegState] = useState('');
  const [docRegDistrict, setDocRegDistrict] = useState('');
  const [docRegCity, setDocRegCity] = useState('');
  const [docRegHospitalId, setDocRegHospitalId] = useState('');
  const [regStates, setRegStates] = useState([]);
  const [regDistricts, setRegDistricts] = useState([]);
  const [regCities, setRegCities] = useState([]);
  const [regHospitals, setRegHospitals] = useState([]);
  const [preselectedHospital, setPreselectedHospital] = useState(null);
  const [hospitalList, setHospitalList] = useState([]);
  const [registerLanguage, setRegisterLanguage] = useState(currentLanguage);
  const [specialization, setSpecialization] = useState('General Physician');
  const [availability, setAvailability] = useState('Mon - Fri (9:00 AM - 5:00 PM)');
  const [registerCentreId, setRegisterCentreId] = useState(''); // Centre selected during Nurse registration
  const [registrationCentres, setRegistrationCentres] = useState([]);
  const [error, setError] = useState('');
  const [feedback, setFeedback] = useState('');
  const [dbStatus, setDbStatus] = useState('Checking database...');

  // Module Data States
  const [activeTab, setActiveTab] = useState('home');
  const [activeTelemedicineAppId, setActiveTelemedicineAppId] = useState(null);
  const [callSessionInfo, setCallSessionInfo] = useState(null);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [centres, setCentres] = useState([]);
  const [allCentres, setAllCentres] = useState([]); // All centres for appointment centre filter
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCentreType, setSelectedCentreType] = useState('All');
  const [selectedAppointmentCentre, setSelectedAppointmentCentre] = useState(''); // Centre filter for appointment booking
  const [reminders, setReminders] = useState([]);
  const [records, setRecords] = useState([]);
  const [doctorProfile, setDoctorProfile] = useState(null);
  const [doctorOnboarding, setDoctorOnboarding] = useState(false);

  // Medical Records management states (for Doctor & Nurse)
  const [acceptedPatients, setAcceptedPatients] = useState([]);
  const [selectedRecordPatient, setSelectedRecordPatient] = useState('');
  const [showAddRecordForm, setShowAddRecordForm] = useState(false);
  const [newRecordPatientId, setNewRecordPatientId] = useState('');
  const [newRecordDiagnosis, setNewRecordDiagnosis] = useState('');
  const [newRecordNotes, setNewRecordNotes] = useState('');

  // Inline edit state for records
  const [editingRecordId, setEditingRecordId] = useState(null);
  const [editDiagnosis, setEditDiagnosis] = useState('');
  const [editNotes, setEditNotes] = useState('');

  // New Appointment / Reminder Input States
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDay, setAppointmentDay] = useState(getTodayDateString());
  const [appointmentTimeSlot, setAppointmentTimeSlot] = useState('09:00');
  const [appointmentDate, setAppointmentDate] = useState(() => `${getTodayDateString()}T09:00`);
  const [medName, setMedName] = useState('');
  const [medSchedule, setMedSchedule] = useState('');

  // Medicine Reminders Management States (Doctor & Patient)
  const [reminderSubTab, setReminderSubTab] = useState('patient_reminders'); // 'patient_reminders' | 'my_reminders'
  const [reminderPatients, setReminderPatients] = useState([]);
  const [selectedReminderPatient, setSelectedReminderPatient] = useState('');
  const [newReminderPatientId, setNewReminderPatientId] = useState('');
  const [showAddReminderForm, setShowAddReminderForm] = useState(false);
  const [editingReminderId, setEditingReminderId] = useState(null);
  const [editReminderMedicine, setEditReminderMedicine] = useState('');
  const [editReminderSchedule, setEditReminderSchedule] = useState('');

  // Sync registered language option with current language if not manually overridden
  useEffect(() => {
    setRegisterLanguage(currentLanguage);
  }, [currentLanguage]);

  // Check health and db status
  const checkDb = useCallback(async () => {
    try {
      const res = await API.get('/health');
      if (res.data.database === 'mongodb-connected') {
        setDbStatus(`${t('dbConnected')} (${res.data.dbName || 'Live'})`);
      } else {
        setDbStatus(t('dbActive'));
      }
    } catch {
      setDbStatus(t('dbActive'));
    }
  }, [currentLanguage, t]);

  useEffect(() => {
    checkDb();
    // Load initial states and hospitals from database for doctor registration
    (async () => {
      try {
        const [statesRes, hospitalsRes] = await Promise.all([
          API.get('/locations/states'),
          API.get('/centres', { params: { type: 'Hospital' } })
        ]);
        setRegStates(Array.isArray(statesRes.data) ? statesRes.data : []);
        setRegHospitals(Array.isArray(hospitalsRes.data) ? hospitalsRes.data : []);
        setHospitalList(Array.isArray(hospitalsRes.data) ? hospitalsRes.data : []);
        setRegistrationCentres(Array.isArray(hospitalsRes.data) ? hospitalsRes.data : []);
      } catch {
        setRegStates([]);
        setRegHospitals([]);
        setHospitalList([]);
      }
    })();
  }, [checkDb]);

  // Update districts & hospitals when doctor selects State during registration
  useEffect(() => {
    setDocRegDistrict('');
    setDocRegCity('');
    setDocRegHospitalId('');
    if (!docRegState) {
      setRegDistricts([]);
      setRegCities([]);
      API.get('/centres', { params: { type: 'Hospital' } })
        .then(res => setRegHospitals(Array.isArray(res.data) ? res.data : []))
        .catch(() => setRegHospitals([]));
      return;
    }
    (async () => {
      try {
        const [distRes, hospRes] = await Promise.all([
          API.get('/locations/districts', { params: { state: docRegState } }),
          API.get('/centres', { params: { state: docRegState, type: 'Hospital' } })
        ]);
        setRegDistricts(Array.isArray(distRes.data) ? distRes.data : []);
        setRegHospitals(Array.isArray(hospRes.data) ? hospRes.data : []);
      } catch {
        setRegDistricts([]);
        setRegHospitals([]);
      }
    })();
  }, [docRegState]);

  // Update cities & hospitals when doctor selects District during registration
  useEffect(() => {
    setDocRegCity('');
    setDocRegHospitalId('');
    if (!docRegState || !docRegDistrict) {
      setRegCities([]);
      return;
    }
    (async () => {
      try {
        const [cityRes, hospRes] = await Promise.all([
          API.get('/locations/cities', { params: { state: docRegState, district: docRegDistrict } }),
          API.get('/centres', { params: { state: docRegState, district: docRegDistrict, type: 'Hospital' } })
        ]);
        setRegCities(Array.isArray(cityRes.data) ? cityRes.data : []);
        setRegHospitals(Array.isArray(hospRes.data) ? hospRes.data : []);
      } catch {
        setRegCities([]);
        setRegHospitals([]);
      }
    })();
  }, [docRegState, docRegDistrict]);

  // Update hospitals when doctor selects City/Area during registration
  useEffect(() => {
    setDocRegHospitalId('');
    if (!docRegState || !docRegDistrict || !docRegCity) return;
    (async () => {
      try {
        const res = await API.get('/centres', { 
          params: { state: docRegState, district: docRegDistrict, city: docRegCity, type: 'Hospital' } 
        });
        setRegHospitals(Array.isArray(res.data) ? res.data : []);
      } catch {
        setRegHospitals([]);
      }
    })();
  }, [docRegState, docRegDistrict, docRegCity]);

  // Doctor profile onboarding check
  useEffect(() => {
    if (user && user.role === 'Doctor') {
      (async () => {
        try {
          const res = await API.get('/doctors/me/profile');
          const prof = res.data;
          setDoctorProfile(prof);
          const hasHosp = !!(prof && (prof.profileCompleted || prof.hospital_id || prof.centre_id));
          setDoctorOnboarding(!hasHosp);
        } catch {
          setDoctorProfile(null);
          setDoctorOnboarding(false);
        }
      })();
    } else {
      setDoctorProfile(null);
      setDoctorOnboarding(false);
    }
  }, [user]);

  // Listen for auth-logout event from api interceptor
  useEffect(() => {
    const handleAuthLogout = () => {
      setUser(null);
      setActiveTab('home');
    };
    window.addEventListener('auth-logout', handleAuthLogout);
    return () => window.removeEventListener('auth-logout', handleAuthLogout);
  }, []);

  // Ensure Nurse role cannot access telemedicine tab
  useEffect(() => {
    if (user?.role === 'Nurse' && activeTab === 'telemedicine') {
      setActiveTab('home');
    }
  }, [user, activeTab]);

  const notify = (msg) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(''), 5000);
  };

  const [incomingCall, setIncomingCall] = useState(null);

  // Poll for active incoming call for logged-in Patient
  useEffect(() => {
    if (!user || user.role !== 'Patient') {
      setIncomingCall(null);
      return;
    }

    const checkCall = async () => {
      try {
        const res = await API.get('/consultations/active-call');
        if (res.data?.activeCall && res.data.activeCall.status === 'Calling') {
          setIncomingCall(res.data.activeCall);
        } else {
          setIncomingCall(null);
        }
      } catch {}
    };

    checkCall();
    const interval = setInterval(checkCall, 2500);
    return () => clearInterval(interval);
  }, [user]);

  const handleAcceptIncomingCall = async () => {
    if (!incomingCall) return;
    const appId = incomingCall.appointment_id?._id || incomingCall.appointment_id;
    const consId = incomingCall._id;

    try {
      await API.patch(`/consultations/${consId}/status`, { status: 'In-Progress' });
    } catch {}

    setActiveTelemedicineAppId(appId);
    setIncomingCall(null);
    setActiveTab('telemedicine');
  };

  const handleDeclineIncomingCall = async () => {
    if (!incomingCall) return;
    const consId = incomingCall._id;

    try {
      await API.patch(`/consultations/${consId}/status`, { status: 'Declined' });
    } catch {}

    setIncomingCall(null);
  };

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    try {
      setError('');
      const res = await API.post('/auth/login', { phone, password });
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
      setUser(res.data.user);

      if (res.data.doctor) {
        setDoctorProfile(res.data.doctor);
        if (res.data.doctor.hospital_id || res.data.doctor.centre_id) {
          setDoctorOnboarding(false);
        }
      }

      // If user had a preferred language stored, switch to it smoothly
      if (res.data.user.language && ['en', 'hi', 'ta', 'te'].includes(res.data.user.language)) {
        changeLanguage(res.data.user.language);
      }

      const hospName = res.data.user?.hospital?.name || res.data.doctor?.hospital?.name;
      notify(
        res.data.user.role === 'Doctor' && hospName
          ? `Welcome Dr. ${res.data.user.name}! Active at ${hospName}` 
          : t('loginSuccessMsg', { name: res.data.user.name, role: res.data.user.role })
      );
    } catch (err) {
      setError(err.response?.data?.message || t('loginFailedMsg'));
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      setError('');
      if (role === 'Doctor') {
        if (!docRegState || !docRegDistrict || !docRegCity || !docRegHospitalId) {
          setError('Please select your Area Location (State, District, City) and Hospital name from the database.');
          return;
        }
      }
      const payload = {
        name,
        phone,
        password,
        role,
        language: registerLanguage,
        specialization: role === 'Doctor' ? specialization : undefined,
        availability: role === 'Doctor' ? availability : undefined,
        state: role === 'Doctor' ? docRegState : undefined,
        district: role === 'Doctor' ? docRegDistrict : undefined,
        city: role === 'Doctor' ? docRegCity : undefined,
        hospital_id: role === 'Doctor' ? docRegHospitalId : (role === 'Nurse' ? registerCentreId : undefined),
        centre_id: role === 'Doctor' ? docRegHospitalId : (role === 'Nurse' ? registerCentreId : undefined)
      };
      const res = await API.post('/auth/register', payload);
      notify(res.data.message || t('regSuccessMsg'));
      setIsRegistering(false);
      setDocRegHospitalId('');
      setRegisterCentreId('');
      fetchDoctors();
    } catch (err) {
      setError(err.response?.data?.message || t('regFailedMsg'));
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    setActiveTab('home');
    setPhone('');
    setPassword('');
    setDoctors([]);
    setAppointments([]);
    setCentres([]);
    setSelectedCity('All');
    setSelectedCentreType('All');
    setReminders([]);
    setRecords([]);
    setAcceptedPatients([]);
    setSelectedRecordPatient('');
    setEditingRecordId(null);
    setShowAddRecordForm(false);
    setDoctorProfile(null);
    setDoctorOnboarding(false);
  };

  // Safe fetch functions with graceful error handling
  const fetchDoctors = useCallback(async (centreId) => {
    try {
      const params = {};
      const filterCentreId = centreId !== undefined ? centreId : selectedAppointmentCentre;
      if (filterCentreId) params.centre_id = filterCentreId;
      const res = await API.get('/doctors', { params });
      setDoctors(Array.isArray(res.data) ? res.data : []);
    } catch {
      setDoctors([]);
    }
  }, [selectedAppointmentCentre]);

  // Fetch all centres (used for appointment centre filter & registration dropdown)
  const fetchAllCentres = useCallback(async () => {
    try {
      const res = await API.get('/centres');
      setAllCentres(Array.isArray(res.data) ? res.data : []);
    } catch {
      setAllCentres([]);
    }
  }, []);

  const fetchAppointments = useCallback(async () => {
    try {
      const res = await API.get('/appointments');
      setAppointments(Array.isArray(res.data) ? res.data : []);
    } catch {
      setAppointments([]);
    }
  }, []);

  const fetchCentres = useCallback(async (city = selectedCity, type = selectedCentreType) => {
    try {
      const params = {};
      if (city && city !== 'All') params.city = city;
      if (type && type !== 'All') params.type = type;
      const res = await API.get('/centres', { params });
      setCentres(Array.isArray(res.data) ? res.data : []);
    } catch {
      setCentres([]);
    }
  }, [selectedCity, selectedCentreType]);

  const fetchReminderPatients = useCallback(async () => {
    try {
      const res = await API.get('/reminders/patients');
      setReminderPatients(Array.isArray(res.data) ? res.data : []);
    } catch {
      setReminderPatients([]);
    }
  }, []);

  const fetchReminders = useCallback(async (patientUserId, scope) => {
    try {
      const params = {};
      if (scope) {
        params.scope = scope;
      } else if (patientUserId !== undefined) {
        if (patientUserId) params.user_id = patientUserId;
      } else if (selectedReminderPatient) {
        params.user_id = selectedReminderPatient;
      }
      const res = await API.get('/reminders', { params });
      setReminders(Array.isArray(res.data) ? res.data : []);
    } catch {
      setReminders([]);
    }
  }, [selectedReminderPatient]);

  const fetchAcceptedPatients = useCallback(async () => {
    try {
      const res = await API.get('/records/patients');
      setAcceptedPatients(Array.isArray(res.data) ? res.data : []);
    } catch {
      setAcceptedPatients([]);
    }
  }, []);

  const fetchRecords = useCallback(async (patientUserId) => {
    try {
      const targetUserId = patientUserId !== undefined ? patientUserId : selectedRecordPatient;
      const params = targetUserId ? { user_id: targetUserId } : {};
      const res = await API.get('/records', { params });
      setRecords(Array.isArray(res.data) ? res.data : []);
    } catch {
      setRecords([]);
    }
  }, [selectedRecordPatient]);

  // Actions
  const handleBookAppointment = async (e) => {
    e.preventDefault();
    if (!selectedDoctor) {
      notify('Please select a specialist doctor');
      return;
    }
    if (!appointmentDay) {
      notify('Please select an appointment date');
      return;
    }
    const finalDateTime = `${appointmentDay}T${appointmentTimeSlot || '09:00'}`;
    try {
      await API.post('/appointments/book', { doctor_id: selectedDoctor, date_time: finalDateTime });
      notify(t('appointmentSuccessMsg'));
      setSelectedDoctor('');
      setAppointmentDay(getTodayDateString());
      setAppointmentTimeSlot('09:00');
      setAppointmentDate(`${getTodayDateString()}T09:00`);
      fetchAppointments();
    } catch (err) {
      notify(err.response?.data?.message || t('appointmentErrorMsg'));
    }
  };

  const handleUpdateAppointmentStatus = async (appId, newStatus) => {
    try {
      await API.patch(`/appointments/${appId}/status`, { status: newStatus });
      if (newStatus === 'Accepted') {
        notify(t('appointmentAcceptedMsg'));
        fetchAcceptedPatients();
      } else if (newStatus === 'Rejected') {
        notify(t('appointmentRejectedMsg'));
        fetchAcceptedPatients();
      } else {
        notify(`Appointment ${newStatus.toLowerCase()} successfully`);
      }
      fetchAppointments();
    } catch (err) {
      notify(err.response?.data?.message || 'Error updating appointment status');
    }
  };

  const handleCreateRecord = async (e) => {
    e.preventDefault();
    if (!newRecordPatientId) {
      notify('Please select an accepted patient first');
      return;
    }
    if (!newRecordDiagnosis.trim() || !newRecordNotes.trim()) {
      notify('Please enter both diagnosis and prescription notes');
      return;
    }
    try {
      await API.post('/records/add', {
        user_id: newRecordPatientId,
        diagnosis: newRecordDiagnosis,
        notes: newRecordNotes
      });
      notify(t('recordCreatedSuccess'));
      setNewRecordDiagnosis('');
      setNewRecordNotes('');
      setShowAddRecordForm(false);
      fetchRecords(selectedRecordPatient);
    } catch (err) {
      notify(err.response?.data?.message || 'Error creating medical record');
    }
  };

  const handleStartEditRecord = (rec) => {
    setEditingRecordId(rec._id);
    setEditDiagnosis(rec.diagnosis || '');
    setEditNotes(rec.notes || '');
  };

  const handleCancelEditRecord = () => {
    setEditingRecordId(null);
    setEditDiagnosis('');
    setEditNotes('');
  };

  const handleSaveEditRecord = async (recId) => {
    if (!editDiagnosis.trim() || !editNotes.trim()) {
      notify('Diagnosis and prescription notes cannot be empty');
      return;
    }
    try {
      await API.put(`/records/${recId}`, {
        diagnosis: editDiagnosis,
        notes: editNotes
      });
      notify(t('recordUpdatedSuccess'));
      setEditingRecordId(null);
      fetchRecords(selectedRecordPatient);
    } catch (err) {
      notify(err.response?.data?.message || 'Error updating medical record');
    }
  };

  // Medicine Reminders Handlers
  const handleAddReminder = async (e) => {
    e.preventDefault();
    if (!medName.trim() || !medSchedule.trim()) {
      notify('Medicine name and schedule are required');
      return;
    }

    try {
      const payload = {
        medicine: medName.trim(),
        schedule: medSchedule.trim()
      };

      if (user.role === 'Doctor' || user.role === 'Nurse') {
        if (reminderSubTab === 'patient_reminders') {
          const targetId = newReminderPatientId || selectedReminderPatient || (reminderPatients[0]?._id);
          if (!targetId) {
            notify('Please select a patient for this reminder');
            return;
          }
          payload.user_id = targetId;
        } else {
          // Doctor's personal reminder
          payload.user_id = user.id;
        }
      }

      await API.post('/reminders/add', payload);
      notify(t('reminderSuccessMsg'));
      setMedName('');
      setMedSchedule('');
      setShowAddReminderForm(false);
      
      if (user.role === 'Doctor' || user.role === 'Nurse') {
        if (reminderSubTab === 'patient_reminders') {
          fetchReminders(selectedReminderPatient);
          fetchReminderPatients();
        } else {
          fetchReminders(null, 'personal');
        }
      } else {
        fetchReminders();
      }
    } catch (err) {
      notify(err.response?.data?.message || t('reminderErrorMsg'));
    }
  };

  const handleStartEditReminder = (rem) => {
    setEditingReminderId(rem._id);
    setEditReminderMedicine(rem.medicine || '');
    setEditReminderSchedule(rem.schedule || '');
  };

  const handleCancelEditReminder = () => {
    setEditingReminderId(null);
    setEditReminderMedicine('');
    setEditReminderSchedule('');
  };

  const handleSaveEditReminder = async (remId) => {
    if (!editReminderMedicine.trim() || !editReminderSchedule.trim()) {
      notify('Medicine name and schedule cannot be empty');
      return;
    }
    try {
      await API.put(`/reminders/${remId}`, {
        medicine: editReminderMedicine.trim(),
        schedule: editReminderSchedule.trim()
      });
      notify(t('reminderUpdatedSuccess'));
      setEditingReminderId(null);
      setEditReminderMedicine('');
      setEditReminderSchedule('');
      
      if (user.role === 'Doctor' || user.role === 'Nurse') {
        if (reminderSubTab === 'patient_reminders') {
          fetchReminders(selectedReminderPatient);
        } else {
          fetchReminders(null, 'personal');
        }
      } else {
        fetchReminders();
      }
    } catch (err) {
      notify(err.response?.data?.message || 'Error updating reminder');
    }
  };

  const handleDeleteReminder = async (remId) => {
    if (!window.confirm('Are you sure you want to delete this reminder?')) {
      return;
    }
    try {
      await API.delete(`/reminders/${remId}`);
      notify(t('reminderDeletedSuccess'));
      if (user.role === 'Doctor' || user.role === 'Nurse') {
        if (reminderSubTab === 'patient_reminders') {
          fetchReminders(selectedReminderPatient);
        } else {
          fetchReminders(null, 'personal');
        }
      } else {
        fetchReminders();
      }
    } catch (err) {
      notify(err.response?.data?.message || 'Error deleting reminder');
    }
  };

  useEffect(() => {
    if (user) {
      if (activeTab === 'appointments') {
        fetchDoctors();
        fetchAppointments();
        if (user.role === 'Patient') {
          fetchAllCentres(); // Load centres for the appointment centre filter
        }
      } else if (activeTab === 'centres') {
        fetchCentres(selectedCity, selectedCentreType);
      } else if (activeTab === 'reminders') {
        if (user.role === 'Doctor' || user.role === 'Nurse') {
          fetchReminderPatients();
          if (reminderSubTab === 'patient_reminders') {
            fetchReminders(selectedReminderPatient);
          } else {
            fetchReminders(null, 'personal');
          }
        } else {
          fetchReminders();
        }
      } else if (activeTab === 'records') {
        if (user.role === 'Doctor' || user.role === 'Nurse') {
          fetchAcceptedPatients();
        }
        fetchRecords(selectedRecordPatient);
      }
    }
  }, [activeTab, user, selectedCity, selectedCentreType, reminderSubTab, selectedReminderPatient, selectedRecordPatient, fetchDoctors, fetchAppointments, fetchCentres, fetchAllCentres, fetchReminders, fetchReminderPatients, fetchRecords, fetchAcceptedPatients]);

  // Fetch centres list for Doctor/Nurse registration dropdown
  useEffect(() => {
    if (isRegistering && (role === 'Doctor' || role === 'Nurse')) {
      (async () => {
        try {
          const res = await API.get('/centres');
          setRegistrationCentres(Array.isArray(res.data) ? res.data : []);
        } catch {
          setRegistrationCentres([]);
        }
      })();
    }
  }, [isRegistering, role]);

  // Real-time synchronization for medicine reminders
  useEffect(() => {
    if (user && activeTab === 'reminders') {
      const syncInterval = setInterval(() => {
        if (user.role === 'Doctor' || user.role === 'Nurse') {
          if (reminderSubTab === 'patient_reminders') {
            fetchReminders(selectedReminderPatient);
          } else {
            fetchReminders(null, 'personal');
          }
        } else {
          fetchReminders();
        }
      }, 5000);
      return () => clearInterval(syncInterval);
    }
  }, [user, activeTab, reminderSubTab, selectedReminderPatient, fetchReminders]);

  // Translate role name
  const getRoleDisplayName = (r) => {
    if (r === 'Doctor') return t('roleDoctor');
    if (r === 'Nurse') return t('roleNurse');
    return t('rolePatient');
  };

  // Translate status
  const getStatusDisplayName = (st) => {
    if (st === 'Pending') return t('statusPending');
    if (st === 'Accepted') return t('statusAccepted');
    if (st === 'Rejected') return t('statusRejected');
    if (st === 'Scheduled') return t('statusScheduled');
    if (st === 'Completed') return t('statusCompleted');
    return st;
  };

  const getStatusBadgeClass = (st) => {
    if (st === 'Accepted') return 'badge-green';
    if (st === 'Rejected') return 'badge-red';
    if (st === 'Pending') return 'badge-amber';
    return 'badge-green';
  };

  // Logged-out Login & Registration View
  if (!user) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '30px 16px' }}>
        <div 
          className="health-app-shell"
          style={{ width: '100%', maxWidth: '520px', padding: '32px 28px' }}
        >
          {/* Top Bar with Status Badge and Green-Border Hamburger Selector */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '22px',
            paddingBottom: '16px',
            borderBottom: '1.5px solid #a7f3d0'
          }}>
            <div className="badge-green">
              <span className="badge-green-dot" />
              <span>{dbStatus}</span>
            </div>

            <HamburgerButton
              onClick={() => setIsDrawerOpen(true)}
              currentLanguage={currentLanguage}
            />
          </div>

          {/* Attractive Healthcare Brand Header */}
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#ecfdf5',
              border: '2px solid #10b981',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.2)',
              marginBottom: '12px',
              fontSize: '32px'
            }}>
              🏥
            </div>
            <h1 style={{ margin: '0 0 6px 0', fontSize: '24px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>
              {t('appName')}
            </h1>
            <p style={{ margin: 0, color: '#047857', fontSize: '14px', fontWeight: 600 }}>
              {t('appTagline')}
            </p>
          </div>
          
          {feedback && (
            <div style={{ background: '#ecfdf5', color: '#065f46', padding: '12px 16px', borderRadius: '8px', marginBottom: '18px', fontSize: '14px', border: '1.5px solid #6ee7b7', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>✓</span>
              <span>{feedback}</span>
            </div>
          )}
          {error && (
            <div style={{ background: '#fef2f2', color: '#991b1b', padding: '12px 16px', borderRadius: '8px', marginBottom: '18px', fontSize: '14px', border: '1.5px solid #fecaca', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form Card with Green Border Accent */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid #a7f3d0',
            padding: '24px',
            borderRadius: '12px',
            boxShadow: '0 4px 16px rgba(16, 185, 129, 0.08)'
          }}>
            <h2 style={{
              marginTop: 0,
              marginBottom: '20px',
              fontSize: '18px',
              fontWeight: 700,
              color: '#0f172a',
              borderBottom: '1.5px solid #ecfdf5',
              paddingBottom: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span style={{ color: '#059669' }}>{isRegistering ? '📝' : '🔐'}</span>
              <span>{isRegistering ? t('registerTitle') : t('loginTitle')}</span>
            </h2>

            {isRegistering ? (
              <form onSubmit={handleRegister} autoComplete="off">
                <div className="form-group">
                  <label className="form-label">{t('fullName')}</label>
                  <input 
                    type="text" 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder={t('fullNamePlaceholder')} 
                    required 
                    className="form-input-green"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('phoneNumber')}</label>
                  <input 
                    type="text" 
                    value={phone} 
                    onChange={e => setPhone(e.target.value)} 
                    placeholder={t('phonePlaceholder')} 
                    required 
                    className="form-input-green"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">{t('password')}</label>
                  <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <input 
                      type="text" 
                      value={password} 
                      onChange={e => setPassword(e.target.value)} 
                      placeholder={t('passwordPlaceholder')} 
                      required 
                      autoComplete="new-password"
                      spellCheck="false"
                      autoCorrect="off"
                      autoCapitalize="off"
                      data-lpignore="true"
                      className={`form-input-green ${showPassword ? 'password-mask-input unmasked' : 'password-mask-input'}`}
                      style={{ paddingRight: '42px' }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '10px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        padding: '4px',
                        color: '#64748b'
                      }}
                      title={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">{t('accountRole')}</label>
                  <select 
                    value={role} 
                    onChange={e => setRole(e.target.value)} 
                    className="form-input-green"
                    style={{ backgroundColor: '#ffffff', cursor: 'pointer' }}
                  >
                    <option value="Patient">{t('rolePatient')}</option>
                    <option value="Doctor">{t('roleDoctor')}</option>
                    <option value="Nurse">{t('roleNurse')}</option>
                  </select>
                </div>

                {role === 'Doctor' && (
                  <>
                    <div className="form-group">
                      <label className="form-label">{t('medicalSpecialization')}</label>
                      <input 
                        type="text" 
                        value={specialization} 
                        onChange={e => setSpecialization(e.target.value)} 
                        placeholder={t('specializationPlaceholder')} 
                        required 
                        className="form-input-green"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">{t('consultationAvailability')}</label>
                      <input 
                        type="text" 
                        value={availability} 
                        onChange={e => setAvailability(e.target.value)} 
                        placeholder={t('availabilityPlaceholder')} 
                        required 
                        className="form-input-green"
                      />
                    </div>

                    {/* Doctor Area Location & Hospital Selection from Database */}
                    <div style={{ background: '#f0fdf4', border: '1.5px solid #a7f3d0', padding: '16px', borderRadius: '12px', marginBottom: '18px' }}>
                      <div style={{ fontWeight: 800, color: '#065f46', fontSize: '14px', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>📍</span>
                        <span>Choose Practice Area Location & Hospital (From Database)</span>
                      </div>

                      {/* Area Location Cascading Dropdowns: State, District, City */}
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', marginBottom: '12px' }}>
                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>State *</label>
                          <select 
                            className="form-input-green" 
                            value={docRegState} 
                            onChange={e => setDocRegState(e.target.value)} 
                            required 
                            style={{ backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 10px', fontSize: '13px' }}
                          >
                            <option value="">Select State</option>
                            {regStates.map(s => <option key={s} value={s}>{s}</option>)}
                          </select>
                        </div>

                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>District *</label>
                          <select 
                            className="form-input-green" 
                            value={docRegDistrict} 
                            onChange={e => setDocRegDistrict(e.target.value)} 
                            disabled={!docRegState} 
                            required 
                            style={{ backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 10px', fontSize: '13px' }}
                          >
                            <option value="">Select District</option>
                            {regDistricts.map(d => <option key={d} value={d}>{d}</option>)}
                          </select>
                        </div>

                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>City / Area *</label>
                          <select 
                            className="form-input-green" 
                            value={docRegCity} 
                            onChange={e => setDocRegCity(e.target.value)} 
                            disabled={!docRegDistrict} 
                            required 
                            style={{ backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 10px', fontSize: '13px' }}
                          >
                            <option value="">Select City/Area</option>
                            {regCities.map(c => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Hospital Dropdown based on chosen Area Location */}
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                          🏥 Hospital Name * {docRegCity ? `(in ${docRegCity})` : docRegState ? `(in ${docRegState})` : ''}
                        </label>
                        <select 
                          value={docRegHospitalId} 
                          onChange={e => setDocRegHospitalId(e.target.value)} 
                          className="form-input-green"
                          style={{ backgroundColor: '#ffffff', cursor: 'pointer', width: '100%' }}
                          required
                        >
                          <option value="">-- Choose Hospital from Database --</option>
                          {regHospitals.map(h => (
                            <option key={h._id} value={h._id}>
                              🏥 {h.name} — {h.address || h.location} ({h.city})
                            </option>
                          ))}
                        </select>
                      </div>

                      {docRegHospitalId && (
                        (() => {
                          const hosp = regHospitals.find(h => h._id === docRegHospitalId);
                          if (!hosp) return null;
                          return (
                            <div style={{ marginTop: '10px', fontSize: '12px', color: '#065f46', background: '#ffffff', padding: '10px 12px', borderRadius: '8px', border: '1px solid #bbf7d0' }}>
                              <div><strong>🏥 Hospital Name:</strong> {hosp.name}</div>
                              <div><strong>📍 Area Location:</strong> {hosp.address || hosp.location}, {hosp.city}, {hosp.state}</div>
                              {hosp.phone && <div><strong>📞 Phone:</strong> {hosp.phone}</div>}
                            </div>
                          );
                        })()
                      )}
                    </div>
                  </>
                )}

                {role === 'Nurse' && (
                  <div className="form-group">
                    <label className="form-label">🏥 Associated Hospital / Centre</label>
                    <select 
                      value={registerCentreId} 
                      onChange={e => setRegisterCentreId(e.target.value)} 
                      className="form-input-green"
                      style={{ backgroundColor: '#ffffff', cursor: 'pointer' }}
                      required
                    >
                      <option value="">-- Select Hospital --</option>
                      {hospitalList.map(h => (
                        <option key={h._id} value={h._id}>
                          🏥 {h.name} — {h.city || h.district || 'Tamil Nadu'}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="form-group" style={{ marginBottom: '22px' }}>
                  <label className="form-label">{t('preferredLanguage')}</label>
                  <select 
                    value={registerLanguage} 
                    onChange={e => {
                      setRegisterLanguage(e.target.value);
                      changeLanguage(e.target.value);
                    }} 
                    className="form-input-green"
                    style={{ backgroundColor: '#ffffff', cursor: 'pointer' }}
                  >
                    <option value="en">🇬🇧 English</option>
                    <option value="hi">🇮🇳 हिन्दी (Hindi)</option>
                    <option value="ta">🇮🇳 தமிழ் (Tamil)</option>
                    <option value="te">🇮🇳 తెలుగు (Telugu)</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="btn-green-primary"
                  style={{ width: '100%', fontSize: '15px' }}
                >
                  <span>✓</span>
                  <span>{t('registerBtn')}</span>
                </button>

                <p 
                  style={{ cursor: 'pointer', color: '#059669', marginTop: '18px', textAlign: 'center', marginBottom: 0, fontSize: '14px', fontWeight: 600 }} 
                  onClick={() => { setIsRegistering(false); setError(''); }}
                >
                  {t('alreadyRegistered')}
                </p>
              </form>
            ) : (
              <div>
                <form onSubmit={handleLogin} autoComplete="off">
                  <div className="form-group">
                    <label className="form-label">{t('phoneNumber')}</label>
                    <input 
                      type="text" 
                      value={phone} 
                      onChange={e => setPhone(e.target.value)} 
                      placeholder={t('phonePlaceholder')}
                      required 
                      className="form-input-green"
                    />
                  </div>

                  <div className="form-group" style={{ marginBottom: '22px' }}>
                    <label className="form-label">{t('password')}</label>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                      <input 
                        type="text" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                        placeholder={t('passwordPlaceholder')}
                        required 
                        autoComplete="new-password"
                        spellCheck="false"
                        autoCorrect="off"
                        autoCapitalize="off"
                        data-lpignore="true"
                        className={`form-input-green ${showPassword ? 'password-mask-input unmasked' : 'password-mask-input'}`}
                        style={{ paddingRight: '42px' }}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '16px',
                          padding: '4px',
                          color: '#64748b'
                        }}
                        title={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? '🙈' : '👁️'}
                      </button>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn-green-primary"
                    style={{ width: '100%', fontSize: '15px' }}
                  >
                    <span>➔</span>
                    <span>{t('loginBtn')}</span>
                  </button>

                  <p 
                    style={{ cursor: 'pointer', color: '#059669', marginTop: '18px', textAlign: 'center', marginBottom: 0, fontSize: '14px', fontWeight: 600 }} 
                    onClick={() => { setIsRegistering(true); setError(''); }}
                  >
                    {t('dontHaveAccount')}
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>

        {/* Language Selection Drawer Modal */}
        <LanguageDrawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          currentLanguage={currentLanguage}
          onSelectLanguage={changeLanguage}
          user={null}
          onLogout={handleLogout}
          dbStatus={dbStatus}
        />
      </div>
    );
  }

  if (user && user.role === 'Doctor' && doctorOnboarding) {
    return (
      <div style={{ padding: '24px 16px', maxWidth: '900px', margin: 'auto' }}>
        <DoctorProfileOnboarding user={user} onCompleted={(prof) => {
          setDoctorProfile(prof);
          setDoctorOnboarding(false);
          notify('Doctor profile completed');
        }} />
      </div>
    );
  }

  // Logged-in Dashboard View
  return (
    <div style={{ padding: '24px 16px', maxWidth: '1100px', margin: 'auto', textAlign: 'left' }}>
      
      {/* Master Shell Container with 2px Green Border */}
      <div className="health-app-shell" style={{ padding: '24px 28px' }}>
        
        {/* Top Header */}
        <header style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '2px solid #a7f3d0',
          paddingBottom: '20px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#ecfdf5',
                border: '1.5px solid #10b981',
                fontSize: '20px'
              }}>
                🏥
              </span>
              <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.3px' }}>
                {t('dashboardTitle')}
              </h1>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', marginTop: '6px' }}>
              <span style={{ fontSize: '14px', color: '#475569' }}>
                {t('welcomeUser')} <strong style={{ color: '#0f172a' }}>{user.name}</strong>{' '}
                <span className="badge-green" style={{ marginLeft: '4px' }}>
                  {getRoleDisplayName(user.role)}
                </span>
              </span>
              {user.role === 'Doctor' && (
                <span className="badge-green" style={{ background: '#ecfdf5', border: '1.5px solid #10b981', color: '#065f46', fontWeight: 700 }}>
                  🏥 {doctorProfile?.hospital?.name || user.hospital?.name || 'Hospital Attached'}
                  {(doctorProfile?.hospital?.city || user.hospital?.city) ? ` (${doctorProfile?.hospital?.city || user.hospital?.city})` : ''}
                </span>
              )}
              <div className="badge-green">
                <span className="badge-green-dot" />
                <span>{dbStatus}</span>
              </div>
            </div>
          </div>

          {/* Header Actions: Hamburger Menu + Logout */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <HamburgerButton
              onClick={() => setIsDrawerOpen(true)}
              currentLanguage={currentLanguage}
            />

            <button 
              onClick={handleLogout} 
              style={{ 
                padding: '9px 18px', 
                background: '#ffffff', 
                color: '#dc2626', 
                border: '1.5px solid #f87171', 
                borderRadius: '10px', 
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '14px',
                transition: 'all 0.2s ease',
                boxShadow: '0 2px 5px rgba(220, 38, 38, 0.08)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#fef2f2';
                e.currentTarget.style.borderColor = '#dc2626';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#ffffff';
                e.currentTarget.style.borderColor = '#f87171';
              }}
            >
              {t('logout')}
            </button>
          </div>
        </header>

        {feedback && (
          <div style={{ background: '#ecfdf5', color: '#065f46', padding: '12px 18px', borderRadius: '8px', margin: '18px 0', border: '1.5px solid #6ee7b7', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>✓</span>
            <span>{feedback}</span>
          </div>
        )}

        {/* Persistent Floating Active Call Banner for Doctor/Patient when on other tabs */}
        {user?.role !== 'Nurse' && callSessionInfo?.callState === 'connected' && activeTab !== 'telemedicine' && (
          <div className="floating-call-banner">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="badge-green-dot"></span>
              <span style={{ fontWeight: 800, color: '#065f46', fontSize: '14px' }}>
                🎙️ LIVE CONSULTATION CALL: {callSessionInfo.otherPartyName || 'Patient'}
              </span>
              <span style={{ background: '#ecfdf5', border: '1.5px solid #6ee7b7', color: '#047857', padding: '3px 12px', borderRadius: '14px', fontSize: '13px', fontWeight: 700, fontFamily: 'monospace' }}>
                ⏱️ {callSessionInfo.callTimer}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button 
                type="button" 
                onClick={() => setActiveTab('telemedicine')}
                className="btn-green-primary"
                style={{ padding: '6px 14px', fontSize: '12px' }}
              >
                <span>🎙️</span>
                <span>Open Call Room</span>
              </button>
              <button 
                type="button" 
                onClick={callSessionInfo.onToggleMute}
                className="btn-green-outline"
                style={{ padding: '6px 12px', fontSize: '12px' }}
              >
                <span>{callSessionInfo.isMuted ? '🔇 Unmute' : '🎙️ Mute'}</span>
              </button>
              <button 
                type="button" 
                onClick={callSessionInfo.onEndCall}
                style={{ padding: '6px 14px', fontSize: '12px', background: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
              >
                <span>🔴 End Call</span>
              </button>
            </div>
          </div>
        )}

        {/* Global Incoming Call Popup Modal for Patient */}
        {incomingCall && (
          <div className="incoming-call-overlay">
            <div className="incoming-call-card">
              <div className="incoming-call-ring-icon">
                <span>📞</span>
              </div>
              <h3 style={{ margin: '0 0 6px 0', color: '#065f46', fontSize: '20px', fontWeight: 800 }}>
                Incoming Audio Consultation Call
              </h3>
              <p style={{ margin: '0 0 20px 0', color: '#475569', fontSize: '14px', lineHeight: 1.5 }}>
                <strong>Dr. {incomingCall.appointment_id?.doctor_id?.name || 'Your Doctor'}</strong> ({incomingCall.appointment_id?.doctor_id?.specialization || 'General Physician'}) is calling you for your scheduled consultation.
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button 
                  type="button" 
                  className="btn-accept-call"
                  onClick={handleAcceptIncomingCall}
                >
                  <span>🟢</span>
                  <span>Accept & Join Call</span>
                </button>
                <button 
                  type="button" 
                  className="btn-decline-call"
                  onClick={handleDeclineIncomingCall}
                >
                  <span>🔴</span>
                  <span>Decline</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs with Green Border */}
        <nav style={{ display: 'flex', gap: '10px', margin: '22px 0', flexWrap: 'wrap' }}>
          <button 
            onClick={() => setActiveTab('home')} 
            className={`nav-tab-btn ${activeTab === 'home' ? 'active' : ''}`}
          >
            <span>🏠</span>
            <span>{t('navHome')}</span>
          </button>
          <button 
            onClick={() => setActiveTab('appointments')} 
            className={`nav-tab-btn ${activeTab === 'appointments' ? 'active' : ''}`}
          >
            <span>📅</span>
            <span>{t('navAppointments')}</span>
          </button>
          <button 
            onClick={() => setActiveTab('records')} 
            className={`nav-tab-btn ${activeTab === 'records' ? 'active' : ''}`}
          >
            <span>📁</span>
            <span>{t('navRecords')}</span>
          </button>
          <button 
            onClick={() => setActiveTab('reminders')} 
            className={`nav-tab-btn ${activeTab === 'reminders' ? 'active' : ''}`}
          >
            <span>⏰</span>
            <span>{t('navReminders')}</span>
          </button>
          <button 
            onClick={() => setActiveTab('centres')} 
            className={`nav-tab-btn ${activeTab === 'centres' ? 'active' : ''}`}
          >
            <span>🏥</span>
            <span>{t('navCentres')}</span>
          </button>
          {user?.role !== 'Nurse' && (
            <button 
              onClick={() => setActiveTab('telemedicine')} 
              className={`nav-tab-btn ${activeTab === 'telemedicine' ? 'active' : ''}`}
            >
              <span>🎙️</span>
              <span>{t('navTelemedicine')}</span>
            </button>
          )}
        </nav>

        {/* Main Tab Panels with Green Border Framing */}
        <main style={{
          background: '#ffffff',
          padding: '28px',
          borderRadius: '12px',
          border: '1.5px solid #a7f3d0',
          boxShadow: '0 4px 16px rgba(16, 185, 129, 0.06)'
        }}>
          
          {/* Home / Overview */}
          {activeTab === 'home' && (
            <div>
              <div style={{ marginBottom: '26px', textAlign: 'center' }}>
                <h2 style={{ margin: '0 0 8px 0', color: '#0f172a', fontSize: '22px', fontWeight: 800 }}>
                  {t('overviewTitle')}
                </h2>
                <p style={{ lineHeight: '1.6', color: '#475569', fontSize: '14px', margin: '0 auto', maxWidth: '680px' }}>
                  {t('overviewDesc')}
                </p>
              </div>

              {/* Module Cards Grid - All 5 grids aligned in the centre, Telemedicine moved to 5th */}
              <div className="dashboard-modules-grid">
                
                {/* 1. Appointments */}
                <div 
                  className="green-card dashboard-module-card" 
                  onClick={() => setActiveTab('appointments')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '30px' }}>📅</span>
                    <span className="badge-green" style={{ fontSize: '11px' }}>Active Module</span>
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                    {t('cardAppointmentsTitle')}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    {t('cardAppointmentsDesc')}
                  </p>
                </div>

                {/* 2. Medical Records */}
                <div 
                  className="green-card dashboard-module-card" 
                  onClick={() => setActiveTab('records')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '30px' }}>📁</span>
                    <span className="badge-green" style={{ fontSize: '11px' }}>Secure Records</span>
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                    {t('cardRecordsTitle')}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    {t('cardRecordsDesc')}
                  </p>
                </div>

                {/* 3. Medicine Reminders */}
                <div 
                  className="green-card dashboard-module-card" 
                  onClick={() => setActiveTab('reminders')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '30px' }}>⏰</span>
                    <span className="badge-green" style={{ fontSize: '11px' }}>Daily Dosage</span>
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                    {t('cardRemindersTitle')}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    {t('cardRemindersDesc')}
                  </p>
                </div>

                {/* 4. Nearby Health Centres */}
                <div 
                  className="green-card dashboard-module-card" 
                  onClick={() => setActiveTab('centres')}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '30px' }}>🏥</span>
                    <span className="badge-green" style={{ fontSize: '11px' }}>Directory</span>
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                    {t('cardCentresTitle')}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                    {t('cardCentresDesc')}
                  </p>
                </div>

                {/* 5. Telemedicine (Hidden for Nurse) */}
                {user?.role !== 'Nurse' && (
                  <div 
                    className="green-card dashboard-module-card" 
                    onClick={() => setActiveTab('telemedicine')}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                      <span style={{ fontSize: '30px' }}>🎙️</span>
                      <span className="badge-green" style={{ fontSize: '11px' }}>2G/3G Ready</span>
                    </div>
                    <h3 style={{ margin: '0 0 8px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                      {t('cardTelemedicineTitle')}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#475569', margin: 0, lineHeight: 1.5 }}>
                      {t('cardTelemedicineDesc')}
                    </p>
                  </div>
                )}

              </div>
            </div>
          )}

          {/* Appointments Module */}
          {activeTab === 'appointments' && (
            <div>
              {user.role === 'Patient' ? (
                <LocationBooking 
                  user={user} 
                  notify={notify} 
                  onBooked={fetchAppointments} 
                  preselectedHospital={preselectedHospital} 
                />
              ) : (
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                    <h2 style={{ margin: 0, color: '#0f172a', fontSize: '20px', fontWeight: 700 }}>
                      📋 {t('manageAppointmentsTitle')}
                    </h2>
                    <span className="badge-green">
                      {getRoleDisplayName(user.role)} Portal
                    </span>
                  </div>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                    {user.role === 'Doctor' 
                      ? 'Review incoming consultation appointments booked by patients. Accept or reject appointments to update the schedule.' 
                      : 'Clinical staff appointment triage: Review, accept, or reject patient appointments.'}
                  </p>
                </div>
              )}

              {appointments.length === 0 ? (
                <div style={{ padding: '28px', textAlign: 'center', background: '#f8fafc', border: '1.5px dashed #cbd5e1', borderRadius: '12px', color: '#64748b' }}>
                  <div style={{ fontSize: '28px', marginBottom: '6px' }}>🗓️</div>
                  <div>{t('noAppointmentsFound')}</div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {appointments.map(app => {
                    const isDoctorOrNurse = user.role === 'Doctor' || user.role === 'Nurse';
                    const isAccepted = app.status === 'Accepted';
                    const isRejected = app.status === 'Rejected';

                    return (
                      <div 
                        key={app._id} 
                        className="green-card"
                        style={{
                          padding: '18px 22px',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          flexWrap: 'wrap',
                          gap: '16px',
                          borderLeft: isAccepted ? '5px solid #10b981' : isRejected ? '5px solid #ef4444' : '5px solid #f59e0b'
                        }}
                      >
                        {/* Information Section */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', minWidth: '240px' }}>
                          <div style={{
                            width: '46px',
                            height: '46px',
                            borderRadius: '12px',
                            backgroundColor: isDoctorOrNurse ? '#f0fdf4' : '#ecfdf5',
                            border: '1.5px solid #10b981',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '22px',
                            color: '#059669',
                            fontWeight: 700
                          }}>
                            {isDoctorOrNurse ? '👤' : '👨‍⚕️'}
                          </div>

                          <div>
                            {/* If Doctor/Nurse viewing, lead with Patient name */}
                            {isDoctorOrNurse ? (
                              <>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                                  {t('patientLabel')} {app.user_id?.name || 'Patient'}
                                </div>
                                <div style={{ fontSize: '13px', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
                                  📞 {app.user_id?.phone || 'No phone'}
                                </div>
                                {app.doctor_id?.name && (
                                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                                    <strong>{t('doctorLabel')}</strong> {app.doctor_id.name} ({app.doctor_id.specialization || 'General'})
                                  </div>
                                )}
                              </>
                            ) : (
                              /* If Patient viewing, lead with Doctor name */
                              <>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                                  {t('doctorLabel')} {app.doctor_id?.name || t('assignedSpecialist')}
                                </div>
                                <div style={{ fontSize: '13px', color: '#047857', fontWeight: 500 }}>
                                  {app.doctor_id?.specialization || 'General Healthcare'}
                                </div>
                              </>
                            )}

                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <span>🗓️</span>
                              <span>{new Date(app.date_time).toLocaleString()}</span>
                            </div>

                            {(app.hospital?.name || app.doctor_id?.hospital?.name) && (
                              <div style={{ fontSize: '12px', color: '#047857', fontWeight: 600, marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <span>🏥</span>
                                <span>
                                  {app.hospital?.name || app.doctor_id?.hospital?.name}
                                  {(app.hospital?.location || app.hospital?.city || app.doctor_id?.hospital?.city) && ` (📍 ${app.hospital?.location || app.hospital?.city || app.doctor_id?.hospital?.city})`}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Status & Actions Section */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                          {/* Status Badge */}
                          <div className={getStatusBadgeClass(app.status)}>
                            <span>{isAccepted ? '✅' : isRejected ? '❌' : '⏳'}</span>
                            <span>{getStatusDisplayName(app.status)}</span>
                          </div>

                          {/* Patient quick-action to join audio call when accepted */}
                          {!isDoctorOrNurse && isAccepted && (
                            <button
                              type="button"
                              onClick={() => {
                                setActiveTelemedicineAppId(app._id);
                                setActiveTab('telemedicine');
                              }}
                              className="btn-green-primary"
                              style={{ padding: '7px 14px', fontSize: '13px' }}
                              title="Join live audio consultation with your doctor"
                            >
                              <span>🎙️</span>
                              <span>Join Audio Call</span>
                            </button>
                          )}

                          {/* Doctor & Nurse Accept / Reject & Record Access Controls */}
                          {isDoctorOrNurse && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                              {!isAccepted && (
                                <button
                                  type="button"
                                  onClick={() => handleUpdateAppointmentStatus(app._id, 'Accepted')}
                                  className="btn-accept-green"
                                  title="Accept this appointment"
                                >
                                  <span>✓</span>
                                  <span>{t('acceptBtn')}</span>
                                </button>
                              )}

                              {!isRejected && (
                                <button
                                  type="button"
                                  onClick={() => handleUpdateAppointmentStatus(app._id, 'Rejected')}
                                  className="btn-reject-red"
                                  title="Reject this appointment"
                                >
                                  <span>✕</span>
                                  <span>{t('rejectBtn')}</span>
                                </button>
                              )}

                              {isAccepted && (
                                <>
                                  {user?.role === 'Doctor' && (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        setActiveTelemedicineAppId(app._id);
                                        setActiveTab('telemedicine');
                                      }}
                                      className="btn-green-primary"
                                      style={{ padding: '7px 14px', fontSize: '13px' }}
                                      title="Start live audio consultation with patient"
                                    >
                                      <span>🎙️</span>
                                      <span>Call Patient</span>
                                    </button>
                                  )}
                                  <button
                                    type="button"
                                    onClick={() => {
                                      const pId = app.user_id?._id || (typeof app.user_id === 'string' ? app.user_id : '');
                                      setSelectedRecordPatient(pId);
                                      setNewRecordPatientId(pId);
                                      setActiveTab('records');
                                      fetchRecords(pId);
                                      fetchAcceptedPatients();
                                    }}
                                    className="btn-green-outline"
                                    style={{ padding: '7px 14px', fontSize: '13px' }}
                                    title="Access and edit patient medical records"
                                  >
                                    <span>📝</span>
                                    <span>{t('goToRecordsBtn')}</span>
                                  </button>
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Telemedicine Module (Hidden for Nurse; persistently mounted during active call to prevent disconnection) */}
          {user?.role !== 'Nurse' && (
            <div style={{ display: activeTab === 'telemedicine' ? 'block' : 'none' }}>
              <TelemedicineRoom
                user={user}
                appointments={appointments}
                t={t}
                notify={notify}
                preselectedAppointmentId={activeTelemedicineAppId}
                onCallSessionUpdate={setCallSessionInfo}
                onNavigateToRecords={(pId) => {
                  setSelectedRecordPatient(pId);
                  setNewRecordPatientId(pId);
                  setActiveTab('records');
                  fetchRecords(pId);
                  fetchAcceptedPatients();
                }}
              />
            </div>
          )}

          {/* Medical Records Module */}
          {activeTab === 'records' && (
            <div>
              {/* Header section based on role */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '8px' }}>
                  <h2 style={{ margin: 0, color: '#0f172a', fontSize: '20px', fontWeight: 700 }}>
                    📋 {user.role === 'Doctor' || user.role === 'Nurse' ? t('doctorNurseEditorTitle') : t('recordsHeading')}
                  </h2>
                  <span className="badge-green">
                    {user.role === 'Doctor' || user.role === 'Nurse' ? `${getRoleDisplayName(user.role)} Portal` : 'Patient Health Vault'}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                  {user.role === 'Doctor' || user.role === 'Nurse' 
                    ? 'Access patients with accepted appointment schedules, review historical clinical notes, add new diagnoses, and edit prescriptions.' 
                    : t('patientRecordsSubtitle')}
                </p>
              </div>

              {/* Doctor / Nurse Controls Bar: Patient Selector & Add Record Toggle */}
              {(user.role === 'Doctor' || user.role === 'Nurse') && (
                <div style={{
                  background: '#f0fdf4',
                  border: '1.5px solid #a7f3d0',
                  padding: '16px 20px',
                  borderRadius: '12px',
                  marginBottom: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '14px'
                }}>
                  {/* Patient Dropdown from Accepted Appointments */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', flex: 1 }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#065f46', whiteSpace: 'nowrap' }}>
                      🔍 {t('filterByPatient')}
                    </label>
                    <select
                      value={selectedRecordPatient}
                      onChange={(e) => {
                        const val = e.target.value;
                        setSelectedRecordPatient(val);
                        setNewRecordPatientId(val);
                        fetchRecords(val);
                      }}
                      className="form-input-green"
                      style={{ maxWidth: '340px', padding: '8px 12px', cursor: 'pointer', backgroundColor: '#ffffff' }}
                    >
                      <option value="">{t('allPatientsOption')}</option>
                      {acceptedPatients.map(p => (
                        <option key={p._id} value={p._id}>
                          {p.name} (📞 {p.phone})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Add New Record Button */}
                  <button
                    type="button"
                    onClick={() => {
                      if (!newRecordPatientId && acceptedPatients.length > 0) {
                        setNewRecordPatientId(acceptedPatients[0]._id);
                      }
                      setShowAddRecordForm(!showAddRecordForm);
                    }}
                    className="btn-green-primary"
                    style={{ padding: '9px 18px', fontSize: '13px' }}
                  >
                    <span>{showAddRecordForm ? '✕' : '+'}</span>
                    <span>{showAddRecordForm ? t('cancelBtn') : t('addNewRecordBtn')}</span>
                  </button>
                </div>
              )}

              {/* Add New Record Form for Doctor / Nurse */}
              {(user.role === 'Doctor' || user.role === 'Nurse') && showAddRecordForm && (
                <form 
                  onSubmit={handleCreateRecord}
                  style={{
                    background: '#ffffff',
                    border: '2px solid #10b981',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '26px',
                    boxShadow: '0 4px 16px rgba(16, 185, 129, 0.12)'
                  }}
                >
                  <h3 style={{ margin: '0 0 16px 0', fontSize: '17px', fontWeight: 700, color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>📝</span>
                    <span>{t('newRecordTitle')}</span>
                  </h3>

                  {acceptedPatients.length === 0 ? (
                    <div style={{ padding: '16px', background: '#fffbeb', border: '1.5px solid #fcd34d', borderRadius: '8px', color: '#92400e', fontSize: '13px' }}>
                      ⚠️ {t('noAcceptedPatientsNotice')}
                    </div>
                  ) : (
                    <>
                      <div className="form-group">
                        <label className="form-label">{t('selectPatientLabel')}</label>
                        <select
                          value={newRecordPatientId}
                          onChange={(e) => setNewRecordPatientId(e.target.value)}
                          required
                          className="form-input-green"
                          style={{ backgroundColor: '#ffffff', cursor: 'pointer' }}
                        >
                          <option value="">-- Choose Accepted Patient --</option>
                          {acceptedPatients.map(p => (
                            <option key={p._id} value={p._id}>
                              {p.name} (Phone: {p.phone}) - Accepted Appt: {new Date(p.appointmentDate).toLocaleDateString()}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label">{t('diagnosisLabel')}</label>
                        <input
                          type="text"
                          value={newRecordDiagnosis}
                          onChange={(e) => setNewRecordDiagnosis(e.target.value)}
                          required
                          className="form-input-green"
                          placeholder={t('diagnosisPlaceholder')}
                        />
                      </div>

                      <div className="form-group" style={{ marginBottom: '20px' }}>
                        <label className="form-label">{t('prescriptionNotesLabel')}</label>
                        <textarea
                          rows={4}
                          value={newRecordNotes}
                          onChange={(e) => setNewRecordNotes(e.target.value)}
                          required
                          className="form-input-green"
                          placeholder={t('prescriptionPlaceholder')}
                          style={{ resize: 'vertical' }}
                        />
                      </div>

                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button type="submit" className="btn-green-primary">
                          <span>💾</span>
                          <span>Save Medical Record</span>
                        </button>
                        <button 
                          type="button" 
                          onClick={() => setShowAddRecordForm(false)} 
                          className="btn-green-outline"
                        >
                          <span>✕</span>
                          <span>{t('cancelBtn')}</span>
                        </button>
                      </div>
                    </>
                  )}
                </form>
              )}

              {/* Records Listing */}
              {records.length === 0 ? (
                <div style={{ padding: '32px 24px', textAlign: 'center', background: '#f8fafc', border: '1.5px dashed #cbd5e1', borderRadius: '12px', color: '#64748b' }}>
                  <div style={{ fontSize: '32px', marginBottom: '8px' }}>📋</div>
                  <div style={{ fontSize: '15px', fontWeight: 600 }}>{t('noRecordsFound')}</div>
                  {(user.role === 'Doctor' || user.role === 'Nurse') && (
                    <div style={{ marginTop: '8px', fontSize: '13px', color: '#475569' }}>
                      Once you accept patient appointment schedules, use the &quot;+ Add Patient Record&quot; button to record clinical findings.
                    </div>
                  )}
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {records.map(rec => {
                    const isEditing = editingRecordId === rec._id;
                    const canEdit = user.role === 'Doctor' || user.role === 'Nurse';

                    return (
                      <div 
                        key={rec._id} 
                        className="green-card"
                        style={{
                          padding: '22px 24px',
                          borderLeft: isEditing ? '5px solid #059669' : '5px solid #10b981',
                          backgroundColor: isEditing ? '#f0fdf4' : '#ffffff'
                        }}
                      >
                        {isEditing ? (
                          /* Inline Record Editor Form */
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
                              <h4 style={{ margin: 0, color: '#065f46', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <span>✏️</span>
                                <span>{t('editRecordTitle')}</span>
                              </h4>
                              <span className="badge-green">
                                👤 {rec.user_id?.name ? `Patient: ${rec.user_id.name}` : 'Editing Clinical Record'}
                              </span>
                            </div>

                            <div className="form-group">
                              <label className="form-label">{t('diagnosisLabel')}</label>
                              <input 
                                type="text"
                                value={editDiagnosis}
                                onChange={(e) => setEditDiagnosis(e.target.value)}
                                required
                                className="form-input-green"
                                placeholder={t('diagnosisPlaceholder')}
                              />
                            </div>

                            <div className="form-group" style={{ marginBottom: '18px' }}>
                              <label className="form-label">{t('prescriptionNotesLabel')}</label>
                              <textarea
                                rows={4}
                                value={editNotes}
                                onChange={(e) => setEditNotes(e.target.value)}
                                required
                                className="form-input-green"
                                placeholder={t('prescriptionPlaceholder')}
                                style={{ resize: 'vertical' }}
                              />
                            </div>

                            <div style={{ display: 'flex', gap: '10px' }}>
                              <button
                                type="button"
                                onClick={() => handleSaveEditRecord(rec._id)}
                                className="btn-green-primary"
                                style={{ padding: '9px 20px' }}
                              >
                                <span>💾</span>
                                <span>{t('saveChangesBtn')}</span>
                              </button>
                              <button
                                type="button"
                                onClick={handleCancelEditRecord}
                                className="btn-green-outline"
                                style={{ padding: '9px 16px' }}
                              >
                                <span>✕</span>
                                <span>{t('cancelBtn')}</span>
                              </button>
                            </div>
                          </div>
                        ) : (
                          /* View Record Card */
                          <div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                              <div>
                                {/* Patient Identity (prominent for Doctor & Nurse) */}
                                {canEdit && (
                                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span>👤</span>
                                    <span>{t('patientLabel')} {rec.user_id?.name || 'Patient'}</span>
                                    {rec.user_id?.phone && (
                                      <span style={{ fontSize: '13px', color: '#059669', fontWeight: 600 }}>
                                        (📞 {rec.user_id.phone})
                                      </span>
                                    )}
                                  </div>
                                )}

                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#065f46', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span>📋</span>
                                  <span><strong>{t('diagnosisLabel')}</strong> {rec.diagnosis}</span>
                                </div>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="badge-green">Verified Clinical Record</span>

                                {/* Doctor or Nurse Edit Action Button */}
                                {canEdit && (
                                  <button
                                    type="button"
                                    onClick={() => handleStartEditRecord(rec)}
                                    className="btn-green-outline"
                                    style={{ padding: '6px 14px', fontSize: '12px' }}
                                    title={t('editRecordBtn')}
                                  >
                                    <span>✏️</span>
                                    <span>{t('editRecordBtn')}</span>
                                  </button>
                                )}
                              </div>
                            </div>

                            {/* Prescription & Clinical Notes */}
                            <div style={{
                              backgroundColor: '#f8fafc',
                              padding: '14px 18px',
                              borderRadius: '8px',
                              borderLeft: '4px solid #10b981',
                              color: '#334155',
                              fontSize: '14px',
                              lineHeight: 1.6,
                              marginBottom: '10px'
                            }}>
                              <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>
                                💊 {t('prescriptionNotesLabel')}
                              </div>
                              <div style={{ whiteSpace: 'pre-wrap' }}>
                                {rec.notes}
                              </div>
                            </div>

                            {/* Footer with Prescriber and Last Updated info */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '12px', color: '#64748b', marginTop: '10px' }}>
                              <div>
                                {rec.doctor_id?.name && (
                                  <span>
                                    🩺 <strong>{t('prescribedBy')}</strong> {rec.doctor_id.name} ({rec.doctor_id.specialization || 'Healthcare Specialist'})
                                  </span>
                                )}
                              </div>
                              <div>
                                <span>🕒 {t('lastUpdatedLabel')} {new Date(rec.updatedAt || rec.createdAt).toLocaleString()}</span>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}

          {/* Medicine Reminders Module */}
          {activeTab === 'reminders' && (
            <div>
              {/* Header with Title and Live Sync Badge */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '18px' }}>
                <div>
                  <h2 style={{ margin: '0 0 4px 0', color: '#0f172a', fontSize: '20px', fontWeight: 800 }}>
                    {t('remindersHeading')}
                  </h2>
                  <p style={{ margin: 0, color: '#64748b', fontSize: '13px' }}>
                    {(user.role === 'Doctor' || user.role === 'Nurse')
                      ? 'Prescribe, update, and monitor daily medication dosages for patients with instant live sync.'
                      : 'View your daily medication schedules prescribed by healthcare professionals with real-time updates.'}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="badge-green" style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span className="badge-green-dot" />
                    <span>{t('liveSyncBadge')}</span>
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      if (user.role === 'Doctor' || user.role === 'Nurse') {
                        if (reminderSubTab === 'patient_reminders') {
                          fetchReminders(selectedReminderPatient);
                          fetchReminderPatients();
                        } else {
                          fetchReminders(null, 'personal');
                        }
                      } else {
                        fetchReminders();
                      }
                    }}
                    className="btn-green-outline"
                    style={{ padding: '6px 14px', fontSize: '12px' }}
                    title={t('refreshRemindersBtn')}
                  >
                    <span>🔄</span>
                    <span>{t('refreshRemindersBtn')}</span>
                  </button>
                </div>
              </div>

              {/* Doctor / Nurse Navigation Subtabs */}
              {(user.role === 'Doctor' || user.role === 'Nurse') && (
                <div style={{ display: 'flex', gap: '10px', marginBottom: '22px', borderBottom: '2px solid #e2e8f0', paddingBottom: '12px' }}>
                  <button
                    type="button"
                    onClick={() => {
                      setReminderSubTab('patient_reminders');
                      fetchReminders(selectedReminderPatient);
                      fetchReminderPatients();
                    }}
                    className={`nav-tab-btn ${reminderSubTab === 'patient_reminders' ? 'active' : ''}`}
                    style={{ fontSize: '13px', padding: '8px 16px' }}
                  >
                    <span>👥</span>
                    <span>{t('patientRemindersSubtab')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setReminderSubTab('my_reminders');
                      fetchReminders(null, 'personal');
                    }}
                    className={`nav-tab-btn ${reminderSubTab === 'my_reminders' ? 'active' : ''}`}
                    style={{ fontSize: '13px', padding: '8px 16px' }}
                  >
                    <span>🩺</span>
                    <span>{t('myRemindersSubtab')}</span>
                  </button>
                </div>
              )}

              {/* DOCTOR / NURSE: Patient Reminders Subtab */}
              {(user.role === 'Doctor' || user.role === 'Nurse') && reminderSubTab === 'patient_reminders' && (
                <div>
                  {/* Filter and Action Bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '14px',
                    padding: '16px 20px',
                    background: '#f8fafc',
                    borderRadius: '10px',
                    border: '1.5px solid #e2e8f0',
                    marginBottom: '22px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', flex: 1 }}>
                      <label style={{ fontSize: '13px', fontWeight: 700, color: '#065f46', display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>👤</span>
                        <span>{t('selectPatientForReminder')}</span>
                      </label>
                      <select
                        value={selectedReminderPatient}
                        onChange={(e) => {
                          const val = e.target.value;
                          setSelectedReminderPatient(val);
                          setNewReminderPatientId(val);
                          fetchReminders(val);
                        }}
                        className="form-input-green"
                        style={{ maxWidth: '340px', padding: '8px 12px', cursor: 'pointer', backgroundColor: '#ffffff' }}
                      >
                        <option value="">{t('allPatientsOption')}</option>
                        {reminderPatients.map(p => (
                          <option key={p._id} value={p._id}>
                            {p.name} (📞 {p.phone})
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        if (!newReminderPatientId && reminderPatients.length > 0) {
                          setNewReminderPatientId(selectedReminderPatient || reminderPatients[0]._id);
                        }
                        setShowAddReminderForm(!showAddReminderForm);
                      }}
                      className="btn-green-primary"
                      style={{ padding: '8px 18px', fontSize: '13px' }}
                    >
                      <span>{showAddReminderForm ? '✕' : '+'}</span>
                      <span>{showAddReminderForm ? t('cancelBtn') : t('prescribeReminderTitle')}</span>
                    </button>
                  </div>

                  {/* Add New Reminder Form for Patient (Doctor Prescribing) */}
                  {showAddReminderForm && (
                    <form
                      onSubmit={handleAddReminder}
                      style={{
                        background: '#ffffff',
                        border: '2px solid #10b981',
                        borderRadius: '12px',
                        padding: '24px',
                        marginBottom: '26px',
                        boxShadow: '0 4px 16px rgba(16, 185, 129, 0.12)'
                      }}
                    >
                      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 700, color: '#065f46', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span>💊</span>
                        <span>{t('prescribeReminderTitle')}</span>
                      </h3>

                      {reminderPatients.length === 0 ? (
                        <div style={{ padding: '16px', background: '#fffbeb', border: '1.5px solid #fcd34d', borderRadius: '8px', color: '#92400e', fontSize: '13px' }}>
                          ⚠️ No patients available to prescribe.
                        </div>
                      ) : (
                        <>
                          <div className="form-group">
                            <label className="form-label">{t('selectPatientForReminder')}</label>
                            <select
                              value={newReminderPatientId || selectedReminderPatient || reminderPatients[0]?._id || ''}
                              onChange={(e) => setNewReminderPatientId(e.target.value)}
                              required
                              className="form-input-green"
                              style={{ backgroundColor: '#ffffff', cursor: 'pointer' }}
                            >
                              <option value="">{t('choosePatientOption')}</option>
                              {reminderPatients.map(p => (
                                <option key={p._id} value={p._id}>
                                  {p.name} (📞 {p.phone})
                                </option>
                              ))}
                            </select>
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px', marginBottom: '18px' }}>
                            <div className="form-group" style={{ margin: 0 }}>
                              <label className="form-label">{t('medNameLabel')}</label>
                              <input
                                type="text"
                                value={medName}
                                onChange={e => setMedName(e.target.value)}
                                placeholder={t('medNamePlaceholder')}
                                required
                                className="form-input-green"
                              />
                            </div>

                            <div className="form-group" style={{ margin: 0 }}>
                              <label className="form-label">{t('medScheduleLabel')}</label>
                              <input
                                type="text"
                                value={medSchedule}
                                onChange={e => setMedSchedule(e.target.value)}
                                placeholder={t('medSchedulePlaceholder')}
                                required
                                className="form-input-green"
                              />
                            </div>
                          </div>

                          <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                              type="submit"
                              className="btn-green-primary"
                              style={{ padding: '9px 20px' }}
                            >
                              <span>⏰</span>
                              <span>{t('addReminderBtn')}</span>
                            </button>
                            <button
                              type="button"
                              onClick={() => setShowAddReminderForm(false)}
                              className="btn-green-outline"
                              style={{ padding: '9px 16px' }}
                            >
                              <span>✕</span>
                              <span>{t('cancelBtn')}</span>
                            </button>
                          </div>
                        </>
                      )}
                    </form>
                  )}

                  {/* List of Patient Reminders */}
                  <h3 style={{ color: '#0f172a', fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>
                    {t('activeRemindersTitle')} ({reminders.length})
                  </h3>

                  {reminders.length === 0 ? (
                    <div style={{ padding: '28px', textAlign: 'center', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '10px', color: '#64748b' }}>
                      {t('noPatientRemindersNotice')}
                    </div>
                  ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                      {reminders.map(rem => {
                        const isEditing = editingReminderId === rem._id;
                        return (
                          <div
                            key={rem._id}
                            className="green-card"
                            style={{
                              padding: '20px 22px',
                              borderLeft: isEditing ? '5px solid #059669' : '5px solid #10b981',
                              backgroundColor: isEditing ? '#f0fdf4' : '#ffffff'
                            }}
                          >
                            {isEditing ? (
                              /* Inline Edit Form for Reminder */
                              <div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                                  <h4 style={{ margin: 0, color: '#065f46', fontSize: '15px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <span>✏️</span>
                                    <span>{t('updateReminderTitle')}</span>
                                  </h4>
                                  <span className="badge-green">
                                    👤 {rem.user_id?.name ? `Patient: ${rem.user_id.name}` : 'Patient Medication'}
                                  </span>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                                  <div className="form-group" style={{ margin: 0 }}>
                                    <label className="form-label">{t('medNameLabel')}</label>
                                    <input
                                      type="text"
                                      value={editReminderMedicine}
                                      onChange={(e) => setEditReminderMedicine(e.target.value)}
                                      required
                                      className="form-input-green"
                                    />
                                  </div>
                                  <div className="form-group" style={{ margin: 0 }}>
                                    <label className="form-label">{t('medScheduleLabel')}</label>
                                    <input
                                      type="text"
                                      value={editReminderSchedule}
                                      onChange={(e) => setEditReminderSchedule(e.target.value)}
                                      required
                                      className="form-input-green"
                                    />
                                  </div>
                                </div>

                                <div style={{ display: 'flex', gap: '10px' }}>
                                  <button
                                    type="button"
                                    onClick={() => handleSaveEditReminder(rem._id)}
                                    className="btn-green-primary"
                                    style={{ padding: '8px 18px', fontSize: '13px' }}
                                  >
                                    <span>💾</span>
                                    <span>{t('saveReminderChangesBtn')}</span>
                                  </button>
                                  <button
                                    type="button"
                                    onClick={handleCancelEditReminder}
                                    className="btn-green-outline"
                                    style={{ padding: '8px 16px', fontSize: '13px' }}
                                  >
                                    <span>✕</span>
                                    <span>{t('cancelEditReminderBtn')}</span>
                                  </button>
                                </div>
                              </div>
                            ) : (
                              /* Read View of Reminder */
                              <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '10px' }}>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <div style={{
                                      width: '42px',
                                      height: '42px',
                                      borderRadius: '10px',
                                      backgroundColor: '#ecfdf5',
                                      border: '1.5px solid #10b981',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      fontSize: '20px'
                                    }}>
                                      💊
                                    </div>
                                    <div>
                                      <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                                        {rem.medicine}
                                      </div>
                                      <div style={{ fontSize: '13px', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
                                        ⏰ {rem.schedule}
                                      </div>
                                    </div>
                                  </div>

                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span className="badge-green" style={{ fontSize: '12px' }}>
                                      👤 {rem.user_id?.name || 'Patient'} {rem.user_id?.phone ? `(📞 ${rem.user_id.phone})` : ''}
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => handleStartEditReminder(rem)}
                                      className="btn-green-outline"
                                      style={{ padding: '5px 12px', fontSize: '12px' }}
                                      title={t('editReminderBtn')}
                                    >
                                      <span>✏️</span>
                                      <span>{t('editReminderBtn')}</span>
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleDeleteReminder(rem._id)}
                                      className="btn-reject-red"
                                      style={{ padding: '5px 12px', fontSize: '12px' }}
                                      title={t('deleteReminderBtn')}
                                    >
                                      <span>🗑️</span>
                                      <span>{t('deleteReminderBtn')}</span>
                                    </button>
                                  </div>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', fontSize: '12px', color: '#64748b', marginTop: '8px', borderTop: '1px solid #f1f5f9', paddingTop: '8px' }}>
                                  <div>
                                    {rem.doctor_id?.name ? (
                                      <span>🩺 <strong>{t('prescribedByDoctor')}:</strong> {rem.doctor_id.name} ({rem.doctor_id.specialization || 'Doctor'})</span>
                                    ) : (
                                      <span>👤 Set for patient</span>
                                    )}
                                  </div>
                                  <div>
                                    <span>🕒 {t('lastUpdatedLabel')} {new Date(rem.updatedAt || rem.createdAt).toLocaleString()}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* DOCTOR / NURSE: My Personal Reminders Subtab */}
              {(user.role === 'Doctor' || user.role === 'Nurse') && reminderSubTab === 'my_reminders' && (
                <div>
                  <h3 style={{ color: '#065f46', fontSize: '16px', fontWeight: 700, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>🩺</span>
                    <span>{t('myRemindersSubtab')}</span>
                  </h3>

                  <form 
                    onSubmit={handleAddReminder} 
                    style={{
                      background: '#f0fdf4',
                      padding: '20px',
                      marginBottom: '24px',
                      border: '1.5px solid #a7f3d0',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">{t('medNameLabel')}</label>
                        <input 
                          type="text" 
                          value={medName} 
                          onChange={e => setMedName(e.target.value)} 
                          placeholder={t('medNamePlaceholder')} 
                          required 
                          className="form-input-green"
                        />
                      </div>

                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">{t('medScheduleLabel')}</label>
                        <input 
                          type="text" 
                          value={medSchedule} 
                          onChange={e => setMedSchedule(e.target.value)} 
                          placeholder={t('medSchedulePlaceholder')} 
                          required 
                          className="form-input-green"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-green-primary"
                    >
                      <span>⏰</span>
                      <span>{t('addReminderBtn')}</span>
                    </button>
                  </form>

                  <h3 style={{ color: '#0f172a', fontSize: '17px', fontWeight: 700, marginBottom: '14px' }}>
                    {t('activeRemindersTitle')} ({reminders.length})
                  </h3>

                  {reminders.length === 0 ? (
                    <div style={{ padding: '24px', textAlign: 'center', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '10px', color: '#64748b' }}>
                      {t('noPersonalRemindersNotice')}
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                      {reminders.map(rem => (
                        <div 
                          key={rem._id} 
                          className="green-card"
                          style={{ padding: '18px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}
                        >
                          <div style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '10px',
                            backgroundColor: '#ecfdf5',
                            border: '1.5px solid #10b981',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '22px'
                          }}>
                            💊
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a' }}>
                              {rem.medicine}
                            </div>
                            <div style={{ fontSize: '13px', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
                              ⏰ {rem.schedule}
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleDeleteReminder(rem._id)}
                            className="btn-reject-red"
                            style={{ padding: '5px 10px', fontSize: '12px' }}
                            title={t('deleteReminderBtn')}
                          >
                            <span>🗑️</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* PATIENT VIEW: Patient's Personal & Doctor-Prescribed Reminders */}
              {user.role === 'Patient' && (
                <div>
                  <form 
                    onSubmit={handleAddReminder} 
                    style={{
                      background: '#f0fdf4',
                      padding: '22px',
                      marginBottom: '26px',
                      border: '1.5px solid #a7f3d0',
                      borderRadius: '12px'
                    }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '18px' }}>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">{t('medNameLabel')}</label>
                        <input 
                          type="text" 
                          value={medName} 
                          onChange={e => setMedName(e.target.value)} 
                          placeholder={t('medNamePlaceholder')} 
                          required 
                          className="form-input-green"
                        />
                      </div>

                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label">{t('medScheduleLabel')}</label>
                        <input 
                          type="text" 
                          value={medSchedule} 
                          onChange={e => setMedSchedule(e.target.value)} 
                          placeholder={t('medSchedulePlaceholder')} 
                          required 
                          className="form-input-green"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="btn-green-primary"
                    >
                      <span>⏰</span>
                      <span>{t('addReminderBtn')}</span>
                    </button>
                  </form>

                  <h3 style={{ color: '#0f172a', fontSize: '18px', fontWeight: 700, marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span>{t('activeRemindersTitle')}</span>
                    <span style={{ fontSize: '13px', color: '#059669', fontWeight: 600 }}>
                      📋 {reminders.length} Active {reminders.length === 1 ? 'Schedule' : 'Schedules'}
                    </span>
                  </h3>

                  {reminders.length === 0 ? (
                    <div style={{ padding: '24px', textAlign: 'center', background: '#f8fafc', border: '1px dashed #cbd5e1', borderRadius: '10px', color: '#64748b' }}>
                      {t('noRemindersFound')}
                    </div>
                  ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
                      {reminders.map(rem => {
                        const isDoctorPrescribed = Boolean(rem.doctor_id);
                        return (
                          <div 
                            key={rem._id} 
                            className="green-card"
                            style={{
                              padding: '20px 22px',
                              borderLeft: isDoctorPrescribed ? '5px solid #059669' : '5px solid #10b981',
                              backgroundColor: '#ffffff'
                            }}
                          >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                              <span className="badge-green" style={{ fontSize: '12px' }}>
                                {isDoctorPrescribed ? `🩺 ${t('doctorPrescribedBadge')}` : `👤 ${t('personalReminderBadge')}`}
                              </span>

                              <button
                                type="button"
                                onClick={() => handleDeleteReminder(rem._id)}
                                className="btn-reject-red"
                                style={{ padding: '4px 8px', fontSize: '11px' }}
                                title={t('deleteReminderBtn')}
                              >
                                <span>🗑️</span>
                              </button>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '12px' }}>
                              <div style={{
                                width: '46px',
                                height: '46px',
                                borderRadius: '12px',
                                backgroundColor: isDoctorPrescribed ? '#ecfdf5' : '#f0fdf4',
                                border: '1.5px solid #10b981',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px'
                              }}>
                                💊
                              </div>
                              <div style={{ flex: 1 }}>
                                <div style={{ fontSize: '16px', fontWeight: 800, color: '#0f172a' }}>
                                  {rem.medicine}
                                </div>
                                <div style={{ fontSize: '14px', color: '#059669', fontWeight: 700, marginTop: '2px' }}>
                                  ⏰ {rem.schedule}
                                </div>
                              </div>
                            </div>

                            {/* Prescribing Doctor Information */}
                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', fontSize: '12px', color: '#64748b', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                              {isDoctorPrescribed && (
                                <div style={{ color: '#065f46', fontWeight: 600 }}>
                                  🩺 <strong>{t('prescribedByDoctor')}:</strong> {rem.doctor_id?.name || 'Doctor'}
                                </div>
                              )}
                              <div>
                                🕒 {t('lastUpdatedLabel')} {new Date(rem.updatedAt || rem.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ({new Date(rem.updatedAt || rem.createdAt).toLocaleDateString()})
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* Nearby Centres Module */}
          {activeTab === 'centres' && (
            <div>
              {/* Header and counter */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ margin: 0, color: '#0f172a', fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>🏥</span> {t('centresHeading')}
                  </h2>
                  <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '13px' }}>
                    {t('showingCentresCount', { count: centres.length })}
                    {selectedCity && selectedCity !== 'All' ? ` in ${selectedCity}` : ''}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '20px', color: '#166534', fontSize: '12px', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  <span>24/7 Verified Healthcare Network</span>
                </div>
              </div>

              {/* City Selection and Facility Type Filters Bar */}
              <div style={{ 
                background: '#ffffff', 
                border: '1px solid #e2e8f0', 
                borderRadius: '14px', 
                padding: '16px 20px', 
                marginBottom: '22px',
                boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '16px',
                alignItems: 'flex-end'
              }}>
                {/* 1. City Dropdown */}
                <div style={{ flex: '1 1 240px', minWidth: '220px' }}>
                  <label htmlFor="city-select-dropdown" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                    <span>🏙️</span> {t('selectCityLabel')}
                  </label>
                  <select
                    id="city-select-dropdown"
                    value={selectedCity}
                    onChange={(e) => {
                      const nextCity = e.target.value;
                      setSelectedCity(nextCity);
                      fetchCentres(nextCity, selectedCentreType);
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      background: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#16a34a'; e.target.style.background = '#ffffff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.background = '#f8fafc'; }}
                  >
                    {AVAILABLE_CITIES.map(city => (
                      <option key={city.id} value={city.id}>
                        {city.icon} {city.name} {city.state ? `(${city.state})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 2. Facility Type Filter */}
                <div style={{ flex: '1 1 220px', minWidth: '200px' }}>
                  <label htmlFor="facility-type-dropdown" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 700, color: '#1e293b', marginBottom: '6px' }}>
                    <span>🏷️</span> {t('filterByTypeLabel')}
                  </label>
                  <select
                    id="facility-type-dropdown"
                    value={selectedCentreType}
                    onChange={(e) => {
                      const nextType = e.target.value;
                      setSelectedCentreType(nextType);
                      fetchCentres(selectedCity, nextType);
                    }}
                    style={{
                      width: '100%',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      border: '1.5px solid #cbd5e1',
                      background: '#f8fafc',
                      color: '#0f172a',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => { e.target.style.borderColor = '#16a34a'; e.target.style.background = '#ffffff'; }}
                    onBlur={(e) => { e.target.style.borderColor = '#cbd5e1'; e.target.style.background = '#f8fafc'; }}
                  >
                    {FACILITY_TYPES.map(ft => (
                      <option key={ft.id} value={ft.id}>
                        {ft.icon} {ft.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 3. Reset Filters (Shown if any filter active) */}
                {(selectedCity !== 'All' || selectedCentreType !== 'All') && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedCity('All');
                      setSelectedCentreType('All');
                      fetchCentres('All', 'All');
                    }}
                    style={{
                      padding: '10px 16px',
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      borderRadius: '8px',
                      color: '#475569',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      height: '42px',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => { e.currentTarget.style.background = '#e2e8f0'; e.currentTarget.style.color = '#0f172a'; }}
                    onMouseOut={(e) => { e.currentTarget.style.background = '#f1f5f9'; e.currentTarget.style.color = '#475569'; }}
                  >
                    <span>🔄</span> Reset
                  </button>
                )}
              </div>

              {/* Health Centres Grid */}
              {centres.length === 0 ? (
                <div style={{ 
                  padding: '40px 24px', 
                  textAlign: 'center', 
                  background: '#ffffff', 
                  border: '1px dashed #cbd5e1', 
                  borderRadius: '14px', 
                  color: '#64748b' 
                }}>
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🔍</div>
                  <h4 style={{ margin: '0 0 6px 0', color: '#1e293b', fontSize: '16px' }}>{t('noCentresFound')}</h4>
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>Try selecting a different city or clearing the facility type filter.</p>
                  {(selectedCity !== 'All' || selectedCentreType !== 'All') && (
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedCity('All');
                        setSelectedCentreType('All');
                        fetchCentres('All', 'All');
                      }}
                      style={{
                        marginTop: '16px',
                        padding: '8px 18px',
                        background: '#16a34a',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 600,
                        cursor: 'pointer'
                      }}
                    >
                      Show All Centres
                    </button>
                  )}
                </div>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '18px' }}>
                  {centres.map(centre => {
                    const isHospital = centre.type === 'Hospital';
                    const isPharmacy = centre.type === 'Pharmacy';
                    const badgeBg = isHospital ? '#dcfce7' : isPharmacy ? '#f3e8ff' : '#e0f2fe';
                    const badgeColor = isHospital ? '#15803d' : isPharmacy ? '#7e22ce' : '#0369a1';
                    const facilityIcon = isHospital ? '🏥' : isPharmacy ? '💊' : '🩺';

                    return (
                      <div 
                        key={centre._id} 
                        style={{ 
                          background: '#ffffff',
                          border: '1px solid #e2e8f0',
                          borderRadius: '12px',
                          padding: '20px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                          boxShadow: '0 2px 6px rgba(0,0,0,0.03)',
                          transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.07)';
                          e.currentTarget.style.borderColor = '#bbf7d0';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.03)';
                          e.currentTarget.style.borderColor = '#e2e8f0';
                        }}
                      >
                        <div>
                          {/* Card Top: Name & Badges */}
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                              <span style={{ fontSize: '20px', lineHeight: 1 }}>{facilityIcon}</span>
                              <h3 style={{ margin: 0, fontSize: '15px', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                                {centre.name}
                              </h3>
                            </div>
                            <span style={{ 
                              background: badgeBg, 
                              color: badgeColor, 
                              fontSize: '11px', 
                              fontWeight: 700, 
                              padding: '3px 9px', 
                              borderRadius: '12px', 
                              whiteSpace: 'nowrap' 
                            }}>
                              {centre.type}
                            </span>
                          </div>

                          {/* City Tag & Location Address */}
                          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                            <span style={{ 
                              background: '#f1f5f9', 
                              color: '#334155', 
                              fontSize: '11px', 
                              fontWeight: 600, 
                              padding: '2px 8px', 
                              borderRadius: '6px' 
                            }}>
                              📍 {centre.city || 'Chennai'}
                            </span>
                          </div>

                          <p style={{ margin: '0 0 14px 0', color: '#475569', fontSize: '13px', lineHeight: 1.45, display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: '#94a3b8' }}>🏠</span>
                            <span>{centre.location}</span>
                          </p>
                        </div>

                        {/* Bottom Action Buttons: Call, Maps & Book Appointment */}
                        <div style={{ display: 'flex', gap: '8px', paddingTop: '12px', borderTop: '1px solid #f1f5f9', marginTop: 'auto', flexWrap: 'wrap' }}>
                          {user?.role === 'Patient' && centre.type !== 'Pharmacy' && (
                            <button
                              type="button"
                              onClick={() => {
                                setPreselectedHospital(centre);
                                setActiveTab('appointments');
                              }}
                              className="btn-green-primary"
                              style={{
                                flex: '1 1 120px',
                                padding: '8px 10px',
                                fontSize: '12px',
                                borderRadius: '8px',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '4px',
                                cursor: 'pointer'
                              }}
                              title="Book consultation appointment at this health centre"
                            >
                              <span>📅</span> Book Doctor
                            </button>
                          )}
                          {centre.phone ? (
                            <a 
                              href={`tel:${centre.phone.replace(/[^0-9+]/g, '')}`}
                              style={{
                                flex: 1,
                                textAlign: 'center',
                                padding: '8px 10px',
                                background: '#f0fdf4',
                                color: '#15803d',
                                border: '1px solid #bbf7d0',
                                borderRadius: '8px',
                                fontSize: '12px',
                                fontWeight: 700,
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '5px'
                              }}
                            >
                              <span>📞</span> {centre.phone}
                            </a>
                          ) : (
                            <span style={{
                              flex: 1,
                              textAlign: 'center',
                              padding: '8px 10px',
                              background: '#f8fafc',
                              color: '#94a3b8',
                              border: '1px solid #e2e8f0',
                              borderRadius: '8px',
                              fontSize: '12px'
                            }}>
                              24/7 Helpline Desk
                            </span>
                          )}
                          <a 
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(centre.name + ' ' + (centre.location || centre.city || ''))}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              padding: '8px 12px',
                              background: '#f8fafc',
                              color: '#3b82f6',
                              border: '1px solid #cbd5e1',
                              borderRadius: '8px',
                              fontSize: '12px',
                              fontWeight: 600,
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px'
                            }}
                            title="Open Google Maps"
                          >
                            <span>🗺️</span> Map
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Language Selection Drawer Modal */}
      <LanguageDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentLanguage={currentLanguage}
        onSelectLanguage={changeLanguage}
        user={user}
        onLogout={handleLogout}
        dbStatus={dbStatus}
      />
    </div>
  );
}

export default App;
```

---

## Frontend - Pages

<a id="file-frontend-src-pages-loginjsx"></a>
### File: `frontend/src/pages/Login.jsx`
**Path:** `healthCareSystem-main/frontend/src/pages/Login.jsx`  
**Size:** 1,935 bytes  

```jsx
import React, { useState } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.post('/auth/login', { phone, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Rural Health Care System - Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: '15px' }}>
          <label>Phone Number:</label><br />
          <input 
            type="text" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
            style={{ width: '100%', padding: '8px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label>Password:</label><br />
          <input 
            type="text" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
            autoComplete="new-password"
            spellCheck="false"
            style={{ width: '100%', padding: '8px', WebkitTextSecurity: 'disc', textSecurity: 'disc', letterSpacing: '2px' }}
          />
        </div>
        <button type="submit" style={{ width: '100%', padding: '10px', background: '#007bff', color: '#fff', border: 'none' }}>
          Login
        </button>
      </form>
    </div>
  );
}
```

---

<a id="file-frontend-src-pages-dashboardjsx"></a>
### File: `frontend/src/pages/Dashboard.jsx`
**Path:** `healthCareSystem-main/frontend/src/pages/Dashboard.jsx`  
**Size:** 2,648 bytes  

```jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
        <h2>Rural Health Care System</h2>
        <div>
          <span>Welcome, <strong>{user.name}</strong> ({user.role}) 👋</span>
          <button onClick={handleLogout} style={{ marginLeft: '15px', padding: '5px 10px' }}>Logout</button>
        </div>
      </header>

      <main style={{ marginTop: '20px' }}>
        <h3>Modules & Services</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginTop: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
            <h4>📅 Appointments</h4>
            <p>Search doctors, select slots, and book appointments.</p>
          </div>
          {user.role !== 'Nurse' && (
            <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
              <h4>🎙️ Telemedicine / Audio Call</h4>
              <p>Remote audio-call workflow for doctor-patient consultations.</p>
            </div>
          )}
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
            <h4>📁 Healthcare Records</h4>
            <p>Store and view relevant patient medical records securely.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
            <h4>⏰ Reminders</h4>
            <p>Medicine schedules and basic notifications.</p>
          </div>
          <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', background: '#f9f9f9' }}>
            <h4>🏥 Nearby Centres</h4>
            <p>Locate hospitals, clinics, and pharmacies.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
```

---

## Frontend - Components

<a id="file-frontend-src-components-doctorprofileonboardingjsx"></a>
### File: `frontend/src/components/DoctorProfileOnboarding.jsx`
**Path:** `healthCareSystem-main/frontend/src/components/DoctorProfileOnboarding.jsx`  
**Size:** 6,087 bytes  

```jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';

export default function DoctorProfileOnboarding({ user, onCompleted }) {
  const [name, setName] = useState(user?.name || '');
  const [specialization, setSpecialization] = useState('General Physician');
  const [availability, setAvailability] = useState('Mon - Fri (9:00 AM - 5:00 PM)');
  const [contact, setContact] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [hospitalId, setHospitalId] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [error, setError] = useState('');
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await API.get('/locations/states');
        setStates(Array.isArray(res.data) ? res.data : []);
      } catch {
        setStates([]);
      }
    })();
  }, []);

  useEffect(() => {
    setDistrict(''); setCity(''); setHospitalId(''); setHospitals([]);
    if (!state) return;
    (async () => {
      try {
        const res = await API.get('/locations/districts', { params: { state } });
        setDistricts(Array.isArray(res.data) ? res.data : []);
      } catch { setDistricts([]); }
    })();
  }, [state]);

  useEffect(() => {
    setCity(''); setHospitalId(''); setHospitals([]);
    if (!state || !district) return;
    (async () => {
      try {
        const res = await API.get('/locations/cities', { params: { state, district } });
        setCities(Array.isArray(res.data) ? res.data : []);
      } catch { setCities([]); }
    })();
  }, [state, district]);

  useEffect(() => {
    setHospitalId(''); setHospitals([]);
    if (!state || !district || !city) return;
    (async () => {
      try {
        const res = await API.get('/centres', { params: { state, district, city, type: 'Hospital' } });
        setHospitals(Array.isArray(res.data) ? res.data : []);
      } catch { setHospitals([]); }
    })();
  }, [state, district, city]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!state || !district || !city || !hospitalId) {
      setError('Please select state, district, city and hospital');
      return;
    }
    setSaving(true);
    try {
      const res = await API.put('/doctors/profile', {
        name, specialization, availability, contact,
        state, district, city, hospitalId
      });
      if (onCompleted) onCompleted(res.data?.doctor);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save profile');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}>
      <h2 style={{ color: '#0f172a' }}>Complete Doctor Profile</h2>
      <p style={{ color: '#475569', fontSize: 14 }}>Please register your hospital and location before accessing the dashboard.</p>
      {error && <div style={{ background: '#fef2f2', color: '#991b1b', padding: 10, borderRadius: 8, marginBottom: 12 }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Doctor name</label>
          <input className="form-input-green" value={name} onChange={(e)=>setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="form-label">Specialization</label>
          <input className="form-input-green" value={specialization} onChange={(e)=>setSpecialization(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="form-label">Consultation availability</label>
          <input className="form-input-green" value={availability} onChange={(e)=>setAvailability(e.target.value)} required />
        </div>
        <div className="form-group">
          <label className="form-label">Contact</label>
          <input className="form-input-green" value={contact} onChange={(e)=>setContact(e.target.value)} />
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:12 }}>
          <div className="form-group">
            <label className="form-label">State</label>
            <select className="form-input-green" value={state} onChange={(e)=>setState(e.target.value)} required>
              <option value="">Select state</option>
              {states.map((s)=><option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">District</label>
            <select className="form-input-green" value={district} onChange={(e)=>setDistrict(e.target.value)} required disabled={!state}>
              <option value="">Select district</option>
              {districts.map((d)=><option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label className="form-label">City/Town/Village</label>
            <select className="form-input-green" value={city} onChange={(e)=>setCity(e.target.value)} required disabled={!district}>
              <option value="">Select city</option>
              {cities.map((c)=><option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">Hospital</label>
          <select className="form-input-green" value={hospitalId} onChange={(e)=>setHospitalId(e.target.value)} required disabled={!city}>
            <option value="">Select hospital</option>
            {hospitals.map((h)=><option key={h._id} value={h._id}>{h.name} - {h.location}</option>)}
          </select>
        </div>
        <button type="submit" className="btn-green-primary" disabled={saving}>{saving ? 'Saving...' : 'Save Profile'}</button>
      </form>
    </div>
  );
}
```

---

<a id="file-frontend-src-components-hamburgerbuttonjsx"></a>
### File: `frontend/src/components/HamburgerButton.jsx`
**Path:** `healthCareSystem-main/frontend/src/components/HamburgerButton.jsx`  
**Size:** 1,804 bytes  

```jsx
import React from 'react';
import { LANGUAGES, getTranslation } from '../i18n/translations';

export default function HamburgerButton({ onClick, currentLanguage, className = '', style = {} }) {
  const currentLangObj = LANGUAGES.find(l => l.code === currentLanguage) || LANGUAGES[0];
  const t = (key) => getTranslation(currentLanguage, key);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={t('changeLanguage')}
      title={t('changeLanguage')}
      className={`hamburger-lang-btn ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '9px',
        padding: '9px 15px',
        backgroundColor: '#ffffff',
        border: '2px solid #10b981',
        borderRadius: '10px',
        color: '#065f46',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 600,
        boxShadow: '0 2px 8px rgba(16, 185, 129, 0.16)',
        transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        ...style
      }}
    >
      {/* 3-line hamburger icon in green */}
      <span style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '18px',
        height: '14px'
      }}>
        <span style={{ height: '2px', backgroundColor: '#059669', borderRadius: '2px' }} />
        <span style={{ height: '2px', backgroundColor: '#059669', borderRadius: '2px' }} />
        <span style={{ height: '2px', backgroundColor: '#059669', borderRadius: '2px' }} />
      </span>

      <span style={{ fontSize: '16px' }}>{currentLangObj.flag}</span>
      <span style={{ whiteSpace: 'nowrap', fontWeight: 700 }}>{currentLangObj.nativeName}</span>
      <span style={{ fontSize: '11px', opacity: 0.8, color: '#059669' }}>▼</span>
    </button>
  );
}
```

---

<a id="file-frontend-src-components-languagedrawerjsx"></a>
### File: `frontend/src/components/LanguageDrawer.jsx`
**Path:** `healthCareSystem-main/frontend/src/components/LanguageDrawer.jsx`  
**Size:** 9,194 bytes  

```jsx
import React from 'react';
import { LANGUAGES, getTranslation } from '../i18n/translations';

export default function LanguageDrawer({
  isOpen,
  onClose,
  currentLanguage,
  onSelectLanguage,
  user,
  onLogout,
  dbStatus
}) {
  if (!isOpen) return null;

  const t = (key, params) => getTranslation(currentLanguage, key, params);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(4px)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'flex-end',
      animation: 'fadeIn 0.2s ease-out'
    }} onClick={onClose}>
      
      <div 
        style={{
          width: '100%',
          maxWidth: '390px',
          height: '100%',
          backgroundColor: '#ffffff',
          boxShadow: '-8px 0 32px rgba(5, 150, 105, 0.15)',
          borderLeft: '3px solid #10b981',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
          animation: 'slideInRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header with Medical Emerald Gradient */}
        <div style={{
          padding: '22px 20px',
          borderBottom: '2px solid #047857',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, #059669 0%, #047857 100%)',
          color: '#ffffff',
          boxShadow: '0 2px 8px rgba(5, 150, 105, 0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '26px' }}>🌐</span>
            <div>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: '#ffffff' }}>
                {t('menuTitle')}
              </h3>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', opacity: 0.95, color: '#d1fae5' }}>
                {t('chooseLanguageSubtitle')}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label={t('closeMenu')}
            style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1.5px solid rgba(255, 255, 255, 0.4)',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              color: '#ffffff',
              fontSize: '16px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.2s',
              fontWeight: 'bold'
            }}
          >
            ✕
          </button>
        </div>

        {/* User Info Section (if logged in) */}
        {user && (
          <div style={{
            padding: '16px 20px',
            backgroundColor: '#f0fdf4',
            borderBottom: '1.5px solid #a7f3d0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div>
              <div style={{ fontSize: '12px', color: '#047857', fontWeight: 600 }}>{t('welcomeUser')}</div>
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                {user.name}
              </div>
              <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600 }}>
                {user.role} • {user.phone}
              </div>
            </div>
            <button
              onClick={() => {
                onClose();
                onLogout();
              }}
              style={{
                padding: '7px 14px',
                fontSize: '12px',
                backgroundColor: '#dc2626',
                color: '#ffffff',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600,
                boxShadow: '0 2px 4px rgba(220, 38, 38, 0.2)'
              }}
            >
              {t('logout')}
            </button>
          </div>
        )}

        {/* Language Selection List */}
        <div style={{ padding: '22px 20px', flex: 1 }}>
          <div style={{ marginBottom: '16px' }}>
            <h4 style={{ margin: '0 0 4px 0', fontSize: '13px', color: '#047857', textTransform: 'uppercase', letterSpacing: '0.8px', fontWeight: 700 }}>
              {t('chooseLanguageTitle')}
            </h4>
            <p style={{ margin: 0, fontSize: '12px', color: '#64748b' }}>
              English • हिन्दी • தமிழ் • తెలుగు
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {LANGUAGES.map((lang) => {
              const isSelected = currentLanguage === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelectLanguage(lang.code);
                    onClose();
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '14px 16px',
                    borderRadius: '10px',
                    border: isSelected ? '2px solid #10b981' : '1.5px solid #e2e8f0',
                    backgroundColor: isSelected ? '#ecfdf5' : '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease',
                    textAlign: 'left',
                    boxShadow: isSelected ? '0 4px 12px rgba(16, 185, 129, 0.15)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <span style={{ fontSize: '24px' }}>{lang.flag}</span>
                    <div>
                      <div style={{
                        fontSize: '16px',
                        fontWeight: isSelected ? 700 : 600,
                        color: isSelected ? '#065f46' : '#1e293b'
                      }}>
                        {lang.nativeName}
                        <span style={{ fontSize: '13px', color: '#64748b', marginLeft: '6px', fontWeight: 400 }}>
                          ({lang.name})
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                        {lang.hint}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      backgroundColor: '#059669',
                      color: '#ffffff',
                      fontSize: '11px',
                      padding: '4px 10px',
                      borderRadius: '12px',
                      fontWeight: 700,
                      boxShadow: '0 2px 4px rgba(5, 150, 105, 0.3)'
                    }}>
                      <span>✓</span>
                      <span>{t('activeLanguageBadge')}</span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Helper Card with Green Border */}
          <div style={{
            marginTop: '26px',
            padding: '16px',
            backgroundColor: '#f0fdf4',
            borderRadius: '10px',
            border: '1.5px solid #a7f3d0',
            fontSize: '12px',
            color: '#334155',
            lineHeight: 1.5
          }}>
            <div style={{ fontWeight: 700, marginBottom: '4px', color: '#047857', fontSize: '13px' }}>
              🏥 {t('appName')}
            </div>
            <div style={{ color: '#475569' }}>
              {t('appTagline')}
            </div>
            {dbStatus && (
              <div style={{ marginTop: '10px', fontSize: '12px', color: '#065f46', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981', display: 'inline-block' }} />
                <span>{dbStatus}</span>
              </div>
            )}
          </div>
        </div>

        {/* Drawer Footer */}
        <div style={{
          padding: '16px 20px',
          borderTop: '1.5px solid #e2e8f0',
          backgroundColor: '#ffffff',
          textAlign: 'center'
        }}>
          <button
            onClick={onClose}
            style={{
              width: '100%',
              padding: '11px',
              backgroundColor: '#f1f5f9',
              color: '#334155',
              border: '1.5px solid #cbd5e1',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
          >
            {t('closeMenu')}
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

<a id="file-frontend-src-components-locationbookingjsx"></a>
### File: `frontend/src/components/LocationBooking.jsx`
**Path:** `healthCareSystem-main/frontend/src/components/LocationBooking.jsx`  
**Size:** 23,576 bytes  

```jsx
import React, { useEffect, useState } from 'react';
import API from '../services/api';

const WORKING_HOUR_SLOTS = [
  { value: '09:00', label: '09:00 AM' },
  { value: '09:30', label: '09:30 AM' },
  { value: '10:00', label: '10:00 AM' },
  { value: '10:30', label: '10:30 AM' },
  { value: '11:00', label: '11:00 AM' },
  { value: '11:30', label: '11:30 AM' },
  { value: '12:00', label: '12:00 PM' },
  { value: '12:30', label: '12:30 PM' },
  { value: '13:00', label: '01:00 PM' },
  { value: '13:30', label: '01:30 PM' },
  { value: '14:00', label: '02:00 PM' },
  { value: '14:30', label: '02:30 PM' },
  { value: '15:00', label: '03:00 PM' },
  { value: '15:30', label: '03:30 PM' },
  { value: '16:00', label: '04:00 PM' },
  { value: '16:30', label: '04:30 PM' },
  { value: '17:00', label: '05:00 PM' }
];

const getTodayDateString = () => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function LocationBooking({ user, onBooked, notify, preselectedHospital }) {
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [city, setCity] = useState('');
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);

  const [allHospitals, setAllHospitals] = useState([]);
  const [hospitalSearch, setHospitalSearch] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(preselectedHospital || null);

  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [specFilter, setSpecFilter] = useState('');
  const [doctorSearch, setDoctorSearch] = useState('');

  const [date, setDate] = useState(getTodayDateString());
  const [timeSlot, setTimeSlot] = useState('09:00');
  const [bookedSlots, setBookedSlots] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Fetch all initial hospitals & states
  useEffect(() => {
    (async () => {
      try {
        const [statesRes, centresRes] = await Promise.all([
          API.get('/locations/states'),
          API.get('/centres', { params: { type: 'Hospital' } })
        ]);
        setStates(Array.isArray(statesRes.data) ? statesRes.data : []);
        setAllHospitals(Array.isArray(centresRes.data) ? centresRes.data : []);
      } catch {
        setStates([]);
        setAllHospitals([]);
      }
    })();
  }, []);

  // Update selectedHospital if prop changes
  useEffect(() => {
    if (preselectedHospital) {
      setSelectedHospital(preselectedHospital);
    }
  }, [preselectedHospital]);

  // Load districts when state changes
  useEffect(() => {
    setDistrict(''); setCity('');
    if (!state) return;
    (async () => {
      try {
        const r = await API.get('/locations/districts', { params: { state } });
        setDistricts(Array.isArray(r.data) ? r.data : []);
      } catch {
        setDistricts([]);
      }
    })();
  }, [state]);

  // Load cities when district changes
  useEffect(() => {
    setCity('');
    if (!state || !district) return;
    (async () => {
      try {
        const r = await API.get('/locations/cities', { params: { state, district } });
        setCities(Array.isArray(r.data) ? r.data : []);
      } catch {
        setCities([]);
      }
    })();
  }, [state, district]);

  // Load doctors for selected hospital
  useEffect(() => {
    setDoctors([]); setSelectedDoctor(null);
    if (!selectedHospital) return;
    (async () => {
      try {
        const r = await API.get('/doctors', { params: { hospitalId: selectedHospital._id } });
        setDoctors(Array.isArray(r.data) ? r.data : []);
      } catch {
        setDoctors([]);
      }
    })();
  }, [selectedHospital]);

  // Load doctor availability
  useEffect(() => {
    setBookedSlots([]);
    if (!selectedDoctor || !date) return;
    (async () => {
      try {
        const r = await API.get('/doctors/availability', { params: { doctorId: selectedDoctor._id, date } });
        setBookedSlots(Array.isArray(r.data?.bookedSlots) ? r.data.bookedSlots : []);
      } catch {
        setBookedSlots([]);
      }
    })();
  }, [selectedDoctor, date]);

  // Filter hospitals based on search & location filters
  const filteredHospitals = allHospitals.filter(h => {
    if (state && (h.state || '').toLowerCase() !== state.toLowerCase()) return false;
    if (district && (h.district || '').toLowerCase() !== district.toLowerCase()) return false;
    if (city && (h.city || '').toLowerCase() !== city.toLowerCase()) return false;
    if (hospitalSearch) {
      const q = hospitalSearch.toLowerCase();
      const matchName = (h.name || '').toLowerCase().includes(q);
      const matchLoc = (h.location || '').toLowerCase().includes(q);
      const matchCity = (h.city || '').toLowerCase().includes(q);
      if (!matchName && !matchLoc && !matchCity) return false;
    }
    return true;
  });

  const specializations = [...new Set(doctors.map(d => d.specialization).filter(Boolean))];
  const filteredDoctors = doctors.filter(d => {
    if (specFilter && d.specialization !== specFilter) return false;
    if (doctorSearch && !(d.name || '').toLowerCase().includes(doctorSearch.toLowerCase())) return false;
    return true;
  });

  const handleSelectHospital = (h) => {
    setSelectedHospital(h);
    setSelectedDoctor(null);
    setError('');
  };

  const handleBook = async (e) => {
    e.preventDefault();
    setError('');
    if (!selectedHospital) { setError('Please select a health centre / hospital'); return; }
    if (!selectedDoctor) { setError('Please select a doctor'); return; }
    if (!date) { setError('Please select a date'); return; }
    setSubmitting(true);
    try {
      const finalDateTime = `${date}T${timeSlot}`;
      const res = await API.post('/appointments/book', {
        doctor_id: selectedDoctor._id,
        date_time: finalDateTime,
        hospital_id: selectedHospital._id
      });
      if (notify) notify(res.data?.message || 'Appointment booked successfully!');
      setSelectedDoctor(null);
      setDate(getTodayDateString());
      setTimeSlot('09:00');
      if (onBooked) onBooked();
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
        <div>
          <h2 style={{ margin: 0, color: '#0f172a', fontSize: '20px', fontWeight: 800 }}>
            🏥 Book Consultation by Health Centre Location
          </h2>
          <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: '#475569' }}>
            Choose a verified hospital or primary health centre, view its exact location, choose an available doctor, and book an appointment.
          </p>
        </div>
      </div>

      {error && (
        <div style={{ background: '#fef2f2', color: '#991b1b', padding: '12px 16px', borderRadius: '10px', marginBottom: '16px', border: '1.5px solid #fecaca', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span>⚠️</span>
          <span>{error}</span>
        </div>
      )}

      {/* Step 1: Health Centre / Hospital Selection */}
      <div style={{ background: '#f8fafc', padding: '18px 20px', border: '1.5px solid #e2e8f0', borderRadius: '14px', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
          <h3 style={{ margin: 0, color: '#065f46', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>Step 1:</span>
            <span>Select Health Centre Location ({filteredHospitals.length} Available)</span>
          </h3>
          {(state || district || city || hospitalSearch) && (
            <button
              type="button"
              onClick={() => { setState(''); setDistrict(''); setCity(''); setHospitalSearch(''); }}
              style={{ fontSize: '12px', color: '#059669', background: 'transparent', border: 'none', cursor: 'pointer', fontWeight: 600, textDecoration: 'underline' }}
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Location Filters Bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px', marginBottom: '14px' }}>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label" style={{ fontSize: '12px' }}>State</label>
            <select className="form-input-green" value={state} onChange={e => setState(e.target.value)} style={{ padding: '8px 10px', fontSize: '13px' }}>
              <option value="">All States</option>
              {states.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label" style={{ fontSize: '12px' }}>District</label>
            <select className="form-input-green" value={district} onChange={e => setDistrict(e.target.value)} disabled={!state} style={{ padding: '8px 10px', fontSize: '13px' }}>
              <option value="">All Districts</option>
              {districts.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label" style={{ fontSize: '12px' }}>City / Town</label>
            <select className="form-input-green" value={city} onChange={e => setCity(e.target.value)} disabled={!district} style={{ padding: '8px 10px', fontSize: '13px' }}>
              <option value="">All Cities</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="form-group" style={{ margin: 0 }}>
            <label className="form-label" style={{ fontSize: '12px' }}>Search Hospital</label>
            <input 
              className="form-input-green" 
              placeholder="e.g. Fortis, Apollo, Ganga..." 
              value={hospitalSearch} 
              onChange={e => setHospitalSearch(e.target.value)} 
              style={{ padding: '8px 10px', fontSize: '13px' }}
            />
          </div>
        </div>

        {/* Hospital Cards Grid */}
        {filteredHospitals.length === 0 ? (
          <div style={{ padding: '24px', textAlign: 'center', background: '#ffffff', border: '1.5px dashed #cbd5e1', borderRadius: '10px', color: '#64748b', fontSize: '13px' }}>
            No health centres found matching your search. Try resetting location filters.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', maxHeight: '320px', overflowY: 'auto', paddingRight: '4px' }}>
            {filteredHospitals.map(h => {
              const isSelected = selectedHospital?._id === h._id;
              return (
                <div 
                  key={h._id} 
                  onClick={() => handleSelectHospital(h)}
                  style={{ 
                    cursor: 'pointer', 
                    padding: '14px 16px', 
                    borderRadius: '10px', 
                    border: isSelected ? '2px solid #10b981' : '1.5px solid #cbd5e1', 
                    background: isSelected ? '#ecfdf5' : '#ffffff',
                    transition: 'all 0.15s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(16, 185, 129, 0.15)' : 'none'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '6px' }}>
                    <div style={{ fontWeight: 700, color: '#0f172a', fontSize: '14px', lineHeight: 1.3 }}>
                      🏥 {h.name}
                    </div>
                    {isSelected && (
                      <span style={{ background: '#10b981', color: '#ffffff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '10px' }}>
                        ✓ Selected
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: '12px', color: '#475569', display: 'flex', alignItems: 'flex-start', gap: '5px', marginBottom: '4px' }}>
                    <span>📍</span>
                    <span>{h.address || h.location}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: '#059669', fontWeight: 600, marginTop: '6px', paddingTop: '6px', borderTop: '1px solid #f1f5f9' }}>
                    <span>🏙️ {h.city || h.district || 'Tamil Nadu'}</span>
                    <span>📞 {h.phone || '24/7 Helpline'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Selected Health Centre Banner */}
      {selectedHospital && (
        <div style={{ background: '#ecfdf5', border: '2px solid #10b981', padding: '16px 20px', borderRadius: '12px', marginBottom: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 800, color: '#059669', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Selected Consultation Location
            </div>
            <div style={{ fontSize: '17px', fontWeight: 800, color: '#065f46', marginTop: '2px' }}>
              🏥 {selectedHospital.name}
            </div>
            <div style={{ fontSize: '13px', color: '#047857', marginTop: '3px' }}>
              📍 <strong>Location:</strong> {selectedHospital.address || selectedHospital.location}, {selectedHospital.city}, {selectedHospital.state || 'Tamil Nadu'}
            </div>
            {selectedHospital.phone && (
              <div style={{ fontSize: '12px', color: '#047857', marginTop: '2px' }}>
                📞 <strong>Contact Desk:</strong> {selectedHospital.phone}
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={() => { setSelectedHospital(null); setSelectedDoctor(null); }}
            className="btn-green-outline"
            style={{ padding: '6px 14px', fontSize: '12px', background: '#ffffff' }}
          >
            Change Centre
          </button>
        </div>
      )}

      {/* Step 2: Choose Doctor affiliated with this hospital */}
      {selectedHospital && (
        <div style={{ background: '#ffffff', border: '1.5px solid #a7f3d0', padding: '20px', borderRadius: '14px', marginBottom: '22px', boxShadow: '0 2px 8px rgba(16, 185, 129, 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', marginBottom: '14px' }}>
            <h3 style={{ margin: 0, color: '#065f46', fontSize: '16px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>Step 2:</span>
              <span>Choose Doctor at {selectedHospital.name}</span>
            </h3>
            <span style={{ fontSize: '12px', color: '#059669', fontWeight: 600 }}>
              {filteredDoctors.length} {filteredDoctors.length === 1 ? 'Doctor' : 'Doctors'} Available
            </span>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
            <input 
              className="form-input-green" 
              placeholder="Search doctor by name..." 
              value={doctorSearch} 
              onChange={e => setDoctorSearch(e.target.value)} 
              style={{ flex: 1, minWidth: '180px' }} 
            />
            {specializations.length > 0 && (
              <select className="form-input-green" value={specFilter} onChange={e => setSpecFilter(e.target.value)} style={{ minWidth: '180px' }}>
                <option value="">All Specializations</option>
                {specializations.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            )}
          </div>

          {filteredDoctors.length === 0 ? (
            <div style={{ padding: '28px', textAlign: 'center', background: '#f8fafc', border: '1.5px dashed #cbd5e1', borderRadius: '10px', color: '#64748b' }}>
              <div style={{ fontSize: '24px', marginBottom: '6px' }}>👨‍⚕️</div>
              <div style={{ fontWeight: 600, color: '#334155' }}>No doctors currently assigned to this hospital.</div>
              <div style={{ fontSize: '13px', marginTop: '4px' }}>
                Doctors select their hospital during login. You can select another health centre above to find available doctors.
              </div>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {filteredDoctors.map(d => {
                const isDocSelected = selectedDoctor?._id === d._id;
                return (
                  <div 
                    key={d._id} 
                    onClick={() => setSelectedDoctor(d)}
                    style={{ 
                      cursor: 'pointer', 
                      padding: '16px', 
                      borderRadius: '10px', 
                      border: isDocSelected ? '2px solid #10b981' : '1.5px solid #a7f3d0', 
                      background: isDocSelected ? '#ecfdf5' : '#ffffff',
                      transition: 'all 0.15s ease',
                      boxShadow: isDocSelected ? '0 4px 12px rgba(16, 185, 129, 0.15)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                      <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '15px' }}>
                        👨‍⚕️ {d.name}
                      </div>
                      {isDocSelected && (
                        <span style={{ background: '#10b981', color: '#ffffff', fontSize: '11px', fontWeight: 800, padding: '2px 8px', borderRadius: '10px' }}>
                          ✓ Selected
                        </span>
                      )}
                    </div>
                    <div style={{ fontSize: '13px', color: '#059669', fontWeight: 600, marginBottom: '6px' }}>
                      🩺 {d.specialization || 'General Physician'}
                    </div>
                    <div style={{ fontSize: '12px', color: '#475569', marginBottom: '6px' }}>
                      🕒 {d.availability || 'Mon - Fri (9:00 AM - 5:00 PM)'}
                    </div>
                    <div style={{ fontSize: '11px', color: '#047857', background: '#f0fdf4', padding: '4px 8px', borderRadius: '6px', border: '1px solid #bbf7d0' }}>
                      🏥 {selectedHospital.name} ({selectedHospital.city})
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Step 3 & 4: Date, Time & Confirmation */}
      {selectedDoctor && (
        <form onSubmit={handleBook} style={{ background: '#f0fdf4', padding: '22px', border: '2px solid #10b981', borderRadius: '14px', marginBottom: '22px' }}>
          <h3 style={{ marginTop: 0, color: '#065f46', fontSize: '17px', fontWeight: 800, marginBottom: '14px' }}>
            Step 3: Choose Date & Consultation Time
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '14px', marginBottom: '18px' }}>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontWeight: 700 }}>📅 Consultation Date</label>
              <input 
                type="date" 
                min={getTodayDateString()} 
                className="form-input-green" 
                value={date} 
                onChange={e => setDate(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group" style={{ margin: 0 }}>
              <label className="form-label" style={{ fontWeight: 700 }}>⏰ Available Time Slot</label>
              <select className="form-input-green" value={timeSlot} onChange={e => setTimeSlot(e.target.value)} required>
                {WORKING_HOUR_SLOTS.map(s => {
                  const disabled = bookedSlots.includes(s.value);
                  return (
                    <option key={s.value} value={s.value} disabled={disabled}>
                      {s.label}{disabled ? ' (Booked)' : ' (Available)'}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <h4 style={{ margin: '0 0 10px 0', color: '#065f46', fontSize: '15px', fontWeight: 800 }}>
            Step 4: Confirm Booking Details
          </h4>

          <div style={{ background: '#ffffff', padding: '16px 20px', borderRadius: '10px', border: '1.5px solid #a7f3d0', marginBottom: '18px', fontSize: '14px', lineHeight: 1.6 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              <div>
                <span style={{ color: '#64748b', fontSize: '12px', display: 'block' }}>Patient</span>
                <strong>👤 {user?.name}</strong> (📞 {user?.phone})
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '12px', display: 'block' }}>Consulting Doctor</span>
                <strong style={{ color: '#059669' }}>👨‍⚕️ {selectedDoctor.name}</strong> ({selectedDoctor.specialization})
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '12px', display: 'block' }}>Health Centre / Hospital</span>
                <strong>🏥 {selectedHospital.name}</strong>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '12px', display: 'block' }}>Health Centre Location</span>
                <span>📍 {selectedHospital.address || selectedHospital.location}, {selectedHospital.city}</span>
              </div>
              <div>
                <span style={{ color: '#64748b', fontSize: '12px', display: 'block' }}>Scheduled Date & Time</span>
                <strong style={{ color: '#0f172a' }}>🗓️ {date} at {WORKING_HOUR_SLOTS.find(s => s.value === timeSlot)?.label || timeSlot}</strong>
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            className="btn-green-primary" 
            disabled={submitting}
            style={{ width: '100%', fontSize: '16px', padding: '12px 20px', borderRadius: '10px' }}
          >
            <span>✓</span>
            <span>{submitting ? 'Confirming Appointment...' : 'Confirm Appointment Booking'}</span>
          </button>
        </form>
      )}
    </div>
  );
}
```

---

<a id="file-frontend-src-components-telemedicineroomjsx"></a>
### File: `frontend/src/components/TelemedicineRoom.jsx`
**Path:** `healthCareSystem-main/frontend/src/components/TelemedicineRoom.jsx`  
**Size:** 33,659 bytes  

```jsx
import React, { useState, useEffect, useRef } from 'react';
import API from '../services/api';

export default function TelemedicineRoom({ 
  user, 
  appointments, 
  t, 
  notify, 
  onNavigateToRecords,
  preselectedAppointmentId,
  onCallSessionUpdate
}) {
  const [callState, setCallState] = useState('idle'); // 'idle' | 'calling' | 'connecting' | 'connected' | 'ended'
  const [activeAppointment, setActiveAppointment] = useState(null);
  const [consultationId, setConsultationId] = useState(null);
  const [callDuration, setCallDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerEnabled, setSpeakerEnabled] = useState(true);
  const [lowBandwidthMode, setLowBandwidthMode] = useState(true);
  const [audioLevels, setAudioLevels] = useState([12, 18, 25, 30, 22, 14, 20, 28]);
  const [micActive, setMicActive] = useState(false);
  const [callNotes, setCallNotes] = useState('');
  const [notesSaved, setNotesSaved] = useState(false);
  const [savingNotes, setSavingNotes] = useState(false);
  const [activeCallStatus, setActiveCallStatus] = useState(null);

  // Audio & WebRTC Refs
  const audioContextRef = useRef(null);
  const mediaStreamRef = useRef(null);
  const analyserRef = useRef(null);
  const animFrameRef = useRef(null);
  const timerRef = useRef(null);
  const pcRef = useRef(null);
  const remoteAudioRef = useRef(null);
  const pollIntervalRef = useRef(null);

  const isDoctor = user?.role === 'Doctor';

  // Filter accepted appointments relevant to the current user
  const acceptedAppointments = (appointments || []).filter(app => app.status === 'Accepted');

  // Pre-select appointment if passed
  useEffect(() => {
    if (preselectedAppointmentId && acceptedAppointments.length > 0) {
      const match = acceptedAppointments.find(a => a._id === preselectedAppointmentId);
      if (match) {
        setActiveAppointment(match);
      }
    } else if (!activeAppointment && acceptedAppointments.length > 0) {
      setActiveAppointment(acceptedAppointments[0]);
    }
  }, [preselectedAppointmentId, appointments]);

  // Sync call session update with parent App component
  useEffect(() => {
    if (onCallSessionUpdate) {
      onCallSessionUpdate({
        callState,
        callTimer: formatTime(callDuration),
        otherPartyName: getOtherPartyName(),
        onEndCall: handleEndCall,
        onToggleMute: toggleMute,
        isMuted
      });
    }
  }, [callState, callDuration, isMuted, onCallSessionUpdate]);

  // Check active consultation status for selected appointment
  useEffect(() => {
    if (!activeAppointment) return;

    const checkConsultationStatus = async () => {
      try {
        const res = await API.get(`/consultations/${activeAppointment._id}`);
        if (res.data?._id) {
          setConsultationId(res.data._id);
          setActiveCallStatus(res.data.status);
          if (res.data.notes) setCallNotes(res.data.notes);
          
          if (res.data.status === 'Calling' && !isDoctor && callState === 'idle') {
            notify(`Dr. ${res.data.appointment_id?.doctor_id?.name || 'Doctor'} is calling you!`);
          }
        }
      } catch {}
    };

    checkConsultationStatus();
    pollIntervalRef.current = setInterval(checkConsultationStatus, 2000);
    return () => {
      if (pollIntervalRef.current) clearInterval(pollIntervalRef.current);
    };
  }, [activeAppointment, isDoctor, callState]);

  // Call duration timer
  useEffect(() => {
    if (callState === 'connected') {
      timerRef.current = setInterval(() => {
        setCallDuration(prev => prev + 1);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [callState]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupAudio();
    };
  }, []);

  const cleanupAudio = () => {
    if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
      mediaStreamRef.current = null;
    }
    if (pcRef.current) {
      try { pcRef.current.close(); } catch {}
      pcRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      try { audioContextRef.current.close(); } catch {}
      audioContextRef.current = null;
    }
    setMicActive(false);
  };

  // Initialize WebRTC Peer Connection
  const initPeerConnection = () => {
    if (pcRef.current) return pcRef.current;

    const pc = new RTCPeerConnection({
      iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' }
      ]
    });

    pc.ontrack = (event) => {
      if (remoteAudioRef.current && event.streams[0]) {
        remoteAudioRef.current.srcObject = event.streams[0];
      }
    };

    pc.onicecandidate = async (event) => {
      if (event.candidate && consultationId) {
        try {
          await API.post(`/consultations/${consultationId}/signal`, { candidate: event.candidate });
        } catch {}
      }
    };

    pcRef.current = pc;
    return pc;
  };

  // Setup Web Audio API & Microphone Stream (Low-Bandwidth Optimized)
  const setupAudioStream = async (pc) => {
    try {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const audioConstraints = lowBandwidthMode ? {
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true,
            sampleRate: 16000,
            channelCount: 1
          }
        } : {
          audio: {
            echoCancellation: true,
            noiseSuppression: true,
            autoGainControl: true
          }
        };

        const stream = await navigator.mediaDevices.getUserMedia(audioConstraints);
        mediaStreamRef.current = stream;
        setMicActive(true);

        if (pc) {
          stream.getTracks().forEach(track => pc.addTrack(track, stream));
        }

        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          audioContextRef.current = ctx;
          const analyser = ctx.createAnalyser();
          analyser.fftSize = 32;
          analyserRef.current = analyser;

          const source = ctx.createMediaStreamSource(stream);
          source.connect(analyser);

          const dataArray = new Uint8Array(analyser.frequencyBinCount);
          const updateLevels = () => {
            if (analyserRef.current) {
              analyserRef.current.getByteFrequencyData(dataArray);
              const bars = [];
              for (let i = 0; i < 8; i++) {
                const val = dataArray[i] || 0;
                bars.push(Math.max(10, Math.min(85, Math.round((val / 255) * 85))));
              }
              setAudioLevels(bars);
            }
            animFrameRef.current = requestAnimationFrame(updateLevels);
          };
          updateLevels();
          return stream;
        }
      }
      throw new Error('Fallback to synthetic wave');
    } catch {
      setMicActive(true);
      let step = 0;
      const simulateWave = () => {
        step += 0.15;
        const bars = [
          Math.round(20 + Math.sin(step) * 15),
          Math.round(35 + Math.cos(step * 1.2) * 20),
          Math.round(50 + Math.sin(step * 1.5) * 30),
          Math.round(65 + Math.cos(step * 0.8) * 25),
          Math.round(45 + Math.sin(step * 2) * 25),
          Math.round(30 + Math.cos(step * 1.1) * 18),
          Math.round(40 + Math.sin(step * 0.7) * 22),
          Math.round(25 + Math.cos(step * 1.7) * 14)
        ];
        setAudioLevels(bars);
        animFrameRef.current = requestAnimationFrame(simulateWave);
      };
      simulateWave();
      return null;
    }
  };

  // Doctor Initiates Audio Call
  const handleStartCall = async () => {
    if (!activeAppointment) {
      notify('Please select an accepted appointment to initiate consultation.');
      return;
    }

    setCallState('connecting');
    setCallDuration(0);
    setNotesSaved(false);

    try {
      const pc = initPeerConnection();

      // Initiate consultation session on backend
      const res = await API.post('/consultations/start', {
        appointment_id: activeAppointment._id,
        mode: lowBandwidthMode ? 'Audio-2G-GSM' : 'Audio-HD'
      });

      const consId = res.data?.consultation?._id;
      if (consId) {
        setConsultationId(consId);
        if (res.data.consultation.notes) setCallNotes(res.data.consultation.notes);
      }

      await setupAudioStream(pc);

      if (pc) {
        const offer = await pc.createOffer();
        await pc.setLocalDescription(offer);
        if (consId) {
          await API.post(`/consultations/${consId}/signal`, { offer, status: 'Calling' });
        }
      }

      setCallState('connected');
      notify(`Calling ${getOtherPartyName()} over low-bandwidth 2G/3G audio channel...`);
    } catch (err) {
      console.warn('Consultation connect error, proceeding in resilient mode:', err);
      await setupAudioStream();
      setCallState('connected');
    }
  };

  // Patient Accepts & Joins Call
  const handleJoinCall = async () => {
    if (!activeAppointment) return;
    setCallState('connecting');
    setCallDuration(0);

    try {
      const pc = initPeerConnection();
      await setupAudioStream(pc);

      const res = await API.get(`/consultations/${activeAppointment._id}`);
      const cons = res.data;
      if (cons?._id) {
        setConsultationId(cons._id);
        if (cons.offer && pc) {
          await pc.setRemoteDescription(new RTCSessionDescription(cons.offer));
          const answer = await pc.createAnswer();
          await pc.setLocalDescription(answer);
          await API.post(`/consultations/${cons._id}/signal`, { answer, status: 'In-Progress' });
        } else {
          await API.patch(`/consultations/${cons._id}/status`, { status: 'In-Progress' });
        }
      }

      setCallState('connected');
      notify(`Live audio consultation connected with ${getOtherPartyName()}`);
    } catch (err) {
      console.warn('Error joining call, entering resilient mode:', err);
      await setupAudioStream();
      setCallState('connected');
    }
  };

  const handleEndCall = async () => {
    cleanupAudio();
    setCallState('ended');

    if (consultationId) {
      try {
        await API.patch(`/consultations/${consultationId}/status`, {
          status: 'Finished',
          notes: callNotes
        });
      } catch (err) {
        console.warn('Error closing consultation session:', err.message);
      }
    }
    notify(`Audio consultation ended. Duration: ${formatTime(callDuration)}`);
  };

  const toggleMute = () => {
    if (mediaStreamRef.current) {
      const audioTracks = mediaStreamRef.current.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = isMuted;
      });
    }
    setIsMuted(!isMuted);
    notify(!isMuted ? 'Microphone muted 🔇' : 'Microphone unmuted 🎙️');
  };

  const handleSaveNotes = async () => {
    if (!consultationId) return;
    setSavingNotes(true);
    try {
      await API.patch(`/consultations/${consultationId}/status`, { notes: callNotes });
      setNotesSaved(true);
      notify('Consultation notes saved securely!');
      setTimeout(() => setNotesSaved(false), 3000);
    } catch (err) {
      notify('Failed to save notes: ' + (err.response?.data?.message || err.message));
    } finally {
      setSavingNotes(false);
    }
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const getOtherPartyName = () => {
    if (!activeAppointment) return 'Healthcare Specialist';
    if (isDoctor) {
      return activeAppointment.user_id?.name || 'Patient';
    }
    return activeAppointment.doctor_id?.name || 'Doctor';
  };

  const getOtherPartyRole = () => {
    if (isDoctor) {
      return `Patient (Phone: ${activeAppointment?.user_id?.phone || 'N/A'})`;
    }
    return `Specialist: ${activeAppointment?.doctor_id?.specialization || 'General Physician'}`;
  };

  if (user?.role === 'Nurse') {
    return null;
  }

  return (
    <div style={{ animation: 'fadeIn 0.3s ease' }}>
      {/* Hidden audio element for receiving WebRTC remote audio */}
      <audio ref={remoteAudioRef} autoPlay style={{ display: 'none' }} />

      {/* Module Title */}
      <div style={{ marginBottom: '22px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '6px' }}>
          <h2 style={{ margin: 0, color: '#0f172a', fontSize: '20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🎙️</span>
            <span>{t('telemedicineHeading')}</span>
          </h2>
          <span className="badge-green" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: callState === 'connected' ? '#10b981' : '#f59e0b', display: 'inline-block' }}></span>
            <span>{callState === 'connected' ? 'LIVE AUDIO ACTIVE' : '2G/3G RURAL OPTIMIZED'}</span>
          </span>
        </div>
        <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: 1.5 }}>
          {isDoctor
            ? 'Initiate and conduct live, low-latency remote audio consultation calls with accepted patients over low-bandwidth 2G/3G connections.' 
            : 'Receive live audio consultation calls from your assigned doctor over our 2G/3G low-bandwidth remote channel.'}
        </p>
      </div>

      {/* Appointment Selection Bar */}
      <div style={{
        background: '#f0fdf4',
        border: '1.5px solid #a7f3d0',
        borderRadius: '12px',
        padding: '16px 20px',
        marginBottom: '24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '14px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '260px' }}>
          <label style={{ fontSize: '13px', fontWeight: 700, color: '#065f46', whiteSpace: 'nowrap' }}>
            📅 Consultation Schedule:
          </label>
          {acceptedAppointments.length > 0 ? (
            <select
              value={activeAppointment?._id || ''}
              onChange={(e) => {
                const match = acceptedAppointments.find(a => a._id === e.target.value);
                if (match) setActiveAppointment(match);
              }}
              disabled={callState === 'connected'}
              className="form-input-green"
              style={{ maxWidth: '420px', backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 12px' }}
            >
              {acceptedAppointments.map(app => (
                <option key={app._id} value={app._id}>
                  {isDoctor
                    ? `👤 Patient: ${app.user_id?.name || 'Patient'} (${new Date(app.date_time).toLocaleDateString()})`
                    : `👨‍⚕️ ${app.doctor_id?.name || 'Doctor'} (${new Date(app.date_time).toLocaleDateString()})`}
                </option>
              ))}
            </select>
          ) : (
            <span style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>
              No accepted appointments yet. Please accept an appointment first in the Appointments tab.
            </span>
          )}
        </div>

        {/* Low-Bandwidth Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '13px', fontWeight: 600, color: '#047857' }}>⚡ 2G/3G GSM Mode:</span>
          <button
            type="button"
            onClick={() => {
              setLowBandwidthMode(!lowBandwidthMode);
              notify(!lowBandwidthMode ? 'Low bandwidth mode active (16kHz mono sample rate)' : 'Standard audio mode active');
            }}
            style={{
              padding: '4px 12px',
              borderRadius: '20px',
              border: '1px solid #10b981',
              backgroundColor: lowBandwidthMode ? '#10b981' : '#f0fdf4',
              color: lowBandwidthMode ? '#ffffff' : '#047857',
              fontSize: '12px',
              fontWeight: 700,
              cursor: 'pointer'
            }}
          >
            {lowBandwidthMode ? 'ENABLED (Opus 16k)' : 'DISABLED (HD)'}
          </button>
        </div>
      </div>

      {/* Main Call Interface Container */}
      <div 
        className="green-card" 
        style={{
          padding: '30px',
          background: callState === 'connected' 
            ? 'linear-gradient(180deg, #ecfdf5 0%, #ffffff 100%)' 
            : 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
          border: callState === 'connected' ? '2px solid #10b981' : '1.5px solid #a7f3d0',
          boxShadow: callState === 'connected' ? '0 12px 30px -4px rgba(16, 185, 129, 0.2)' : '0 4px 12px rgba(0,0,0,0.03)',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Call State: IDLE */}
        {callState === 'idle' && (
          <div style={{ textAlign: 'center', padding: '20px 10px' }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              border: '2px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 18px auto',
              fontSize: '36px',
              boxShadow: '0 4px 14px rgba(16, 185, 129, 0.15)'
            }}>
              🎙️
            </div>

            <h3 style={{ margin: '0 0 8px 0', color: '#065f46', fontSize: '20px', fontWeight: 800 }}>
              {activeAppointment 
                ? `Ready to Connect with ${getOtherPartyName()}`
                : 'Rural Audio Consultation Channel'}
            </h3>
            
            <p style={{ maxWidth: '580px', margin: '0 auto 24px auto', color: '#64748b', fontSize: '14px', lineHeight: 1.6 }}>
              {activeAppointment
                ? `Consultation schedule verified for ${new Date(activeAppointment.date_time).toLocaleString()}. Audio channel optimized for low-bandwidth 2G/3G networks.`
                : 'Please select an appointment above with status "Accepted" to start your remote consultation session.'}
            </p>

            {activeAppointment ? (
              isDoctor ? (
                /* Doctor Call Initiation Button */
                <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
                  <button
                    type="button"
                    onClick={handleStartCall}
                    className="btn-green-primary"
                    style={{
                      padding: '14px 32px',
                      fontSize: '15px',
                      fontWeight: 700,
                      borderRadius: '10px',
                      boxShadow: '0 6px 18px rgba(5, 150, 105, 0.3)'
                    }}
                  >
                    <span>📞</span>
                    <span>Initiate Audio Call to Patient</span>
                  </button>
                </div>
              ) : (
                /* Patient View: Waiting for Doctor to Call */
                <div style={{ textAlign: 'center' }}>
                  {activeCallStatus === 'Calling' ? (
                    <div style={{ background: '#ecfdf5', border: '2px solid #10b981', padding: '20px', borderRadius: '12px', maxWidth: '480px', margin: '0 auto' }}>
                      <div className="incoming-call-ring-icon" style={{ width: '60px', height: '60px', fontSize: '30px' }}>📞</div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                        Doctor is calling you now!
                      </h4>
                      <p style={{ fontSize: '13px', color: '#047857', marginBottom: '16px' }}>
                        Dr. {activeAppointment.doctor_id?.name || 'Doctor'} has initiated your audio consultation call.
                      </p>
                      <button
                        type="button"
                        onClick={handleJoinCall}
                        className="btn-accept-call"
                      >
                        <span>🟢</span>
                        <span>Accept & Join Call Now</span>
                      </button>
                    </div>
                  ) : (
                    <div style={{
                      background: '#f8fafc',
                      border: '1.5px dashed #cbd5e1',
                      padding: '20px',
                      borderRadius: '12px',
                      maxWidth: '520px',
                      margin: '0 auto',
                      color: '#475569',
                      fontSize: '14px'
                    }}>
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>⏳</div>
                      <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>Awaiting Doctor's Call</div>
                      <div>
                        Your consultation appointment is confirmed. Please wait for <strong>Dr. {activeAppointment.doctor_id?.name || 'Doctor'}</strong> to initiate the live call. You will receive an incoming call prompt automatically.
                      </div>
                    </div>
                  )}
                </div>
              )
            ) : (
              <div style={{
                background: '#fffbeb',
                border: '1.5px solid #fef3c7',
                padding: '14px 20px',
                borderRadius: '8px',
                maxWidth: '480px',
                margin: '0 auto',
                color: '#92400e',
                fontSize: '13px'
              }}>
                ℹ️ No accepted appointment selected. Doctors can accept appointments from the <strong>Appointments</strong> tab.
              </div>
            )}
          </div>
        )}

        {/* Call State: CONNECTING */}
        {callState === 'connecting' && (
          <div style={{ textAlign: 'center', padding: '40px 10px' }}>
            <div style={{
              width: '74px',
              height: '74px',
              borderRadius: '50%',
              backgroundColor: '#ecfdf5',
              border: '3px solid #10b981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              fontSize: '32px',
              animation: 'pulseGlow 1.5s infinite'
            }}>
              📡
            </div>
            <h3 style={{ margin: '0 0 6px 0', color: '#065f46', fontSize: '18px', fontWeight: 700 }}>
              Connecting to Secure Rural Channel...
            </h3>
            <p style={{ color: '#64748b', fontSize: '13px', margin: 0 }}>
              Negotiating low-bandwidth Opus audio codec at 16kHz sample rate for rural 2G/3G network stability.
            </p>
          </div>
        )}

        {/* Call State: CONNECTED (LIVE IN-CALL) */}
        {callState === 'connected' && (
          <div>
            {/* Top Bar: Participant Info & Timer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '14px',
              paddingBottom: '20px',
              borderBottom: '1px solid #d1fae5',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: '50%',
                  backgroundColor: '#059669',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  fontWeight: 700
                }}>
                  {getOtherPartyName().charAt(0)}
                </div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#065f46' }}>
                    {getOtherPartyName()}
                  </div>
                  <div style={{ fontSize: '13px', color: '#047857', fontWeight: 500 }}>
                    {getOtherPartyRole()}
                  </div>
                </div>
              </div>

              {/* Live Timer */}
              <div style={{
                background: '#ffffff',
                border: '1.5px solid #6ee7b7',
                padding: '8px 18px',
                borderRadius: '30px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 8px rgba(16, 185, 129, 0.1)'
              }}>
                <span className="badge-green-dot"></span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: '#065f46', fontFamily: 'monospace' }}>
                  {formatTime(callDuration)}
                </span>
              </div>
            </div>

            {/* Audio Wave Visualizer */}
            <div style={{
              background: '#ffffff',
              border: '1.5px solid #a7f3d0',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '24px',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#047857', marginBottom: '14px' }}>
                🎙️ Live Audio Signal (Low-Bandwidth 2G/3G Voice Channel)
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', gap: '8px', height: '90px' }}>
                {audioLevels.map((lvl, idx) => (
                  <div
                    key={idx}
                    style={{
                      width: '14px',
                      height: `${lvl}%`,
                      backgroundColor: isMuted ? '#cbd5e1' : '#10b981',
                      borderRadius: '8px',
                      transition: 'height 0.1s ease, background-color 0.2s ease'
                    }}
                  ></div>
                ))}
              </div>
              <div style={{ marginTop: '12px', fontSize: '12px', color: '#64748b' }}>
                {isMuted ? 'Microphone is currently MUTED' : micActive ? 'Microphone active — speaking in real-time' : 'Audio stream connected'}
              </div>
            </div>

            {/* Call Controls Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '28px'
            }}>
              <button
                type="button"
                onClick={toggleMute}
                style={{
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: isMuted ? '1.5px solid #fca5a5' : '1.5px solid #6ee7b7',
                  backgroundColor: isMuted ? '#fef2f2' : '#ecfdf5',
                  color: isMuted ? '#b91c1c' : '#047857',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <span>{isMuted ? '🔇' : '🎙️'}</span>
                <span>{isMuted ? 'Unmute Mic' : 'Mute Mic'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setSpeakerEnabled(!speakerEnabled);
                  notify(!speakerEnabled ? 'Speaker enabled' : 'Speaker muted');
                }}
                style={{
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: '1.5px solid #6ee7b7',
                  backgroundColor: speakerEnabled ? '#ecfdf5' : '#f8fafc',
                  color: speakerEnabled ? '#047857' : '#64748b',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <span>{speakerEnabled ? '🔊' : '🔈'}</span>
                <span>{speakerEnabled ? 'Speaker On' : 'Speaker Off'}</span>
              </button>

              <button
                type="button"
                onClick={handleEndCall}
                style={{
                  padding: '12px 28px',
                  borderRadius: '30px',
                  border: 'none',
                  backgroundColor: '#dc2626',
                  color: '#ffffff',
                  fontSize: '14px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(220, 38, 38, 0.3)'
                }}
              >
                <span>🔴</span>
                <span>End Consultation Call</span>
              </button>
            </div>

            {/* Clinical Consultation Notes (for Doctor / Nurse) */}
            {isDoctor && (
              <div style={{
                background: '#f8fafc',
                border: '1.5px solid #cbd5e1',
                borderRadius: '12px',
                padding: '20px',
                marginTop: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <label style={{ fontSize: '14px', fontWeight: 700, color: '#0f172a', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span>📝</span>
                    <span>Live Clinical Consultation Notes:</span>
                  </label>
                  {onNavigateToRecords && (
                    <button
                      type="button"
                      onClick={() => onNavigateToRecords(activeAppointment.user_id?._id || activeAppointment.user_id)}
                      className="btn-green-outline"
                      style={{ padding: '4px 10px', fontSize: '12px' }}
                    >
                      <span>📁</span>
                      <span>Open Patient Vault</span>
                    </button>
                  )}
                </div>
                <textarea
                  value={callNotes}
                  onChange={e => setCallNotes(e.target.value)}
                  placeholder="Record symptoms, diagnosis, prescribed medicines during the live audio consultation..."
                  rows={4}
                  className="form-input-green"
                  style={{ backgroundColor: '#ffffff', resize: 'vertical', marginBottom: '12px' }}
                />
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    type="button"
                    onClick={handleSaveNotes}
                    disabled={savingNotes}
                    className="btn-green-primary"
                    style={{ padding: '8px 18px', fontSize: '13px' }}
                  >
                    <span>💾</span>
                    <span>{savingNotes ? 'Saving...' : 'Save Consultation Notes'}</span>
                  </button>
                  {notesSaved && (
                    <span style={{ fontSize: '13px', color: '#059669', fontWeight: 600 }}>
                      ✓ Notes saved to database!
                    </span>
                  )}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Call State: ENDED */}
        {callState === 'ended' && (
          <div style={{ textAlign: 'center', padding: '30px 10px' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              backgroundColor: '#f1f5f9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto',
              fontSize: '32px'
            }}>
              🏁
            </div>
            <h3 style={{ margin: '0 0 6px 0', color: '#0f172a', fontSize: '18px', fontWeight: 700 }}>
              Audio Consultation Completed
            </h3>
            <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 20px 0' }}>
              Call duration: <strong>{formatTime(callDuration)}</strong>.
            </p>
            <button
              type="button"
              onClick={() => setCallState('idle')}
              className="btn-green-outline"
            >
              <span>🔄</span>
              <span>Back to Schedule</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## Frontend - Static Assets & SVGs

<a id="file-frontend-public-faviconsvg"></a>
### File: `frontend/public/favicon.svg`
**Path:** `healthCareSystem-main/frontend/public/favicon.svg`  
**Size:** 9,522 bytes  

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="48" height="46" fill="none" viewBox="0 0 48 46"><path fill="#863bff" d="M25.946 44.938c-.664.845-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.287c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.497 0-3.578-1.842-3.578H1.237c-.92 0-1.456-1.04-.92-1.788L10.013.474c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.579 1.842 3.579h11.377c.943 0 1.473 1.088.89 1.83L25.947 44.94z" style="fill:#863bff;fill:color(display-p3 .5252 .23 1);fill-opacity:1"/><mask id="a" width="48" height="46" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M25.842 44.938c-.664.844-2.021.375-2.021-.698V33.937a2.26 2.26 0 0 0-2.262-2.262H10.183c-.92 0-1.456-1.04-.92-1.788l7.48-10.471c1.07-1.498 0-3.579-1.842-3.579H1.133c-.92 0-1.456-1.04-.92-1.787L9.91.473c.214-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.471c-1.07 1.498 0 3.578 1.842 3.578h11.377c.943 0 1.473 1.088.89 1.832L25.843 44.94z" style="fill:#000;fill-opacity:1"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#ede6ff" rx="5.508" ry="14.704" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -4.47 31.516)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#ede6ff" rx="10.399" ry="29.851" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -39.328 7.883)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#7e14ff" rx="5.508" ry="30.487" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -25.913 -14.639)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.814 -32.644 -3.334)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#7e14ff" rx="5.508" ry="30.599" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="matrix(.00324 1 1 -.00324 -34.34 30.47)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#ede6ff" rx="14.072" ry="22.078" style="fill:#ede6ff;fill:color(display-p3 .9275 .9033 1);fill-opacity:1" transform="rotate(93.35 24.506 48.493)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#7e14ff" rx="3.47" ry="21.501" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(89.009 28.708 47.59)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx=".387" cy="8.972" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(39.51 .387 8.972)"/></g><g filter="url(#k)"><ellipse cx="47.523" cy="-6.092" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 47.523 -6.092)"/></g><g filter="url(#l)"><ellipse cx="41.412" cy="6.333" fill="#47bfff" rx="5.971" ry="9.665" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 41.412 6.333)"/></g><g filter="url(#m)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#n)"><ellipse cx="-1.879" cy="38.332" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 -1.88 38.332)"/></g><g filter="url(#o)"><ellipse cx="35.651" cy="29.907" fill="#7e14ff" rx="4.407" ry="29.108" style="fill:#7e14ff;fill:color(display-p3 .4922 .0767 1);fill-opacity:1" transform="rotate(37.892 35.651 29.907)"/></g><g filter="url(#p)"><ellipse cx="38.418" cy="32.4" fill="#47bfff" rx="5.971" ry="15.297" style="fill:#47bfff;fill:color(display-p3 .2799 .748 1);fill-opacity:1" transform="rotate(37.892 38.418 32.4)"/></g></g><defs><filter id="b" width="60.045" height="41.654" x="-19.77" y="16.149" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-54.613" y="-7.533" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-49.64" y="2.03" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-45.045" y="20.029" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-43.513" y="21.178" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="15.756" y="-17.901" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="23.548" y="2.284" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-27.636" y="-22.853" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="20.116" y="-38.415" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="24.641" y="-11.323" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-29.286" y="6.009" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="8.244" y="-2.416" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="18.713" y="10.588" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17158" stdDeviation="4.596"/></filter></defs></svg>
```

---

<a id="file-frontend-public-iconssvg"></a>
### File: `frontend/public/icons.svg`
**Path:** `healthCareSystem-main/frontend/public/icons.svg`  
**Size:** 5,031 bytes  

```xml
<svg xmlns="http://www.w3.org/2000/svg">
  <symbol id="bluesky-icon" viewBox="0 0 16 17">
    <g clip-path="url(#bluesky-clip)"><path fill="#08060d" d="M7.75 7.735c-.693-1.348-2.58-3.86-4.334-5.097-1.68-1.187-2.32-.981-2.74-.79C.188 2.065.1 2.812.1 3.251s.241 3.602.398 4.13c.52 1.744 2.367 2.333 4.07 2.145-2.495.37-4.71 1.278-1.805 4.512 3.196 3.309 4.38-.71 4.987-2.746.608 2.036 1.307 5.91 4.93 2.746 2.72-2.746.747-4.143-1.747-4.512 1.702.189 3.55-.4 4.07-2.145.156-.528.397-3.691.397-4.13s-.088-1.186-.575-1.406c-.42-.19-1.06-.395-2.741.79-1.755 1.24-3.64 3.752-4.334 5.099"/></g>
    <defs><clipPath id="bluesky-clip"><path fill="#fff" d="M.1.85h15.3v15.3H.1z"/></clipPath></defs>
  </symbol>
  <symbol id="discord-icon" viewBox="0 0 20 19">
    <path fill="#08060d" d="M16.224 3.768a14.5 14.5 0 0 0-3.67-1.153c-.158.286-.343.67-.47.976a13.5 13.5 0 0 0-4.067 0c-.128-.306-.317-.69-.476-.976A14.4 14.4 0 0 0 3.868 3.77C1.546 7.28.916 10.703 1.231 14.077a14.7 14.7 0 0 0 4.5 2.306q.545-.748.965-1.587a9.5 9.5 0 0 1-1.518-.74q.191-.14.372-.293c2.927 1.369 6.107 1.369 8.999 0q.183.152.372.294-.723.437-1.52.74.418.838.963 1.588a14.6 14.6 0 0 0 4.504-2.308c.37-3.911-.63-7.302-2.644-10.309m-9.13 8.234c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.894 0 1.614.82 1.599 1.82.001 1-.705 1.82-1.6 1.82m5.91 0c-.878 0-1.599-.82-1.599-1.82 0-.998.705-1.82 1.6-1.82.893 0 1.614.82 1.599 1.82 0 1-.706 1.82-1.6 1.82"/>
  </symbol>
  <symbol id="documentation-icon" viewBox="0 0 21 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="m15.5 13.333 1.533 1.322c.645.555.967.833.967 1.178s-.322.623-.967 1.179L15.5 18.333m-3.333-5-1.534 1.322c-.644.555-.966.833-.966 1.178s.322.623.966 1.179l1.534 1.321"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M17.167 10.836v-4.32c0-1.41 0-2.117-.224-2.68-.359-.906-1.118-1.621-2.08-1.96-.599-.21-1.349-.21-2.848-.21-2.623 0-3.935 0-4.983.369-1.684.591-3.013 1.842-3.641 3.428C3 6.449 3 7.684 3 10.154v2.122c0 2.558 0 3.838.706 4.726q.306.383.713.671c.76.536 1.79.64 3.581.66"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M3 10a2.78 2.78 0 0 1 2.778-2.778c.555 0 1.209.097 1.748-.047.48-.129.854-.503.982-.982.145-.54.048-1.194.048-1.749a2.78 2.78 0 0 1 2.777-2.777"/>
  </symbol>
  <symbol id="github-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M9.356 1.85C5.05 1.85 1.57 5.356 1.57 9.694a7.84 7.84 0 0 0 5.324 7.44c.387.079.528-.168.528-.376 0-.182-.013-.805-.013-1.454-2.165.467-2.616-.935-2.616-.935-.349-.91-.864-1.143-.864-1.143-.71-.48.051-.48.051-.48.787.051 1.2.805 1.2.805.695 1.194 1.817.857 2.268.649.064-.507.27-.857.49-1.052-1.728-.182-3.545-.857-3.545-3.87 0-.857.31-1.558.8-2.104-.078-.195-.349-1 .077-2.078 0 0 .657-.208 2.14.805a7.5 7.5 0 0 1 1.946-.26c.657 0 1.328.092 1.946.26 1.483-1.013 2.14-.805 2.14-.805.426 1.078.155 1.883.078 2.078.502.546.799 1.247.799 2.104 0 3.013-1.818 3.675-3.558 3.87.284.247.528.714.528 1.454 0 1.052-.012 1.896-.012 2.156 0 .208.142.455.528.377a7.84 7.84 0 0 0 5.324-7.441c.013-4.338-3.48-7.844-7.773-7.844" clip-rule="evenodd"/>
  </symbol>
  <symbol id="social-icon" viewBox="0 0 20 20">
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M12.5 6.667a4.167 4.167 0 1 0-8.334 0 4.167 4.167 0 0 0 8.334 0"/>
    <path fill="none" stroke="#aa3bff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.35" d="M2.5 16.667a5.833 5.833 0 0 1 8.75-5.053m3.837.474.513 1.035c.07.144.257.282.414.309l.93.155c.596.1.736.536.307.965l-.723.73a.64.64 0 0 0-.152.531l.207.903c.164.715-.213.991-.84.618l-.872-.52a.63.63 0 0 0-.577 0l-.872.52c-.624.373-1.003.094-.84-.618l.207-.903a.64.64 0 0 0-.152-.532l-.723-.729c-.426-.43-.289-.864.306-.964l.93-.156a.64.64 0 0 0 .412-.31l.513-1.034c.28-.562.735-.562 1.012 0"/>
  </symbol>
  <symbol id="x-icon" viewBox="0 0 19 19">
    <path fill="#08060d" fill-rule="evenodd" d="M1.893 1.98c.052.072 1.245 1.769 2.653 3.77l2.892 4.114c.183.261.333.48.333.486s-.068.089-.152.183l-.522.593-.765.867-3.597 4.087c-.375.426-.734.834-.798.905a1 1 0 0 0-.118.148c0 .01.236.017.664.017h.663l.729-.83c.4-.457.796-.906.879-.999a692 692 0 0 0 1.794-2.038c.034-.037.301-.34.594-.675l.551-.624.345-.392a7 7 0 0 1 .34-.374c.006 0 .93 1.306 2.052 2.903l2.084 2.965.045.063h2.275c1.87 0 2.273-.003 2.266-.021-.008-.02-1.098-1.572-3.894-5.547-2.013-2.862-2.28-3.246-2.273-3.266.008-.019.282-.332 2.085-2.38l2-2.274 1.567-1.782c.022-.028-.016-.03-.65-.03h-.674l-.3.342a871 871 0 0 1-1.782 2.025c-.067.075-.405.458-.75.852a100 100 0 0 1-.803.91c-.148.172-.299.344-.99 1.127-.304.343-.32.358-.345.327-.015-.019-.904-1.282-1.976-2.808L6.365 1.85H1.8zm1.782.91 8.078 11.294c.772 1.08 1.413 1.973 1.425 1.984.016.017.241.02 1.05.017l1.03-.004-2.694-3.766L7.796 5.75 5.722 2.852l-1.039-.004-1.039-.004z" clip-rule="evenodd"/>
  </symbol>
</svg>
```

---

<a id="file-frontend-src-assets-reactsvg"></a>
### File: `frontend/src/assets/react.svg`
**Path:** `healthCareSystem-main/frontend/src/assets/react.svg`  
**Size:** 4,126 bytes  

```xml
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
```

---

<a id="file-frontend-src-assets-vitesvg"></a>
### File: `frontend/src/assets/vite.svg`
**Path:** `healthCareSystem-main/frontend/src/assets/vite.svg`  
**Size:** 8,709 bytes  

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="77" height="47" fill="none" aria-labelledby="vite-logo-title" viewBox="0 0 77 47"><title id="vite-logo-title">Vite</title><style>.parenthesis{fill:#000}@media (prefers-color-scheme:dark){.parenthesis{fill:#fff}}</style><path fill="#9135ff" d="M40.151 45.71c-.663.844-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.493c-.92 0-1.457-1.04-.92-1.788l7.479-10.471c1.07-1.498 0-3.578-1.842-3.578H15.443c-.92 0-1.456-1.04-.92-1.788l9.696-13.576c.213-.297.556-.474.92-.474h28.894c.92 0 1.456 1.04.92 1.788l-7.48 10.472c-1.07 1.497 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.087.89 1.83L40.153 45.712z"/><mask id="a" width="48" height="47" x="14" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path fill="#000" d="M40.047 45.71c-.663.843-2.02.374-2.02-.699V34.708a2.26 2.26 0 0 0-2.262-2.262H24.389c-.92 0-1.457-1.04-.92-1.788l7.479-10.472c1.07-1.497 0-3.578-1.842-3.578H15.34c-.92 0-1.456-1.04-.92-1.788l9.696-13.575c.213-.297.556-.474.92-.474H53.93c.92 0 1.456 1.04.92 1.788L47.37 13.03c-1.07 1.498 0 3.578 1.842 3.578h11.376c.944 0 1.474 1.088.89 1.831L40.049 45.712z"/></mask><g mask="url(#a)"><g filter="url(#b)"><ellipse cx="5.508" cy="14.704" fill="#eee6ff" rx="5.508" ry="14.704" transform="rotate(269.814 20.96 11.29)scale(-1 1)"/></g><g filter="url(#c)"><ellipse cx="10.399" cy="29.851" fill="#eee6ff" rx="10.399" ry="29.851" transform="rotate(89.814 -16.902 -8.275)scale(1 -1)"/></g><g filter="url(#d)"><ellipse cx="5.508" cy="30.487" fill="#8900ff" rx="5.508" ry="30.487" transform="rotate(89.814 -19.197 -7.127)scale(1 -1)"/></g><g filter="url(#e)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.928 4.177)scale(1 -1)"/></g><g filter="url(#f)"><ellipse cx="5.508" cy="30.599" fill="#8900ff" rx="5.508" ry="30.599" transform="rotate(89.814 -25.738 5.52)scale(1 -1)"/></g><g filter="url(#g)"><ellipse cx="14.072" cy="22.078" fill="#eee6ff" rx="14.072" ry="22.078" transform="rotate(93.35 31.245 55.578)scale(-1 1)"/></g><g filter="url(#h)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#i)"><ellipse cx="3.47" cy="21.501" fill="#8900ff" rx="3.47" ry="21.501" transform="rotate(89.009 35.419 55.202)scale(-1 1)"/></g><g filter="url(#j)"><ellipse cx="14.592" cy="9.743" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(39.51 14.592 9.743)"/></g><g filter="url(#k)"><ellipse cx="61.728" cy="-5.321" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 61.728 -5.32)"/></g><g filter="url(#l)"><ellipse cx="55.618" cy="7.104" fill="#00c2ff" rx="5.971" ry="9.665" transform="rotate(37.892 55.618 7.104)"/></g><g filter="url(#m)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#n)"><ellipse cx="12.326" cy="39.103" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 12.326 39.103)"/></g><g filter="url(#o)"><ellipse cx="49.857" cy="30.678" fill="#8900ff" rx="4.407" ry="29.108" transform="rotate(37.892 49.857 30.678)"/></g><g filter="url(#p)"><ellipse cx="52.623" cy="33.171" fill="#00c2ff" rx="5.971" ry="15.297" transform="rotate(37.892 52.623 33.17)"/></g></g><path d="M6.919 0c-9.198 13.166-9.252 33.575 0 46.789h6.215c-9.25-13.214-9.196-33.623 0-46.789zm62.424 0h-6.215c9.198 13.166 9.252 33.575 0 46.789h6.215c9.25-13.214 9.196-33.623 0-46.789" class="parenthesis"/><defs><filter id="b" width="60.045" height="41.654" x="-5.564" y="16.92" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="c" width="90.34" height="51.437" x="-40.407" y="-6.762" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="d" width="79.355" height="29.4" x="-35.435" y="2.801" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="e" width="79.579" height="29.4" x="-30.84" y="20.8" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="f" width="79.579" height="29.4" x="-29.307" y="21.949" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="g" width="74.749" height="58.852" x="29.961" y="-17.13" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="7.659"/></filter><filter id="h" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="i" width="61.377" height="25.362" x="37.754" y="3.055" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="j" width="56.045" height="63.649" x="-13.43" y="-22.082" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="k" width="54.814" height="64.646" x="34.321" y="-37.644" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="l" width="33.541" height="35.313" x="38.847" y="-10.552" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="m" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="n" width="54.814" height="64.646" x="-15.081" y="6.78" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="o" width="54.814" height="64.646" x="22.45" y="-1.645" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter><filter id="p" width="39.409" height="43.623" x="32.919" y="11.36" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur result="effect1_foregroundBlur_2002_17286" stdDeviation="4.596"/></filter></defs></svg>
```

---

<a id="file-frontend-src-assets-heropng"></a>
### File: `frontend/src/assets/hero.png`
**Path:** `healthCareSystem-main/frontend/src/assets/hero.png`  
**Size:** 13,057 bytes  
**Type:** Binary Image Asset

> Note: `frontend/src/assets/hero.png` is a binary image file (13057 bytes) used as visual media in the application interface.
