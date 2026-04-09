import { MapPin } from 'lucide-react';
import { DEFAULT_GOOGLE_MAPS_EMBED_URL, SITE_ADDRESS } from '../config/site';

type ContactMapProps = {
  /** Direkt unter dem Kontakt-Einleitungstext: nur Karte, ohne zweite große Überschrift */
  variant?: 'default' | 'under-intro';
};

const ContactMap = ({ variant = 'default' }: ContactMapProps) => {
  const src = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || DEFAULT_GOOGLE_MAPS_EMBED_URL;
  const underIntro = variant === 'under-intro';

  return (
    <div
      className={
        underIntro
          ? 'w-full max-w-6xl mx-auto'
          : 'mt-16 md:mt-24 w-full max-w-6xl mx-auto'
      }
    >
      {underIntro ? (
        <h3 className="sr-only">Standort {SITE_ADDRESS} auf Google Maps</h3>
      ) : (
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-sm font-light text-white tracking-widest mb-3">
            <MapPin className="h-4 w-4 text-white" aria-hidden />
            STANDORT
          </div>
          <h3 className="text-3xl md:text-4xl font-thin text-white tracking-tight">
            So finden Sie uns
          </h3>
          <p className="mt-3 text-sm text-white/45 font-light max-w-lg mx-auto px-2">
            {SITE_ADDRESS}
          </p>
        </div>
      )}

      <div className="relative group">
        <div
          className="pointer-events-none absolute -inset-3 rounded-[1.35rem] bg-white/[0.07] blur-2xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 animate-map-glow"
          aria-hidden
        />

        <div className="relative rounded-xl md:rounded-2xl p-px bg-gradient-to-r from-white/35 via-white/[0.12] to-white/35 bg-[length:220%_100%] animate-map-border-shift shadow-[0_0_40px_-8px_rgba(255,255,255,0.12)]">
          <div className="relative rounded-[0.65rem] md:rounded-[0.95rem] border border-white/20 md:border-white/[0.06] bg-black overflow-hidden">
            <div
              className="pointer-events-none absolute inset-0 z-[1] rounded-[0.65rem] md:rounded-[0.95rem] ring-1 ring-inset ring-white/25 md:ring-white/10"
              aria-hidden
            />

            <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden rounded-[0.65rem] md:rounded-[0.95rem]">
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-map-scan" />
            </div>

            <div
              className="pointer-events-none absolute inset-0 z-[2] opacity-[0.11] mix-blend-overlay rounded-[0.65rem] md:rounded-[0.95rem] bg-[repeating-linear-gradient(0deg,transparent,transparent_1px,rgba(255,255,255,0.07)_1px,rgba(255,255,255,0.07)_2px)]"
              aria-hidden
            />

            <iframe
              title="Standort auf Google Maps"
              src={src}
              className="relative z-0 block w-full h-[min(14rem,42vh)] min-h-[14rem] md:h-[min(26rem,55vh)] md:min-h-[16rem] border-0 grayscale-[0.35] contrast-[1.08] brightness-[0.88] saturate-[0.85] transition-[filter,transform] duration-700 ease-out group-hover:grayscale-[0.15] group-hover:brightness-[0.96] md:group-hover:scale-[1.008]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMap;
