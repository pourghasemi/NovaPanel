
import { FiMoon, FiSun } from 'react-icons/fi';

import { useTheme } from '@/providers/ThemeProvider';

import { ToggleButton } from './ThemeToggle.styles';

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <ToggleButton type="button" onClick={toggleTheme}>
      {mode === 'light' ? <FiMoon /> : <FiSun />}

      <span>
        {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
      </span>
    </ToggleButton>
  );
};

export default ThemeToggle;
