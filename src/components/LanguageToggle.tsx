
import { FiGlobe } from 'react-icons/fi';

import { useLanguage } from '@/providers/LanguageProvider';

import { ToggleButton } from './LanguageToggle.styles';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <ToggleButton
      type="button"
      onClick={toggleLanguage}
    >
      <FiGlobe />

      <span>{language === 'fa' ? 'English' : 'فارسی'}</span>
    </ToggleButton>
  );
};

export default LanguageToggle;
