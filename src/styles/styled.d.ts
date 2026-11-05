import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark';

    fontFamily: {
      fa: string;
      en: string;
    };

    colors: {
      primary: string;
      secondary: string;
      accent: string;

      background: string;
      surface: string;
      sidebar: string;

      text: string;
      textSecondary: string;

      border: string;
      input: string;

      error: string;
      success: string;
    };

    borderRadius: {
      small: string;
      medium: string;
      large: string;
    };

    shadows: {
      card: string;
    };
  }
}