const About = () => {
  return (
    <section id="about" className="relative py-32 bg-black/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="text-sm font-light text-white/70 tracking-widest mb-4">
                ÜBER UNS
              </div>
              <h2 className="text-4xl font-thin leading-tight text-white sm:text-5xl md:text-6xl">
                <span className="block sm:inline">Werbung, die bleibt</span>
                <span className="hidden px-1 font-light text-white/70 sm:inline">·</span>
                <span className="mt-1 block text-white/90 sm:mt-0 sm:inline">
                  Qualität, die zählt
                </span>
              </h2>
            </div>

            <div className="space-y-5 text-lg text-white/85 font-light leading-relaxed">
              <p>
                Wir sind spezialisiert auf hochwertige Werbelösungen für Unternehmen, die
                sichtbar herausstechen wollen.
              </p>
              <p>
                Von auffälliger 3D-Reklame für Schaufenster und Fassaden über individuell
                gestaltete Werbeprospekte bis hin zu professionellen Visitenkarten – wir
                verbinden kreatives Design mit präziser Umsetzung.
              </p>
              <p>
                Unser Anspruch ist es, Marken visuell zu stärken, Aufmerksamkeit zu erzeugen
                und einen bleibenden Eindruck bei Ihren Kunden zu hinterlassen.
              </p>
            </div>

            <div className="grid gap-4 pt-8 md:grid-cols-3">
              {[
                {
                  code: '01',
                  title: 'Vertrauen & Sicherheit',
                  text: 'Höchste Standards in Qualität und Datenschutz',
                },
                {
                  code: '02',
                  title: 'Exzellente Ergebnisse',
                  text: 'Messbare Resultate, die Ihre Erwartungen übertreffen',
                },
                {
                  code: '03',
                  title: 'Zukunftsorientiert',
                  text: 'Modernste Technologien für nachhaltigen Erfolg',
                },
              ].map((item) => (
                <article
                  key={item.code}
                  className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:border-white/35"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#F5E6D3]/60 to-transparent opacity-70" />
                  <div className="mb-4 inline-flex rounded-lg border border-[#F5E6D3]/50 bg-[#F5E6D3]/20 px-3 py-1 font-mono text-xs tracking-[0.25em] text-[#F5E6D3]">
                    {item.code}
                  </div>
                  <h3 className="mb-2 text-white font-light text-lg leading-snug">{item.title}</h3>
                  <p className="text-white/80 text-sm font-light leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
