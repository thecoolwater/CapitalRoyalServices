import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { company, countries, navLinks, services } from '../data/siteData';

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <img
              src={company.logo}
              alt="Capital Royal Services logo"
              className="h-14 w-14 rounded-2xl object-cover shadow-gold"
              width="56"
              height="56"
            />
            <div>
              <p className="font-heading text-lg font-extrabold">Capital Royal Services</p>
              <p className="text-sm text-white/60">{company.tagline}</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/70">
            Premium visa, immigration, travel, Umrah, passport, documentation, and overseas job assistance with a personal consultancy experience.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a key={index} href={['https://www.facebook.com/capitalroyalservices', 'https://www.instagram.com/capitalroyalservices', 'https://www.linkedin.com/company/capital-royal-services'][index]} aria-label="Social media" className="focus-ring flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-gold hover:text-navy">
                <Icon size={18} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <FooterColumn title="Quick Links">
          {navLinks.slice(0, 6).map((link) => (
            <Link key={link.to} to={link.to} className="focus-ring rounded text-white/70 transition hover:text-lightGold">
              {link.label}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Services">
          {services.slice(0, 7).map((service) => (
            <Link key={service.title} to="/services" className="focus-ring rounded text-white/70 transition hover:text-lightGold">
              {service.title}
            </Link>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="focus-ring flex gap-3 rounded text-white/72 transition hover:text-lightGold">
            <Phone size={18} aria-hidden="true" />
            {company.phone}
          </a>
          <a href={`mailto:${company.email}`} className="focus-ring flex gap-3 rounded text-white/72 transition hover:text-lightGold">
            <Mail size={18} aria-hidden="true" />
            {company.email}
          </a>
          <p className="flex gap-3 text-white/72">
            <MapPin size={18} aria-hidden="true" />
            {company.address}
          </p>
          <p className="pt-2 text-xs uppercase tracking-[0.2em] text-lightGold">Popular countries</p>
          <p className="text-sm leading-7 text-white/60">{countries.slice(0, 6).map((country) => country.name.replace(', UAE', '')).join(', ')}</p>
        </FooterColumn>
      </div>
      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/56">
        Copyright {new Date().getFullYear()} Capital Royal Services. All rights reserved.
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
