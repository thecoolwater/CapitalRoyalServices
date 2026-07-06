import { motion } from 'framer-motion';
import { services } from '../data/siteData';
import { fadeUp, staggerContainer } from '../animations/variants';
import { SectionHeading } from './SectionHeading';

export function ServicesSection({ limit }) {
  const visibleServices = limit ? services.slice(0, limit) : services;

  return (
    <section className="bg-porcelain px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Services"
          title="Complete visa and travel support under one premium roof"
          text="Every service is structured around clear eligibility guidance, correct documentation, careful review, and responsive client communication."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-4"
        >
          {visibleServices.map((service) => (
            <motion.article
              key={service.title}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.01 }}
              className="premium-card group rounded-3xl p-6 transition"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy text-lightGold transition group-hover:bg-gold group-hover:text-navy">
                <service.icon size={26} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-extrabold text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
