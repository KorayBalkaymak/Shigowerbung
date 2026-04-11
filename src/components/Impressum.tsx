import { SITE_EMAIL } from '../config/site';

const Impressum = () => {
  return (
    <main className="min-h-screen bg-black py-24">
      <div className="mx-auto max-w-4xl px-6">
        <a
          href="/"
          className="mb-10 inline-block text-sm font-light text-white/70 transition-colors hover:text-white"
        >
          Zurueck zur Startseite
        </a>

        <h1 className="mb-8 text-4xl font-thin text-white md:text-5xl">Impressum</h1>

        <div className="space-y-6 rounded-2xl border border-[#e6d5bf] bg-[#F5E6D3] p-7 text-black/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_4px_24px_-8px_rgba(0,0,0,0.22)] md:p-10">
          <section className="space-y-1">
            <h2 className="text-xl font-medium text-black">Angaben gemaess § 5 TMG</h2>
            <p>Shigo Werbung und Verkaufsfoerderung UG (haftungsbeschraenkt)</p>
            <p>Im Remenfeld 1</p>
            <p>38104 Braunschweig</p>
            <p>Deutschland</p>
          </section>

          <section className="space-y-1">
            <h3 className="font-medium text-black">Vertreten durch die Geschaeftsfuehrung:</h3>
            <p>(Hier bitte deinen Namen eintragen)</p>
          </section>

          <section className="space-y-1">
            <h3 className="font-medium text-black">Kontakt:</h3>
            <p>Telefon: 0531 88619706</p>
            <p>E-Mail: {SITE_EMAIL}</p>
            <p>Website: www.shigowerbung.de</p>
          </section>

          <section className="space-y-1">
            <h3 className="font-medium text-black">Registereintrag:</h3>
            <p>Eintragung im Handelsregister</p>
            <p>Registergericht: Amtsgericht Braunschweig</p>
            <p>Registernummer: HRB 211918</p>
          </section>

          <section className="space-y-1">
            <h3 className="font-medium text-black">Umsatzsteuer-ID:</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemaess § 27a UStG:</p>
            <p>DE363693149</p>
          </section>

          <section className="space-y-1">
            <h3 className="font-medium text-black">Steuernummer:</h3>
            <p>13/210/00143</p>
          </section>

          <section className="space-y-1">
            <h3 className="font-medium text-black">Bankverbindung:</h3>
            <p>IBAN: DE85 1001 0123 8944 3092 62</p>
            <p>BIC: QNTODEB2XXX</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Impressum;
