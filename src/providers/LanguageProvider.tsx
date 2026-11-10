import {
  createContext,
  useContext,
  useEffect,
  type ReactNode,
} from 'react';

import { useTranslation } from 'react-i18next';
import languageStorage, { type Language } from '@/storage/languageStorage';

export type { Language } from '@/storage/languageStorage';

interface LanguageContextType {
  language: Language;
  direction: 'rtl' | 'ltr';
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }

  return context;
};

const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const { i18n } = useTranslation();

  const language: Language = i18n.language.startsWith('en') ? 'en' : 'fa';

  const direction = language === 'fa' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = direction;
    document.body.style.fontFamily =
      language === 'fa'
        ? "'Vazirmatn', sans-serif"
        : "'Inter', sans-serif";
    languageStorage.setLanguage(language);
  }, [language, direction]);

  const toggleLanguage = () => {
    const newLanguage = language === 'fa' ? 'en' : 'fa';
    i18n.changeLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider
      value={{ language, direction, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;