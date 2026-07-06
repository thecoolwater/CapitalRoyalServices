import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export function SectionHeading({ eyebrow, title, text, align = 'center', light = false }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center mx-auto';

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      className={`mb-12 flex max-w-3xl flex-col ${alignment}`}
    >
      {eyebrow ? (
        <span
          className={`mb-3 rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-[0.24em] ${
            light ? 'bg-white/10 text-lightGold' : 'bg-gold/10 text-gold'
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2 className={`font-heading text-3xl font-extrabold leading-tight md:text-5xl ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {text ? <p className={`mt-5 text-base leading-8 md:text-lg ${light ? 'text-white/76' : 'text-slate-600'}`}>{text}</p> : null}
    </motion.div>
  );
}
