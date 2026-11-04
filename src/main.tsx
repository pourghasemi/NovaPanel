import React from 'react';
import ReactDOM from 'react-dom/client';

import './config/i18n';

import App from './App';

import ThemeProvider from './providers/ThemeProvider';
import LanguageProvider from './providers/LanguageProvider';

ReactDOM.createRoot(
  document.getElementById('root')!,
).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);