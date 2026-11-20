import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildMailtoInquiryUrl,
  buildWhatsAppBookingUrl,
  CLINIC_EMAIL,
  hasFormErrors,
  validateContactForm,
} from './clinicHelpers';

test('buildWhatsAppBookingUrl includes default consultation copy when no treatment is provided', () => {
  const url = buildWhatsAppBookingUrl();
  assert.ok(url.startsWith('https://wa.me/447700900412?text='));
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /Tracey Ager Aesthetics/);
  assert.match(decoded, /Alwoodley clinic/);
});

test('buildWhatsAppBookingUrl includes selected treatment and client name', () => {
  const url = buildWhatsAppBookingUrl('Dermal Fillers', 'Claire');
  const decoded = decodeURIComponent(url.split('?text=')[1]);
  assert.match(decoded, /My name is Claire\./);
  assert.match(decoded, /Dermal Fillers/);
});

test('validateContactForm flags missing required fields and invalid email', () => {
  const errors = validateContactForm({
    name: 'A',
    email: 'not-an-email',
    phone: '123',
    treatment: 'Electrolysis',
    message: 'Hi',
  });

  assert.equal(hasFormErrors(errors), true);
  assert.ok(errors.name);
  assert.ok(errors.email);
  assert.ok(errors.phone);
  assert.ok(errors.message);
});

test('validateContactForm passes with valid UK phone and enquiry details', () => {
  const errors = validateContactForm({
    name: 'Gabriella Aston',
    email: 'gabriella@example.co.uk',
    phone: '+44 7700 900123',
    treatment: 'Medical Tattooing',
    message: 'I would like to arrange an initial consultation in Alwoodley.',
  });

  assert.equal(hasFormErrors(errors), false);
});

test('validateContactForm allows empty optional phone while validating required fields', () => {
  const errors = validateContactForm({
    name: 'Samantha Jayne',
    email: 'samantha@example.co.uk',
    phone: '',
    treatment: 'Dermal Fillers',
    message: 'Looking for natural lip and facial balancing advice.',
  });

  assert.equal(hasFormErrors(errors), false);
});

test('buildMailtoInquiryUrl formats recipient, subject, and body cleanly', () => {
  const mailto = buildMailtoInquiryUrl({
    name: 'Claire Fenwick',
    email: 'claire@example.co.uk',
    phone: '0113 496 0100',
    treatment: 'Electrolysis',
    message: 'Please let me know your availability next Tuesday.',
  });

  assert.ok(mailto.startsWith(`mailto:${CLINIC_EMAIL}?subject=`));
  assert.match(mailto, /Electrolysis/);
  assert.match(mailto, /Claire%20Fenwick/);
});
