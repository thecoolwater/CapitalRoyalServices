import { PageHero } from '../components/PageHero';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { ContactSection } from '../components/ContactSection';

export function WhyChooseUs() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="A consultancy experience designed around trust and clarity"
        text="Capital Royal Services combines expert guidance, transparent communication, and personalized support for every client journey."
      />
      <WhyChooseUsSection />
      <ContactSection />
    </>
  );
}
