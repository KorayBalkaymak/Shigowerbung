import { Shield, Award, Rocket } from 'lucide-react';

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

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">Vertrauen & Sicherheit</h3>
                  <p className="text-white/80 text-sm font-light">
                    Höchste Standards in Qualität und Datenschutz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">Exzellente Ergebnisse</h3>
                  <p className="text-white/80 text-sm font-light">
                    Messbare Resultate, die Ihre Erwartungen übertreffen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-white/10 rounded-lg border border-white/20 group-hover:bg-white/15 group-hover:border-white/30 transition-all">
                  <Rocket className="w-5 h-5 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">Zukunftsorientiert</h3>
                  <p className="text-white/80 text-sm font-light">
                    Modernste Technologien für nachhaltigen Erfolg
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
