import { MapPin } from 'lucide-react';

/** Google Maps: Teilen → Karte einbetten → URL aus src="…" als VITE_GOOGLE_MAPS_EMBED_URL in .env */
const DEFAULT_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.9782808268586!2d13.377704315809742!3d52.516288279813844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851c655f20989%3A0x26bbfb4e84674c63!2sBrandenburger%20Tor!5e0!3m2!1sde!2sde!4v1709120400000!5m2!1sde!2sde';

type ContactMapProps = {
  /** Direkt unter dem Kontakt-Einleitungstext: nur Karte, ohne zweite große Überschrift */
  variant?: 'default' | 'under-intro';
};

const ContactMap = ({ variant = 'default' }: ContactMapProps) => {
  const src = import.meta.env.VITE_GOOGLE_MAPS_EMBED_URL || DEFAULT_EMBED;
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
        <h3 className="sr-only">Standort auf Google Maps</h3>
      ) : (
        <div className="text-center mb-6 md:mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-sm font-light text-white/40 tracking-widest mb-3">
            <MapPin className="w-4 h-4 text-white/50" aria-hidden />
            STANDORT
          </div>
          <h3 className="text-3xl md:text-4xl font-thin text-white tracking-tight">
            So finden Sie uns
          </h3>
          <p className="mt-3 text-sm text-white/45 font-light max-w-lg mx-auto px-2">
            Interaktive Wegbeschreibung — eigene Adresse über Google Maps einbetten und in den Projekteinstellungen hinterlegen.
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
