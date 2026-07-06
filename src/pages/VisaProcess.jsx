import { PageHero } from '../components/PageHero';
import { ProcessSection } from '../components/ProcessSection';
import { ContactSection } from '../components/ContactSection';

export function VisaProcess() {
  return (
    <>
      <PageHero
        eyebrow="Visa Process"
        title="A transparent process that keeps your application organized"
        text="From the first consultation to post-approval guidance, our workflow is built for clarity, accountability, and client confidence."
      />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
