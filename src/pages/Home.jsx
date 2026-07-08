import { ContactSection } from '../components/ContactSection';
import { BrandVideoSection } from '../components/BrandVideoSection';
import { DestinationsSection } from '../components/DestinationsSection';
import { FaqSection } from '../components/FaqSection';
import { Hero } from '../components/Hero';
import { ProcessSection } from '../components/ProcessSection';
import { PromoStoriesSection } from '../components/PromoStoriesSection';
import { ServicesSection } from '../components/ServicesSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';

export function Home() {
  return (
    <>
      <Hero />
      <BrandVideoSection />
      <ServicesSection limit={8} />
      <PromoStoriesSection />
      <DestinationsSection limit={9} />
      <WhyChooseUsSection />
      <ProcessSection />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
