import { useState } from 'react';
import { ArrowUpRight, Check, Clock, Droplets, MessageCircle, PenTool, Zap } from 'lucide-react';
import { CLINIC_SERVICES, type ServiceItem } from '../data/clinicData';
import { buildWhatsAppBookingUrl } from '../utils/clinicHelpers';
import { ClinicImage } from './ClinicImage';

interface ServicesSectionProps {
  onSelectTreatmentForEnquiry: (treatmentTitle: string) => void;
}

function renderServiceIcon(id: ServiceItem['id'], isActive: boolean) {
  const iconClass = `w-5 h-5 ${isActive ? 'text-[#C5A9AD]' : 'text-[#29232C]'}`;
  switch (id) {
    case 'dermal-fillers':
      return <Droplets className={iconClass} aria-hidden="true" />;
    case 'medical-tattooing':
      return <PenTool className={iconClass} aria-hidden="true" />;
    case 'electrolysis':
      return <Zap className={iconClass} aria-hidden="true" />;
  }
}

export function ServicesSection({ onSelectTreatmentForEnquiry }: ServicesSectionProps) {
  const [selectedId, setSelectedId] = useState<ServiceItem['id']>('dermal-fillers');
  const activeService =
    CLINIC_SERVICES.find((service) => service.id === selectedId) ?? CLINIC_SERVICES[0];

  return (
    <section id="treatments" className="scroll-mt-16 bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-[#29232C]/65">
            Specialist Treatments · Alwoodley Clinic
          </p>
          <h2
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#29232C] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Focused clinical procedures tailored to individual anatomy.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#29232C]/75">
            Select a treatment below to review Tracey’s clinical approach, typical session
            times, and key focus areas.
          </p>
        </div>

        {/* 3 Core Services Selector Cards */}
        <div
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5"
          role="tablist"
          aria-label="Clinic Treatments"
        >
          {CLINIC_SERVICES.map((service) => {
            const isActive = service.id === activeService.id;
            return (
              <button
                key={service.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${service.id}`}
                id={`tab-${service.id}`}
                onClick={() => setSelectedId(service.id)}
                className={`text-left p-6 rounded-2xl border flex flex-col justify-between focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C] ${
                  isActive
                    ? 'bg-[#29232C] text-white border-[#29232C]'
                    : 'bg-white text-[#29232C] border-[#29232C]/12 hover:border-[#C5A9AD] hover:bg-[#F8F4F5]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                        isActive
                          ? 'bg-[#3D3442] border-white/15'
                          : 'bg-[#F8F4F5] border-[#29232C]/10'
                      }`}
                    >
                      {renderServiceIcon(service.id, isActive)}
                    </div>
                    <span
                      className={`text-xs font-medium tabular-nums ${
                        isActive ? 'text-[#C5A9AD]' : 'text-[#29232C]/50'
                      }`}
                    >
                      {service.indexLabel}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-medium tracking-tight">
                    {service.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      isActive ? 'text-white/85' : 'text-[#29232C]/75'
                    }`}
                  >
                    {service.shortDescription}
                  </p>
                </div>

                <div
                  className={`mt-5 pt-4 border-t text-xs font-medium flex items-center justify-between ${
                    isActive
                      ? 'border-white/15 text-[#C5A9AD]'
                      : 'border-[#29232C]/10 text-[#29232C]/70'
                  }`}
                >
                  <span>{isActive ? 'Viewing clinical details' : 'View clinical details'}</span>
                  <span className="tabular-nums">{service.duration}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Treatment Clinical Detail Panel */}
        <div
          id={`panel-${activeService.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeService.id}`}
          className="mt-6 rounded-2xl border border-[#29232C]/12 bg-[#F8F4F5] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-[#29232C]/65">
                  <span>{activeService.indexLabel}. Clinical Overview</span>
                  <span aria-hidden="true" className="text-[#C5A9AD]">
                    ·
                  </span>
                  <span className="inline-flex items-center gap-1.5 tabular-nums">
                    <Clock className="w-3.5 h-3.5 text-[#29232C]/60" aria-hidden="true" />
                    {activeService.duration}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl sm:text-3xl font-medium text-[#29232C]">
                  {activeService.title}
                </h3>

                <p className="mt-3 text-base leading-relaxed text-[#29232C]/80">
                  {activeService.clinicalApproach}
                </p>

                <p className="mt-3 text-sm text-[#29232C]/70">
                  {activeService.consultationNote}.
                </p>

                <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.focusAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-start gap-2.5 text-sm text-[#29232C]/85"
                    >
                      <Check
                        className="w-4 h-4 mt-0.5 shrink-0 text-[#29232C]"
                        aria-hidden="true"
                      />
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-[#29232C]/12 flex flex-col sm:flex-row gap-3">
                <a
                  href={buildWhatsAppBookingUrl(activeService.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#29232C] rounded-lg hover:bg-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5A9AD]" aria-hidden="true" />
                  <span>Book {activeService.title} via WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => onSelectTreatmentForEnquiry(activeService.title)}
                  className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#29232C] bg-white border border-[#29232C]/20 rounded-lg hover:border-[#29232C] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
                >
                  <span>Enquire by Email</span>
                  <ArrowUpRight className="w-4 h-4 text-[#29232C]/70" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="h-full min-h-[240px] rounded-xl overflow-hidden border border-[#29232C]/10 bg-white">
                <ClinicImage
                  src="/src/assets/images/clinical_skincare_atelier_1795195761737.jpg"
                  alt="Sterile aesthetic instruments, medical-grade serums, and dusty rose cotton towels on limestone at Tracey Ager Aesthetics"
                  fallbackTitle="Clinical Precision"
                  fallbackSubtitle="Sterile single-use instruments & medical-grade care"
                  className="w-full h-full aspect-[4/3] lg:aspect-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
