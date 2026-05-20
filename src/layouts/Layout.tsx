import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';
import BackToTop from '../components/BackToTop';
import SearchOverlay from '../components/SearchOverlay';

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Group subroutes to prevent page-level exit transitions when only slug parameters change
  const getPageKey = () => {
    if (location.pathname.startsWith('/servicios')) return '/servicios';
    if (location.pathname.startsWith('/contacto')) return '/contacto';
    return location.pathname;
  };

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <a href="#main-content" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={getPageKey()}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
      <SearchOverlay />
    </div>
  );
};

export default Layout;