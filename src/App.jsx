import { AnimatePresence, motion } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { StructuredData } from './components/StructuredData';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Countries } from './pages/Countries';
import { VisaProcess } from './pages/VisaProcess';
import { WhyChooseUs } from './pages/WhyChooseUs';
import { Testimonials } from './pages/Testimonials';
import { Faq } from './pages/Faq';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { setPageMeta } from './utils/seo';

const pageMeta = {
  '/': {
    title: 'Visa, Immigration and Travel Consultancy',
    description: 'Premium visa, immigration, tour, Umrah, passport, documentation, and overseas job assistance from Capital Royal Services.',
  },
  '/about': {
    title: 'About Us',
    description: 'Learn how Capital Royal Services guides clients through visa, immigration, travel, and documentation processes with premium support.',
  },
  '/services': {
    title: 'Services',
    description: 'Explore visit visa, tourist visa, business visa, student visa, work visa, family visa, passport, tours, Umrah, and job assistance services.',
  },
  '/countries': {
    title: 'Countries',
    description: 'Visa and travel guidance for Dubai, Saudi Arabia, UK, USA, Germany, Canada, Australia, Singapore, Japan, Malaysia, Egypt, and Europe.',
  },
  '/visa-process': {
    title: 'Visa Process',
    description: 'See the Capital Royal Services process from consultation and document collection to submission, processing, and visa approval support.',
  },
  '/why-choose-us': {
    title: 'Why Choose Us',
    description: 'Fast processing, expert guidance, transparent pricing, documentation support, and 24x7 personal assistance.',
  },
  '/testimonials': {
    title: 'Testimonials',
    description: 'Read client experiences from visa, Umrah, student, travel, and documentation support journeys.',
  },
  '/faq': {
    title: 'FAQ',
    description: 'Answers to common visa consultancy questions about services, timelines, guarantees, documents, and refused applications.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Contact Capital Royal Services for a free visa, travel, Umrah, passport, or overseas job assistance consultation.',
  },
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setPageMeta(pageMeta[location.pathname] || pageMeta['/']);
  }, [location.pathname]);

  return (
    <>
      <StructuredData />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/countries" element={<Countries />} />
            <Route path="/visa-process" element={<VisaProcess />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
      <FloatingActions />
    </>
  );
}
