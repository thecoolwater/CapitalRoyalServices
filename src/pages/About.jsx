import { Award, Globe2, ShieldCheck, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { PageHero } from '../components/PageHero';
import { SectionHeading } from '../components/SectionHeading';
import { company, stats } from '../data/siteData';
import { StatGrid } from '../components/StatGrid';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';

export function About() {
  const values = [
    { title: 'Trust first', text: 'Every recommendation is based on eligibility, documentation quality, and a realistic timeline.', icon: ShieldCheck },
    { title: 'Global routes', text: 'We support popular travel, study, work, Umrah, and family destinations across major regions.', icon: Globe2 },
    { title: 'Human support', text: 'Clients are guided by people who explain forms, checklists, appointments, and next steps clearly.', icon: Users },
    { title: 'Premium care', text: 'Our service experience is organized, responsive, confidential, and polished from the first enquiry.', icon: Award },
  ];

  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Visa consultant helping travellers across India"
        text={`${company.name} is a visa and travel consultancy helping individuals, families, students, professionals, and businesses across India prepare stronger international travel applications.`}
      />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Approach"
              title="Professional visa guidance without confusion"
              text="Visa and immigration processes can feel complex because every destination has its own rules, evidence standards, and processing habits. We translate that complexity into a clear, India-friendly plan."
            />
            <p className="text-lg leading-8 text-slate-600">
              From short visits to student and work pathways, our role is to help clients across India understand requirements, prepare clean documentation, and move through the process with fewer surprises.
            </p>
          </div>
          <motion.img
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=82"
            alt="Professional consultancy meeting for travel and visa planning"
            className="h-[480px] w-full rounded-[2rem] object-cover shadow-premium"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-porcelain px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <StatGrid items={stats} />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <article key={value.title} className="premium-card rounded-3xl p-6">
                <value.icon className="mb-5 text-gold" size={32} aria-hidden="true" />
                <h3 className="font-heading text-xl font-extrabold text-navy">{value.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUsSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}
