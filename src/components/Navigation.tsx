import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Über uns', id: 'about' },
    { label: 'Leistungen', id: 'services' },
    { label: 'Ablauf', id: 'process' },
    { label: 'Kontakt', id: 'contact' },
  ];

  return (
    <nav className="relative z-20 w-full border-b border-white/10 bg-black/95 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-thin tracking-wider text-white transition-colors hover:text-[#f5f5f5]"
          >
            shigowerbung
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-light tracking-wide text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden animate-fadeIn border-t border-white/10 pb-2 pt-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full py-3 text-left text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
