import { PageHero } from '../components/PageHero';
import { ContactSection } from '../components/ContactSection';

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Capital Royal Services"
        text="Share your travel plan with our team and we will guide you on visa options, document preparation, and the next step from anywhere in India."
      />
      <ContactSection />
    </>
  );
}
