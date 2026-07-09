import { motion } from 'framer-motion';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Filter,
  Globe2,
  GraduationCap,
  Landmark,
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

const featuredImages = Object.fromEntries(countries.map((country) => [country.name, country.image]));

const fallbackImages = {
  Asia: featuredImages.Singapore,
  Gulf: featuredImages['Dubai, UAE'],
  Europe: featuredImages.Germany,
  Schengen: featuredImages.Europe,
  Americas: featuredImages['United States'],
  Africa: featuredImages.Egypt,
  Oceania: featuredImages.Australia,
};

const countryCatalog = [
  country('United Arab Emirates', 'AE', 'Gulf', ['e-Visa', 'Visit', 'Business', 'Family'], 'Fast visit, tourist, business, and family travel support.', ['Passport', 'Photo', 'Travel plan'], 'UAE visit, business meetings, exhibitions, and family trip file review.', featuredImages['Dubai, UAE']),
  country('Saudi Arabia', 'SA', 'Gulf', ['e-Visa', 'Umrah', 'Visit', 'Work'], 'Umrah, family visit, business, and work-related file planning.', ['Passport', 'Photo', 'Hotel plan'], 'Umrah and Gulf travel guidance with purpose-based document checklists.', featuredImages['Saudi Arabia']),
  country('United Kingdom', 'GB', 'Europe', ['Sticker', 'Visit', 'Student', 'Work', 'Family'], 'Visitor, student, skilled worker, and family visa guidance.', ['Passport', 'Funds', 'Accommodation'], 'UK route selection, evidence review, and cover-letter oriented documentation.', featuredImages['United Kingdom']),
  country('United States', 'US', 'Americas', ['Sticker', 'Visit', 'Business', 'Student'], 'Profile-first support for visitor, business, student, and family travel.', ['Passport', 'Travel history', 'Purpose note'], 'Interview-focused preparation and application data review.', featuredImages['United States']),
  country('Germany', 'DE', 'Schengen', ['Sticker', 'Schengen', 'Student', 'Work'], 'Schengen, study, work, and opportunity-card documentation support.', ['Passport', 'Insurance', 'Itinerary'], 'Germany-led Schengen file planning with appointment-ready evidence.', featuredImages.Germany),
  country('Canada', 'CA', 'Americas', ['Sticker', 'Visit', 'Student', 'Family', 'Work'], 'Visitor, study, family, and work pathway document review.', ['Passport', 'Funds', 'Invitation'], 'Eligibility and evidence gap review for Canada travel and study plans.', featuredImages.Canada),
  country('Australia', 'AU', 'Oceania', ['e-Visa', 'Visit', 'Student', 'Work'], 'Tourist, student, and skilled route preparation.', ['Passport', 'Funds', 'Purpose proof'], 'Evidence planning and document checks for Australia applications.', featuredImages.Australia),
  country('Singapore', 'SG', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Short-stay tourism, meetings, and family travel guidance.', ['Passport', 'Hotel plan', 'Return plan'], 'Simple checklist support for clean Singapore visit and business files.', featuredImages.Singapore),
  country('Malaysia', 'MY', 'Asia', ['e-Visa', 'Visit', 'Student', 'Business'], 'Visit, student, business, and family travel assistance.', ['Passport', 'Photo', 'Purpose proof'], 'Practical Malaysia file review for leisure, study, and business travel.', featuredImages.Malaysia),
  country('Japan', 'JP', 'Asia', ['Sticker', 'Visit', 'Business', 'Student'], 'Detail-focused support for Japan tourism, business, and study.', ['Passport', 'Schedule', 'Funds'], 'Organized document planning for Japan travel and invitations.', featuredImages.Japan),
  country('Egypt', 'EG', 'Africa', ['e-Visa', 'Visit', 'Business'], 'Tour, travel, and business visit documentation support.', ['Passport', 'Photo', 'Itinerary'], 'Trip-plan review for Egypt holidays, historic tours, and meetings.', featuredImages.Egypt),
  country('Schengen Europe', 'EU', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business', 'Family'], 'Multi-country Schengen itinerary and file planning.', ['Passport', 'Insurance', 'Bookings'], 'Route selection, itinerary logic, and embassy-ready Schengen documents.', featuredImages.Europe),
  country('Thailand', 'TH', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Holiday, family trip, and business visit support.', ['Passport', 'Photo', 'Hotel plan'], 'Travel-purpose review for Thailand tourism and short business visits.'),
  country('Vietnam', 'VN', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Tourist and business e-visa guidance.', ['Passport', 'Photo', 'Travel dates'], 'Quick document checklist support for Vietnam travel.'),
  country('Sri Lanka', 'LK', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Tourist, family, and short business travel support.', ['Passport', 'Travel dates', 'Hotel plan'], 'Simple Sri Lanka travel file planning for Indian travellers.'),
  country('Indonesia', 'ID', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Bali holidays, tourist visits, and business travel guidance.', ['Passport', 'Photo', 'Return plan'], 'Purpose-based support for Indonesia and Bali travel.'),
  country('Oman', 'OM', 'Gulf', ['e-Visa', 'Visit', 'Business', 'Family'], 'Gulf visit, family, and business travel preparation.', ['Passport', 'Photo', 'Invitation'], 'Checklist-led Oman visa and travel document review.'),
  country('Bahrain', 'BH', 'Gulf', ['e-Visa', 'Visit', 'Business'], 'Short stay, business, and family visit guidance.', ['Passport', 'Photo', 'Travel plan'], 'Clean Bahrain e-visa preparation and purpose review.'),
  country('Kuwait', 'KW', 'Gulf', ['e-Visa', 'Visit', 'Business', 'Work'], 'Visit, business, and work-related document support.', ['Passport', 'Photo', 'Purpose proof'], 'Kuwait file planning for Gulf travel and work documentation.'),
  country('Qatar', 'QA', 'Gulf', ['e-Visa', 'Visit', 'Business', 'Family'], 'Family visits, meetings, tourism, and event travel.', ['Passport', 'Hotel plan', 'Return plan'], 'Qatar route guidance for visit and business travel.'),
  country('Azerbaijan', 'AZ', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Tourist and business e-visa support.', ['Passport', 'Travel dates', 'Photo'], 'Azerbaijan document checklist and application planning.'),
  country('Georgia', 'GE', 'Europe', ['e-Visa', 'Visit', 'Business'], 'Leisure, family, and business travel review.', ['Passport', 'Travel history', 'Funds'], 'Georgia travel eligibility and documentation guidance.'),
  country('Turkey', 'TR', 'Europe', ['e-Visa', 'Visit', 'Business'], 'Tourist, business, and family travel support.', ['Passport', 'Hotel plan', 'Return plan'], 'Turkey travel-file review and purpose-based guidance.'),
  country('Hong Kong', 'HK', 'Asia', ['Visit', 'Business'], 'Business, leisure, and family trip guidance.', ['Passport', 'Travel plan', 'Purpose proof'], 'Hong Kong travel document and itinerary planning.'),
  country('South Korea', 'KR', 'Asia', ['e-Visa', 'Visit', 'Business', 'Student'], 'Tourism, meetings, study, and event travel support.', ['Passport', 'Photo', 'Schedule'], 'South Korea trip evidence and invitation guidance.'),
  country('Cambodia', 'KH', 'Asia', ['e-Visa', 'Visit', 'Business'], 'Tourist and short business travel preparation.', ['Passport', 'Photo', 'Travel dates'], 'Cambodia e-visa checklist support.'),
  country('Laos', 'LA', 'Asia', ['e-Visa', 'Visit'], 'Tourist travel and itinerary support.', ['Passport', 'Photo', 'Hotel plan'], 'Laos travel checklist review.'),
  country('Morocco', 'MA', 'Africa', ['Visit', 'Business'], 'Tourism, business, and event travel guidance.', ['Passport', 'Funds', 'Travel plan'], 'Morocco document support and travel-purpose review.'),
  country('Kenya', 'KE', 'Africa', ['e-Visa', 'Visit', 'Business'], 'Tourism, safari travel, and business visit support.', ['Passport', 'Photo', 'Travel dates'], 'Kenya e-visa and itinerary checklist support.'),
  country('Tanzania', 'TZ', 'Africa', ['e-Visa', 'Visit', 'Business'], 'Tourist and business travel file planning.', ['Passport', 'Photo', 'Hotel plan'], 'Tanzania travel document review.'),
  country('Uganda', 'UG', 'Africa', ['e-Visa', 'Visit', 'Business'], 'Visit and business e-visa preparation.', ['Passport', 'Photo', 'Travel plan'], 'Uganda travel checklist and purpose review.'),
  country('Ethiopia', 'ET', 'Africa', ['e-Visa', 'Visit', 'Business'], 'Tourism and business travel guidance.', ['Passport', 'Photo', 'Return plan'], 'Ethiopia e-visa document planning.'),
  country('Rwanda', 'RW', 'Africa', ['e-Visa', 'Visit', 'Business'], 'Tourist and meeting travel support.', ['Passport', 'Travel dates', 'Hotel plan'], 'Rwanda e-visa checklist assistance.'),
  country('South Africa', 'ZA', 'Africa', ['Sticker', 'Visit', 'Business'], 'Tourist, family, and business travel file support.', ['Passport', 'Funds', 'Itinerary'], 'South Africa document review and travel-purpose planning.'),
  country('New Zealand', 'NZ', 'Oceania', ['e-Visa', 'Visit', 'Student', 'Work'], 'Tourism, study, and work route guidance.', ['Passport', 'Funds', 'Purpose proof'], 'New Zealand evidence and eligibility planning.'),
  country('France', 'FR', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business'], 'Tourist, family, and business Schengen support.', ['Passport', 'Insurance', 'Bookings'], 'France Schengen itinerary and document preparation.'),
  country('Netherlands', 'NL', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business'], 'Schengen visitor and business file planning.', ['Passport', 'Insurance', 'Funds'], 'Netherlands appointment-ready checklist support.'),
  country('Italy', 'IT', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business'], 'Tourism, family, and business Schengen assistance.', ['Passport', 'Bookings', 'Cover letter'], 'Italy travel itinerary and documentation planning.'),
  country('Spain', 'ES', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business'], 'Tourist, family, and meetings travel support.', ['Passport', 'Insurance', 'Itinerary'], 'Spain Schengen evidence and travel-plan review.'),
  country('Switzerland', 'CH', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business'], 'Tourism, business, and family Schengen guidance.', ['Passport', 'Funds', 'Travel plan'], 'Switzerland-led Schengen file preparation.'),
  country('Poland', 'PL', 'Schengen', ['Sticker', 'Schengen', 'Student', 'Work'], 'Study, work, visitor, and Schengen file support.', ['Passport', 'Insurance', 'Purpose proof'], 'Poland route planning for study, work, and travel.'),
  country('Austria', 'AT', 'Schengen', ['Sticker', 'Schengen', 'Visit', 'Business'], 'Schengen tourism and business support.', ['Passport', 'Bookings', 'Insurance'], 'Austria itinerary and file review.'),
  country('Greece', 'GR', 'Schengen', ['Sticker', 'Schengen', 'Visit'], 'Holiday and family travel guidance.', ['Passport', 'Bookings', 'Funds'], 'Greece Schengen travel-plan preparation.'),
  country('Maldives', 'MV', 'Asia', ['Visit', 'Holiday'], 'Honeymoon, leisure, and resort travel guidance.', ['Passport', 'Hotel plan', 'Return plan'], 'Maldives trip checklist and travel planning.'),
  country('Nepal', 'NP', 'Asia', ['Visit', 'Business'], 'Short leisure, family, and business travel guidance.', ['Passport', 'Travel plan', 'Purpose proof'], 'Nepal travel documentation support.'),
  country('Brazil', 'BR', 'Americas', ['e-Visa', 'Visit', 'Business'], 'Tourism and business visit support.', ['Passport', 'Photo', 'Travel plan'], 'Brazil e-visa and itinerary guidance.'),
  country('Mexico', 'MX', 'Americas', ['Visit', 'Business'], 'Tourism and business travel planning.', ['Passport', 'Travel history', 'Funds'], 'Mexico travel eligibility and document review.'),
  country('Argentina', 'AR', 'Americas', ['Visit', 'Business'], 'Tourist and business travel support.', ['Passport', 'Travel plan', 'Funds'], 'Argentina travel-purpose document guidance.'),
  country('Peru', 'PE', 'Americas', ['Visit', 'Business'], 'Tourism and business visit preparation.', ['Passport', 'Itinerary', 'Funds'], 'Peru travel checklist support.'),
];

const deliveryFilters = ['Any time', 'Planned travel', 'Urgent review'];
const typeFilters = ['All', 'e-Visa', 'Sticker', 'Schengen', 'Visit', 'Business', 'Student', 'Work', 'Umrah'];
const regionFilters = ['All regions', 'Asia', 'Gulf', 'Europe', 'Schengen', 'Americas', 'Africa', 'Oceania'];
const documentFilters = ['Any documents', 'Passport only', 'Funds', 'Insurance', 'Invitation'];

function country(name, code, region, visaTypes, summary, documents, support, image) {
  return {
    name,
    code,
    region,
    visaTypes,
    summary,
    documents,
    support,
    image: image || fallbackImages[region] || fallbackImages.Asia,
  };
}

const searchableText = (item) =>
  [item.name, item.code, item.region, item.summary, item.support, ...item.visaTypes, ...item.documents]
    .join(' ')
    .toLowerCase();

export function CountriesExplorer() {
  const [query, setQuery] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [regionFilter, setRegionFilter] = useState('All regions');
  const [documentFilter, setDocumentFilter] = useState('Any documents');
  const [deliveryFilter, setDeliveryFilter] = useState('Any time');

  const visibleCountries = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return countryCatalog.filter((item) => {
      const matchesQuery = !normalizedQuery || searchableText(item).includes(normalizedQuery);
      const matchesType = typeFilter === 'All' || item.visaTypes.includes(typeFilter);
      const matchesRegion = regionFilter === 'All regions' || item.region === regionFilter;
      const matchesDocuments =
        documentFilter === 'Any documents' ||
        (documentFilter === 'Passport only'
          ? item.documents.length <= 3 && item.documents.includes('Passport')
          : item.documents.includes(documentFilter));

      return matchesQuery && matchesType && matchesRegion && matchesDocuments;
    });
  }, [documentFilter, query, regionFilter, typeFilter]);

  return (
    <main className="countries-page relative overflow-hidden bg-porcelain">
      <section className="relative isolate overflow-hidden bg-navy-royal px-4 pb-10 pt-32 text-white sm:px-6 sm:pt-36 lg:px-8 lg:pb-16">
        <div className="absolute inset-0 map-grid opacity-40" aria-hidden="true" />
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-royal/35 blur-3xl" aria-hidden="true" />
        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

        <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="min-w-0">
            <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.22em] text-lightGold backdrop-blur">
              Countries
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Visa support for popular countries from India
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 sm:text-lg sm:leading-8">
              Explore tourist, visit, business, student, work, family, Umrah, Schengen, passport, and documentation guidance with a clean route-first experience.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <HeroMetric icon={Globe2} value="50+" label="routes covered" />
              <HeroMetric icon={ShieldCheck} value="India-wide" label="remote support" />
              <HeroMetric icon={Clock3} value="Clear" label="timeline planning" />
            </div>
          </div>

          <div className="countries-search-panel rounded-[1.75rem] border border-white/12 bg-white p-4 text-navy shadow-premium sm:p-5">
            <div className="flex items-center gap-3 rounded-2xl bg-porcelain px-4 py-4 ring-1 ring-navy/8 transition focus-within:ring-4 focus-within:ring-gold/30">
              <Search className="shrink-0 text-gold" size={22} aria-hidden="true" />
              <label className="sr-only" htmlFor="country-search">Search countries or visa types</label>
              <input
                id="country-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search country, Schengen, student, work..."
                className="min-w-0 flex-1 border-0 bg-transparent text-base font-bold text-navy outline-none placeholder:text-slate-400"
              />
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <FilterSelect label="Visa delivery" value={deliveryFilter} onChange={setDeliveryFilter} options={deliveryFilters} />
              <FilterSelect label="Type" value={typeFilter} onChange={setTypeFilter} options={typeFilters} />
              <FilterSelect label="Documents" value={documentFilter} onChange={setDocumentFilter} options={documentFilters} />
              <FilterSelect label="Region" value={regionFilter} onChange={setRegionFilter} options={regionFilters} />
            </div>

            <div className="countries-filter-scroll mt-4 flex gap-2 overflow-x-auto pb-1">
              {typeFilters.slice(1).map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setTypeFilter(filter)}
                  className={`focus-ring shrink-0 rounded-full px-4 py-2 text-sm font-extrabold transition ${
                    typeFilter === filter
                      ? 'bg-navy text-white shadow-premium'
                      : 'bg-porcelain text-navy/72 hover:bg-gold hover:text-navy'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { icon: MapPin, label: `${visibleCountries.length} matched destinations` },
              { icon: FileCheck2, label: 'Checklist-led file review' },
              { icon: CheckCircle2, label: 'Purpose-based route selection' },
              { icon: CalendarCheck, label: deliveryFilter === 'Any time' ? 'Flexible travel planning' : deliveryFilter },
            ].map((item) => (
              <div key={item.label} className="countries-insight-card rounded-2xl border border-navy/8 bg-white px-4 py-4 shadow-sm">
                <item.icon className="mb-3 text-gold" size={22} aria-hidden="true" />
                <p className="text-sm font-extrabold text-navy">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-gold">Destination Explorer</p>
              <h2 className="mt-3 font-heading text-3xl font-extrabold text-navy md:text-4xl">
                Country-specific visa guidance, organized clearly
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-slate-600">
              Cards include visa style, common document needs, and how Capital Royal Services can support your file from enquiry to document review.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {visibleCountries.map((item) => (
              <CountryVisaCard key={`${item.code}-${item.name}`} item={item} />
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
    </main>
  );
}

function HeroMetric({ icon: Icon, value, label }) {
  return (
    <div className="rounded-2xl border border-white/14 bg-white/10 p-4 backdrop-blur">
      <Icon className="mb-3 text-lightGold" size={22} aria-hidden="true" />
      <p className="font-heading text-2xl font-extrabold">{value}</p>
      <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/64">{label}</p>
    </div>
  );
}

function FilterSelect({ label, value, onChange, options }) {
  return (
    <label className="min-w-0">
      <span className="mb-2 flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-slate-400">
        <Filter size={13} aria-hidden="true" />
        {label}
      </span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-sm font-extrabold text-navy outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/20"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function CountryVisaCard({ item }) {
  return (
    <motion.article variants={fadeUp} className="country-visa-card group relative rounded-[1.6rem] bg-white p-2">
      <div className="country-card-shell relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-[1.25rem] border border-navy/8 bg-white">
        <div className="relative h-36 overflow-hidden">
          <img
            src={item.image}
            alt={`${item.name} visa and travel support`}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/42 to-transparent" />
          <div className="country-hover-route" aria-hidden="true" />
          <Plane className="country-hover-plane" size={26} aria-hidden="true" />
          <div className="absolute left-4 top-4 rounded-2xl bg-white/92 px-3 py-2 text-center text-sm font-extrabold text-navy shadow-premium">
            {item.code}
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4 text-white">
            <div className="min-w-0">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-lightGold">{item.region}</p>
              <h3 className="mt-1 truncate font-heading text-2xl font-extrabold">{item.name}</h3>
            </div>
            <span className="rounded-full bg-white/18 px-3 py-1 text-xs font-extrabold backdrop-blur">
              {item.visaTypes[0]}
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-sm leading-6 text-slate-600">{item.summary}</p>

          <div className="mt-5 grid gap-3">
            <InfoRow icon={BadgeCheck} label="Visa styles" value={item.visaTypes.join(' / ')} />
            <InfoRow icon={ClipboardCheck} label="Documents" value={item.documents.join(' / ')} />
            <InfoRow icon={Clock3} label="Support" value="Checklist, timeline, file review" />
          </div>

          <div className="country-card-reveal mt-5 rounded-2xl bg-navy p-4 text-white">
            <div className="flex gap-3">
              <BriefcaseBusiness className="mt-0.5 shrink-0 text-lightGold" size={20} aria-hidden="true" />
              <p className="text-sm leading-6 text-white/82">{item.support}</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="focus-ring country-card-cta mt-auto flex items-center justify-between rounded-2xl bg-gold px-4 py-3 text-sm font-extrabold text-navy shadow-gold"
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
      <div className="min-w-0">
        <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-slate-400">{label}</p>
        <p className="mt-1 line-clamp-2 text-sm font-bold leading-5 text-navy">{value}</p>
      </div>
    </div>
  );
}
