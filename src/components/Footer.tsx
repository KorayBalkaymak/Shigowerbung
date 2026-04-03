const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-thin tracking-wider text-white">
            ELITE
          </div>

          <div className="text-white/40 text-sm font-light text-center md:text-left">
            © 2024 Elite Agency. Alle Rechte vorbehalten.
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-white/40 hover:text-white text-sm font-light transition-colors"
            >
              Datenschutz
            </a>
            <a
              href="#"
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
