import { AnimatePresence, motion } from 'framer-motion';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
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
import { Testimonials } from './pages/Testimonials';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';
import { setPageMeta } from './utils/seo';

const pageMeta = {
  '/': {
    title: 'Visa Consultant in Surat for India',
    description: 'Capital Royal Services is a Surat-based visa and travel consultancy serving clients across India for visit, tourist, business, student, work, Umrah, passport, and overseas job assistance.',
  },
  '/about': {
    title: 'About Capital Royal Services',
    description: 'Learn why clients in Surat, Gujarat, and across India choose Capital Royal Services for visa consultancy, document preparation, travel, Umrah, passport, and overseas job support.',
  },
  '/services': {
    title: 'Visa and Travel Services',
    description: 'Explore visit visa, tourist visa, business visa, student visa, work visa, family visa, passport, tours, Umrah, and job assistance services from Surat for clients across India.',
  },
  '/countries': {
    title: 'Countries We Serve',
    description: 'Visa and travel guidance from India for Dubai, Saudi Arabia, UK, USA, Germany, Canada, Australia, Singapore, Japan, Malaysia, Egypt, and Europe.',
  },
  '/visa-process': {
    title: 'Visa Process',
    description: 'See the Capital Royal Services process from consultation and document collection to submission, processing, and visa approval support.',
  },
  '/why-choose-us': {
    title: 'About Capital Royal Services',
    description: 'Fast processing, expert guidance, transparent pricing, documentation support, and 24x7 personal assistance from a Surat-based visa consultancy serving India.',
  },
  '/testimonials': {
    title: 'Testimonials',
    description: 'Read client experiences from visa, Umrah, student, travel, and documentation support journeys.',
  },
  '/faq': {
    title: 'Visa FAQ',
    description: 'Answers to common visa consultancy questions about services, timelines, guarantees, documents, and refused applications for Indian travellers.',
  },
  '/contact': {
    title: 'Contact',
    description: 'Contact Capital Royal Services in Surat for a free visa, travel, Umrah, passport, or overseas job assistance consultation anywhere in India.',
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
            <Route path="/why-choose-us" element={<Navigate to="/about" replace />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Navigate to="/about" replace />} />
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
