import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { testimonials } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 5500);
    return () => window.clearInterval(timer);
  }, []);

  const move = (direction) => {
    setActive((index) => (index + direction + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-porcelain px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Real clients. Clear guidance. Confident journeys."
          text="Clients choose Capital Royal Services for organized documentation, responsive communication, and professional support at every stage."
        />

        <div className="premium-card relative overflow-hidden rounded-[2rem] p-6 md:p-10">
          <AnimatePresence mode="wait">
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.45 }}
              className="grid items-center gap-8 md:grid-cols-[13rem_1fr]"
            >
              <img
                src={testimonial.image}
                alt={`${testimonial.name}, Capital Royal Services client`}
                className="h-52 w-52 rounded-3xl object-cover shadow-premium"
                loading="lazy"
              />
              <div>
                <div className="mb-5 flex gap-1 text-gold" aria-label={`${testimonial.rating} star rating`}>
                  {Array.from({ length: testimonial.rating }).map((_, index) => (
                    <Star key={index} size={20} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="text-xl font-semibold leading-9 text-navy md:text-2xl">"{testimonial.review}"</blockquote>
                <div className="mt-6">
                  <p className="font-heading text-lg font-extrabold text-navy">{testimonial.name}</p>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-royal">{testimonial.country}</p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  className={`focus-ring h-2.5 rounded-full transition ${active === index ? 'w-9 bg-gold' : 'w-2.5 bg-navy/20'}`}
                  aria-label={`Show testimonial from ${item.name}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <div className="flex gap-3">
              <SliderButton label="Previous testimonial" onClick={() => move(-1)} icon={ChevronLeft} />
              <SliderButton label="Next testimonial" onClick={() => move(1)} icon={ChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderButton({ label, onClick, icon: Icon }) {
  return (
    <button
      type="button"
      className="focus-ring flex h-11 w-11 items-center justify-center rounded-full bg-navy text-white transition hover:bg-gold hover:text-navy"
      aria-label={label}
      onClick={onClick}
    >
      <Icon aria-hidden="true" />
    </button>
  );
}
