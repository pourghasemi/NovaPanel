import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './config/i18n';

import App from './App';
import { store } from './store';

import ThemeProvider from './providers/ThemeProvider';
import LanguageProvider from './providers/LanguageProvider';
import AuthProvider from './providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <LanguageProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
);