import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import StatsSection from '../sections/StatsSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialSection from '../sections/TestimonialSection';
import FAQSection from '../sections/FAQSection';
import CTASection from '../sections/CTASection';
import ContactSection from '../sections/ContactSection';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (scrollTo) {
      requestAnimationFrame(() => {
        const el = document.getElementById(scrollTo);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
      window.history.replaceState({}, '');
    }
  }, [location.state]);

  return (
    <div>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;