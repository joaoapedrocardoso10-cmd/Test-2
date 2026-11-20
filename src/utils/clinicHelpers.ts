export type TreatmentSlug = 'dermal-fillers' | 'medical-tattooing' | 'electrolysis' | 'general';

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  treatment: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export const CLINIC_EMAIL = 'traceyaaesthetics@gmail.com';
export const CLINIC_WHATSAPP_NUMBER = '447700900412';
export const CLINIC_PHONE_DISPLAY = '0113 496 0412';
export const CLINIC_PHONE_HREF = 'tel:+441134960412';

export function buildWhatsAppBookingUrl(treatmentName?: string, clientName?: string): string {
  const parts: string[] = ['Hello Tracey Ager Aesthetics,'];

  if (clientName && clientName.trim().length > 0) {
    parts.push(`My name is ${clientName.trim()}.`);
  }

  if (treatmentName && treatmentName.trim().length > 0 && treatmentName !== 'General Consultation') {
    parts.push(`I would like to book a consultation for ${treatmentName.trim()} at your Alwoodley clinic.`);
  } else {
    parts.push('I would like to book an aesthetics consultation at your Alwoodley clinic.');
  }

  const encodedText = encodeURIComponent(parts.join(' '));
  return `https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${encodedText}`;
}

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.';
  }

  const emailTrimmed = (values.email ?? '').trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailTrimmed) {
    errors.email = 'Please enter your email address.';
  } else if (!emailRegex.test(emailTrimmed)) {
    errors.email = 'Please enter a valid email address.';
  }

  const phoneTrimmed = (values.phone ?? '').trim();
  if (phoneTrimmed.length > 0) {
    const digitsOnly = phoneTrimmed.replace(/[\s\-()+]/g, '');
    if (!/^\d{7,15}$/.test(digitsOnly)) {
      errors.phone = 'Please enter a valid UK or international telephone number.';
    }
  }

  if (!values.message || values.message.trim().length < 10) {
    errors.message = 'Please share a brief note about your enquiry (at least 10 characters).';
  }

  return errors;
}

export function hasFormErrors(errors: ContactFormErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildMailtoInquiryUrl(values: ContactFormValues): string {
  const treatmentLabel = values.treatment.trim() || 'Consultation Enquiry';
  const subject = `Clinic Enquiry: ${treatmentLabel} — ${values.name.trim()}`;
  const bodyLines = [
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    `Phone: ${values.phone.trim() || 'Not provided'}`,
    `Treatment of Interest: ${treatmentLabel}`,
    '',
    'Message:',
    values.message.trim(),
  ];
  return `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join('\n'))}`;
}
