import { Menu, Phone, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { company, navLinks } from '../data/siteData';
import { Button } from './Button';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-300 ${scrolled ? 'bg-white/95 shadow-lg shadow-navy/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="focus-ring flex shrink-0 items-center gap-3 rounded-full" aria-label="Capital Royal Services home">
          <img
            src={company.logo}
            alt="Capital Royal Services logo"
            className="h-14 w-14 rounded-2xl object-cover shadow-gold"
            width="56"
            height="56"
          />
          <span className="hidden leading-tight sm:block">
            <span className={`block font-heading text-base font-extrabold ${scrolled ? 'text-navy' : 'text-white'}`}>
              Capital Royal
            </span>
            <span className={`block text-xs font-semibold ${scrolled ? 'text-slate-500' : 'text-white/72'}`}>Services</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `focus-ring rounded-full px-3 py-2 text-[13px] font-bold transition xl:text-sm ${
                  isActive
                    ? scrolled
                      ? 'bg-navy text-white'
                      : 'bg-white text-navy'
                    : scrolled
                      ? 'text-navy/80 hover:bg-navy/5 hover:text-navy'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-3">
          <a
            href={`tel:${company.phone.replace(/\s/g, '')}`}
            className={`focus-ring inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-bold transition ${
              scrolled ? 'text-navy hover:bg-navy/5' : 'text-white hover:bg-white/10'
            }`}
          >
            <Phone size={17} aria-hidden="true" />
            Call
          </a>
          <Button to="/contact" icon={false} className="px-5 py-2.5">
            Apply Now
          </Button>
        </div>

        <button
          type="button"
          className={`focus-ring ml-auto inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full lg:hidden ${
            scrolled ? 'bg-navy text-white' : 'bg-white/10 text-white backdrop-blur'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <div className="mx-4 mb-4 rounded-2xl bg-white p-3 shadow-premium lg:hidden">
          <nav className="grid gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `focus-ring rounded-xl px-4 py-3 text-sm font-bold ${isActive ? 'bg-navy text-white' : 'text-navy hover:bg-navy/5'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
