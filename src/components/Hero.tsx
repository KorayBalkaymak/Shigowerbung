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
      className="relative flex min-h-screen items-center justify-center overflow-hidden py-16 md:py-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/akinhome.png')" }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/25 bg-black/50 px-6 py-9 text-center shadow-[0_12px_48px_rgba(0,0,0,0.45)] backdrop-blur-md sm:px-10 sm:py-10 md:rounded-3xl md:px-12 md:py-12">
          <h1 className="animate-fadeInUp text-3xl font-light tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.15] lg:text-6xl lg:leading-[1.1]">
            <span className="block [text-shadow:0_1px_2px_rgba(0,0,0,0.35)]">
              Werbung für Läden &amp; Unternehmen
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl animate-fadeInUp-delayed text-base font-light leading-[1.65] text-white/95 sm:text-lg md:mt-6 md:text-xl md:leading-relaxed">
            Hochwertige 3D-Reklame, Werbeprospekte und Visitenkarten – von Braunschweig aus für Marken, die im Kopf
            bleiben.
          </p>

          <div className="mt-9 flex justify-center md:mt-10">
            <button
              type="button"
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#e6d5bf] bg-[#F5E6D3] px-8 py-4 text-sm font-medium tracking-wide text-[#7a2b00] transition-all duration-300 hover:scale-105 hover:bg-[#ecdbc7] animate-fadeInUp-more-delayed"
            >
              <span className="relative z-10">Kontakt aufnehmen</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
