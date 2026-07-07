import { motion } from 'framer-motion';
import { whyChooseUs } from '../data/siteData';
import { fadeUp, staggerContainer } from '../animations/variants';
import { SectionHeading } from './SectionHeading';

export function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-navy px-4 py-20 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 map-grid opacity-40" aria-hidden="true" />
      <div className="absolute -right-28 top-10 h-80 w-80 rounded-full bg-royal/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Our Visa Consultancy"
          title="Why travellers across India choose Capital Royal Services"
          text="You get practical advice, organized documents, transparent communication, and a Surat-based team that supports applicants across India."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {whyChooseUs.map((item) => (
            <motion.article key={item.title} variants={fadeUp} className="glass-panel rounded-3xl p-6">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-navy">
                <item.icon size={25} aria-hidden="true" />
              </div>
              <h3 className="font-heading text-xl font-extrabold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
