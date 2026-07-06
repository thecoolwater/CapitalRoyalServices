import { motion } from 'framer-motion';
import { countries } from '../data/siteData';
import { fadeUp, staggerContainer } from '../animations/variants';
import { Button } from './Button';
import { SectionHeading } from './SectionHeading';

export function DestinationsSection({ limit }) {
  const visibleCountries = limit ? countries.slice(0, limit) : countries;

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Popular Destinations"
          title="Country-specific guidance for the places clients ask for most"
          text="From Gulf travel and Umrah to Schengen, North America, Asia-Pacific, and study destinations, our team helps you prepare the right file for the right route."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {visibleCountries.map((country) => (
            <motion.article
              key={country.name}
              variants={fadeUp}
              className="group overflow-hidden rounded-3xl bg-navy shadow-premium"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={country.image}
                  alt={`${country.name} destination skyline`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/36 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-heading text-2xl font-extrabold">{country.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/76">{country.summary}</p>
                  <Button to="/contact" variant="secondary" className="mt-5 px-5 py-2.5">
                    View Details
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
