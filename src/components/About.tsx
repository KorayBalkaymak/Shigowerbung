import { Shield, Award, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-black/95 py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(232,97,0,0.26),transparent_42%),radial-gradient(circle_at_85%_75%,rgba(245,230,211,0.12),transparent_35%)]" />
      <div className="pointer-events-none absolute -left-16 top-20 h-72 w-72 rounded-full bg-[#E86100]/20 blur-3xl animate-float-slow" />
      <div className="pointer-events-none absolute -right-20 bottom-14 h-80 w-80 rounded-full bg-[#F5E6D3]/15 blur-3xl animate-float-slow-delayed" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-3xl border border-[#ffd7ae]/25 bg-gradient-to-br from-[#1a0a01]/80 via-[#2a0d01]/68 to-[#130601]/80 p-8 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-10">
            <div className="mb-4 text-xs font-medium tracking-[0.35em] text-[#ffd7ae]">
              ÜBER UNS
            </div>
            <h2 className="text-4xl font-thin leading-tight text-white sm:text-5xl md:text-6xl">
              <span className="block sm:inline">Werbung, die bleibt</span>
              <span className="hidden px-1 font-light text-[#ffd7ae]/70 sm:inline">·</span>
              <span className="mt-1 block bg-gradient-to-r from-white via-[#ffe1bf] to-[#ffbf86] bg-clip-text text-transparent sm:mt-0 sm:inline">
                Qualität, die zählt
              </span>
            </h2>

            <div className="mt-8 space-y-5 text-lg font-light leading-relaxed text-white/85">
              <p>
                Wir sind spezialisiert auf Werbelösungen mit Premium-Optik für Unternehmen, die
                sofort sichtbar herausstechen wollen.
              </p>
              <p>
                Von 3D-Reklame für Schaufenster und Fassaden über individuell gestaltete
                Werbeprospekte bis zu hochwertigen Visitenkarten verbinden wir kreative Ideen mit
                präziser Umsetzung.
              </p>
              <p>
                Unser Anspruch: Marken visuell stärken, Aufmerksamkeit erzeugen und einen
                nachhaltigen Eindruck bei Ihren Kunden hinterlassen.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                title: 'Vertrauen & Sicherheit',
                text: 'Höchste Standards in Qualität, Verlässlichkeit und Datenschutz.',
                Icon: Shield,
              },
              {
                title: 'Exzellente Ergebnisse',
                text: 'Design und Umsetzung auf Premium-Niveau für sichtbare Wirkung.',
                Icon: Award,
              },
              {
                title: 'Zukunftsorientiert',
                text: 'Moderne Techniken und mutige Konzepte für starke Markenauftritte.',
                Icon: Rocket,
              },
            ].map(({ title, text, Icon }) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-2xl border border-[#ffd3a9]/20 bg-gradient-to-br from-[#150701]/90 via-[#220b01]/75 to-[#130601]/90 p-6 shadow-[0_16px_45px_-24px_rgba(0,0,0,0.85)] transition-all duration-300 hover:-translate-y-1 hover:border-[#ffd3a9]/45"
              >
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0)_35%,rgba(255,255,255,0.08)_48%,rgba(255,255,255,0)_62%)] bg-[length:220%_220%] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-pan-shimmer" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="rounded-xl border border-[#ffd7ae]/25 bg-[#F5E6D3]/10 p-3 transition-all duration-300 group-hover:bg-[#F5E6D3]/20">
                    <Icon className="h-5 w-5 text-[#ffdcb7]" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-light text-white">{title}</h3>
                    <p className="text-sm font-light text-white/80">{text}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
