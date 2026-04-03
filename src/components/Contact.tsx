import { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { supabase } from '../lib/supabase';
import ContactMap from './ContactMap';
import { GOOGLE_MAPS_OPEN_URL, SITE_ADDRESS } from '../config/site';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });

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
    <section id="contact" className="relative py-32 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-10">
          <div className="text-sm font-light text-white/40 tracking-widest mb-4">
            KONTAKT
          </div>
          <h2 className="text-5xl md:text-6xl font-thin text-white mb-6">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            Bereit für Ihr nächstes Projekt? Wir freuen uns auf Ihre Nachricht
          </p>
        </div>

        <ContactMap variant="under-intro" />

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto mt-14 md:mt-20">
          <div className="space-y-8">
            <div className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                  <Mail className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">Email</h3>
                  <p className="text-white/50 text-sm font-light">kontakt@shigowerbung.de</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                  <Phone className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">Telefon</h3>
                  <p className="text-white/50 text-sm font-light">+49 123 456 7890</p>
                </div>
              </div>
            </div>

            <div className="group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/5 rounded-lg border border-white/10 group-hover:bg-white/10 transition-all">
                  <MapPin className="w-5 h-5 text-white/80" />
                </div>
                <div>
                  <h3 className="text-white font-light text-lg mb-1">Adresse</h3>
                  <a
                    href={GOOGLE_MAPS_OPEN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 text-sm font-light leading-relaxed transition-colors hover:text-white/80"
                  >
                    {SITE_ADDRESS}
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-white/40 font-light text-sm leading-relaxed">
                Schreiben Sie uns eine Nachricht und wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 font-light focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
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
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 font-light focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
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
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 font-light focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group w-full px-8 py-4 bg-white text-black font-light text-sm tracking-wide rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
