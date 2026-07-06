import { motion } from 'framer-motion';

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="relative overflow-hidden bg-navy-royal px-4 pb-20 pt-36 text-white sm:px-6 lg:px-8">
      <div className="absolute inset-0 map-grid opacity-50" aria-hidden="true" />
      <div className="absolute -right-16 top-10 h-80 w-80 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-lightGold">{eyebrow}</p>
        <h1 className="font-heading text-4xl font-extrabold leading-tight md:text-6xl">{title}</h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76">{text}</p>
      </motion.div>
    </section>
  );
}
