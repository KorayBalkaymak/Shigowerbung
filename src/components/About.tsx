const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-32 bg-black/95">
      <div className="pointer-events-none absolute -left-20 top-16 h-64 w-64 rounded-full bg-[#E86100]/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-12 h-72 w-72 rounded-full bg-[#F5E6D3]/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-3xl border border-[#F5E6D3]/20 bg-gradient-to-br from-[#1b0d04]/90 via-[#120904]/92 to-black/90 p-8 shadow-[0_30px_70px_-30px_rgba(0,0,0,0.9)] md:p-10">
          <div className="mb-4 text-xs font-semibold tracking-[0.35em] text-[#F5E6D3]/80">
            ÜBER UNS
          </div>
          <h2 className="text-4xl font-thin leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Werbung, die bleibt.</span>
            <span className="mt-2 block bg-gradient-to-r from-[#fff8ed] via-[#F5E6D3] to-[#ffd3a5] bg-clip-text text-transparent">
              Wirkung, die verkauft.
            </span>
          </h2>

          <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-white/85">
            <p>
              Wir entwickeln visuelle Auftritte, die nicht nur gut aussehen, sondern Kunden
              anziehen und Marken unverwechselbar machen.
            </p>
            <p>
              Von 3D-Reklame über Werbeprospekte bis zu Visitenkarten verbinden wir starke
              Gestaltung mit präziser Produktion und klarer Markenstrategie.
            </p>
            <p>
              Unser Fokus: Premium-Look, klare Botschaft und ein Auftritt, der im Kopf bleibt.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {[
              { value: '3D', label: 'Reklame' },
              { value: '360°', label: 'Branding' },
              { value: '100%', label: 'Premium' },
            ].map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-xl border border-[#F5E6D3]/25 bg-[#F5E6D3]/10 px-3 py-4 text-center"
              >
                <div className="text-xl font-semibold text-[#F5E6D3]">{kpi.value}</div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-white/70">{kpi.label}</div>
              </div>
            ))}
          </div>
        </article>

        <div className="space-y-4">
          {[
            {
              code: '01',
              title: 'Vertrauen & Sicherheit',
              text: 'Saubere Prozesse, klare Kommunikation und höchste Qualitätsstandards.',
            },
            {
              code: '02',
              title: 'Exzellente Ergebnisse',
              text: 'Design und Umsetzung mit Anspruch auf Premium-Qualität.',
            },
            {
              code: '03',
              title: 'Zukunftsorientiert',
              text: 'Moderne Lösungen für Marken, die langfristig wachsen wollen.',
            },
          ].map((item) => (
            <article
              key={item.code}
              className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#F5E6D3]/45 hover:bg-white/10"
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#F5E6D3] to-[#E86100]" />
              <div className="mb-3 inline-flex rounded-md border border-[#F5E6D3]/40 bg-[#F5E6D3]/15 px-2.5 py-1 font-mono text-[11px] tracking-[0.22em] text-[#F5E6D3]">
                {item.code}
              </div>
              <h3 className="mb-2 text-xl font-light text-white">{item.title}</h3>
              <p className="text-sm leading-relaxed text-white/80">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
