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
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#E86100]/80 via-[#E86100]/70 to-[#c74e00]/85"
        aria-hidden
      />
      <div className="absolute inset-0 bg-black/25" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <h1 className="mb-6 max-w-4xl mx-auto text-4xl font-thin tracking-tight text-white drop-shadow-sm animate-fadeInUp sm:text-5xl md:text-6xl md:leading-[1.12] lg:text-7xl">
          <span className="block text-white">Werbung für Läden &amp; Unternehmen</span>
        </h1>

        <p className="mb-12 max-w-3xl mx-auto text-lg font-light leading-relaxed text-[#ffe7cf]/95 animate-fadeInUp-delayed md:text-xl md:leading-relaxed drop-shadow-sm">
          Hochwertige 3D-Reklame, Werbeprospekte und Visitenkarten – von Braunschweig aus für Marken, die im Kopf
          bleiben.
        </p>

        <button
          type="button"
          onClick={scrollToContact}
          className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#e6d5bf] bg-[#F5E6D3] px-8 py-4 text-sm font-medium tracking-wide text-[#7a2b00] transition-all duration-300 hover:scale-105 hover:bg-[#ecdbc7] animate-fadeInUp-more-delayed"
        >
          <span className="relative z-10">Kontakt aufnehmen</span>
          <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
