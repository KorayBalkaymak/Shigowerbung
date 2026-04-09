import { useEffect, useRef } from 'react';
import { useCookieConsentSafe } from '../context/CookieConsentContext';

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

/**
 * Lädt Google Analytics (gtag.js) nur nach Einwilligung in Statistik.
 * In Vercel: VITE_GA_MEASUREMENT_ID=z. B. G-XXXXXXXXXX setzen.
 */
const GoogleAnalyticsLoader = () => {
  const consent = useCookieConsentSafe();
  const loadedIdRef = useRef<string | null>(null);
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!measurementId || !consent?.preferences?.statistics) return;
    if (loadedIdRef.current === measurementId) return;
    if (document.querySelector(`script[src*="gtag/js?id=${measurementId}"]`)) {
      loadedIdRef.current = measurementId;
      return;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      const gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
      (window as unknown as { gtag: typeof gtag }).gtag = gtag;
      gtag('js', new Date());
      gtag('config', measurementId);
      loadedIdRef.current = measurementId;
    };
    document.head.appendChild(script);
  }, [consent?.preferences?.statistics, measurementId]);

  return null;
};

export default GoogleAnalyticsLoader;
