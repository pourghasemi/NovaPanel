
import type { DefaultTheme } from 'styled-components';

export type ThemeMode = 'light' | 'dark';

export const themes: Record<ThemeMode, DefaultTheme> = {
  light: {
    mode: 'light',

    fontFamily: {
      fa: "'Vazirmatn', sans-serif",
      en: "'Inter', sans-serif",
    },

    colors: {
      primary: '#3157A4',
      secondary: '#172B4D',
      accent: '#F28C28',

      background: '#F7F8FC',
      surface: '#FFFFFF',
      sidebar: '#172B4D',

      text: '#25324B',
      textSecondary: '#8490A5',

      border: '#E8EAF0',
      input: '#FFFFFF',

      error: '#E05252',
      success: '#2E9D70',
    },

    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '18px',
    },

    shadows: {
      card: '0 4px 20px rgba(31, 45, 80, 0.06)',
    },
  },

  dark: {
    mode: 'dark',

    fontFamily: {
      fa: "'Vazirmatn', sans-serif",
      en: "'Inter', sans-serif",
    },

    colors: {
      primary: '#6D91D8',
      secondary: '#17243B',
      accent: '#F28C28',

      background: '#111827',
      surface: '#1E293B',
      sidebar: '#101B2D',

      text: '#F1F5F9',
      textSecondary: '#A0AEC0',

      border: '#334155',
      input: '#263449',

      error: '#F87171',
      success: '#34D399',
    },

    borderRadius: {
      small: '8px',
      medium: '12px',
      large: '18px',
    },

    shadows: {
      card: '0 4px 20px rgba(0, 0, 0, 0.2)',
    },
  },
};
