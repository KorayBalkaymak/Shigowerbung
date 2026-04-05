import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Hammer, Trophy } from 'lucide-react';

const TRUNK_MS = 1200;
const BRANCH_BASE_MS = 480;
const BRANCH_STAGGER_MS = 200;
const STEP_STAGGER_MS = 110;

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [linesActive, setLinesActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setLinesActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLinesActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Analyse',
      description: 'Wir analysieren Ihre Anforderungen und verstehen Ihre Ziele im Detail',
    },
    {
      icon: Lightbulb,
      number: '02',
      title: 'Strategie',
      description: 'Entwicklung einer maßgeschneiderten Strategie für optimale Resultate',
    },
    {
      icon: Hammer,
      number: '03',
      title: 'Umsetzung',
      description: 'Präzise Implementierung mit höchster Qualität und Liebe zum Detail',
    },
    {
      icon: Trophy,
      number: '04',
      title: 'Ergebnis',
      description: 'Lieferung eines außergewöhnlichen Produkts, das Ihre Erwartungen übertrifft',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 w-full overflow-visible py-28 md:py-36"
      style={{
        backgroundColor: '#ffffff',
        backgroundImage:
          'linear-gradient(180deg, #ffffff 0%, rgb(252, 254, 255) 44%, #ffffff 100%)',
      }}
    >
      {/* Hochglanz-Reflex (nur kühles Weiß, kein Grau) */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_115%_65%_at_50%_-12%,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_58%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center md:mb-24">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-neutral-400/60" aria-hidden />
            <span className="text-[11px] font-semibold uppercase tracking-[0.4em] text-neutral-400">
              ABLAUF
            </span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-neutral-400/60" aria-hidden />
          </div>
          <h2 className="mb-5 bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-3xl font-extralight tracking-tight text-transparent sm:text-4xl md:text-5xl md:leading-[1.12] lg:text-6xl lg:leading-[1.08]">
            Transparenter Ablauf für 3D-Reklame, Drucksachen und Markenauftritt
          </h2>
          <p className="mx-auto max-w-2xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">
            Vier klare Schritte von der Analyse bis zum Ergebnis – partnerschaftlich begleitet für Läden und
            Unternehmen in Braunschweig und Umgebung.
          </p>
        </div>

        <div className="relative">
          {/* Hauptlinie — zeichnet sich ein (lg) */}
          <div
            className="pointer-events-none absolute left-[6%] right-[6%] top-1/2 hidden h-[2px] -translate-y-1/2 overflow-hidden lg:block"
            aria-hidden
          >
            <div
              className="h-full w-full bg-gradient-to-r from-transparent via-neutral-900/35 to-transparent shadow-[0_0_24px_rgba(15,23,42,0.12)] will-change-transform transition-[transform] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: linesActive ? 'translateX(0)' : 'translateX(-100%)',
                transitionDuration: `${TRUNK_MS}ms`,
              }}
            />
          </div>

          <div className="grid max-md:gap-0 md:grid-cols-2 md:gap-x-6 md:gap-y-16 lg:grid-cols-4 lg:gap-10 lg:items-start">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative min-w-0 max-md:[&:not(:last-child)]:mb-6 max-md:[&:not(:last-child)]:pb-6"
              >
                <div
                  className="relative z-10 mx-auto w-full max-w-[min(100%,288px)] will-change-transform"
                  style={{
                    opacity: linesActive ? 1 : 0,
                    transform: linesActive
                      ? 'translateY(0) scale(1)'
                      : 'translateY(28px) scale(0.94)',
                    transition:
                      'opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
                    transitionDelay: linesActive ? `${180 + index * STEP_STAGGER_MS}ms` : '0ms',
                  }}
                >
                  {/* Nur Kreis + Ringe — ohne Verbindungslinie, sonst werden die Ringe zur hohen Ellipse (nur Schritt 4 wirkte „flach“). */}
                  <div className="relative mx-auto mb-1 w-full max-w-[min(100%,288px)]">
                    {/* Hologram-Boden — weich maskiert, ohne kastige Raster-Linien */}
                    <div
                      className="pointer-events-none absolute left-1/2 top-[76%] z-0 h-[38%] w-[93%] -translate-x-1/2 overflow-hidden rounded-[100%] shadow-[0_28px_56px_-16px_rgba(23,37,84,0.45),0_0_60px_-8px_rgba(59,130,246,0.32)] [mask-image:radial-gradient(ellipse_95%_100%_at_50%_18%,#000_52%,transparent_78%)]"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#071018] via-[#020617] to-[#010409]" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_85%_at_50%_0%,rgba(37,99,235,0.35),transparent_68%)] opacity-90" />
                      <div
                        className="absolute -inset-[30%] animate-hologram-sweep opacity-[0.28] blur-[0.35px]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(96,165,250,0.14) 6px, rgba(96,165,250,0.14) 7px)',
                        }}
                      />
                      <div className="absolute inset-0 animate-hologram-pulse bg-[radial-gradient(ellipse_95%_75%_at_50%_5%,rgba(59,130,246,0.42),transparent_66%)]" />
                      <div
                        className="absolute inset-0 animate-hologram-shimmer opacity-[0.42] mix-blend-screen"
                        style={{
                          backgroundImage:
                            'linear-gradient(118deg, transparent 0%, rgba(56,189,248,0.12) 32%, transparent 54%, rgba(129,140,248,0.1) 76%, transparent 100%)',
                          backgroundSize: '220% 220%',
                        }}
                      />
                      <div className="absolute inset-0 bg-[conic-gradient(from_200deg_at_50%_120%,transparent_0deg,rgba(56,189,248,0.08)_38deg,transparent_78deg)] opacity-70" />
                      <div className="absolute inset-x-0 bottom-0 top-[58%] bg-gradient-to-t from-blue-600/28 via-blue-900/5 to-transparent" />
                      <div className="absolute bottom-0.5 left-1/2 h-[46%] w-[1.5px] max-w-full -translate-x-1/2 bg-gradient-to-t from-sky-300/55 via-blue-500/35 to-transparent blur-[1px]" />
                      <div className="absolute bottom-1.5 left-1/2 h-3 w-[5rem] max-w-[78%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-sky-400/35 to-transparent blur-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/[0.03]" />
                    </div>
                    {/* Außenringe — leicht ins Blau gezogen, zum Hologram-Boden */}
                    <div className="pointer-events-none absolute -inset-[2px] z-[1] rounded-full bg-gradient-to-br from-slate-950 via-[#0c1826] to-blue-950 opacity-[0.97] shadow-[inset_0_1px_0_0_rgba(147,197,253,0.16)]" />
                    <div className="pointer-events-none absolute -inset-[5px] z-[1] rounded-full bg-gradient-to-br from-blue-400/[0.09] via-transparent to-slate-950/55 blur-md opacity-90" />

                    <div
                      className="relative z-10 mx-auto flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-full border border-white/95 bg-gradient-to-b from-white via-neutral-50/98 to-[#f4f7fb] px-5 py-6 text-center shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_24px_48px_-12px_rgba(15,23,42,0.1),0_0_0_1px_rgba(255,255,255,0.85),inset_0_1px_0_0_rgba(255,255,255,0.98)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white group-hover:shadow-[0_8px_30px_-8px_rgba(30,58,138,0.12),0_32px_64px_-20px_rgba(15,23,42,0.14)] md:px-6"
                    >
                      <div
                        className="pointer-events-none absolute inset-0 rounded-full opacity-[0.65]"
                        style={{
                          background:
                            'radial-gradient(circle at 35% 12%, rgba(255,255,255,0.98), transparent 46%)',
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-full opacity-[0.35]"
                        style={{
                          background:
                            'radial-gradient(ellipse 85% 55% at 50% 100%, rgba(219,234,254,0.35), transparent 52%)',
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-[1px] rounded-full border border-white/85"
                        aria-hidden
                      />

                      <span className="absolute right-4 top-4 font-mono text-[10px] font-semibold tabular-nums tracking-[0.3em] text-neutral-300 transition-colors group-hover:text-neutral-400">
                        {step.number}
                      </span>

                      <div className="relative z-10 mb-3.5 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200/75 bg-white/95 shadow-[0_8px_24px_-6px_rgba(30,58,138,0.1)] transition-all duration-500 group-hover:border-blue-200/60 group-hover:shadow-[0_12px_32px_-8px_rgba(37,99,235,0.15)]">
                        <step.icon className="h-7 w-7 text-neutral-800" strokeWidth={1.15} />
                      </div>

                      <h3 className="relative z-10 mb-2 text-lg font-light tracking-tight text-neutral-900 md:text-xl">
                        {step.title}
                      </h3>

                      <p className="relative z-10 max-w-[13.5rem] text-[0.8125rem] font-light leading-relaxed text-neutral-500 md:text-sm">
                        {step.description}
                      </p>

                      <div className="pointer-events-none absolute inset-x-12 bottom-5 h-px bg-gradient-to-r from-transparent via-neutral-300/60 to-transparent opacity-60" />
                    </div>
                  </div>

                  {/* Vertikale Verbindung — mobil / tablet */}
                  {index < steps.length - 1 && (
                    <div
                      className="flex justify-center pb-1 pt-5 lg:hidden pointer-events-none"
                      aria-hidden
                    >
                      <div className="h-12 w-[3px] overflow-hidden rounded-full bg-neutral-200/50">
                        <div
                          className="h-full w-full origin-top bg-gradient-to-b from-neutral-800 via-neutral-600 to-neutral-400 shadow-[0_0_16px_rgba(15,23,42,0.15)] will-change-transform transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{
                            transform: linesActive ? 'scaleY(1)' : 'scaleY(0)',
                            transitionDuration: '620ms',
                            transitionDelay: linesActive ? `${340 + index * 130}ms` : '0ms',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Horizontale Verbindung — lg */}
                {index < steps.length - 1 && (
                  <div
                    className="absolute top-1/2 z-10 hidden w-[calc(1.35rem+0.75rem)] -translate-y-1/2 items-center overflow-hidden lg:flex -right-[1.35rem]"
                    aria-hidden
                  >
                    <div
                      className="flex w-full shrink-0 items-center will-change-transform transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        transform: linesActive ? 'translateX(0)' : 'translateX(-100%)',
                        transitionDuration: '680ms',
                        transitionDelay: linesActive
                          ? `${BRANCH_BASE_MS + index * BRANCH_STAGGER_MS}ms`
                          : '0ms',
                      }}
                    >
                      <div className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-neutral-800/90 via-neutral-500/70 to-neutral-400/50 shadow-[0_0_12px_rgba(15,23,42,0.12)]" />
                      <div className="ml-0.5 h-2.5 w-2.5 shrink-0 rounded-full border border-neutral-300 bg-neutral-900 shadow-[0_0_0_3px_rgba(255,255,255,0.9),0_0_20px_rgba(15,23,42,0.2)] transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
