/** Zentrale Firmenadresse (Anzeige + Karte) */
export const SITE_ADDRESS = 'Im Remenfeld 1, 38104 Braunschweig';

/** Öffentliche Kontakt-E-Mail */
export const SITE_EMAIL = 'info@shigowerbung.de';
export const SITE_EMAIL_MAILTO = `mailto:${SITE_EMAIL}`;

/**
 * Google Maps Embed (Standard ohne API-Key).
 * Überschreiben via .env: VITE_GOOGLE_MAPS_EMBED_URL=…
 */
export const DEFAULT_GOOGLE_MAPS_EMBED_URL =
  'https://www.google.com/maps/embed?origin=mfe&pb=!1m2!2m1!1sIm+Remenfeld+1,+38104+Braunschweig';

export const GOOGLE_MAPS_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE_ADDRESS)}`;

/** Anzeige & Anruf (internationale Schreibweise) */
export const SITE_PHONE_DISPLAY = '+49 175 5692313';

/** tel:-Link */
export const SITE_PHONE_TEL = 'tel:+491755692313';

/** Nur Ziffern mit Ländervorwahl für wa.me */
const SITE_PHONE_E164_DIGITS = '491755692313';

/** Kurzer Profi-Text für den WhatsApp-Chat (vorausgefüllt) */
export const WHATSAPP_PREFILL_MESSAGE =
  'Guten Tag, ich möchte mich zu einem Werbeprojekt bei shigowerbung melden.';

/** Öffnet WhatsApp (App oder Web) mit vorausgefüllter Nachricht */
export const getWhatsAppChatUrl = () =>
  `https://wa.me/${SITE_PHONE_E164_DIGITS}?text=${encodeURIComponent(WHATSAPP_PREFILL_MESSAGE)}`;
