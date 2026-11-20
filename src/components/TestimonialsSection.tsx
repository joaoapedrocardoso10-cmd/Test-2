import { Quote } from 'lucide-react';
import { CLINIC_TESTIMONIALS } from '../data/clinicData';

export function TestimonialsSection() {
  return (
    <section id="reviews" className="scroll-mt-16 bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium text-[#29232C]/65">
              Client Experiences · Alwoodley, North Leeds
            </p>
            <h2
              className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.65rem] font-medium tracking-tight text-[#29232C] leading-[1.12]"
              style={{ textWrap: 'balance' }}
            >
              Trusted by clients across North Leeds for calm, attentive care.
            </h2>
          </div>

          <p className="text-sm text-[#29232C]/70 max-w-xs">
            Verified reflections on skin health, consultations, and treatment aftercare.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_TESTIMONIALS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-2xl border border-[#29232C]/12 bg-white p-6 sm:p-7"
            >
              <div>
                <Quote
                  className="w-6 h-6 text-[#C5A9AD]"
                  aria-hidden="true"
                />
                <blockquote className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#29232C]/85">
                  “{review.quote}”
                </blockquote>
              </div>

              <footer className="mt-6 pt-4 border-t border-[#29232C]/10 space-y-0.5 text-xs">
                <p className="font-semibold text-[#29232C]">{review.clientName}</p>
                <p className="text-[#29232C]/65">{review.treatmentContext}</p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
