import { Store, Palette, CreditCard } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Store,
      title: '3D Reklame für Läden',
      description:
        'Auffällige 3D-Werbelösungen für Schaufenster, Innenräume und Fassaden mit starker Markenwirkung',
    },
    {
      icon: Palette,
      title: 'Individuell designte Webeprospekte für Läden',
      description:
        'Gestaltung von Speisekarten und Werbeprospekten, die Ihre Angebote klar präsentieren und Kunden direkt ansprechen',
    },
    {
      icon: CreditCard,
      title: 'Visitenkarten für Unternehmen',
      description:
        'Professionelle Gestaltung von Visitenkarten, passend zu Ihrer Marke und Ihrem Unternehmensauftritt',
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden py-32 bg-[#E86100]">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_-10%,rgba(255,255,255,0.04),transparent_55%),radial-gradient(ellipse_70%_50%_at_80%_60%,rgba(59,130,246,0.06),transparent_50%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[28rem] w-[min(90%,56rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(255,255,255,0.06),transparent)] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 text-xs font-medium tracking-[0.35em] text-white/35">
            LEISTUNGEN
          </div>
          <h2 className="mb-6 text-5xl font-thin tracking-tight text-white md:text-6xl">
            Unsere Expertise
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/55">
            Von der Konzeption bis zur Umsetzung – wir begleiten Sie auf jedem Schritt
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-7 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group relative"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-white/[0.14] via-white/[0.04] to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute -inset-px rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(400px_120px_at_50%_-20%,rgba(255,255,255,0.12),transparent)]" />

              <div
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0c0d12]/90 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-500 group-hover:border-white/[0.14] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_24px_64px_-16px_rgba(0,0,0,0.65)]"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
                <div className="absolute left-4 top-4 h-6 w-6 border-l border-t border-white/15 transition-colors group-hover:border-white/30" aria-hidden />
                <div className="absolute right-4 top-4 h-6 w-6 border-r border-t border-white/15 transition-colors group-hover:border-white/30" aria-hidden />
                <div className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-white/10 transition-colors group-hover:border-white/25" aria-hidden />
                <div className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-white/10 transition-colors group-hover:border-white/25" aria-hidden />

                <div className="absolute right-5 top-5 font-mono text-[10px] font-medium tabular-nums tracking-[0.2em] text-white/25 transition-colors group-hover:text-white/40">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="relative flex flex-1 flex-col p-8 pt-10">
                  <div className="mb-7 inline-flex w-fit rounded-lg bg-white/[0.04] p-3.5 ring-1 ring-white/10 transition-all duration-500 group-hover:bg-white/[0.07] group-hover:ring-white/25 group-hover:shadow-[0_0_32px_-8px_rgba(255,255,255,0.15)]">
                    <service.icon className="h-7 w-7 text-white/90 transition-transform duration-500 group-hover:scale-[1.03]" strokeWidth={1.25} />
                  </div>

                  <h3 className="mb-4 text-xl font-light leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-white md:text-[1.35rem]">
                    {service.title}
                  </h3>

                  <p className="flex-1 text-sm font-light leading-relaxed text-white/45 transition-colors duration-300 group-hover:text-white/65 md:text-[0.9375rem]">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.25em] text-white/30 transition-colors group-hover:text-white/50">
                    <span className="h-px w-6 bg-gradient-to-r from-white/40 to-transparent" />
                    Exklusive Umsetzung
                  </div>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
