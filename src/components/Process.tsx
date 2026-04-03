import { useEffect, useRef, useState } from 'react';
import { Search, Lightbulb, Hammer, CheckCircle } from 'lucide-react';

const TRUNK_MS = 1200;
const BRANCH_BASE_MS = 450;
const BRANCH_STAGGER_MS = 220;

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
      { threshold: 0.14, rootMargin: '0px 0px -6% 0px' }
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
      icon: CheckCircle,
      number: '04',
      title: 'Ergebnis',
      description: 'Lieferung eines außergewöhnlichen Produkts, das Ihre Erwartungen übertrifft',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-32 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.03),transparent_50%)]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="text-sm font-light text-white/40 tracking-widest mb-4">
            ABLAUF
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
            Unser Prozess
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Ein bewährter Ansatz für außergewöhnliche Ergebnisse
          </p>
        </div>

        <div className="relative">
          {/* Hauptlinie — zeichnet sich beim Scrollen von links nach rechts (nur lg) */}
          <div
            className="hidden lg:block pointer-events-none absolute top-1/2 left-[6%] right-[6%] h-[2px] -translate-y-1/2 overflow-hidden"
            aria-hidden
          >
            <div
              className="h-full w-full bg-gradient-to-r from-transparent via-white/55 to-transparent shadow-[0_0_14px_rgba(255,255,255,0.18)] will-change-transform transition-[transform] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: linesActive ? 'translateX(0)' : 'translateX(-100%)',
                transitionDuration: `${TRUNK_MS}ms`,
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-md:gap-0 md:max-lg:gap-y-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative group max-md:[&:not(:last-child)]:pb-8 max-md:[&:not(:last-child)]:mb-6 md:max-lg:odd:border-r md:max-lg:odd:border-white/30 md:max-lg:odd:pr-6"
              >
                <div className="relative">
                  <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/15 rounded-xl md:rounded-2xl transition-all duration-500 hover:border-white/40 hover:-translate-y-2">
                    <div className="absolute -top-4 -right-4 text-6xl font-thin text-white/5 group-hover:text-white/10 transition-colors">
                      {step.number}
                    </div>

                    <div className="relative mb-6">
                      <div className="inline-flex p-4 bg-white/5 rounded-xl group-hover:bg-white/10 transition-all">
                        <step.icon className="w-8 h-8 text-white/80" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-light text-white mb-4">{step.title}</h3>

                    <p className="text-white/50 font-light leading-relaxed">{step.description}</p>

                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  {/* Vertikaler Strich Mobil — zeichnet sich von oben nach unten, gestaffelt */}
                  {index < steps.length - 1 && (
                    <div
                      className="lg:hidden flex justify-center pt-3 pb-1 pointer-events-none"
                      aria-hidden
                    >
                      <div className="h-10 w-[3px] overflow-hidden rounded-full">
                        <div
                          className="h-full w-full origin-top bg-gradient-to-b from-white/65 via-white/38 to-white/15 shadow-[0_0_12px_rgba(255,255,255,0.2)] will-change-transform transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                          style={{
                            transform: linesActive ? 'scaleY(1)' : 'scaleY(0)',
                            transitionDuration: '600ms',
                            transitionDelay: linesActive ? `${320 + index * 140}ms` : '0ms',
                          }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Verbindung zur nächsten Karte — nur lg, nach der Hauptlinie gestaffelt */}
                {index < steps.length - 1 && (
                  <div
                    className="hidden lg:flex absolute top-1/2 -right-[1.35rem] z-10 w-[calc(1.35rem+0.75rem)] -translate-y-1/2 items-center overflow-hidden"
                    aria-hidden
                  >
                    <div
                      className="flex w-full shrink-0 items-center will-change-transform transition-transform ease-[cubic-bezier(0.22,1,0.36,1)]"
                      style={{
                        transform: linesActive ? 'translateX(0)' : 'translateX(-100%)',
                        transitionDuration: '650ms',
                        transitionDelay: linesActive
                          ? `${BRANCH_BASE_MS + index * BRANCH_STAGGER_MS}ms`
                          : '0ms',
                      }}
                    >
                      <div className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-white/75 via-white/45 to-white/25 shadow-[0_0_8px_rgba(255,255,255,0.35)]" />
                      <div className="ml-0.5 h-2.5 w-2.5 shrink-0 rounded-full bg-white/90 ring-2 ring-white/40 shadow-[0_0_12px_rgba(255,255,255,0.55)] transition-transform duration-500 group-hover:scale-110" />
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
