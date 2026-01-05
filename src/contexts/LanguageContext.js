import React, { createContext, useState, useContext, useEffect } from 'react';
import { defaultLanguage, rtlLanguages } from '../i18n/config';

// Import all translation files
import enUS from '../i18n/locales/en-US.json';
import enIN from '../i18n/locales/en-IN.json';
import frFR from '../i18n/locales/fr-FR.json';
import arSA from '../i18n/locales/ar-SA.json';

const translations = {
  'en-US': enUS,
  'en-IN': enIN,
  'fr-FR': frFR,
  'ar-SA': arSA
};

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Get language from localStorage or use default
    return localStorage.getItem('mousiki-language') || defaultLanguage;
  });

  useEffect(() => {
    // Save language preference
    localStorage.setItem('mousiki-language', language);
    
    // Set document direction for RTL languages
    document.documentElement.dir = rtlLanguages.includes(language) ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Return key if translation not found
      }
    }
    
    return value || key;
  };

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
    }
  };

  const value = {
    language,
    changeLanguage,
    t,
    isRTL: rtlLanguages.includes(language)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
