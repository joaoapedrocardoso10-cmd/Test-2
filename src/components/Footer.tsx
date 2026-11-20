import { Facebook, Instagram, Mail, MessageCircle } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { buildWhatsAppBookingUrl, CLINIC_EMAIL } from '../utils/clinicHelpers';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#29232C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/15">
          <div className="md:col-span-5 space-y-3">
            <a
              href="#top"
              className="font-display text-2xl font-medium tracking-tight text-white inline-block"
            >
              {CLINIC_INFO.brandName}
            </a>
            <p className="text-sm leading-relaxed text-white/75 max-w-sm">
              Advanced Aesthetics Clinic in Alwoodley, North Leeds offering Dermal Fillers,
              Medical Tattooing, and Electrolysis.
            </p>
            <p className="text-xs text-[#C5A9AD]">
              {CLINIC_INFO.streetAddress}, {CLINIC_INFO.cityPostcode}
            </p>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-[#C5A9AD]">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#treatments" className="hover:text-white transition-colors">
                  Treatments
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Tracey
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">
                  Client Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Map
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="text-xs font-semibold text-[#C5A9AD]">Connect</h3>
            <p className="text-sm text-white/80">
              For bookings and confidential enquiries, reach us via WhatsApp, email, or our
              social channels.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={buildWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Message Tracey Ager Aesthetics on WhatsApp"
                className="w-11 h-11 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-[#3D3442] hover:border-[#C5A9AD] transition-colors"
              >
                <MessageCircle className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/traceyageraesthetics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tracey Ager Aesthetics on Instagram"
                className="w-11 h-11 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-[#3D3442] hover:border-[#C5A9AD] transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.facebook.com/traceyageraesthetics/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Tracey Ager Aesthetics on Facebook"
                className="w-11 h-11 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-[#3D3442] hover:border-[#C5A9AD] transition-colors"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${CLINIC_EMAIL}`}
                aria-label="Email Tracey Ager Aesthetics"
                className="w-11 h-11 rounded-lg border border-white/20 flex items-center justify-center text-white hover:bg-[#3D3442] hover:border-[#C5A9AD] transition-colors"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {currentYear} {CLINIC_INFO.brandName}. Alwoodley, North Leeds.
          </p>
          <p>{CLINIC_EMAIL}</p>
        </div>
      </div>
    </footer>
  );
}
