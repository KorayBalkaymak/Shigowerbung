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

            <div className="space-y-4 pt-8">
              {[
                {
                  title: 'Vertrauen & Sicherheit',
                  text: 'Höchste Standards in Qualität und Datenschutz',
                },
                {
                  title: 'Exzellente Ergebnisse',
                  text: 'Messbare Resultate, die Ihre Erwartungen übertreffen',
                },
                {
                  title: 'Zukunftsorientiert',
                  text: 'Modernste Technologien für nachhaltigen Erfolg',
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-[#ddc8ad] bg-[#F5E6D3] p-5 pl-6 text-[#2b1a0d] shadow-[0_10px_26px_-14px_rgba(0,0,0,0.55)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-22px_rgba(0,0,0,0.6)]"
                >
                  <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#E86100] to-[#a93f00]" />
                  <h3 className="mb-1 text-lg font-semibold leading-snug text-[#2b1a0d]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4a2e1a]/90">{item.text}</p>
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
