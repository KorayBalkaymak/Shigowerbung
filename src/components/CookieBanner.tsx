import { useCookieConsent } from '../context/CookieConsentContext';

const CookieBanner = () => {
  const {
    bannerOpen,
    acceptAll,
    acceptNecessaryOnly,
    closeBanner,
    hasDecided,
  } = useCookieConsent();

  if (!bannerOpen) return null;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-[#e6d5bf] bg-[#F5E6D3] px-4 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.18)] md:px-8 md:py-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-banner-title"
      aria-describedby="cookie-banner-desc"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0 flex-1">
          <h2 id="cookie-banner-title" className="text-base font-medium text-black md:text-lg">
            Cookies &amp; Datenschutz
          </h2>
          <p id="cookie-banner-desc" className="mt-2 text-sm font-light leading-relaxed text-black/75">
            Wir nutzen Cookies und ähnliche Techniken, um diese Website bereitzustellen (notwendig) sowie
            optional Statistik (z.&nbsp;B. Reichweitenmessung) und eingebettete Inhalte von Drittanbietern
            (z.&nbsp;B. Google Maps). Details finden Sie in unserer{' '}
            <a href="#datenschutz" className="underline decoration-black/30 underline-offset-2 hover:text-black">
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
          {hasDecided && (
            <button
              type="button"
              onClick={closeBanner}
              className="rounded-lg border border-black/15 bg-transparent px-4 py-2.5 text-sm font-light text-black/80 transition-colors hover:bg-black/[0.04]"
            >
              Schließen
            </button>
          )}
          <button
            type="button"
            onClick={acceptNecessaryOnly}
            className="rounded-lg border border-[#c9ae8a] bg-[#f9ecdd] px-4 py-2.5 text-sm font-light text-black/85 transition-colors hover:bg-[#fff4e8]"
          >
            Nur notwendige
          </button>
          <button
            type="button"
            onClick={acceptAll}
            className="rounded-lg bg-black/90 px-4 py-2.5 text-sm font-light text-[#F5E6D3] transition-colors hover:bg-black"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
