import React from 'react';
import ReactDOM from 'react-dom/client';

import './config/i18n';

import App from './App';
import ThemeProvider from './providers/ThemeProvider';
import LanguageProvider from './providers/LanguageProvider';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </React.StrictMode>,
);