import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import {
  getWhatsAppChatUrl,
  GOOGLE_MAPS_OPEN_URL,
  SITE_ADDRESS,
  SITE_EMAIL,
  SITE_EMAIL_MAILTO,
  SITE_PHONE_DISPLAY,
  SITE_PHONE_TEL,
} from '../config/site';

const Contact = () => {
  const whatsappRef = useRef<HTMLDivElement>(null);
  const [whatsappVisible, setWhatsappVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const el = whatsappRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWhatsappVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setWhatsappVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formId = import.meta.env.VITE_FORMSPREE_FORM_ID;

    try {
      if (!formId) {
        throw new Error(
          'Kontaktformular: Formspree ist nicht konfiguriert. Bitte VITE_FORMSPREE_FORM_ID in Vercel setzen (Form-ID aus https://formspree.io).'
        );
      }

      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          phone: formData.phone || '',
          message: formData.message,
          _subject: 'Kontaktanfrage shigowerbung.de',
        }),
      });

      const data = (await response.json().catch(() => ({}))) as { error?: string; errors?: unknown };

      if (!response.ok) {
        const msg =
          typeof data.error === 'string'
            ? data.error
            : 'Die Nachricht konnte nicht gesendet werden.';
        throw new Error(msg);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#E86100]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <div className="text-sm font-light text-white tracking-widest mb-4">
            KONTAKT
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-lg text-white/85 font-light max-w-2xl mx-auto">
            Bereit für Ihr nächstes Projekt? Wir freuen uns auf Ihre Nachricht
          </p>
        </div>

        <div
          ref={whatsappRef}
          className={`mb-10 w-full max-w-6xl mx-auto md:mb-12 will-change-transform ${whatsappVisible ? 'pointer-events-auto' : 'pointer-events-none'}`}
          style={{
            opacity: whatsappVisible ? 1 : 0,
            transform: whatsappVisible ? 'translateY(0) scale(1)' : 'translateY(2rem) scale(0.92)',
            transition:
              'opacity 0.85s cubic-bezier(0.22, 1, 0.36, 1), transform 0.85s cubic-bezier(0.22, 1, 0.36, 1)',
          }}
        >
          <a
            href={getWhatsAppChatUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp-Chat mit shigowerbung öffnen"
            className="group/block relative block overflow-hidden rounded-2xl border border-[#e6d5bf] bg-[#F5E6D3] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_4px_24px_-8px_rgba(0,0,0,0.22)] transition-all duration-500 hover:border-[#dbc4a8] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7),0_24px_48px_-16px_rgba(0,0,0,0.2)]"
          >
            <div className="px-5 py-4">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-black/[0.04] ring-1 ring-black/10 transition-all duration-300 group-hover/block:bg-black/[0.07] group-hover/block:ring-black/20">
                  <svg
                    className="h-6 w-6 text-[#25D366] transition-transform duration-300 group-hover/block:scale-105"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-black/55">
                    WhatsApp
                  </p>
                  <p className="mt-1 text-sm font-light leading-snug text-black/75">
                    Direkt und diskret — wir melden uns zeitnah. Der Text lässt sich vor dem Senden
                    anpassen.
                  </p>
                </div>
                <span className="hidden shrink-0 text-[11px] font-medium uppercase tracking-[0.2em] text-black/55 transition-colors sm:inline group-hover/block:text-black/80">
                  Öffnen
                </span>
              </div>
            </div>
          </a>
        </div>

        <div className="max-w-5xl mx-auto mt-14 md:mt-20">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-[#e6d5bf] bg-[#F5E6D3] p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.55),0_4px_24px_-8px_rgba(0,0,0,0.22)] md:p-8"
          >
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full rounded-lg border border-[#ddc8ad] bg-[#f9ecdd] px-6 py-4 font-light text-black/85 placeholder:text-black/40 transition-all focus:outline-none focus:border-[#c9ae8a] focus:bg-[#fff4e8]"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full rounded-lg border border-[#ddc8ad] bg-[#f9ecdd] px-6 py-4 font-light text-black/85 placeholder:text-black/40 transition-all focus:outline-none focus:border-[#c9ae8a] focus:bg-[#fff4e8]"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Telefonnummer (optional)"
                className="w-full rounded-lg border border-[#ddc8ad] bg-[#f9ecdd] px-6 py-4 font-light text-black/85 placeholder:text-black/40 transition-all focus:outline-none focus:border-[#c9ae8a] focus:bg-[#fff4e8]"
              />
            </div>

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Ihre Nachricht"
                rows={6}
                className="w-full resize-none rounded-lg border border-[#ddc8ad] bg-[#f9ecdd] px-6 py-4 font-light text-black/85 placeholder:text-black/40 transition-all focus:outline-none focus:border-[#c9ae8a] focus:bg-[#fff4e8]"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-3 rounded-lg bg-black/90 px-8 py-4 text-sm font-light tracking-wide text-[#F5E6D3] transition-all duration-300 hover:scale-105 hover:bg-black disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                'Wird gesendet...'
              ) : (
                <>
                  Nachricht senden
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg animate-fadeIn">
                <p className="text-green-400 text-sm font-light text-center">
                  Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg animate-fadeIn">
                <p className="text-red-400 text-sm font-light text-center">
                  Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                </p>
              </div>
            )}
          </form>

          <div className="mt-10 space-y-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg border border-[#e6d5bf] bg-[#F5E6D3] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)] transition-all group-hover:border-[#dbc4a8]">
                  <Mail className="h-5 w-5 text-black/85" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-light text-white">Email</h3>
                  <a
                    href={SITE_EMAIL_MAILTO}
                    className="text-sm font-light text-white/90 transition-colors hover:text-white"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg border border-[#e6d5bf] bg-[#F5E6D3] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)] transition-all group-hover:border-[#dbc4a8]">
                  <Phone className="h-5 w-5 text-black/85" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-light text-white">Telefon</h3>
                  <a
                    href={SITE_PHONE_TEL}
                    className="text-sm font-light text-white/90 transition-colors hover:text-white"
                  >
                    {SITE_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg border border-[#e6d5bf] bg-[#F5E6D3] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.45)] transition-all group-hover:border-[#dbc4a8]">
                  <MapPin className="h-5 w-5 text-black/85" strokeWidth={1.25} />
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-light text-white">Adresse</h3>
                  <a
                    href={GOOGLE_MAPS_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-light leading-relaxed text-white/90 transition-colors hover:text-white"
                  >
                    {SITE_ADDRESS}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
