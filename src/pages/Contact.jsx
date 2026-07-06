import { PageHero } from '../components/PageHero';
import { ContactSection } from '../components/ContactSection';

export function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Capital Royal Services"
        text="Share your travel plan and our team will guide you on visa options, document preparation, and the next step."
      />
      <ContactSection />
    </>
  );
}
