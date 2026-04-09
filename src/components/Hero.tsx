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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#2a0f02]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#221007] via-[#5f2400] to-[#a63d00]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_45%,rgba(255,188,112,0.34),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,156,74,0.18),transparent_32%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(255,207,140,0.16),transparent_30%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.05)_55%,rgba(255,255,255,0)_75%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-amber-200/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[24rem] h-[24rem] bg-orange-200/20 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="mb-6 max-w-4xl mx-auto text-4xl font-thin tracking-tight text-white animate-fadeInUp sm:text-5xl md:text-6xl md:leading-[1.12] lg:text-7xl">
          <span className="block bg-gradient-to-r from-[#fff7e9] via-[#ffd39f] to-[#ffb16a] bg-clip-text text-transparent">
            Werbung für Läden &amp; Unternehmen
          </span>
        </h1>

        <p className="mb-12 max-w-3xl mx-auto text-lg font-light leading-relaxed text-[#ffe7cf]/90 animate-fadeInUp-delayed md:text-xl md:leading-relaxed">
          Hochwertige 3D-Reklame, Werbeprospekte und Visitenkarten – von Braunschweig aus für Marken, die im Kopf
          bleiben.
        </p>

        <button
          onClick={scrollToContact}
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#ffd8ab]/50 bg-gradient-to-r from-[#fff0de] to-[#ffd9b0] px-8 py-4 text-sm font-medium tracking-wide text-[#7a2b00] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_38px_-14px_rgba(255,173,92,0.7)] animate-fadeInUp-more-delayed"
        >
          <span className="relative z-10">Kontakt aufnehmen</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fff7ed] to-[#ffe7cc] opacity-0 transition-opacity group-hover:opacity-100"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
