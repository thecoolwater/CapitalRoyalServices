import { Link } from 'react-router-dom';
import { Button } from '../components/Button';

export function NotFound() {
  return (
    <section className="grid min-h-screen place-items-center bg-navy px-4 text-center text-white">
      <div>
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-lightGold">Page not found</p>
        <h1 className="mt-4 font-heading text-5xl font-extrabold">Let us get you back on route.</h1>
        <p className="mx-auto mt-5 max-w-xl leading-8 text-white/70">
          The page you opened is not available. Return home or contact our team for visa and travel support.
        </p>
        <div className="mt-8 flex justify-center">
          <Button to="/">Back Home</Button>
        </div>
        <Link to="/contact" className="focus-ring mt-5 inline-block rounded-full text-sm font-bold text-lightGold">
          Contact consultation team
        </Link>
      </div>
    </section>
  );
}
