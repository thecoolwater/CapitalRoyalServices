import { PageHero } from '../components/PageHero';
import { DestinationsSection } from '../components/DestinationsSection';
import { ContactSection } from '../components/ContactSection';

export function Countries() {
  return (
    <>
      <PageHero
        eyebrow="Countries"
        title="Popular destinations for travel, study, work, Umrah, and business"
        text="Explore visa support from India for Dubai, Saudi Arabia, the UK, USA, Germany, Canada, Australia, Singapore, Malaysia, Egypt, Europe, and Japan."
      />
      <DestinationsSection />
      <ContactSection />
    </>
  );
}
