import { useEffect, useState, type FormEvent } from 'react';
import {
  Check,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import {
  buildMailtoInquiryUrl,
  buildWhatsAppBookingUrl,
  CLINIC_EMAIL,
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_HREF,
  hasFormErrors,
  validateContactForm,
  type ContactFormErrors,
  type ContactFormValues,
} from '../utils/clinicHelpers';

interface ContactSectionProps {
  preselectedTreatment: string;
}

const TREATMENT_OPTIONS = [
  'General Consultation',
  'Dermal Fillers',
  'Medical Tattooing',
  'Electrolysis',
  'Skin Peel & Skincare Advice',
];

const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/search/?api=1&query=King+Lane,+Alwoodley,+Leeds+LS17+5ER';

export function ContactSection({ preselectedTreatment }: ContactSectionProps) {
  const [formValues, setFormValues] = useState<ContactFormValues>({
    name: '',
    email: '',
    phone: '',
    treatment: preselectedTreatment || 'General Consultation',
    message: '',
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [submittedValues, setSubmittedValues] = useState<ContactFormValues | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormValues((prev) => ({ ...prev, treatment: preselectedTreatment }));
      setSubmittedValues(null);
    }
  }, [preselectedTreatment]);

  const handleFieldChange = (field: keyof ContactFormValues, value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
    if (field in errors) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field as keyof ContactFormErrors];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validateContactForm(formValues);
    if (hasFormErrors(validationErrors)) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmittedValues(formValues);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CLINIC_EMAIL);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      setCopiedEmail(false);
    }
  };

  const handleReset = () => {
    setSubmittedValues(null);
    setFormValues({
      name: '',
      email: '',
      phone: '',
      treatment: 'General Consultation',
      message: '',
    });
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="scroll-mt-16 bg-[#F8F4F5] py-16 sm:py-20 lg:py-24 border-t border-[#29232C]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-medium text-[#29232C]/65">
            Contact &amp; Directions · Alwoodley, North Leeds
          </p>
          <h2
            className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#29232C] leading-[1.12]"
            style={{ textWrap: 'balance' }}
          >
            Arrange a private consultation in Alwoodley.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#29232C]/75">
            Book directly via WhatsApp for the fastest response, or send a confidential
            enquiry to{' '}
            <a
              href={`mailto:${CLINIC_EMAIL}`}
              className="font-medium text-[#29232C] underline decoration-[#C5A9AD] underline-offset-4 hover:text-[#3D3442]"
            >
              {CLINIC_EMAIL}
            </a>
            .
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Address, Phone, Hours & Alwoodley Location Map */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div className="rounded-2xl border border-[#29232C]/12 bg-white p-6 sm:p-7 space-y-5">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-[#29232C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-semibold text-[#29232C]/60">Clinic Address</h3>
                  <p className="mt-1 text-sm font-medium text-[#29232C]">
                    {CLINIC_INFO.brandName}
                  </p>
                  <p className="text-sm text-[#29232C]/80">
                    {CLINIC_INFO.streetAddress}, {CLINIC_INFO.cityPostcode}
                  </p>
                  <p className="text-xs text-[#29232C]/65 mt-0.5">{CLINIC_INFO.country}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29232C]/10 flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-[#29232C] mt-0.5 shrink-0" aria-hidden="true" />
                <div>
                  <h3 className="text-xs font-semibold text-[#29232C]/60">Telephone</h3>
                  <a
                    href={CLINIC_PHONE_HREF}
                    className="mt-1 inline-block text-sm font-medium text-[#29232C] tabular-nums hover:underline decoration-[#C5A9AD] underline-offset-4"
                  >
                    {CLINIC_PHONE_DISPLAY}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29232C]/10 flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-[#29232C] mt-0.5 shrink-0" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs font-semibold text-[#29232C]/60">Direct Email</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <a
                      href={`mailto:${CLINIC_EMAIL}`}
                      className="text-sm font-medium text-[#29232C] break-all hover:underline decoration-[#C5A9AD] underline-offset-4"
                    >
                      {CLINIC_EMAIL}
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy clinic email address"
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium text-[#29232C] bg-[#F8F4F5] border border-[#29232C]/12 rounded-md hover:border-[#29232C]/35 transition-colors duration-150"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#29232C]" aria-hidden="true" />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#29232C]/70" aria-hidden="true" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#29232C]/10">
                <h3 className="text-xs font-semibold text-[#29232C]/60">Appointment Hours</h3>
                <dl className="mt-2.5 space-y-1.5 text-sm">
                  {CLINIC_INFO.hours.map((slot) => (
                    <div key={slot.days} className="flex items-center justify-between gap-4">
                      <dt className="text-[#29232C]/75">{slot.days}</dt>
                      <dd className="font-medium text-[#29232C] tabular-nums">{slot.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>

            {/* Neighbourhood Location Card + Google Maps Directions Link */}
            <div className="rounded-2xl border border-[#29232C]/12 bg-white overflow-hidden">
              <div className="relative h-52 bg-[#EFE9EB] overflow-hidden">
                <svg
                  viewBox="0 0 480 220"
                  className="w-full h-full object-cover"
                  role="img"
                  aria-label="Map illustrating Alwoodley, North Leeds around King Lane and Harrogate Road A61"
                >
                  <rect width="480" height="220" fill="#F4EFF1" />
                  {/* Subtle park & green space zones around Alwoodley */}
                  <path
                    d="M20 25 Q110 15 155 75 T120 175 L20 190 Z"
                    fill="#E5DCE0"
                    opacity="0.7"
                  />
                  <path
                    d="M320 18 Q425 22 465 95 L465 185 Q380 175 340 120 Z"
                    fill="#E5DCE0"
                    opacity="0.65"
                  />
                  {/* Road network */}
                  <path
                    d="M0 145 Q160 128 310 132 T480 112"
                    stroke="#FFFFFF"
                    strokeWidth="12"
                    fill="none"
                  />
                  <path
                    d="M175 0 Q205 110 232 220"
                    stroke="#FFFFFF"
                    strokeWidth="14"
                    fill="none"
                  />
                  <path
                    d="M345 0 Q332 115 318 220"
                    stroke="#FFFFFF"
                    strokeWidth="10"
                    fill="none"
                  />
                  <path
                    d="M175 0 Q205 110 232 220"
                    stroke="#C5A9AD"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    fill="none"
                  />

                  {/* Street & Locality Labels */}
                  <text
                    x="130"
                    y="120"
                    fill="#29232C"
                    fillOpacity="0.65"
                    fontSize="10"
                    fontWeight="600"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                  >
                    Alwoodley Green
                  </text>
                  <text
                    x="225"
                    y="54"
                    fill="#29232C"
                    fillOpacity="0.65"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                  >
                    King Lane
                  </text>
                  <text
                    x="355"
                    y="88"
                    fill="#29232C"
                    fillOpacity="0.6"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                  >
                    Harrogate Rd (A61)
                  </text>
                  <text
                    x="310"
                    y="192"
                    fill="#29232C"
                    fillOpacity="0.55"
                    fontSize="10"
                    fontWeight="500"
                    fontFamily="Plus Jakarta Sans, sans-serif"
                  >
                    Moor Allerton
                  </text>

                  {/* Clinic Pin */}
                  <circle cx="208" cy="108" r="24" fill="#C5A9AD" fillOpacity="0.32" />
                  <circle cx="208" cy="108" r="9" fill="#29232C" stroke="#FFFFFF" strokeWidth="2.5" />
                </svg>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3 bg-white/95 backdrop-blur-xs border border-[#29232C]/12 rounded-xl px-3.5 py-2.5">
                  <div>
                    <p className="text-xs font-semibold text-[#29232C]">Alwoodley, North Leeds</p>
                    <p className="text-[11px] text-[#29232C]/65">LS17 5ER · Free street parking nearby</p>
                  </div>
                  <a
                    href={GOOGLE_MAPS_DIRECTIONS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 text-xs font-medium text-white bg-[#29232C] rounded-lg hover:bg-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#C5A9AD]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form to traceyaaesthetics@gmail.com */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-[#29232C]/12 bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              {submittedValues ? (
                <div className="my-auto py-4" role="status" aria-live="polite">
                  <div className="w-11 h-11 rounded-full bg-[#29232C] text-white flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#C5A9AD]" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-display text-2xl sm:text-3xl font-medium text-[#29232C]">
                    Your enquiry is ready for Tracey
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#29232C]/80">
                    Thank you, <span className="font-semibold">{submittedValues.name}</span>.
                    Your consultation request regarding{' '}
                    <span className="font-semibold">{submittedValues.treatment}</span> has
                    been prepared for{' '}
                    <span className="font-medium text-[#29232C]">{CLINIC_EMAIL}</span>.
                  </p>

                  <div className="mt-6 rounded-xl border border-[#29232C]/12 bg-[#F8F4F5] p-4 space-y-2 text-sm text-[#29232C]/80">
                    <p>
                      <span className="font-medium text-[#29232C]">Reply Email:</span>{' '}
                      {submittedValues.email}
                    </p>
                    {submittedValues.phone && (
                      <p>
                        <span className="font-medium text-[#29232C]">Phone:</span>{' '}
                        {submittedValues.phone}
                      </p>
                    )}
                    <p>
                      <span className="font-medium text-[#29232C]">Message:</span>{' '}
                      {submittedValues.message}
                    </p>
                  </div>

                  <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
                    <a
                      href={buildMailtoInquiryUrl(submittedValues)}
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-white bg-[#29232C] rounded-lg hover:bg-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      <Mail className="w-4 h-4 text-[#C5A9AD]" aria-hidden="true" />
                      <span>Send via Email App</span>
                    </a>

                    <a
                      href={buildWhatsAppBookingUrl(
                        submittedValues.treatment,
                        submittedValues.name
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-medium text-[#29232C] bg-white border border-[#29232C]/20 rounded-lg hover:border-[#29232C] transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      <MessageCircle className="w-4 h-4 text-[#29232C]" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-sm font-medium text-[#29232C]/75 hover:text-[#29232C] transition-colors duration-150 whitespace-nowrap shrink-0"
                    >
                      Edit or Send Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-[#29232C]">
                      Consultation Enquiry Form
                    </h3>
                    <p className="mt-1 text-sm text-[#29232C]/70">
                      Complete your details below to send an enquiry directly to{' '}
                      {CLINIC_EMAIL}.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold text-[#29232C] mb-1.5"
                      >
                        Full Name <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formValues.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        placeholder="e.g. Claire Fenwick"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#29232C] bg-white rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#29232C]/20 ${
                          errors.name
                            ? 'border-red-700'
                            : 'border-[#29232C]/20 focus:border-[#29232C]'
                        }`}
                      />
                      {errors.name && (
                        <p id="error-name" role="alert" className="mt-1.5 text-xs text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold text-[#29232C] mb-1.5"
                      >
                        Email Address <span aria-hidden="true">*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formValues.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        placeholder="you@example.co.uk"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#29232C] bg-white rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#29232C]/20 ${
                          errors.email
                            ? 'border-red-700'
                            : 'border-[#29232C]/20 focus:border-[#29232C]'
                        }`}
                      />
                      {errors.email && (
                        <p id="error-email" role="alert" className="mt-1.5 text-xs text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold text-[#29232C] mb-1.5"
                      >
                        Telephone (Optional)
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formValues.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        placeholder="07700 900123"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#29232C] bg-white rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#29232C]/20 ${
                          errors.phone
                            ? 'border-red-700'
                            : 'border-[#29232C]/20 focus:border-[#29232C]'
                        }`}
                      />
                      {errors.phone && (
                        <p id="error-phone" role="alert" className="mt-1.5 text-xs text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-treatment"
                        className="block text-xs font-semibold text-[#29232C] mb-1.5"
                      >
                        Treatment of Interest
                      </label>
                      <select
                        id="contact-treatment"
                        name="treatment"
                        value={formValues.treatment}
                        onChange={(e) => handleFieldChange('treatment', e.target.value)}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm text-[#29232C] bg-white rounded-lg border border-[#29232C]/20 focus:border-[#29232C] focus:outline-none focus:ring-2 focus:ring-[#29232C]/20"
                      >
                        {TREATMENT_OPTIONS.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-[#29232C] mb-1.5"
                    >
                      Your Message <span aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={formValues.message}
                      onChange={(e) => handleFieldChange('message', e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'error-message' : undefined}
                      placeholder="Please share what you would like to discuss or your preferred days for an appointment in Alwoodley..."
                      className={`w-full px-3.5 py-2.5 text-sm text-[#29232C] bg-white rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-[#29232C]/20 ${
                        errors.message
                          ? 'border-red-700'
                          : 'border-[#29232C]/20 focus:border-[#29232C]'
                      }`}
                    />
                    {errors.message && (
                      <p id="error-message" role="alert" className="mt-1.5 text-xs text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm font-medium text-white bg-[#29232C] rounded-lg hover:bg-[#3D3442] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#29232C]"
                    >
                      <Send className="w-4 h-4 text-[#C5A9AD]" aria-hidden="true" />
                      <span>Submit Consultation Enquiry</span>
                    </button>

                    <a
                      href={buildWhatsAppBookingUrl(formValues.treatment, formValues.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 min-h-[44px] text-xs font-medium text-[#29232C]/80 hover:text-[#29232C] underline decoration-[#C5A9AD] underline-offset-4 whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#29232C]" aria-hidden="true" />
                      <span>Or message directly on WhatsApp</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
