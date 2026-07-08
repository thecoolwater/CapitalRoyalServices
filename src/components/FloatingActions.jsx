import { Phone } from 'lucide-react';
import { company } from '../data/siteData';

export function FloatingActions() {
  return (
    <div className="fixed right-0 top-52 z-50 flex flex-col items-end gap-3 sm:top-1/2 sm:-translate-y-1/2">
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        className="focus-ring flex h-14 w-16 translate-x-6 items-center justify-center rounded-l-full bg-[#25D366] pl-2 shadow-premium transition hover:w-20 hover:translate-x-0 sm:translate-x-0"
        aria-label="Chat on WhatsApp"
      >
        <img
          src={`${import.meta.env.BASE_URL}whatsapp-logo.svg`}
          alt=""
          className="h-9 w-9"
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
