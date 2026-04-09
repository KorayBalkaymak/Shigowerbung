/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAPS_EMBED_URL?: string;
  /** Google Analytics 4 Measurement ID (z. B. G-XXXXXXXXXX), nur bei Einwilligung Statistik geladen */
  readonly VITE_GA_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
