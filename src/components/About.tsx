import type { LucideIcon } from 'lucide-react';
import { Shield, Award, Sparkles } from 'lucide-react';

const features: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Shield,
    title: 'Vertrauen & Sicherheit',
    description: 'Höchste Standards in Qualität und Datenschutz',
  },
  {
    icon: Award,
    title: 'Exzellente Ergebnisse',
    description: 'Messbare Resultate, die Ihre Erwartungen übertreffen',
  },
  {
    icon: Sparkles,
    title: 'Zukunftsorientiert',
    description: 'Modernste Technologien für nachhaltigen Erfolg',
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="mb-4 text-sm font-light tracking-widest text-neutral-500">ÜBER UNS</div>
              <h2 className="text-4xl font-thin leading-tight text-neutral-900 sm:text-5xl md:text-6xl">
                <span className="block sm:inline">Werbung, die bleibt</span>
                <span className="hidden px-1 font-light text-neutral-400 sm:inline">·</span>
                <span className="mt-1 block text-neutral-600 sm:mt-0 sm:inline">Qualität, die zählt</span>
              </h2>
            </div>

            <div className="space-y-5 text-lg font-light leading-relaxed text-neutral-600">
              <p>
                Wir sind spezialisiert auf hochwertige Werbelösungen für Unternehmen, die sichtbar
                herausstechen wollen.
              </p>
              <p>
                Von auffälliger 3D-Reklame für Schaufenster und Fassaden über individuell gestaltete
                Werbeprospekte bis hin zu professionellen Visitenkarten – wir verbinden kreatives
                Design mit präziser Umsetzung.
              </p>
              <p>
                Unser Anspruch ist es, Marken visuell zu stärken, Aufmerksamkeit zu erzeugen und einen
                bleibenden Eindruck bei Ihren Kunden zu hinterlassen.
              </p>
            </div>

            <div className="space-y-7 pt-8">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div key={title} className="group flex items-start gap-5">
                  <div className="relative shrink-0">
                    {/* Äußerer Elite-Lichtkranz */}
                    <div
                      className="pointer-events-none absolute -inset-4 rounded-[1.35rem] bg-gradient-to-br from-amber-400/35 via-amber-500/15 to-sky-400/30 blur-2xl animate-elite-glow-ring"
                      style={{ animationDelay: `${index * 0.55}s` }}
                      aria-hidden
                    />
                    {/* Animierter Gold/Cyan-Rand */}
                    <div
                      className="relative rounded-xl p-[1.5px] shadow-[0_12px_40px_-16px_rgba(0,0,0,0.75)] animate-elite-shimmer-sweep bg-gradient-to-br from-amber-400/55 via-slate-600/50 to-sky-500/45 transition-all duration-500 group-hover:from-amber-300/70 group-hover:via-amber-500/40 group-hover:to-sky-400/55"
                      style={{ animationDelay: `${index * 0.4}s` }}
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-[10px] border border-white/5 bg-gradient-to-br from-slate-900 via-slate-950 to-black shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_8px_32px_-12px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_0_36px_-8px_rgba(251,191,36,0.35)]">
                        <Icon
                          className="relative z-10 h-7 w-7 text-amber-400 animate-elite-icon-breathe motion-reduce:animate-none motion-reduce:opacity-100 motion-reduce:drop-shadow-[0_0_14px_rgba(251,191,36,0.5)]"
                          style={{ animationDelay: `${index * 0.45}s` }}
                          strokeWidth={1.35}
                          aria-hidden
                        />
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="mb-1 text-lg font-light text-neutral-900">{title}</h3>
                    <p className="text-sm font-light text-neutral-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
