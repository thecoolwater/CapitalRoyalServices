import { PageHero } from '../components/PageHero';
import { ServicesSection } from '../components/ServicesSection';
import { ContactSection } from '../components/ContactSection';

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Visa, immigration, tours, passport, and documentation services"
        text="Choose the service that matches your destination and purpose. Our consultants help you prepare the right file before submission."
      />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
