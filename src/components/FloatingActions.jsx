import { Phone } from 'lucide-react';
import { company } from '../data/siteData';

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-0 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2">
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        className="focus-ring group flex min-h-14 items-center gap-3 rounded-full bg-[#25D366] px-3 py-2 text-white shadow-premium transition hover:-translate-y-1 sm:rounded-l-full sm:rounded-r-none sm:py-3 sm:pl-4 sm:pr-5 sm:hover:translate-y-0"
        aria-label={`Chat on WhatsApp at ${company.whatsapp}`}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${import.meta.env.BASE_URL}whatsapp-logo.svg`}
          alt=""
          className="h-8 w-8 shrink-0 sm:h-9 sm:w-9"
          width="36"
          height="36"
          aria-hidden="true"
        />
        <span className="hidden text-left leading-tight sm:block">
          <span className="block text-xs font-extrabold uppercase tracking-[0.14em]">WhatsApp</span>
          <span className="block whitespace-nowrap text-sm font-bold">{company.whatsapp}</span>
        </span>
      </a>
      <a
        href={`tel:${company.phone.replace(/\s/g, '')}`}
        className="focus-ring hidden h-14 w-16 items-center justify-center rounded-l-full bg-gold pl-2 text-navy shadow-premium transition hover:w-20 sm:flex"
        aria-label="Call Capital Royal Services"
      >
        <Phone aria-hidden="true" />
      </a>
    </div>
  );
}
