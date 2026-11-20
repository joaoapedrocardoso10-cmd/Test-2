export interface ServiceItem {
  id: 'dermal-fillers' | 'medical-tattooing' | 'electrolysis';
  indexLabel: string;
  title: string;
  shortDescription: string;
  clinicalApproach: string;
  duration: string;
  consultationNote: string;
  focusAreas: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  treatmentContext: string;
  quote: string;
}

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: 'dermal-fillers',
    indexLabel: '01',
    title: 'Dermal Fillers',
    shortDescription:
      'Precision hyaluronic acid restoration designed to soften volume loss and refine facial harmony while preserving natural expression.',
    clinicalApproach:
      'Every treatment begins with an anatomical facial assessment. Conservative placement restores subtle structure to lips, cheeks, nasolabial folds, and jawline without overfilling.',
    duration: '45 – 60 mins',
    consultationNote: 'Includes full medical history review and bespoke facial mapping',
    focusAreas: [
      'Subtle lip definition and hydration',
      'Mid-face and cheek contour support',
      'Perioral and nasolabial softening',
      'Chin and jawline proportion balance',
    ],
  },
  {
    id: 'medical-tattooing',
    indexLabel: '02',
    title: 'Medical Tattooing',
    shortDescription:
      'Clinical micropigmentation restoring natural colour, symmetry, and definition for scar camouflage, areola reconstruction, and brows.',
    clinicalApproach:
      'Using sterile medical-grade pigments matched precisely to your natural skin undertones, Tracey performs restorative micropigmentation with gentle, methodical precision.',
    duration: '60 – 90 mins',
    consultationNote: 'Includes custom pigment matching and patch testing prior to treatment',
    focusAreas: [
      '3D areola and nipple restoration',
      'Surgical and trauma scar camouflage',
      'Alopecia and sparse brow reconstruction',
      'Lip cleft and border colour restoration',
    ],
  },
  {
    id: 'electrolysis',
    indexLabel: '03',
    title: 'Electrolysis',
    shortDescription:
      'Clinically proven permanent hair removal effective across every hair colour and skin tone, including fine facial and hormone-driven hair.',
    clinicalApproach:
      'Unlike laser treatments that depend on pigment contrast, sterile single-use probe electrolysis treats each individual follicle safely and permanently.',
    duration: '15 – 45 mins',
    consultationNote: 'Suitable for fair, grey, red, and dark hair on all skin tones',
    focusAreas: [
      'Upper lip, chin, and jawline refinement',
      'Eyebrow shaping and stray follicle clearance',
      'Hormonal and PCOS-related facial hair',
      'Pre-procedure clearing and sensitive skin care',
    ],
  },
];

export const CLINIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'claire-fenwick',
    clientName: 'Claire Fenwick',
    treatmentContext: 'Skin Peel Treatment',
    quote:
      'My complexion had been looking tired and uneven for months before visiting Tracey in Alwoodley. She explained every step of the skin peel calmly and professionally, checked how my skin responded throughout, and gave me clear aftercare. Within a week my skin looked clearer, brighter, and genuinely refreshed.',
  },
  {
    id: 'gabriella-aston',
    clientName: 'Gabriella Aston',
    treatmentContext: 'Dermaplaning & Skincare Consultation',
    quote:
      'I had been overwhelmed by skincare advice elsewhere and struggling with dull texture. Tracey’s dermaplaning treatment left my skin remarkably smooth without any irritation, and the tailored skincare guidance she shared simplified my daily routine and transformed how my skin feels.',
  },
  {
    id: 'samantha-jayne-ohara',
    clientName: "Samantha Jayne O'Hara",
    treatmentContext: 'Consultation & Aesthetic Treatment',
    quote:
      'I felt quite nervous ahead of my first aesthetic appointment, yet Tracey put me completely at ease from the moment I walked in. Her consultation was unhurried, honest, and deeply reassuring, and the treatment itself felt calm and gentle. I couldn’t have asked for better care.',
  },
];

export const CLINIC_INFO = {
  brandName: 'Tracey Ager Aesthetics',
  locationShort: 'Alwoodley, North Leeds',
  streetAddress: 'King Lane, Alwoodley',
  cityPostcode: 'Leeds, LS17 5ER',
  country: 'England, United Kingdom',
  email: 'traceyaaesthetics@gmail.com',
  phoneDisplay: '0113 496 0412',
  hours: [
    { days: 'Tuesday – Friday', time: '09:30 – 18:00' },
    { days: 'Saturday', time: '10:00 – 15:00' },
    { days: 'Sunday – Monday', time: 'By Prior Appointment' },
  ],
};
