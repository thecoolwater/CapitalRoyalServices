import { MessageCircle, Phone } from 'lucide-react';
import { company } from '../data/siteData';

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 hidden flex-col gap-3 sm:flex">
      <a
        href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:-translate-y-1"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle aria-hidden="true" />
      </a>
      <a
        href={`tel:${company.phone.replace(/\s/g, '')}`}
        className="focus-ring flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-premium transition hover:-translate-y-1"
        aria-label="Call Capital Royal Services"
      >
        <Phone aria-hidden="true" />
      </a>
    </div>
  );
}
