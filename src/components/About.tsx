import { Shield, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="text-sm font-light text-neutral-500 tracking-widest mb-4">
                ÜBER UNS
              </div>
              <h2 className="text-5xl md:text-6xl font-thin text-neutral-900 leading-tight">
                Perfektion
                <span className="block mt-2 text-neutral-600">trifft Innovation</span>
              </h2>
            </div>

            <p className="text-lg text-neutral-600 font-light leading-relaxed">
              Wir sind mehr als eine Agentur. Wir sind Partner für Unternehmen, die nach
              außergewöhnlichen digitalen Lösungen streben. Mit präziser Ausführung und
              kompromissloser Qualität verwandeln wir Visionen in Realität.
            </p>

            <div className="space-y-6 pt-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-neutral-100 rounded-lg border border-neutral-200 group-hover:bg-neutral-200/80 group-hover:border-neutral-300 transition-all">
                  <Shield className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-light text-lg mb-1">Vertrauen & Sicherheit</h3>
                  <p className="text-neutral-600 text-sm font-light">
                    Höchste Standards in Qualität und Datenschutz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-neutral-100 rounded-lg border border-neutral-200 group-hover:bg-neutral-200/80 group-hover:border-neutral-300 transition-all">
                  <Award className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-light text-lg mb-1">Exzellente Ergebnisse</h3>
                  <p className="text-neutral-600 text-sm font-light">
                    Messbare Resultate, die Ihre Erwartungen übertreffen
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-neutral-100 rounded-lg border border-neutral-200 group-hover:bg-neutral-200/80 group-hover:border-neutral-300 transition-all">
                  <Sparkles className="w-5 h-5 text-neutral-700" />
                </div>
                <div>
                  <h3 className="text-neutral-900 font-light text-lg mb-1">Zukunftsorientiert</h3>
                  <p className="text-neutral-600 text-sm font-light">
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
