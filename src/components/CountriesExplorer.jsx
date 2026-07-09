import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  MapPin,
  Plane,
  Search,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fadeUp, staggerContainer } from '../animations/variants';
import { countries } from '../data/siteData';

const filters = ['All', 'Visit', 'Business', 'Student', 'Work', 'Family', 'Umrah', 'Schengen'];

const countryDetails = {
  'Dubai, UAE': {
    flag: '🇦🇪',
    region: 'Gulf travel',
    visaTypes: ['Visit', 'Business', 'Family'],
    timeline: 'Quick consultation and checklist planning',
    validity: 'Short stay and multi-purpose travel guidance',
    documents: ['Passport', 'Photo', 'Bank proof', 'Travel plan'],
    support: 'Best for UAE visits, exhibitions, family trips, and urgent document review.',
  },
  'Saudi Arabia': {
    flag: '🇸🇦',
    region: 'Umrah and Gulf',
    visaTypes: ['Umrah', 'Visit', 'Business', 'Work'],
    timeline: 'Guided Umrah and family visit preparation',
    validity: 'Purpose-based visa route guidance',
    documents: ['Passport', 'Photo', 'Hotel plan', 'Travel dates'],
    support: 'Useful for Umrah, family visits, business travel, and work-related file planning.',
  },
  'United States': {
    flag: '🇺🇸',
    region: 'North America',
    visaTypes: ['Visit', 'Business', 'Student'],
    timeline: 'Profile review before application planning',
    validity: 'Interview-focused preparation support',
    documents: ['DS details', 'Travel history', 'Finance proof', 'Purpose note'],
    support: 'Structured preparation for visitor, business, student, and family travel cases.',
  },
  'United Kingdom': {
    flag: '🇬🇧',
    region: 'UK visas',
    visaTypes: ['Visit', 'Student', 'Work', 'Family'],
    timeline: 'Document-first file preparation',
    validity: 'Visitor, study, skilled, and family route guidance',
    documents: ['Passport', 'Funds', 'Accommodation', 'Cover letter'],
    support: 'Clear file review for UK travel, study, skilled worker, and family visa plans.',
  },
  Germany: {
    flag: '🇩🇪',
    region: 'Europe and Schengen',
    visaTypes: ['Schengen', 'Student', 'Work', 'Business'],
    timeline: 'Checklist and appointment preparation',
    validity: 'Schengen, study, work, and opportunity planning',
    documents: ['Passport', 'Insurance', 'Itinerary', 'Funds'],
    support: 'Strong fit for Schengen travel, study admission files, and work documentation.',
  },
  Canada: {
    flag: '🇨🇦',
    region: 'North America',
    visaTypes: ['Visit', 'Student', 'Family', 'Work'],
    timeline: 'Eligibility and document gap review',
    validity: 'Visitor, study, family, and work guidance',
    documents: ['Passport', 'Funds', 'Invitation', 'Study plan'],
    support: 'Practical guidance for Canadian visitor, student, family, and work pathways.',
  },
  Australia: {
    flag: '🇦🇺',
    region: 'Asia-Pacific',
    visaTypes: ['Visit', 'Student', 'Work'],
    timeline: 'Evidence planning and document checks',
    validity: 'Tourist, student, and skilled pathway support',
    documents: ['Passport', 'Funds', 'Purpose proof', 'Travel history'],
    support: 'Useful for Australia tourist files, student plans, and skilled route preparation.',
  },
  Singapore: {
    flag: '🇸🇬',
    region: 'Asia travel',
    visaTypes: ['Visit', 'Business'],
    timeline: 'Fast document checklist support',
    validity: 'Tourist and business visit guidance',
    documents: ['Passport', 'Photo', 'Hotel plan', 'Return plan'],
    support: 'Good for short business visits, family trips, and leisure travel planning.',
  },
  Japan: {
    flag: '🇯🇵',
    region: 'Asia travel',
    visaTypes: ['Visit', 'Business', 'Student'],
    timeline: 'Detail-focused file preparation',
    validity: 'Tourism, business, and study guidance',
    documents: ['Passport', 'Schedule', 'Funds', 'Invitation'],
    support: 'Organized document planning for Japan tourism, meetings, and student travel.',
  },
  Malaysia: {
    flag: '🇲🇾',
    region: 'Asia travel',
    visaTypes: ['Visit', 'Student', 'Business', 'Family'],
    timeline: 'Simple route selection and checklist support',
    validity: 'Visit, student, business, and family support',
    documents: ['Passport', 'Photo', 'Travel plan', 'Purpose proof'],
    support: 'Helpful for Malaysia holidays, student files, family visits, and business travel.',
  },
  Egypt: {
    flag: '🇪🇬',
    region: 'Tours and travel',
    visaTypes: ['Visit', 'Business'],
    timeline: 'Tour document and itinerary review',
    validity: 'Tourist and business visit guidance',
    documents: ['Passport', 'Photo', 'Itinerary', 'Hotel plan'],
    support: 'Ideal for Egypt holidays, historic tours, and business trip document support.',
  },
  Europe: {
    flag: '🇪🇺',
    region: 'Schengen',
    visaTypes: ['Schengen', 'Visit', 'Business', 'Family'],
    timeline: 'Multi-country itinerary and file planning',
    validity: 'Schengen tourism, family, and business guidance',
    documents: ['Passport', 'Insurance', 'Bookings', 'Cover letter'],
    support: 'Supports Schengen route selection, itinerary planning, and embassy-ready files.',
  },
};

