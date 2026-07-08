import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import { Button } from './Button';
import { company } from '../data/siteData';
import { SectionHeading } from './SectionHeading';

export function BrandVideoSection() {
  return (
    <section className="bg-porcelain px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionHeading
            align="left"
            eyebrow="Visa Journey Preview"
            title="A quick branded look at how we simplify travel"
            text="This short Capital Royal video highlights the visa, document, and travel support experience below the main hero animation."
          />
          <Button to="/contact">Start Your Visa Plan</Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="premium-card overflow-hidden rounded-[2rem] p-3"
        >
          <div className="relative overflow-hidden rounded-[1.5rem] bg-navy">
            <video
              className="aspect-video w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Capital Royal Services branded visa journey video"
            >
              <source src={company.brandVideo} type="video/webm" />
            </video>
            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-extrabold text-navy shadow-premium">
              <PlayCircle size={18} aria-hidden="true" />
              Capital Royal Preview
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
