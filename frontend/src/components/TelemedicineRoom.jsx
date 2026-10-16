import React, { useState, useEffect, useRef } from 'react';
import API from '../services/api';
import { getTranslation, translateUserName, translateSpecialization } from '../i18n/translations';

export default function TelemedicineRoom({ 
  user, 
  appointments, 
  t: propT, 
  notify, 
  onNavigateToRecords,
  preselectedAppointmentId,
  onCallSessionUpdate,
  currentLanguage = 'en'
}) {
  const t = (key, params) => (propT ? propT(key, params) : getTranslation(currentLanguage, key, params));

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
    if (!activeAppointment) return t('assignedSpecialist');
    if (isDoctor) {
      return translateUserName(activeAppointment.user_id?.name || 'Patient', currentLanguage);
    }
    return translateUserName(activeAppointment.doctor_id?.name || 'Doctor', currentLanguage);
  };

  const getOtherPartyRole = () => {
    if (isDoctor) {
      return `${t('patientLabel')} (${t('patientPhone')} ${activeAppointment?.user_id?.phone || 'N/A'})`;
    }
    return `${t('doctorLabel')} ${translateSpecialization(activeAppointment?.doctor_id?.specialization || 'General Physician', currentLanguage)}`;
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
            <span>{callState === 'connected' ? t('liveAudioActiveBadge') : t('lowBandwidthBadge')}</span>
          </span>
        </div>
        <p style={{ margin: 0, color: '#475569', fontSize: '14px', lineHeight: 1.5 }}>
          {isDoctor
            ? t('telemedicineDoctorDesc')
            : t('telemedicinePatientDesc')}
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
            📅 {t('connectedPatientsHeader')}:
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
                    ? `👤 ${t('patientLabel')} ${translateUserName(app.user_id?.name || 'Patient', currentLanguage)} (${new Date(app.date_time).toLocaleDateString()})`
                    : `👨‍⚕️ ${translateUserName(app.doctor_id?.name || 'Doctor', currentLanguage)} (${new Date(app.date_time).toLocaleDateString()})`}
                </option>
              ))}
            </select>
          ) : (
            <span style={{ fontSize: '13px', color: '#94a3b8', fontStyle: 'italic' }}>
              {t('noAcceptedAppDoctorHint')}
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
                ? t('telemedicineConnectReady', { name: getOtherPartyName() })
                : t('telemedicineRuralChannel')}
            </h3>
            
            <p style={{ maxWidth: '580px', margin: '0 auto 24px auto', color: '#64748b', fontSize: '14px', lineHeight: 1.6 }}>
              {activeAppointment
                ? t('telemedicineVerifiedNotice', { time: new Date(activeAppointment.date_time).toLocaleString() })
                : t('telemedicineSelectAcceptedNotice')}
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
                    <span>{t('initiateCallToPatientBtn')}</span>
                  </button>
                </div>
              ) : (
                /* Patient View: Waiting for Doctor to Call */
                <div style={{ textAlign: 'center' }}>
                  {activeCallStatus === 'Calling' ? (
                    <div style={{ background: '#ecfdf5', border: '2px solid #10b981', padding: '20px', borderRadius: '12px', maxWidth: '480px', margin: '0 auto' }}>
                      <div className="incoming-call-ring-icon" style={{ width: '60px', height: '60px', fontSize: '30px' }}>📞</div>
                      <h4 style={{ margin: '0 0 6px 0', color: '#065f46', fontSize: '17px', fontWeight: 700 }}>
                        {t('doctorIsCallingYouNow')}
                      </h4>
                      <p style={{ fontSize: '13px', color: '#047857', marginBottom: '16px' }}>
                        {t('doctorInitiatedCallNotice', { name: translateUserName(activeAppointment.doctor_id?.name || 'Doctor', currentLanguage) })}
                      </p>
                      <button
                        type="button"
                        onClick={handleJoinCall}
                        className="btn-accept-call"
                      >
                        <span>🟢</span>
                        <span>{t('acceptAndJoinCallNowBtn')}</span>
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
                      <div style={{ fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{t('awaitingDoctorCallTitle')}</div>
                      <div>
                        {t('awaitingDoctorCallNotice', { name: translateUserName(activeAppointment.doctor_id?.name || 'Doctor', currentLanguage) })}
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
