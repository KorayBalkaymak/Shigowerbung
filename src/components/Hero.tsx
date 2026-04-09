import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#E86100]"
    >
      <div className="absolute inset-0 bg-[#E86100]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,236,209,0.45),transparent_40%),radial-gradient(circle_at_82%_78%,rgba(86,22,0,0.42),transparent_40%)]" />
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#ffcf97]/50 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-28 bottom-16 h-[22rem] w-[22rem] rounded-full bg-[#6e2400]/35 blur-3xl animate-float-slow-delayed" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0.08)_45%,rgba(255,255,255,0)_60%)] bg-[length:220%_220%] animate-pan-shimmer" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#ffd2a6]/40 bg-gradient-to-br from-[#220c00]/55 via-[#381100]/45 to-[#200900]/55 p-8 shadow-[0_35px_90px_-28px_rgba(32,6,0,0.85)] backdrop-blur-sm md:p-12">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#ffd7ae]/40 bg-[#f5e6d3]/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-[#ffe8cb]">
            Elite Branding Studio
          </div>

          <h1 className="mb-6 text-center text-4xl font-extralight tracking-tight text-white animate-fadeInUp sm:text-5xl md:text-6xl md:leading-[1.08] lg:text-7xl">
            <span className="block bg-gradient-to-r from-white via-[#ffe4bf] to-[#ffd0a1] bg-clip-text text-transparent">
              Werbung für Läden &amp; Unternehmen
            </span>
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-center text-lg font-light leading-relaxed text-[#ffe6c7]/95 animate-fadeInUp-delayed md:text-xl">
            Premium 3D-Reklame, Werbeprospekte und Visitenkarten mit maximaler Präsenz.
            Für Marken in Braunschweig, die sofort auffallen und in Erinnerung bleiben.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row animate-fadeInUp-more-delayed">
            <button
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl border border-[#e6d5bf] bg-[#F5E6D3] px-8 py-4 text-sm font-semibold tracking-wide text-[#7a2b00] transition-all duration-300 hover:scale-105 hover:bg-[#ecdbc7] hover:shadow-[0_18px_46px_-18px_rgba(255,229,191,0.95)]"
            >
              <span className="relative z-10">Kontakt aufnehmen</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <span className="rounded-full border border-[#ffd3a9]/40 bg-black/25 px-4 py-2 text-xs font-medium tracking-[0.15em] text-[#ffe3c1]">
              WOW-EFFEKT GARANTIERT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
