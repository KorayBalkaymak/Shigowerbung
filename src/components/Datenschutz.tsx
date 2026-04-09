const Datenschutz = () => {
  return (
    <main className="min-h-screen bg-black py-24">
      <div className="mx-auto max-w-4xl px-6">
        <a
          href="/"
          className="mb-10 inline-block text-sm font-light text-white/70 transition-colors hover:text-white"
        >
          Zurueck zur Startseite
        </a>

        <h1 className="mb-8 text-4xl font-thin text-white md:text-5xl">Datenschutz</h1>

        <div className="space-y-6 rounded-2xl border border-[#e6d5bf] bg-[#F5E6D3] p-7 text-black/85 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_4px_24px_-8px_rgba(0,0,0,0.22)] md:p-10">
          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">1. Allgemeine Hinweise</h2>
            <p>
              Der Schutz Ihrer persoenlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre
              Daten ausschliesslich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TMG).
            </p>
          </section>

          <section className="space-y-1">
            <h2 className="text-xl font-medium text-black">2. Verantwortliche Stelle</h2>
            <p>Shigo Werbung und Verkaufsfoerderung UG (haftungsbeschraenkt)</p>
            <p>Im Remenfeld 1</p>
            <p>38104 Braunschweig</p>
            <p>Deutschland</p>
            <p>E-Mail: shigo.info@gmail.com</p>
            <p>Telefon: 0531 88619706</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>Beim Besuch unserer Website werden automatisch folgende Daten erfasst:</p>
            <p>IP-Adresse</p>
            <p>Datum und Uhrzeit der Anfrage</p>
            <p>Browsertyp und -version</p>
            <p>Betriebssystem</p>
            <p>Referrer-URL</p>
            <p>
              Diese Daten dienen ausschliesslich der Sicherstellung eines stoerungsfreien Betriebs und
              werden nicht zur Identifikation verwendet.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">4. Kontaktaufnahme</h2>
            <p>Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage gespeichert.</p>
            <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">5. Hosting</h2>
            <p>
              Unsere Website wird bei einem externen Dienstleister gehostet. Die Verarbeitung erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an sicherem Betrieb).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">6. Cookies</h2>
            <p>Unsere Website verwendet ggf. Cookies.</p>
            <p>Cookies richten auf Ihrem Geraet keinen Schaden an.</p>
            <p>Sie koennen die Speicherung von Cookies ueber Ihre Browser-Einstellungen verhindern.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">7. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf:</p>
            <p>Auskunft (Art. 15 DSGVO)</p>
            <p>Berichtigung (Art. 16 DSGVO)</p>
            <p>Loeschung (Art. 17 DSGVO)</p>
            <p>Einschraenkung der Verarbeitung (Art. 18 DSGVO)</p>
            <p>Datenuebertragbarkeit (Art. 20 DSGVO)</p>
            <p>Widerspruch (Art. 21 DSGVO)</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">8. Beschwerderecht</h2>
            <p>Sie haben das Recht, sich bei einer Datenschutzaufsichtsbehoerde zu beschweren.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">9. SSL-/TLS-Verschluesselung</h2>
            <p>Diese Seite nutzt aus Sicherheitsgruenden eine SSL- bzw. TLS-Verschluesselung.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-medium text-black">10. Aenderungen der Datenschutzerklaerung</h2>
            <p>Wir behalten uns vor, diese Datenschutzerklaerung bei Bedarf anzupassen.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Datenschutz;
