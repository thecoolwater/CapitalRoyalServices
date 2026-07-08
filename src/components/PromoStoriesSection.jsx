import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
          text="Original Capital Royal story creatives for social-style travel promotion, kept lightweight so the website stays quick."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid gap-6 lg:grid-cols-3"
        >
          {promoStories.map((story) => (
            <motion.article
              key={story.title}
              variants={fadeUp}
              className="group overflow-hidden rounded-3xl bg-navy p-3 shadow-premium"
            >
              <Link
                to="/contact"
                className="promo-story-frame relative block overflow-hidden rounded-[1.35rem] border-0 bg-navy p-0 shadow-none"
                aria-label={`${story.cta} for ${story.title}`}
              >
                <img
                  src={story.image}
                  alt={`${story.title} Capital Royal Services WebP travel promo`}
                  className="aspect-[2/3] w-full object-cover transition duration-700 group-hover:scale-[1.025]"
                  loading="eager"
                  decoding="async"
                />
              </Link>
              <div className="px-3 pb-4 pt-5 text-white">
                <h3 className="font-heading text-xl font-extrabold">{story.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/70">{story.text}</p>
                <Button to="/contact" className="mt-5 w-full" icon>
                  {story.cta}
                </Button>
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
