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
      className="relative flex min-h-screen items-center overflow-hidden bg-[#E86100] py-16 md:py-24"
    >
      <div className="absolute inset-0 bg-[#E86100]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-6 md:grid-cols-2 md:gap-14 lg:gap-16">
        <div className="order-2 flex flex-col justify-center text-center md:order-1 md:text-left">
          <h1 className="mb-6 max-w-4xl text-4xl font-thin tracking-tight text-white animate-fadeInUp sm:text-5xl md:mx-0 md:text-6xl md:leading-[1.12] lg:text-7xl">
            <span className="block text-white">Werbung für Läden &amp; Unternehmen</span>
          </h1>

          <p className="mb-10 max-w-3xl text-lg font-light leading-relaxed text-[#ffe7cf]/90 animate-fadeInUp-delayed md:mb-12 md:text-xl md:leading-relaxed">
            Hochwertige 3D-Reklame, Werbeprospekte und Visitenkarten – von Braunschweig aus für Marken, die im Kopf
            bleiben.
          </p>

          <div className="flex justify-center md:justify-start">
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

        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div className="relative w-full max-w-[min(100%,20rem)] sm:max-w-xs md:max-w-sm">
            <div className="absolute -inset-1 rounded-[1.35rem] bg-gradient-to-br from-white/25 via-white/5 to-transparent opacity-60 blur-sm" aria-hidden />
            <img
              src="/akinhome.png"
              alt="shigowerbung — Werbung und Design für Läden und Unternehmen"
              width={832}
              height={1248}
              className="relative w-full rounded-2xl border border-[#e6d5bf] bg-[#F5E6D3] object-cover shadow-[0_24px_64px_-16px_rgba(0,0,0,0.35)]"
              style={{ aspectRatio: '832 / 1248' }}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
