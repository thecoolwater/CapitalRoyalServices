import { company, services } from '../data/siteData';
import { siteUrl } from '../utils/seo';

export function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: company.name,
    description: 'Professional visa, immigration, tours, Umrah, passport, documentation, and overseas job consultancy services.',
    url: siteUrl,
    telephone: company.phone,
    email: company.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address,
      addressCountry: 'IN',
    },
    areaServed: ['UAE', 'Saudi Arabia', 'United Kingdom', 'United States', 'Germany', 'Canada', 'Australia', 'Singapore', 'Japan'],
    makesOffer: services.slice(0, 8).map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
