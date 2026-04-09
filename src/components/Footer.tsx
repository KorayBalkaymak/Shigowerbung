import { SITE_ADDRESS } from '../config/site';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <div className="text-2xl font-thin tracking-wider text-white">
              shigowerbung
            </div>
            <p className="text-center text-sm font-light text-white/40 md:text-left">{SITE_ADDRESS}</p>
          </div>

          <div className="text-white/40 text-sm font-light text-center md:text-left">
            © 2024 shigowerbung. Alle Rechte vorbehalten.
          </div>

          <div className="flex gap-6">
            <a
              href="#datenschutz"
              className="text-white/40 hover:text-white text-sm font-light transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#impressum"
              className="text-white/40 hover:text-white text-sm font-light transition-colors"
            >
              Impressum
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
