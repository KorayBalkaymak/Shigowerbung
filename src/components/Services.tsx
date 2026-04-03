import { Store, Palette, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Store,
      title: '3D Reklame für Läden',
      description: 'Auffällige 3D-Werbelösungen für Schaufenster, Innenräume und Fassaden mit starker Markenwirkung',
    },
    {
      icon: Palette,
      title: 'Individuell designte Webeprospekte für Läden',
      description: 'Gestaltung von Speisekarten und Werbeprospekten, die Ihre Angebote klar präsentieren und Kunden direkt ansprechen',
    },
    {
      icon: CreditCard,
      title: 'Visitenkarten für Unternehmen',
      description: 'Professionelle Gestaltung von Visitenkarten, passend zu Ihrer Marke und Ihrem Unternehmensauftritt',
    },
  ];

  return (
    <section id="services" className="relative py-32 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="text-sm font-light text-white/40 tracking-widest mb-4">
            LEISTUNGEN
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
            Unsere Expertise
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Von der Konzeption bis zur Umsetzung – wir begleiten Sie auf jedem Schritt
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

              <div className="relative">
                <div className="inline-flex p-4 bg-white/5 rounded-xl mb-6 group-hover:bg-white/10 transition-colors">
                  <service.icon className="w-8 h-8 text-white/80" />
                </div>

                <h3 className="text-2xl font-light text-white mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/50 font-light leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
