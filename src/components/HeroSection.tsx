import { ArrowRight, MessageCircle } from 'lucide-react';
import { buildWhatsAppBookingUrl } from '../utils/clinicHelpers';
import { ClinicImage } from './ClinicImage';

const CLINIC_PILLARS = [
  { label: 'Location', value: 'Alwoodley, North Leeds (LS17)' },
  { label: 'Practitioner', value: '1-to-1 Nurse-Led Clinic' },
  { label: 'Specialties', value: 'Fillers, Medical Tattooing & Electrolysis' },
  { label: 'Philosophy', value: 'Measured, Natural Aesthetics' },
];

export function HeroSection() {
  return (
    <section id="top" className="bg-white pt-10 pb-12 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Proposition & Primary WhatsApp CTA */}
          <div className="lg:col-span-6 flex flex-col justify-center py-2 lg:py-6">
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#29232C]/70">
              <span>Alwoodley, North Leeds</span>
              <span aria-hidden="true" className="text-[#C5A9AD]">
                ·
              </span>
              <span>Advanced Aesthetics Clinic</span>
            </div>

            <h1
              className="mt-4 font-display font-medium tracking-tight text-[#29232C] leading-[1.07]"
              style={{
                fontSize: 'clamp(2.35rem, 4.2vw, 3.85rem)',
                textWrap: 'balance',
              }}
            >
              Clinical precision with an unhurried, restorative touch.
            </h1>

            <p className="mt-6 text-base sm:text-[17px] leading-relaxed text-[#29232C]/80 max-w-xl">
              Tracey Ager Aesthetics is a private clinic in Alwoodley, North Leeds
              dedicated to subtle facial rejuvenation and restorative care—offering{' '}
              <span className="font-medium text-[#29232C]">Dermal Fillers</span>,{' '}
              <span className="font-medium text-[#29232C]">Medical Tattooing</span>, and{' '}
              <span className="font-medium text-[#29232C]">Electrolysis</span> in a calm,
              confidential setting.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <a
                href={buildWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 py-3 text-sm font-medium text-white bg-[#29232C] rounded-lg border border-[#29232C] hover:bg-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
              >
                <MessageCircle className="w-4 h-4 text-[#C5A9AD]" aria-hidden="true" />
                <span>Book a Consultation via WhatsApp</span>
              </a>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center gap-2 min-h-[48px] px-4 py-3 text-sm font-medium text-[#29232C] hover:text-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
              >
                <span>Explore Treatments</span>
                <ArrowRight
                  className="w-4 h-4 text-[#C5A9AD] transition-transform duration-150 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Full-Height Clinic Photography */}
          <div className="lg:col-span-6">
            <div className="h-full min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-[#29232C]/10 bg-[#F8F4F5]">
              <ClinicImage
                src="/src/assets/images/hero_clinic_suite_1795195761881.jpg"
                alt="Serene private treatment suite at Tracey Ager Aesthetics in Alwoodley, North Leeds with soft natural daylight and dusty rose linen"
                fallbackTitle="Tracey Ager Aesthetics"
                fallbackSubtitle="Private Treatment Suite · Alwoodley, North Leeds"
                priority
                className="w-full h-full aspect-[4/3] lg:aspect-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Hairline Strip Below Hero Split */}
        <div className="mt-12 sm:mt-14 border-y border-[#29232C]/12 py-6">
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {CLINIC_PILLARS.map((pillar) => (
              <div key={pillar.label} className="space-y-1">
                <dt className="text-xs font-medium text-[#29232C]/60">{pillar.label}</dt>
                <dd className="text-sm font-medium text-[#29232C]">{pillar.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
