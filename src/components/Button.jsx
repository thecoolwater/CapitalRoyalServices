import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-gold text-navy shadow-gold hover:-translate-y-0.5 hover:bg-lightGold focus-visible:outline-gold',
  secondary:
    'border border-white/30 bg-white/10 text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-white',
  light:
    'bg-white text-navy shadow-premium hover:-translate-y-0.5 hover:text-royal focus-visible:outline-royal',
  outline:
    'border border-navy/15 bg-white text-navy hover:-translate-y-0.5 hover:border-gold hover:text-royal focus-visible:outline-gold',
};

export function Button({ children, to, href, variant = 'primary', className = '', icon = true, ...props }) {
  const classes = `focus-ring inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 ${variants[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {icon ? <ArrowRight aria-hidden="true" size={18} /> : null}
    </>
  );

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {content}
    </button>
  );
}
