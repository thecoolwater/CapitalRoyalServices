import { PageHero } from '../components/PageHero';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { ContactSection } from '../components/ContactSection';

export function Testimonials() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="Client experiences from real visa and travel journeys"
        text="Our clients value organized documentation, clear explanations, responsive updates, and practical guidance."
      />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
