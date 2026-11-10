export type Language = 'fa' | 'en';

const LANGUAGE_KEY = 'language';

const languageStorage = {
  getLanguage: (): Language => {
    return localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'fa';
  },

  setLanguage: (language: Language) => {
    localStorage.setItem(LANGUAGE_KEY, language);
  },
};

export default languageStorage;
