/** Zentrale Firmenadresse (Anzeige + Karte) */
export const SITE_ADDRESS = 'Im Remenfeld 1, 38104 Braunschweig';

/**
 * Google Maps Embed (Standard ohne API-Key).
 * Überschreiben via .env: VITE_GOOGLE_MAPS_EMBED_URL=…
 */
export const DEFAULT_GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sIm+Remenfeld+1,+38104+Braunschweig';

export const GOOGLE_MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS)}`;
