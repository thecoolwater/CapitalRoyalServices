import { motion } from 'framer-motion';
import { Plane } from 'lucide-react';
import { promoStories } from '../data/siteData';
import { fadeUp, staggerContainer } from '../animations/variants';
import { SectionHeading } from './SectionHeading';
import { Button } from './Button';

export function PromoStoriesSection() {
  return (
    <section id="promo-stories" className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,154,61,0.12),transparent_28%),radial-gradient(circle_at_85%_15%,rgba(23,102,209,0.12),transparent_30%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Travel Promo Stories"
          title="Lightweight branded WebP visuals for faster loading"
          text="Inspired by vertical travel promo stories, these original Capital Royal visuals keep the site premium without adding heavy video files."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {promoStories.map((story, index) => (
            <motion.article
              key={story.title}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-3xl bg-navy p-3 shadow-premium"
            >
              <div className="promo-story-frame relative overflow-hidden rounded-[1.35rem] bg-navy">
                <img
                  src={story.image}
                  alt={`${story.title} Capital Royal Services WebP travel promo`}
                  className="aspect-[2/3] w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/72 via-transparent to-transparent" />
                <div className="promo-plane pointer-events-none absolute right-8 top-10 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-gold">
                  <Plane size={24} aria-hidden="true" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <h3 className="font-heading text-2xl font-extrabold">{story.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/76">{story.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Button to="/contact">Use These Creatives</Button>
        </div>
      </div>
    </section>
  );
}
