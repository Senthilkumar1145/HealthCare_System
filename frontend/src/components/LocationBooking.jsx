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
