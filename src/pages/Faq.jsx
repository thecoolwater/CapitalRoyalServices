import { PageHero } from '../components/PageHero';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export function Faq() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Common questions about visas, documents, timelines, and approvals"
        text="Understand the important basics before you begin your application or consultation."
      />
      <FaqSection />
      <ContactSection />
    </>
  );
}
