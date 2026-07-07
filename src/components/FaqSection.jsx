import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqs } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function FaqSection() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Visa FAQ"
          title="Answers before you begin"
          text="Practical notes about timelines, approvals, documents, and consultation before you start your visa application from anywhere in India."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <article key={faq.question} className="premium-card rounded-3xl">
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 rounded-3xl px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : index)}
                >
                  <span className="font-heading text-lg font-extrabold text-navy">{faq.question}</span>
                  <ChevronDown className={`shrink-0 text-gold transition ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-7 text-slate-600">{faq.answer}</p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
