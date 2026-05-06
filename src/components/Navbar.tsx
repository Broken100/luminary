import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { servicios } from '../data/servicesData';

const NAV_SECTIONS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
] as const;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastScrollY.current && y > 100) {
        setNavVisible(false);
        setServicesOpen(false);
      } else {
        setNavVisible(true);
      }
      lastScrollY.current = y;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isHome) {
      setActiveSection('');
      return;
    }
    const observers: IntersectionObserver[] = [];
    const allSections = [...NAV_SECTIONS.map(s => s.id), 'servicios', 'contacto'];
    allSections.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: '-40% 0px -55% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [isHome]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
        setServicesOpen(false);
        setMobileServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  const closeAll = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, []);

  const scrollToSection = useCallback((id: string) => {
    closeAll();
    if (isHome) {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  }, [isHome, closeAll]);

  const handleServicesEnter = () => setServicesOpen(true);
  const handleServicesLeave = () => setServicesOpen(false);

  const getLinkClass = (id: string) =>
    `hover:text-luminary-dark transition-colors pb-1 ${
      activeSection === id
        ? 'text-luminary-dark border-b-2 border-luminary-accent'
        : 'text-slate-500 border-b-2 border-transparent'
    }`;

  return (
    <nav
      ref={navRef}
      role="navigation"
      aria-label="Navegación principal"
      className={`fixed w-full z-50 transition-all duration-300 ${
        navVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b border-luminary-border py-2'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity" onClick={closeAll}>
          <div className="w-8 h-8 bg-luminary-accent rounded-sm flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h1 className={`font-display font-bold text-luminary-dark leading-none tracking-tight transition-all duration-300 ${scrolled ? 'text-base' : 'text-xl'}`}>
              LUMINARY
            </h1>
            <p className="text-[9px] tracking-[0.3em] font-bold text-slate-400 uppercase">Regulatory</p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
          {NAV_SECTIONS.map(sec => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={getLinkClass(sec.id)}
            >
              {sec.label}
            </button>
          ))}

          <div
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link
              to="/servicios"
              onClick={closeAll}
              className={`hover:text-luminary-dark transition-colors pb-1 flex items-center gap-1 ${
                location.pathname.startsWith('/servicios')
                  ? 'text-luminary-dark border-b-2 border-luminary-accent'
                  : 'text-slate-500 border-b-2 border-transparent'
              }`}
            >
              Servicios <ChevronDown className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </Link>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white shadow-2xl border border-luminary-border py-2 z-50"
                >
                  {servicios.map((serv, idx) => (
                    <Link
                      key={idx}
                      to={`/servicios/${serv.slug}`}
                      onClick={() => setServicesOpen(false)}
                      className="block px-4 py-3 text-sm font-medium text-slate-600 hover:bg-luminary-bg hover:text-luminary-dark transition-colors"
                    >
                      {serv.titulo}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={() => scrollToSection('contacto')}
            className={`hover:text-luminary-dark transition-colors pb-1 ${
              activeSection === 'contacto'
                ? 'text-luminary-dark border-b-2 border-luminary-accent'
                : 'text-slate-500 border-b-2 border-transparent'
            }`}
          >
            Contacto
          </button>

          <button
            onClick={() => {
              const event = new CustomEvent('open-search');
              window.dispatchEvent(event);
            }}
            className="p-2 text-slate-500 hover:text-luminary-dark transition-colors"
            aria-label="Buscar servicios (Ctrl+K)"
          >
            <Search className="w-4 h-4" />
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-luminary-dark"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 space-y-1">
              {NAV_SECTIONS.map(sec => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className="text-left text-lg font-medium py-2 hover:text-luminary-accent transition-colors"
                >
                  {sec.label}
                </button>
              ))}

              <div>
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="w-full flex items-center justify-between text-left text-lg font-medium py-2 hover:text-luminary-accent transition-colors"
                  aria-expanded={mobileServicesOpen}
                  aria-controls="mobile-services-list"
                >
                  <span className="flex items-center gap-2">
                    <Link
                      to="/servicios"
                      onClick={closeAll}
                      className="text-luminary-dark"
                    >
                      Servicios
                    </Link>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      id="mobile-services-list"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 space-y-1">
                        {servicios.map((serv, idx) => (
                          <Link
                            key={idx}
                            to={`/servicios/${serv.slug}`}
                            onClick={closeAll}
                            className="block text-base font-medium text-slate-600 hover:text-luminary-accent py-1 transition-colors"
                          >
                            {serv.titulo}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection('contacto')}
                className="text-left text-lg font-medium text-luminary-accent py-2"
              >
                Contacto
              </button>

              <button
                onClick={() => {
                  closeAll();
                  const event = new CustomEvent('open-search');
                  window.dispatchEvent(event);
                }}
                className="flex items-center gap-2 text-left text-lg font-medium py-2 text-slate-500 hover:text-luminary-dark transition-colors"
              >
                <Search className="w-4 h-4" />
                Buscar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;