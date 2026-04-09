import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import CookieBanner from './components/CookieBanner';
import GoogleAnalyticsLoader from './components/GoogleAnalyticsLoader';
import { CookieConsentProvider } from './context/CookieConsentContext';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CookieConsentProvider>
      <App />
      <CookieBanner />
      <GoogleAnalyticsLoader />
    </CookieConsentProvider>
  </StrictMode>
);
