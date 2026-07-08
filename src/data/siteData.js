import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  FileText,
  GraduationCap,
  Handshake,
  Headphones,
  HeartHandshake,
  Landmark,
  MapPinned,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';

const assetBase = import.meta.env.BASE_URL;

export const company = {
  name: 'Capital Royal Services',
  tagline: 'Your Journey, Our Priority',
  phone: '+91 7698692693',
  whatsapp: '+91 7698692693',
  email: 'info@capitalroyalservices.com',
  address: 'Capital Royal Services, India',
  location: 'India',
  logo: `${assetBase}capital-royal-logo.jpg`,
  poster: `${assetBase}capital-royal-services-poster.jpg`,
  brandVideo: `${assetBase}capital-royal-hero-video.webm`,
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Countries', to: '/countries' },
  { label: 'Visa Process', to: '/visa-process' },
  { label: 'Contact', to: '/contact' },
];

export const stats = [
  { value: 1000, suffix: '+', label: 'Happy Clients' },
  { value: 50, suffix: '+', label: 'Destinations' },
  { value: 98, suffix: '%', label: 'Visa Success' },
  { value: 24, suffix: 'x7', label: 'Support' },
];

export const services = [
  {
    title: 'Visit Visa',
    description: 'Short-term visit visa support for family visits, events, and personal travel with complete document checks for clients across India.',
    icon: Plane,
  },
  {
    title: 'Business Visa',
    description: 'Business visa guidance for meetings, exhibitions, trade visits, and corporate travel requirements in the Gulf, Europe, UK, USA, and Asia.',
    icon: BriefcaseBusiness,
  },
  {
    title: 'Student Visa',
    description: 'Student visa consulting with admission-aligned file planning, financial documentation review, and interview preparation.',
    icon: GraduationCap,
  },
  {
    title: 'Work Visa',
    description: 'Work permit and employment visa assistance for qualified international opportunities with practical document guidance.',
    icon: Building2,
  },
  {
    title: 'Family Visa',
    description: 'Dependent, spouse, and family joining visa documentation prepared with care, clarity, and country-specific checklists.',
    icon: HeartHandshake,
  },
  {
    title: 'Passport Assistance',
    description: 'New passport, renewal, appointment, and supporting-document help for smooth processing.',
    icon: FileText,
  },
  {
    title: 'Holiday Packages',
    description: 'Curated travel packages with visa, itinerary, hotel, and travel consultation under one roof.',
    icon: MapPinned,
  },
  {
    title: 'Umrah Packages',
    description: 'Trusted Umrah travel assistance with visa guidance, accommodation options, and ground support.',
    icon: Landmark,
  },
  {
    title: 'Overseas Job Assistance',
    description: 'Profile guidance, job-market orientation, and documentation support for overseas employment pathways.',
    icon: Users,
  },
  {
    title: 'Documentation Support',
    description: 'Application forms, cover letters, travel plans, financial files, and appointment-ready document sets.',
    icon: ClipboardCheck,
  },
  {
    title: 'Travel Consultation',
    description: 'Personalized visa route selection for Indian travellers based on purpose, travel history, timeline, and destination.',
    icon: Handshake,
  },
  {
    title: 'Tourist Visa',
    description: 'Country-specific tourist visa filing support for smooth leisure travel and confident departures.',
    icon: Sparkles,
  },
];

export const promoStories = [
  {
    title: 'Visit Visa Made Simple',
    text: 'A vertical travel-promo style WebP for quick visa enquiries, tourist travel, business visits, and family trips.',
    cta: 'Apply Now',
    image: `${assetBase}travel-promo-visa.webp`,
  },
  {
    title: 'Umrah and Family Visit',
    text: 'Premium branded story creative for spiritual journeys, family visits, hotel guidance, and travel support.',
    cta: 'Plan With Us',
    image: `${assetBase}travel-promo-umrah.webp`,
  },
  {
    title: 'Study, Work and Business',
    text: 'A polished promo panel for international opportunities, documentation, checklists, and filing support.',
    cta: 'Start Today',
    image: `${assetBase}travel-promo-study-work.webp`,
  },
];

