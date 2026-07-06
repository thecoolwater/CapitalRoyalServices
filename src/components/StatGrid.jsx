import { motion } from 'framer-motion';
import { useCountUp } from '../hooks/useCountUp';

export function StatGrid({ items, light = false }) {
  return (
    <div className={`grid gap-4 sm:grid-cols-2 lg:grid-cols-4 ${light ? '' : 'mx-auto max-w-6xl'}`}>
      {items.map((item, index) => (
        <StatCard key={item.label} item={item} index={index} light={light} />
      ))}
    </div>
  );
}

function StatCard({ item, index, light }) {
  const { ref, value } = useCountUp(item.value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      className={`rounded-3xl p-6 text-center ${light ? 'glass-panel' : 'premium-card'}`}
    >
      <p className={`font-heading text-4xl font-extrabold ${light ? 'text-lightGold' : 'text-navy'}`}>
        {value}
        {item.suffix}
      </p>
      <p className={`mt-2 text-sm font-bold uppercase tracking-[0.18em] ${light ? 'text-white/70' : 'text-slate-500'}`}>{item.label}</p>
    </motion.div>
  );
}
