
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/providers/ThemeProvider';
import { ToggleButton } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <ToggleButton type="button" onClick={toggleTheme}>
      {mode === 'light' ? <FiMoon /> : <FiSun />}

      <span>
        {mode === 'light' ? t('common.darkMode') : t('lightMode')}
      </span>
    </ToggleButton>
  );
};

export default ThemeToggle;