const searchableText = (country) => {
  const details = countryDetails[country.name];
  return [
    country.name,
    country.summary,
    details?.region,
    details?.support,
    ...(details?.visaTypes || []),
    ...(details?.documents || []),
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase();
};

export function CountriesExplorer() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');

  const visibleCountries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return countries.filter((country) => {
      const details = countryDetails[country.name];
      const matchesFilter = activeFilter === 'All' || details?.visaTypes.includes(activeFilter);
      const matchesQuery = !normalizedQuery || searchableText(country).includes(normalizedQuery);

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <section className="relative overflow-hidden bg-porcelain px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-navy/8 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-gold shadow-premium">
              Explore Countries
            </p>
            <h2 className="font-heading text-4xl font-extrabold leading-tight text-navy md:text-5xl">
              Find the right visa route for your next destination
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Search country-specific support for tourist, visit, business, student, work, family, Umrah, Schengen, passport, and documentation needs.
            </p>
          </div>

          <div className="premium-card rounded-3xl p-4 sm:p-5">
            <label className="focus-within:ring-gold/50 flex items-center gap-3 rounded-2xl border border-navy/10 bg-white px-4 py-4 shadow-sm transition focus-within:ring-4">
              <Search className="text-gold" size={22} aria-hidden="true" />
              <span className="sr-only">Search countries or visa types</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search Dubai, UK, Schengen, student, work..."
                className="w-full border-0 bg-transparent text-base font-semibold text-navy outline-none placeholder:text-slate-400"
              />
            </label>
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                    activeFilter === filter
                      ? 'bg-navy text-white shadow-premium'
                      : 'bg-white text-navy/72 hover:bg-gold hover:text-navy'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {[
            { icon: MapPin, label: `${visibleCountries.length} matched destinations` },
            { icon: FileCheck2, label: 'Checklist-led file review' },
            { icon: ShieldCheck, label: 'Embassy-ready documentation' },
            { icon: Clock3, label: 'Timeline guidance before filing' },
          ].map((item) => (
            <div key={item.label} className="rounded-2xl border border-navy/8 bg-white px-4 py-4 shadow-sm">
              <item.icon className="mb-3 text-gold" size={22} aria-hidden="true" />
              <p className="text-sm font-extrabold text-navy">{item.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleCountries.map((country) => (
            <CountryVisaCard key={country.name} country={country} details={countryDetails[country.name]} />
          ))}
        </motion.div>

        {visibleCountries.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-dashed border-navy/20 bg-white p-8 text-center">
            <Sparkles className="mx-auto text-gold" size={34} aria-hidden="true" />
            <h3 className="mt-4 font-heading text-2xl font-extrabold text-navy">No country matched that search</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Try a visa type like student, work, visit, business, Umrah, or Schengen. You can also contact us for a destination not listed here.
            </p>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function CountryVisaCard({ country, details }) {
  return (
    <motion.article variants={fadeUp} className="country-visa-card group relative rounded-[1.6rem] bg-white p-3">
      <div className="country-card-shell relative overflow-hidden rounded-[1.25rem] border border-navy/8 bg-white">
        <div className="relative h-44 overflow-hidden">
          <img
            src={country.image}
            alt={`${country.name} destination visa support`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/42 to-transparent" />
          <div className="country-hover-route" aria-hidden="true" />
          <Plane className="country-hover-plane" size={26} aria-hidden="true" />
          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/92 px-3 py-2 text-sm font-extrabold text-navy shadow-premium">
            <span className="text-xl" aria-hidden="true">{details.flag}</span>
            {details.region}
          </div>
        </div>

        <div className="relative p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="font-heading text-2xl font-extrabold text-navy">{country.name}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{country.summary}</p>
            </div>
            <span className="country-flag-badge" aria-hidden="true">{details.flag}</span>
          </div>

          <div className="mt-5 grid gap-3">
            <InfoRow icon={BadgeCheck} label="Visa types" value={details.visaTypes.join(' / ')} />
            <InfoRow icon={CalendarCheck} label="Support scope" value={details.validity} />
            <InfoRow icon={Clock3} label="Timeline" value={details.timeline} />
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {details.documents.map((document) => (
              <span key={document} className="rounded-full bg-porcelain px-3 py-1.5 text-xs font-extrabold text-navy/74">
                {document}
              </span>
            ))}
          </div>

          <div className="country-card-reveal mt-5 rounded-2xl bg-navy p-4 text-white">
            <div className="flex gap-3">
              <ClipboardCheck className="mt-0.5 shrink-0 text-lightGold" size={20} aria-hidden="true" />
              <p className="text-sm leading-6 text-white/82">{details.support}</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="focus-ring country-card-cta mt-5 flex items-center justify-between rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold text-navy shadow-gold"
          >
            Start enquiry
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-navy/8 bg-white px-3 py-3 shadow-sm">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-navy text-lightGold">
        <Icon size={18} aria-hidden="true" />
      </span>
      <div>
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">{label}</p>
        <p className="mt-1 text-sm font-bold leading-5 text-navy">{value}</p>
      </div>
    </div>
  );
}
