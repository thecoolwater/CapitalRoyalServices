import { motion } from 'framer-motion';
import { BriefcaseBusiness, FileCheck2, Plane, Stamp } from 'lucide-react';
import { company } from '../data/siteData';

export function HeroTravelScene() {
  return (
    <div className="hero-travel-scene relative min-h-[430px] overflow-hidden rounded-[1.5rem] bg-navy text-white sm:aspect-[4/3] sm:min-h-[390px]">
      <div className="hero-scene-grid" aria-hidden="true" />
      <div className="hero-scene-glow hero-scene-glow-a" aria-hidden="true" />
      <div className="hero-scene-glow hero-scene-glow-b" aria-hidden="true" />

      <div className="relative z-10 flex h-full min-h-[430px] flex-col justify-between p-4 sm:min-h-0 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={company.logo}
              alt=""
              className="h-12 w-12 rounded-xl object-cover shadow-gold sm:h-14 sm:w-14"
              width="56"
              height="56"
              aria-hidden="true"
            />
            <div>
              <p className="font-heading text-xs font-extrabold uppercase tracking-[0.06em] text-lightGold sm:text-sm sm:tracking-[0.08em]">
                Capital Royal Services
              </p>
              <p className="text-xs font-bold text-white/70">{company.tagline}</p>
            </div>
          </div>
          <span className="hidden rounded-full bg-gold px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-navy shadow-gold sm:inline-flex">
            Apply Now
          </span>
        </div>

        <div className="grid items-end gap-5 sm:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 inline-flex max-w-full rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.12em] text-lightGold sm:text-xs sm:tracking-[0.18em]">
              Visit - Student - Work - Umrah
            </p>
            <h2 className="font-heading text-[2.6rem] font-extrabold leading-[0.96] sm:text-4xl xl:text-5xl">
              Visa & Travel
              <span className="block text-lightGold">Made Simple</span>
            </h2>
          </div>

          <div className="relative hidden h-48 sm:block">
            <motion.div
              className="hero-passport-card hero-passport-card-a"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Stamp size={34} aria-hidden="true" />
              <span>Passport</span>
            </motion.div>
            <motion.div
              className="hero-passport-card hero-passport-card-b"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.25 }}
            >
              <FileCheck2 size={34} aria-hidden="true" />
              <span>Visa File</span>
            </motion.div>
            <motion.div
              className="hero-go-card"
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
            >
              GO
              <span>Ready</span>
            </motion.div>
          </div>
        </div>

        <div className="grid gap-3 text-[11px] font-extrabold uppercase tracking-wide text-white sm:grid-cols-3 sm:text-xs">
          <span className="hero-service-chip">
            <Stamp size={16} aria-hidden="true" />
            Passport
          </span>
          <span className="hero-service-chip">
            <FileCheck2 size={16} aria-hidden="true" />
            Visa File
          </span>
          <span className="hero-service-chip">
            <BriefcaseBusiness size={16} aria-hidden="true" />
            Flight Ready
          </span>
        </div>
      </div>

      <svg className="hero-flight-path" viewBox="0 0 820 360" aria-hidden="true">
        <path d="M55 265C185 123 313 307 446 171C562 51 658 92 780 45" />
      </svg>
      <motion.div
        className="hero-scene-plane hidden sm:block"
        animate={{ x: [-18, 18, -18], y: [10, -10, 10], rotate: [-10, 2, -10] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <Plane size={54} />
      </motion.div>
    </div>
  );
}
