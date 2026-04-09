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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#ff7a00]"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffb347] via-[#ff7a00] to-[#c44700]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_45%,rgba(255,247,231,0.42),transparent_52%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-100/35 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="mb-6 max-w-4xl mx-auto text-4xl font-thin tracking-tight text-white animate-fadeInUp sm:text-5xl md:text-6xl md:leading-[1.12] lg:text-7xl">
          <span className="block bg-gradient-to-r from-white via-amber-50 to-orange-100 bg-clip-text text-transparent">
            Werbung für Läden &amp; Unternehmen
          </span>
        </h1>

        <p className="mb-12 max-w-3xl mx-auto text-lg font-light leading-relaxed text-white/90 animate-fadeInUp-delayed md:text-xl md:leading-relaxed">
          Hochwertige 3D-Reklame, Werbeprospekte und Visitenkarten – von Braunschweig aus für Marken, die im Kopf
          bleiben.
        </p>

        <button
          onClick={scrollToContact}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-[#a53a00] font-medium text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 animate-fadeInUp-more-delayed"
        >
          <span className="relative z-10">Kontakt aufnehmen</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
