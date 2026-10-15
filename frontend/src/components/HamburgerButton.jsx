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
