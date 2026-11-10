import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import fa from '@/dictionary/fa/translation.json';
import en from '@/dictionary/en/translation.json';
import languageStorage from '@/storage/languageStorage';

i18n.use(initReactI18next).init({
  resources: {
    fa: {
      translation: fa,
    },
    en: {
      translation: en,
    },
  },

  lng: languageStorage.getLanguage(),
  fallbackLng: 'fa',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;