export const countries = [
  {
    name: 'Dubai, UAE',
    summary: 'Fast-moving visit, business, and family travel support for the UAE.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Saudi Arabia',
    summary: 'Umrah, business, family, and work-related travel documentation assistance.',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'United States',
    summary: 'Structured tourist, business, student, and family visa preparation.',
    image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'United Kingdom',
    summary: 'Visitor, student, skilled worker, and family visa file guidance.',
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Germany',
    summary: 'Schengen, study, work, and opportunity-card documentation support.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Canada',
    summary: 'Visitor, study, family, and work visa consultation with transparent file review.',
    image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Australia',
    summary: 'Tourist, student, and skilled pathway document planning for Australia.',
    image: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Singapore',
    summary: "Tourist and business travel assistance for one of Asia's leading hubs.",
    image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Japan',
    summary: 'Clean, detail-focused visa file support for tourism, study, and business travel.',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Malaysia',
    summary: 'Visit, student, business, and family travel assistance with practical timelines.',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Egypt',
    summary: 'Tour and travel document support for historic leisure and business visits.',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Europe',
    summary: 'Schengen visa planning for multi-country travel across popular European destinations.',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=900&q=80',
  },
];

export const whyChooseUs = [
  { title: 'India-wide Service', text: 'Remote consultation and guided visa support for applicants across India.', icon: MapPinned },
  { title: 'Fast Processing', text: 'Clear timelines, priority preparation, and timely application tracking for urgent and planned travel.', icon: Clock3 },
  { title: 'Expert Guidance', text: 'Destination-specific consultants help you choose the right visa path before money and time are wasted.', icon: BadgeCheck },
  { title: 'Transparent Pricing', text: 'Service scope and fees are explained before work begins, with no confusing promises.', icon: CheckCircle2 },
  { title: 'Trusted Visa Agency', text: 'Professional handling, privacy-first practices, and verified documentation workflows.', icon: ShieldCheck },
  { title: 'Documentation Support', text: 'Forms, letters, travel plans, financial documents, and evidence are checked before submission.', icon: FileCheck2 },
  { title: '24x7 Support', text: 'Assistance for urgent questions, travel updates, and post-submission coordination.', icon: Headphones },
  { title: 'Personal Assistance', text: 'Every applicant receives a practical checklist, dedicated follow-up, and clear next steps.', icon: Handshake },
];

export const processSteps = [
  {
    title: 'Consultation',
    text: 'We understand your travel purpose, destination, background, and preferred timeline.',
  },
  {
    title: 'Document Collection',
    text: 'You receive a precise checklist and our team reviews every file for accuracy.',
  },
  {
    title: 'Application Submission',
    text: 'Forms, appointments, travel plans, and supporting documents are prepared for filing.',
  },
  {
    title: 'Processing',
    text: 'We monitor updates, guide you through follow-up requests, and keep communication clear.',
  },
  {
    title: 'Visa Approval',
    text: 'Once approved, we help you understand travel conditions, validity, and next steps.',
  },
];

export const testimonials = [
  {
    name: 'Ayesha Khan',
    country: 'Dubai Visit Visa',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    review: 'The team reviewed my documents, explained the process clearly, and kept me updated until approval. It felt professional from the first call.',
    rating: 5,
  },
  {
    name: 'Rahul Mehta',
    country: 'UK Student Visa',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    review: 'Capital Royal Services helped organize my financial documents and study plan. Their guidance made the entire student visa process much calmer.',
    rating: 5,
  },
  {
    name: 'Farhan Ali',
    country: 'Saudi Umrah Package',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    review: 'Our Umrah trip was handled with care from visa to hotel coordination. The support team was responsive even outside office hours.',
    rating: 5,
  },
];

export const faqs = [
  {
    question: 'Which visa categories do you handle?',
    answer: 'We assist with visit, tourist, business, student, work, family, Umrah, passport, travel consultation, overseas job assistance, and documentation support for clients across India.',
  },
  {
    question: 'Can you guarantee visa approval?',
    answer: 'No ethical agency can guarantee approval because final decisions are made by embassies and immigration authorities. We focus on accurate file preparation, eligibility guidance, and complete documentation.',
  },
  {
    question: 'How early should I start my visa process?',
    answer: 'For short-term visits, start at least 3 to 6 weeks before travel. For student, work, family, or high-documentation cases, starting 2 to 4 months earlier is safer.',
  },
  {
    question: 'Do you provide document checklists?',
    answer: 'Yes. Every client receives a country-specific checklist based on visa category, travel purpose, employment status, and travel history.',
  },
  {
    question: 'Do you help with refused visa cases?',
    answer: 'Yes. We review refusal letters, identify weak areas, and suggest a stronger re-application strategy when the case is eligible.',
  },
  {
    question: 'Can I get a free consultation?',
    answer: 'Yes. Use the consultation button or contact form and our team will guide you on the best first step for your destination.',
  },
];

export const trustBadges = [
  { label: 'File review by specialists', icon: FileCheck2 },
  { label: 'Embassy-ready checklists', icon: ClipboardCheck },
  { label: 'Appointment and timeline support', icon: CalendarCheck },
  { label: 'Premium client communication', icon: Star },
];
