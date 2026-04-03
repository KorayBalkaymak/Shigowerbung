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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-thin text-white mb-6 tracking-tight animate-fadeInUp">
          Digitale
          <span className="block mt-2 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Exzellenz
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 font-light mb-12 max-w-3xl mx-auto leading-relaxed animate-fadeInUp-delayed">
          Wir schaffen außergewöhnliche digitale Erlebnisse für zukunftsorientierte Unternehmen
        </p>

        <button
          onClick={scrollToContact}
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-light text-sm tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 animate-fadeInUp-more-delayed"
        >
          <span className="relative z-10">Kontakt aufnehmen</span>
          <ArrowRight className="relative z-10 w-4 h-4 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
