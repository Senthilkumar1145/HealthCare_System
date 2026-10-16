import React from 'react';
import { LANGUAGES, getTranslation, translateUserName } from '../i18n/translations';

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
                {translateUserName(user.name, currentLanguage)}
              </div>
              <div style={{ fontSize: '12px', color: '#059669', fontWeight: 600 }}>
                {user.role === 'Doctor' ? t('roleDoctor') : user.role === 'Nurse' ? t('roleNurse') : t('rolePatient')} • {user.phone}
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
