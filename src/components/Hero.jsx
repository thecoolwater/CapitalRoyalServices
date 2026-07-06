import { motion } from 'framer-motion';
import { BadgeCheck, Briefcase, Luggage, Plane, Stamp } from 'lucide-react';
import { Button } from './Button';
import { stats, trustBadges } from '../data/siteData';
import { StatGrid } from './StatGrid';

export function Hero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-navy-royal pt-28 text-white">
      <div className="absolute inset-0 map-grid opacity-70" aria-hidden="true" />
      <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-royal/30 blur-3xl" aria-hidden="true" />
      <div className="absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-gold/20 blur-3xl" aria-hidden="true" />

      <motion.svg
        className="absolute left-1/2 top-24 hidden h-[520px] w-[960px] -translate-x-1/2 opacity-35 lg:block"
        viewBox="0 0 960 520"
        fill="none"
        aria-hidden="true"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.35, y: 0 }}
        transition={{ duration: 1 }}
      >
        <path
          d="M83 305C230 165 367 444 503 281C645 111 747 179 887 91"
          stroke="#F3D487"
          strokeWidth="3"
          className="route-line"
        />
        <circle cx="83" cy="305" r="6" fill="#F3D487" />
        <circle cx="887" cy="91" r="6" fill="#F3D487" />
      </motion.svg>

      <motion.div
        className="absolute right-[14%] top-32 hidden rounded-full bg-white/10 p-4 text-lightGold backdrop-blur-md lg:block"
        animate={{ y: [0, -16, 0], rotate: [0, 4, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Plane size={34} />
      </motion.div>
      <FloatingElement className="left-[6%] top-[38%]" icon={Stamp} label="Approved" />
      <FloatingElement className="right-[7%] top-[48%]" icon={Briefcase} label="Business" delay={0.7} />
      <FloatingElement className="bottom-[18%] left-[12%]" icon={Luggage} label="Travel Ready" delay={1.2} />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 pb-20 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8 lg:pb-28">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-lightGold backdrop-blur"
          >
            <BadgeCheck size={17} aria-hidden="true" />
            Trusted visa, immigration and travel consultancy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-heading text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl"
          >
            Explore The World
            <span className="block text-white/90">With</span>
            <span className="gold-text block">Capital Royal Services</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-white/76"
          >
            Premium support for visit, tourist, business, student, work, family, Umrah, passport, documentation, tour packages, and overseas job assistance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Button to="/contact">Apply Now</Button>
            <Button to="/contact" variant="secondary">
              Free Consultation
            </Button>
          </motion.div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="glass-panel flex items-center gap-3 rounded-2xl px-4 py-3">
                <badge.icon className="text-lightGold" size={19} aria-hidden="true" />
                <span className="text-sm font-semibold text-white/80">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="glass-panel overflow-hidden rounded-[2rem] p-3">
            <img
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1100&q=82"
              alt="Visa consultant reviewing travel documents with a client"
              className="h-[440px] w-full rounded-[1.5rem] object-cover md:h-[560px]"
              fetchPriority="high"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-3xl bg-navy/78 p-5 text-white backdrop-blur-md">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-lightGold">Premium file care</p>
              <p className="mt-2 text-2xl font-extrabold">From consultation to approval support.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <StatGrid items={stats} light />
      </div>
    </section>
  );
}

function FloatingElement({ icon: Icon, label, className, delay = 0 }) {
  return (
    <motion.div
      className={`absolute z-10 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-bold text-white backdrop-blur-md md:flex ${className}`}
      animate={{ y: [0, -13, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay }}
      aria-hidden="true"
    >
      <Icon className="text-lightGold" size={19} />
      {label}
    </motion.div>
  );
}
