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
