import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { processSteps } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function ProcessSection() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Visa Process"
          title="A calm, clear path from first call to approval support"
          text="Our workflow is designed to remove guesswork and keep every important document, deadline, and update visible."
        />

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-gold via-royal to-navy md:block" aria-hidden="true" />
          <div className="space-y-5">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="premium-card relative grid gap-5 rounded-3xl p-6 md:grid-cols-[4rem_1fr] md:p-7"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-navy font-heading text-2xl font-extrabold text-lightGold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-extrabold text-navy">{step.title}</h3>
                  <p className="mt-2 leading-7 text-slate-600">{step.text}</p>
                </div>
                {index < processSteps.length - 1 ? (
                  <ArrowDown className="absolute -bottom-5 left-9 z-10 hidden rounded-full bg-gold p-1 text-navy md:block" size={28} aria-hidden="true" />
                ) : null}
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
