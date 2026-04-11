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
      className="relative z-10 w-full overflow-visible py-28 md:py-36 bg-black/95"
    >
      {/* Dezenter Reflex auf schwarzem Hintergrund */}
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_115%_65%_at_50%_-12%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_58%)]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <div className="mb-4 text-xs font-medium tracking-[0.35em] text-white">ABLAUF</div>
          <h2 className="mb-6 text-5xl font-thin tracking-tight text-white md:text-6xl">
            Transparenter Ablauf für 3D-Reklame, Drucksachen und Markenauftritt
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-light leading-relaxed text-white/55">
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
                      className="pointer-events-none absolute left-1/2 top-[76%] z-0 h-[38%] w-[93%] -translate-x-1/2 overflow-hidden rounded-[100%] shadow-[0_28px_56px_-16px_rgba(146,64,14,0.45),0_0_60px_-8px_rgba(234,88,12,0.32)] [mask-image:radial-gradient(ellipse_95%_100%_at_50%_18%,#000_52%,transparent_78%)]"
                      aria-hidden
                    >
                      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0d04] via-[#100803] to-[#090502]" />
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_85%_at_50%_0%,rgba(234,88,12,0.35),transparent_68%)] opacity-90" />
                      <div
                        className="absolute -inset-[30%] animate-hologram-sweep opacity-[0.28] blur-[0.35px]"
                        style={{
                          backgroundImage:
                            'repeating-linear-gradient(0deg, transparent, transparent 6px, rgba(251,146,60,0.16) 6px, rgba(251,146,60,0.16) 7px)',
                        }}
                      />
                      <div className="absolute inset-0 animate-hologram-pulse bg-[radial-gradient(ellipse_95%_75%_at_50%_5%,rgba(249,115,22,0.44),transparent_66%)]" />
                      <div
                        className="absolute inset-0 animate-hologram-shimmer opacity-[0.42] mix-blend-screen"
                        style={{
                          backgroundImage:
                            'linear-gradient(118deg, transparent 0%, rgba(251,146,60,0.13) 32%, transparent 54%, rgba(234,88,12,0.12) 76%, transparent 100%)',
                          backgroundSize: '220% 220%',
                        }}
                      />
                      <div className="absolute inset-0 bg-[conic-gradient(from_200deg_at_50%_120%,transparent_0deg,rgba(251,146,60,0.1)_38deg,transparent_78deg)] opacity-70" />
                      <div className="absolute inset-x-0 bottom-0 top-[58%] bg-gradient-to-t from-orange-500/28 via-orange-900/5 to-transparent" />
                      <div className="absolute bottom-0.5 left-1/2 h-[46%] w-[1.5px] max-w-full -translate-x-1/2 bg-gradient-to-t from-orange-300/55 via-orange-500/35 to-transparent blur-[1px]" />
                      <div className="absolute bottom-1.5 left-1/2 h-3 w-[5rem] max-w-[78%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-orange-400/35 to-transparent blur-lg" />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/[0.03]" />
                    </div>
                    {/* Außenringe — in Orange getönt, passend zum Hologram-Boden */}
                    <div className="pointer-events-none absolute -inset-[2px] z-[1] rounded-full bg-gradient-to-br from-[#1f1308] via-[#2d170a] to-[#5f2400] opacity-[0.97] shadow-[inset_0_1px_0_0_rgba(251,146,60,0.2)]" />
                    <div className="pointer-events-none absolute -inset-[5px] z-[1] rounded-full bg-gradient-to-br from-orange-400/[0.14] via-transparent to-[#2d170a]/60 blur-md opacity-90" />

                    <div
                      className="relative z-10 mx-auto flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-full border border-[#e6d5bf] bg-[#F5E6D3] px-5 py-6 text-center shadow-[0_4px_6px_-1px_rgba(15,23,42,0.08),0_24px_48px_-12px_rgba(15,23,42,0.12),0_0_0_1px_rgba(255,255,255,0.35),inset_0_1px_0_0_rgba(255,255,255,0.72)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-[#dbc4a8] group-hover:shadow-[0_8px_30px_-8px_rgba(120,53,15,0.2),0_32px_64px_-20px_rgba(15,23,42,0.16)] md:px-6"
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
                            'radial-gradient(ellipse 85% 55% at 50% 100%, rgba(245,230,211,0.45), transparent 52%)',
                        }}
                      />
                      <div
                        className="pointer-events-none absolute inset-[1px] rounded-full border border-white/85"
                        aria-hidden
                      />

                      <span className="absolute right-4 top-4 font-mono text-[10px] font-semibold tabular-nums tracking-[0.3em] text-neutral-300 transition-colors group-hover:text-neutral-400">
                        {step.number}
                      </span>

                      <div className="relative z-10 mb-3.5 flex h-14 w-14 items-center justify-center rounded-full border border-[#dbc4a8] bg-[#F5E6D3] shadow-[0_8px_24px_-6px_rgba(120,53,15,0.18)] transition-all duration-500 group-hover:border-[#c6aa88] group-hover:shadow-[0_12px_32px_-8px_rgba(120,53,15,0.26)]">
                        <step.icon className="h-7 w-7 text-neutral-800" strokeWidth={1.15} />
                      </div>

                      <h3 className="relative z-10 mb-2 text-lg font-light tracking-tight text-neutral-900 md:text-xl">
                        {step.title}
                      </h3>

                      <p className="relative z-10 line-clamp-4 max-w-[13.5rem] text-[0.8125rem] font-light leading-relaxed text-neutral-500 md:text-sm">
                        {step.description}
                      </p>

                      <div className="pointer-events-none absolute inset-x-10 bottom-5 z-20 h-px bg-gradient-to-r from-transparent via-neutral-900/55 to-transparent opacity-90" />
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

                {/* Horizontale Verbindung nach rechts — lg (Schritte 1–3) */}
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

                {/* Eingehender schwarzer Strich von links — lg nur Ergebnis (Punkt sitzt am Strich von Schritt 3) */}
                {index === steps.length - 1 && (
                  <div
                    className="absolute top-1/2 z-10 hidden w-[calc(1.35rem+0.75rem)] -translate-y-1/2 items-center overflow-hidden lg:flex -left-[1.35rem]"
                    aria-hidden
                  >
                    <div
                      className="flex w-full shrink-0 items-center will-change-transform transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        transform: linesActive ? 'translateX(0)' : 'translateX(100%)',
                        transitionDuration: '680ms',
                        transitionDelay: linesActive
                          ? `${BRANCH_BASE_MS + (index - 1) * BRANCH_STAGGER_MS}ms`
                          : '0ms',
                      }}
                    >
                      <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-neutral-400/50 via-neutral-800/90 to-neutral-800/90 shadow-[0_0_12px_rgba(15,23,42,0.12)]" />
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
