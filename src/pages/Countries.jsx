import { PageHero } from '../components/PageHero';
import { CountriesExplorer } from '../components/CountriesExplorer';
import { ContactSection } from '../components/ContactSection';

export function Countries() {
  return (
    <>
      <PageHero
        eyebrow="Countries"
        title="Visa support for popular countries from India"
        text="Explore visit, tourist, business, student, work, family, Umrah, Schengen, passport, and documentation guidance for travellers across India."
      />
      <CountriesExplorer />
      <ContactSection />
    </>
  );
}
