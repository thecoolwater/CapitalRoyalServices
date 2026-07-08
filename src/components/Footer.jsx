import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Phone, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, countries, navLinks, services } from '../data/siteData';
import { Button } from './Button';

export function Footer() {
  return (
    <footer id="footer" className="travel-footer relative overflow-hidden bg-[#eef5f7] text-navy">
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-24 pt-20 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 shadow-premium">
            <Plane className="text-gold" size={20} aria-hidden="true" />
            <span className="text-sm font-extrabold uppercase tracking-[0.18em]">Dream. Plan. Travel.</span>
          </div>
          <h2 className="font-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            Your next destination starts with a clear visa plan.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
            Capital Royal Services helps travellers, families, students, professionals, and businesses prepare confident international journeys.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact">Apply Now</Button>
            <Button href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`} variant="outline">
              WhatsApp Us
            </Button>
          </div>
        </div>

        <div className="relative min-h-[280px]">
          <div className="footer-sun" aria-hidden="true" />
          <div className="footer-globe-card">
            <img src={company.logo} alt="Capital Royal Services logo" className="h-20 w-20 rounded-2xl object-cover shadow-gold" />
            <div>
              <p className="font-heading text-2xl font-extrabold text-navy">Capital Royal Services</p>
              <p className="mt-1 text-sm font-semibold text-slate-500">{company.tagline}</p>
              <p className="mt-4 text-sm leading-6 text-slate-600">Visit visa, tourist visa, business visa, student visa, work visa, Umrah, tours, passport, and documentation support.</p>
            </div>
          </div>
          <div className="footer-route" aria-hidden="true" />
          <Plane className="footer-route-plane text-gold" size={34} aria-hidden="true" />
        </div>
      </div>

      <div className="footer-mountains" aria-hidden="true">
        <span className="footer-mountain footer-mountain-a" />
        <span className="footer-mountain footer-mountain-b" />
        <span className="footer-mountain footer-mountain-c" />
      </div>

      <div className="relative bg-navy text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <FooterColumn title="Quick Links">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="focus-ring rounded text-white/72 transition hover:text-lightGold">
                {link.label}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Services">
            {services.slice(0, 7).map((service) => (
              <Link key={service.title} to="/services" className="focus-ring rounded text-white/72 transition hover:text-lightGold">
                {service.title}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Popular Countries">
            {countries.slice(0, 7).map((country) => (
              <Link key={country.name} to="/countries" className="focus-ring rounded text-white/72 transition hover:text-lightGold">
                {country.name}
              </Link>
            ))}
          </FooterColumn>

          <FooterColumn title="Contact">
            <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="focus-ring flex gap-3 rounded text-white/72 transition hover:text-lightGold">
              <Phone size={18} aria-hidden="true" />
              {company.phone}
            </a>
            <a href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`} className="focus-ring flex gap-3 rounded text-white/72 transition hover:text-lightGold">
              <MessageCircle size={18} aria-hidden="true" />
              WhatsApp
            </a>
            <a href={`mailto:${company.email}`} className="focus-ring flex gap-3 rounded text-white/72 transition hover:text-lightGold">
              <Mail size={18} aria-hidden="true" />
              {company.email}
            </a>
            <p className="flex gap-3 text-white/72">
              <MapPin size={18} aria-hidden="true" />
              {company.address}
            </p>
            <div className="mt-3 flex gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a key={index} href={['https://www.facebook.com/capitalroyalservices', 'https://www.instagram.com/capitalroyalservices', 'https://www.linkedin.com/company/capital-royal-services'][index]} aria-label="Social media" className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy">
                  <Icon size={18} aria-hidden="true" />
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>
        <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/56">
          Copyright {new Date().getFullYear()} Capital Royal Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="mb-5 font-heading text-lg font-bold text-white">{title}</h3>
      <div className="flex flex-col gap-3 text-sm">{children}</div>
    </div>
  );
}
