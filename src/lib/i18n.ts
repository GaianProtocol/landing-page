// src/lib/i18n.ts
"use client"
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import en from "../../public/locales/en/translation.json";
import phili from "../../public/locales/phili/translation.json";

// Language mapping for browser language detection
const languageMapping: { [key: string]: string } = {
  'en': 'en',
  'en-US': 'en',
  'en-GB': 'en',
  'tl': 'phili', // Tagalog
  'tl-PH': 'phili',
  'fil': 'phili', // Filipino
  'fil-PH': 'phili',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      phili: { translation: phili },
    },
    fallbackLng: "en",
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      lookupLocalStorage: "userLanguage",
      lookupFromPathIndex: 0,
      lookupFromSubdomainIndex: 0,
      // Custom language mapping
      convertDetectedLanguage: (lng: string) => {
        return languageMapping[lng] || lng.split('-')[0] || 'en';
      },
    },
    react: {
      useSuspense: false, // Disable suspense for SSR compatibility
    },
  });

export default i18n;
