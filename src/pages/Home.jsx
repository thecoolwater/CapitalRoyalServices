import { ContactSection } from '../components/ContactSection';
import { DestinationsSection } from '../components/DestinationsSection';
import { FaqSection } from '../components/FaqSection';
import { Hero } from '../components/Hero';
import { ProcessSection } from '../components/ProcessSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';

export function Home() {
  return (
    <>
      <Hero />
      <ServicesSection limit={8} />
      <DestinationsSection limit={9} />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
