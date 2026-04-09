import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

export type CookiePreferences = {
  statistics: boolean;
  externalMedia: boolean;
};

type StoredConsent = CookiePreferences & { decidedAt: string; version: number };

const STORAGE_KEY = 'shigo_cookie_consent_v1';
const CONSENT_VERSION = 1;

const defaultPreferences = (): CookiePreferences => ({
  statistics: false,
  externalMedia: false,
});

function loadStored(): CookiePreferences | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredConsent;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      statistics: !!parsed.statistics,
      externalMedia: !!parsed.externalMedia,
    };
  } catch {
    return null;
  }
}

function persist(prefs: CookiePreferences) {
  const payload: StoredConsent = {
    ...prefs,
    version: CONSENT_VERSION,
    decidedAt: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

type CookieConsentContextValue = {
  preferences: CookiePreferences | null;
  hasDecided: boolean;
  bannerOpen: boolean;
  acceptAll: () => void;
  acceptNecessaryOnly: () => void;
  enableExternalMedia: () => void;
  openCookieSettings: () => void;
  closeBanner: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = loadStored();
    setPreferences(stored);
    setBannerOpen(stored === null);
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    const onHash = () => {
      if (window.location.hash === '#cookies') {
        setBannerOpen(true);
      }
    };
    onHash();
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, [hydrated]);

  const save = useCallback((prefs: CookiePreferences) => {
    persist(prefs);
    setPreferences(prefs);
    setBannerOpen(false);
    if (window.location.hash === '#cookies') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const acceptAll = useCallback(() => {
    save({ statistics: true, externalMedia: true });
  }, [save]);

  const acceptNecessaryOnly = useCallback(() => {
    save({ statistics: false, externalMedia: false });
  }, [save]);

  const enableExternalMedia = useCallback(() => {
    setPreferences((prev) => {
      const next: CookiePreferences = {
        statistics: prev?.statistics ?? false,
        externalMedia: true,
      };
      persist(next);
      return next;
    });
    setBannerOpen(false);
    if (window.location.hash === '#cookies') {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
  }, []);

  const openCookieSettings = useCallback(() => setBannerOpen(true), []);

  const closeBanner = useCallback(() => setBannerOpen(false), []);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      preferences,
      hasDecided: preferences !== null,
      bannerOpen,
      acceptAll,
      acceptNecessaryOnly,
      enableExternalMedia,
      openCookieSettings,
      closeBanner,
    }),
    [
      preferences,
      bannerOpen,
      acceptAll,
      acceptNecessaryOnly,
      enableExternalMedia,
      openCookieSettings,
      closeBanner,
    ]
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return ctx;
}

export function useCookieConsentSafe() {
  return useContext(CookieConsentContext);
}
