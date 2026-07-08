import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
import { company } from '../data/siteData';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function ContactSection() {
  return (
    <section id="contact" className="overflow-hidden bg-porcelain px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto min-w-0 max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Start with a free visa consultation"
          text="Tell us your destination, purpose of travel, and target date. Our team supports clients across India with the most practical next step."
        />

        <div className="grid min-w-0 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="min-w-0 overflow-hidden rounded-[2rem] bg-navy text-white shadow-premium">
            <div className="h-72 bg-[url('https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center" role="img" aria-label="Modern business district office location" />
            <div className="space-y-5 p-7">
              <ContactItem icon={Phone} label="Phone" value={company.phone} href={`tel:${company.phone.replace(/\s/g, '')}`} />
              <ContactItem icon={MessageCircle} label="WhatsApp" value={company.whatsapp} href={`https://wa.me/${company.whatsapp.replace(/\D/g, '')}`} />
              <ContactItem icon={Mail} label="Email" value={company.email} href={`mailto:${company.email}`} />
              <ContactItem icon={MapPin} label="Office Address" value={company.address} />
              <div className="rounded-3xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-lightGold">Google Map</p>
                <iframe
                  title="Capital Royal Services office map"
                  src="https://www.google.com/maps?q=India&output=embed"
                  className="mt-4 h-64 w-full rounded-2xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          <form className="premium-card min-w-0 rounded-[2rem] p-6 md:p-8" aria-label="Visa consultation form">
            <div className="grid min-w-0 gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your full name" />
              <Field label="Phone / WhatsApp" name="phone" placeholder="+91 7698692693" />
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <Field label="Destination" name="destination" placeholder="Dubai, UK, Canada..." />
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-navy">Service Required</span>
                <select className="focus-ring w-full max-w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-slate-700 shadow-sm">
                  <option>Visit Visa</option>
                  <option>Tourist Visa</option>
                  <option>Business Visa</option>
                  <option>Student Visa</option>
                  <option>Work Visa</option>
                  <option>Family Visa</option>
                  <option>Umrah Package</option>
                  <option>Overseas Job Assistance</option>
                </select>
              </label>
              <label className="md:col-span-2">
                <span className="mb-2 block text-sm font-bold text-navy">Message</span>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Share your travel purpose, expected travel date, and any previous visa history."
                  className="focus-ring w-full max-w-full resize-none rounded-2xl border border-navy/10 bg-white px-4 py-3 text-slate-700 shadow-sm"
                />
              </label>
            </div>
            <Button className="mt-6 w-full sm:w-auto" icon>
              <Send size={17} aria-hidden="true" />
              Submit Enquiry
            </Button>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              This form prepares your enquiry for consultation. For urgent travel, call or WhatsApp our team directly.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = 'text', placeholder }) {
  return (
    <label className="min-w-0">
      <span className="mb-2 block text-sm font-bold text-navy">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="focus-ring w-full max-w-full rounded-2xl border border-navy/10 bg-white px-4 py-3 text-slate-700 shadow-sm"
      />
    </label>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-navy">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-lightGold">{label}</span>
        <span className="mt-1 block text-sm text-white/80">{value}</span>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} className="focus-ring flex items-center gap-4 rounded-2xl transition hover:bg-white/10">
        {content}
      </a>
    );
  }

  return <div className="flex items-center gap-4">{content}</div>;
}
