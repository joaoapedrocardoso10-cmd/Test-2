import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';

export default function App() {
  const [selectedEnquiryTreatment, setSelectedEnquiryTreatment] = useState<string>('');

  const handleSelectTreatmentForEnquiry = (treatmentTitle: string) => {
    setSelectedEnquiryTreatment(treatmentTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#29232C]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#29232C] focus:text-white focus:rounded-lg focus:text-sm"
      >
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <ServicesSection onSelectTreatmentForEnquiry={handleSelectTreatmentForEnquiry} />
        <AboutSection />
        <TestimonialsSection />
        <ContactSection preselectedTreatment={selectedEnquiryTreatment} />
      </main>

      <Footer />
    </div>
  );
}
