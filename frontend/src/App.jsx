import React, { useState, useEffect, useCallback } from 'react';
import API from './services/api';
import './App.css';
import { 
  getTranslation, 
  translateUserName, 
  translateHospitalName, 
  translateLocation, 
  translateCity, 
  translateSpecialization, 
  translateDiagnosis, 
  translateSchedule 
} from './i18n/translations';
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
          ? `Welcome Dr. ${translateUserName(res.data.user.name, currentLanguage)}! Active at ${translateHospitalName(hospName, currentLanguage)}` 
          : t('loginSuccessMsg', { name: translateUserName(res.data.user.name, currentLanguage), role: getRoleDisplayName(res.data.user.role) })
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
                          <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>{t('docStateInputLabel')} *</label>
                          <select 
                            className="form-input-green" 
                            value={docRegState} 
                            onChange={e => setDocRegState(e.target.value)} 
                            required 
                            style={{ backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 10px', fontSize: '13px' }}
                          >
                            <option value="">{t('selectStateDropdownOption')}</option>
                            {regStates.map(s => <option key={s} value={s}>{translateLocation(s, currentLanguage)}</option>)}
                          </select>
                        </div>

                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>{t('docDistrictInputLabel')} *</label>
                          <select 
                            className="form-input-green" 
                            value={docRegDistrict} 
                            onChange={e => setDocRegDistrict(e.target.value)} 
                            disabled={!docRegState} 
                            required 
                            style={{ backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 10px', fontSize: '13px' }}
                          >
                            <option value="">{t('selectDistrictDropdownOption')}</option>
                            {regDistricts.map(d => <option key={d} value={d}>{translateLocation(d, currentLanguage)}</option>)}
                          </select>
                        </div>

                        <div className="form-group" style={{ margin: 0 }}>
                          <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>{t('docCityInputLabel')} *</label>
                          <select 
                            className="form-input-green" 
                            value={docRegCity} 
                            onChange={e => setDocRegCity(e.target.value)} 
                            disabled={!docRegDistrict} 
                            required 
                            style={{ backgroundColor: '#ffffff', cursor: 'pointer', padding: '8px 10px', fontSize: '13px' }}
                          >
                            <option value="">{t('selectCityDropdownOption')}</option>
                            {regCities.map(c => <option key={c} value={c}>{translateCity(c, currentLanguage)}</option>)}
                          </select>
                        </div>
                      </div>

                      {/* Hospital Dropdown based on chosen Area Location */}
                      <div className="form-group" style={{ margin: 0 }}>
                        <label className="form-label" style={{ fontSize: '12px', fontWeight: 700 }}>
                          🏥 {t('hospitalNameLabel')} * {docRegCity ? `(in ${translateCity(docRegCity, currentLanguage)})` : docRegState ? `(in ${translateLocation(docRegState, currentLanguage)})` : ''}
                        </label>
                        <select 
                          value={docRegHospitalId} 
                          onChange={e => setDocRegHospitalId(e.target.value)} 
                          className="form-input-green"
                          style={{ backgroundColor: '#ffffff', cursor: 'pointer', width: '100%' }}
                          required
                        >
                          <option value="">{t('chooseHospitalFromDatabase')}</option>
                          {regHospitals.map(h => (
                            <option key={h._id} value={h._id}>
                              🏥 {translateHospitalName(h.name, currentLanguage)} — {translateLocation(h.address || h.location, currentLanguage)} ({translateCity(h.city, currentLanguage)})
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
                              <div><strong>🏥 {t('hospitalNameLabel')}:</strong> {translateHospitalName(hosp.name, currentLanguage)}</div>
                              <div><strong>📍 {t('areaLocationLabel')}:</strong> {translateLocation(hosp.address || hosp.location, currentLanguage)}, {translateCity(hosp.city, currentLanguage)}, {translateLocation(hosp.state, currentLanguage)}</div>
                              {hosp.phone && <div><strong>📞 {t('contactPhoneLabel')}:</strong> {hosp.phone}</div>}
                            </div>
                          );
                        })()
                      )}
                    </div>
                  </>
                )}

                {role === 'Nurse' && (
                  <div className="form-group">
                    <label className="form-label">🏥 {t('hospitalAttachedBadge')}</label>
                    <select 
                      value={registerCentreId} 
                      onChange={e => setRegisterCentreId(e.target.value)} 
                      className="form-input-green"
                      style={{ backgroundColor: '#ffffff', cursor: 'pointer' }}
                      required
                    >
                      <option value="">{t('selectHospitalDropdownOption')}</option>
                      {hospitalList.map(h => (
                        <option key={h._id} value={h._id}>
                          🏥 {translateHospitalName(h.name, currentLanguage)} — {translateCity(h.city, currentLanguage) || translateLocation(h.district || 'Tamil Nadu', currentLanguage)}
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
        <DoctorProfileOnboarding 
          user={user} 
          currentLanguage={currentLanguage}
          onCompleted={(prof) => {
            setDoctorProfile(prof);
            setDoctorOnboarding(false);
            notify('Doctor profile completed');
          }} 
        />
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
                {t('welcomeUser')} <strong style={{ color: '#0f172a' }}>{translateUserName(user.name, currentLanguage)}</strong>{' '}
                <span className="badge-green" style={{ marginLeft: '4px' }}>
                  {getRoleDisplayName(user.role)}
                </span>
              </span>
              {user.role === 'Doctor' && (
                <span className="badge-green" style={{ background: '#ecfdf5', border: '1.5px solid #10b981', color: '#065f46', fontWeight: 700 }}>
                  🏥 {translateHospitalName(doctorProfile?.hospital?.name || user.hospital?.name || 'Hospital Attached', currentLanguage)}
                  {(doctorProfile?.hospital?.city || user.hospital?.city) ? ` (${translateCity(doctorProfile?.hospital?.city || user.hospital?.city, currentLanguage)})` : ''}
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
                🎙️ {t('activeTelemedicineNotice')} {translateUserName(callSessionInfo.otherPartyName, currentLanguage) || t('patientLabel')}
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
                <span>{t('openCallRoomBtn')}</span>
              </button>
              <button 
                type="button" 
                onClick={callSessionInfo.onToggleMute}
                className="btn-green-outline"
                style={{ padding: '6px 12px', fontSize: '12px' }}
              >
                <span>{callSessionInfo.isMuted ? `🔇 ${t('unmuteBtnText')}` : `🎙️ ${t('muteBtnText')}`}</span>
              </button>
              <button 
                type="button" 
                onClick={callSessionInfo.onEndCall}
                style={{ padding: '6px 14px', fontSize: '12px', background: '#dc2626', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 700, cursor: 'pointer' }}
              >
                <span>🔴 {t('endCallBtnText')}</span>
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
                {t('incomingCallTitle')}
              </h3>
              <p style={{ margin: '0 0 20px 0', color: '#475569', fontSize: '14px', lineHeight: 1.5 }}>
                <strong>Dr. {translateUserName(incomingCall.appointment_id?.doctor_id?.name || 'Your Doctor', currentLanguage)}</strong> ({translateSpecialization(incomingCall.appointment_id?.doctor_id?.specialization || 'General Physician', currentLanguage)}) {t('doctorInitiatedCallNotice', { name: translateUserName(incomingCall.appointment_id?.doctor_id?.name || 'Your Doctor', currentLanguage) })}
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button 
                  type="button" 
                  className="btn-accept-call"
                  onClick={handleAcceptIncomingCall}
                >
                  <span>🟢</span>
                  <span>{t('acceptAndJoinCallBtn')}</span>
                </button>
                <button 
                  type="button" 
                  className="btn-decline-call"
                  onClick={handleDeclineIncomingCall}
                >
                  <span>🔴</span>
                  <span>{t('declineCallBtn')}</span>
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
                    <span className="badge-green" style={{ fontSize: '11px' }}>{t('activeModuleBadge')}</span>
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
                    <span className="badge-green" style={{ fontSize: '11px' }}>{t('secureRecordsBadge')}</span>
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
                    <span className="badge-green" style={{ fontSize: '11px' }}>{t('dailyDosageBadge')}</span>
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
                    <span className="badge-green" style={{ fontSize: '11px' }}>{t('directoryBadge')}</span>
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
                      <span className="badge-green" style={{ fontSize: '11px' }}>{t('ready2gBadge')}</span>
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
                  currentLanguage={currentLanguage}
                />
              ) : (
                <div style={{ marginBottom: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '8px' }}>
                    <h2 style={{ margin: 0, color: '#0f172a', fontSize: '20px', fontWeight: 700 }}>
                      📋 {t('manageAppointmentsTitle')}
                    </h2>
                    <span className="badge-green">
                      {getRoleDisplayName(user.role)} {t('portalSuffix')}
                    </span>
                  </div>
                  <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                    {user.role === 'Doctor' 
                      ? t('doctorReviewNotice')
                      : t('nurseReviewNotice')}
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
                                  {t('patientLabel')} {translateUserName(app.user_id?.name || 'Patient', currentLanguage)}
                                </div>
                                <div style={{ fontSize: '13px', color: '#059669', fontWeight: 600, marginTop: '2px' }}>
                                  📞 {app.user_id?.phone || 'No phone'}
                                </div>
                                {app.doctor_id?.name && (
                                  <div style={{ fontSize: '12px', color: '#475569', marginTop: '2px' }}>
                                    <strong>{t('doctorLabel')}</strong> {translateUserName(app.doctor_id.name, currentLanguage)} ({translateSpecialization(app.doctor_id.specialization || 'General', currentLanguage)})
                                  </div>
                                )}
                              </>
                            ) : (
                              /* If Patient viewing, lead with Doctor name */
                              <>
                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#0f172a' }}>
                                  {t('doctorLabel')} {translateUserName(app.doctor_id?.name, currentLanguage) || t('assignedSpecialist')}
                                </div>
                                <div style={{ fontSize: '13px', color: '#047857', fontWeight: 500 }}>
                                  {translateSpecialization(app.doctor_id?.specialization || 'General Healthcare', currentLanguage)}
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
                                  {translateHospitalName(app.hospital?.name || app.doctor_id?.hospital?.name, currentLanguage)}
                                  {(app.hospital?.location || app.hospital?.city || app.doctor_id?.hospital?.city) && ` (📍 ${translateLocation(app.hospital?.location || app.hospital?.city || app.doctor_id?.hospital?.city, currentLanguage)})`}
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
                              <span>{t('joinAudioCallBtn')}</span>
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
                                      <span>{t('callPatientBtn')}</span>
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
                currentLanguage={currentLanguage}
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
                    {user.role === 'Doctor' || user.role === 'Nurse' ? `${getRoleDisplayName(user.role)} ${t('portalSuffix')}` : t('patientVaultBadge')}
                  </span>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: 1.5 }}>
                  {user.role === 'Doctor' || user.role === 'Nurse' 
                    ? t('doctorStaffEditorDesc')
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
                          {translateUserName(p.name, currentLanguage)} (📞 {p.phone})
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
                          <option value="">{t('chooseAcceptedPatientOption')}</option>
                          {acceptedPatients.map(p => (
                            <option key={p._id} value={p._id}>
                              {translateUserName(p.name, currentLanguage)} (📞 {p.phone}) - Accepted Appt: {new Date(p.appointmentDate).toLocaleDateString()}
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
                          <span>{t('saveMedicalRecordBtn')}</span>
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
                                👤 {rec.user_id?.name ? `${t('patientLabel')} ${translateUserName(rec.user_id.name, currentLanguage)}` : t('editRecordTitle')}
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
                                    <span>{t('patientLabel')} {translateUserName(rec.user_id?.name || 'Patient', currentLanguage)}</span>
                                    {rec.user_id?.phone && (
                                      <span style={{ fontSize: '13px', color: '#059669', fontWeight: 600 }}>
                                        (📞 {rec.user_id.phone})
                                      </span>
                                    )}
                                  </div>
                                )}

                                <div style={{ fontSize: '16px', fontWeight: 700, color: '#065f46', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                  <span>📋</span>
                                  <span><strong>{t('diagnosisLabel')}</strong> {translateDiagnosis(rec.diagnosis, currentLanguage)}</span>
                                </div>
                              </div>

                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span className="badge-green">{t('verifiedClinicalRecordBadge')}</span>

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
                                    🩺 <strong>{t('prescribedBy')}</strong> {translateUserName(rec.doctor_id.name, currentLanguage)} ({translateSpecialization(rec.doctor_id.specialization || 'Healthcare Specialist', currentLanguage)})
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
                      ? t('doctorNurseRemindersNotice')
                      : t('patientRemindersNotice')}
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
                            {translateUserName(p.name, currentLanguage)} (📞 {p.phone})
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
                                  {translateUserName(p.name, currentLanguage)} (📞 {p.phone})
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
                                    👤 {rem.user_id?.name ? `${t('patientLabel')} ${translateUserName(rem.user_id.name, currentLanguage)}` : t('myRemindersSubtab')}
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
                                        ⏰ {translateSchedule(rem.schedule, currentLanguage)}
                                      </div>
                                    </div>
                                  </div>

                                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span className="badge-green" style={{ fontSize: '12px' }}>
                                      👤 {translateUserName(rem.user_id?.name || 'Patient', currentLanguage)} {rem.user_id?.phone ? `(📞 ${rem.user_id.phone})` : ''}
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
                                      <span>🩺 <strong>{t('prescribedByDoctor')}:</strong> {translateUserName(rem.doctor_id.name, currentLanguage)} ({translateSpecialization(rem.doctor_id.specialization || 'Doctor', currentLanguage)})</span>
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
                              ⏰ {translateSchedule(rem.schedule, currentLanguage)}
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
                      📋 {t('activeSchedulesCounter', { count: reminders.length })}
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
                                  ⏰ {translateSchedule(rem.schedule, currentLanguage)}
                                </div>
                              </div>
                            </div>

                            {/* Prescribing Doctor Information */}
                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '10px', fontSize: '12px', color: '#64748b', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                              {isDoctorPrescribed && (
                                <div style={{ color: '#065f46', fontWeight: 600 }}>
                                  🩺 <strong>{t('prescribedByDoctor')}:</strong> {translateUserName(rem.doctor_id?.name || 'Doctor', currentLanguage)}
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
                    {selectedCity && selectedCity !== 'All' ? ` in ${translateCity(selectedCity, currentLanguage)}` : ''}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '6px 14px', borderRadius: '20px', color: '#166534', fontSize: '12px', fontWeight: 600 }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }}></span>
                  <span>{t('verifiedNetworkBadge')}</span>
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
                        {city.icon} {translateCity(city.name, currentLanguage)} {city.state ? `(${translateLocation(city.state, currentLanguage)})` : ''}
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
                        {ft.icon} {ft.id === 'All' ? t('facilityTypeAll') : ft.id === 'Hospital' ? t('facilityTypeHospital') : t('facilityTypeClinic')}
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
                    <span>🔄</span> {t('resetFiltersBtn')}
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
                  <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>{t('tryDifferentCityNotice')}</p>
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
                      {t('showAllCentresBtn')}
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
                                {translateHospitalName(centre.name, currentLanguage)}
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
                              {centre.type === 'Hospital' ? t('facilityTypeHospital') : centre.type === 'Pharmacy' ? t('facilityTypePharmacy') : t('facilityTypeClinic')}
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
                              📍 {translateCity(centre.city || 'Chennai', currentLanguage)}
                            </span>
                          </div>

                          <p style={{ margin: '0 0 14px 0', color: '#475569', fontSize: '13px', lineHeight: 1.45, display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                            <span style={{ color: '#94a3b8' }}>🏠</span>
                            <span>{translateLocation(centre.location, currentLanguage)}</span>
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
                              <span>📅</span> {t('bookDoctorBtn')}
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
                            <span>🗺️</span> {t('getDirectionsBtn')}
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
