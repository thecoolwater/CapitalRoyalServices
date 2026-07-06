import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export function AnimatedSection({ as = 'section', children, className = '', delay = 0, ...props }) {
  const MotionTag = motion[as] || motion.section;

  return (
    <MotionTag
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-90px' }}
      transition={{ delay }}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  );
}
