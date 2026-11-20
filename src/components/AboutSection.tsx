import { ClinicImage } from './ClinicImage';

const CLINICAL_STANDARDS = [
  {
    title: 'Unhurried Consultations',
    description:
      'Every appointment begins with a thorough one-to-one consultation, clear explanation of options, and zero pressure to proceed on the day.',
  },
  {
    title: 'Safety & Hygiene First',
    description:
      'Strict clinical protocols, sterile single-use consumables, and evidence-led products matched carefully to your skin and medical profile.',
  },
  {
    title: 'Discreet Alwoodley Setting',
    description:
      'A calm, private North Leeds clinic space offering confidentiality, attentive aftercare, and direct follow-up with Tracey.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 bg-[#F8F4F5] py-16 sm:py-20 lg:py-24 border-y border-[#29232C]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Practitioner Portrait */}
          <div className="lg:col-span-5">
            <div className="h-full max-w-md mx-auto lg:max-w-none rounded-2xl overflow-hidden border border-[#29232C]/12 bg-white">
              <ClinicImage
                src="/src/assets/images/practitioner_consultation_portrait_1795195762021.jpg"
                alt="Tracey Ager seated in the sunlit consultation room at Tracey Ager Aesthetics in Alwoodley, North Leeds"
                fallbackTitle="Tracey Ager"
                fallbackSubtitle="Lead Practitioner · Alwoodley, North Leeds"
                className="w-full h-full aspect-[3/4] object-cover"
              />
            </div>
          </div>

          {/* Right Column: Clinic Story & Standards */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-xs font-medium text-[#29232C]/65">
              About the Clinic · Tracey Ager
            </p>

            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#29232C] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Thoughtful aesthetics grounded in reassurance and clinical care.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#29232C]/80">
              At Tracey Ager Aesthetics in Alwoodley, North Leeds, treatments are never
              rushed or trend-led. Whether you are visiting for subtle dermal filler
              refinement, restorative medical tattooing, or permanent electrolysis, every
              session is tailored around comfort, honest guidance, and results that look
              effortlessly like you.
            </p>

            <p className="mt-4 text-base leading-relaxed text-[#29232C]/80">
              Clients frequently tell us they appreciate having every stage explained
              clearly—from initial patch testing and skincare preparation through to
              bespoke aftercare at home.
            </p>

            <div className="mt-8 divide-y divide-[#29232C]/12 border-y border-[#29232C]/12">
              {CLINICAL_STANDARDS.map((item) => (
                <div
                  key={item.title}
                  className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4"
                >
                  <h3 className="sm:col-span-4 text-sm font-semibold text-[#29232C]">
                    {item.title}
                  </h3>
                  <p className="sm:col-span-8 text-sm leading-relaxed text-[#29232C]/75">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
