import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Hammer, CheckCircle2 } from 'lucide-react';

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
      icon: CheckCircle2,
      number: '04',
      title: 'Ergebnis',
      description: 'Lieferung eines außergewöhnlichen Produkts, das Ihre Erwartungen übertrifft',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-white py-28 md:py-36"
    >
      {/* Subtile Tiefe: Raster + Spotlight — hell, editorial */}
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,#000_50%,transparent_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-neutral-300/80 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[22rem] w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(15,23,42,0.06),transparent)] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
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
          <h2 className="mb-5 bg-gradient-to-b from-neutral-900 to-neutral-600 bg-clip-text text-5xl font-extralight tracking-tight text-transparent md:text-6xl md:leading-[1.08]">
            Unser Prozess
          </h2>
          <p className="mx-auto max-w-xl text-base font-light leading-relaxed text-neutral-500 md:text-lg">
            Klar strukturiert. Präzise verbunden. So entsteht messbare Exzellenz.
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

          <div className="grid max-md:gap-0 md:grid-cols-2 md:gap-x-6 md:gap-y-16 lg:grid-cols-4 lg:gap-10">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="group relative max-md:[&:not(:last-child)]:mb-6 max-md:[&:not(:last-child)]:pb-6"
              >
                <div
                  className="relative mx-auto w-full max-w-[min(100%,288px)] will-change-transform"
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
                  {/* Außenringe im Home-Stil (schwarz / Anthrazit wie Hero), Innenkreis bleibt weiß */}
                  <div className="pointer-events-none absolute -inset-[2px] rounded-full bg-gradient-to-br from-black via-neutral-950 to-zinc-900 opacity-[0.97] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)]" />
                  <div className="pointer-events-none absolute -inset-[5px] rounded-full bg-gradient-to-br from-white/[0.08] via-transparent to-black/40 blur-md opacity-90" />

                  <div
                    className="relative mx-auto flex aspect-square w-full flex-col items-center justify-center overflow-hidden rounded-full border border-white bg-gradient-to-b from-white via-neutral-50/95 to-neutral-100/85 px-5 py-6 text-center shadow-[0_4px_6px_-1px_rgba(15,23,42,0.06),0_24px_48px_-12px_rgba(15,23,42,0.1),inset_0_1px_0_0_rgba(255,255,255,0.98)] transition-all duration-500 ease-out group-hover:-translate-y-1 group-hover:border-white group-hover:shadow-[0_8px_30px_-8px_rgba(15,23,42,0.14),0_32px_64px_-20px_rgba(15,23,42,0.16)] md:px-6"
                  >
                    <div
                      className="pointer-events-none absolute inset-0 rounded-full opacity-[0.65]"
                      style={{
                        background:
                          'radial-gradient(circle at 35% 15%, rgba(255,255,255,0.95), transparent 45%)',
                      }}
                    />
                    <div
                      className="pointer-events-none absolute inset-[1px] rounded-full border border-white/80"
                      aria-hidden
                    />

                    <span className="absolute right-4 top-4 font-mono text-[10px] font-semibold tabular-nums tracking-[0.3em] text-neutral-300 transition-colors group-hover:text-neutral-400">
                      {step.number}
                    </span>

                    <div className="relative z-10 mb-3.5 flex h-14 w-14 items-center justify-center rounded-full border border-neutral-200/80 bg-white shadow-[0_8px_24px_-6px_rgba(15,23,42,0.08)] transition-all duration-500 group-hover:border-neutral-300 group-hover:shadow-[0_12px_32px_-8px_rgba(15,23,42,0.15)]">
                      <step.icon className="h-7 w-7 text-neutral-800" strokeWidth={1.15} />
                    </div>

                    <h3 className="relative z-10 mb-2 text-lg font-light tracking-tight text-neutral-900 md:text-xl">
                      {step.title}
                    </h3>

                    <p className="relative z-10 max-w-[13.5rem] text-[0.8125rem] font-light leading-relaxed text-neutral-500 md:text-sm">
                      {step.description}
                    </p>

                    <div className="pointer-events-none absolute inset-x-12 bottom-5 h-px bg-gradient-to-r from-transparent via-neutral-300/70 to-transparent opacity-70" />
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
