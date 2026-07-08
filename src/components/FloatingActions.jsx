import { Phone } from 'lucide-react';
import { company } from '../data/siteData';

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:right-0 sm:top-1/2 sm:bottom-auto sm:-translate-y-1/2">
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        className="focus-ring flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] shadow-premium transition hover:-translate-y-1 sm:h-14 sm:w-16 sm:rounded-l-full sm:rounded-r-none sm:pl-2 sm:hover:w-20 sm:hover:translate-y-0"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={`${import.meta.env.BASE_URL}whatsapp-logo.svg`}
          alt=""
          className="h-7 w-7 sm:h-9 sm:w-9"
          width="36"
          height="36"
          aria-hidden="true"
        />
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
