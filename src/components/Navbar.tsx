import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { servicios } from '../data/servicesData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAll = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const handleServicesEnter = () => setServicesOpen(true);
  const handleServicesLeave = () => setServicesOpen(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-luminary-border py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-luminary-accent rounded-sm flex items-center justify-center">
             <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-luminary-dark leading-none tracking-tight">LUMINARY</h1>
            <p className="text-[9px] tracking-[0.3em] font-bold text-slate-400 uppercase">Regulatory</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="/#inicio" className="hover:text-luminary-dark transition-colors border-b-2 border-transparent hover:border-luminary-dark pb-1">Inicio</a>
          <a href="/#nosotros" className="hover:text-luminary-dark transition-colors border-b-2 border-transparent hover:border-luminary-dark pb-1">Nosotros</a>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <Link 
              to="/servicios"
              onClick={() => setServicesOpen(false)}
              className="hover:text-luminary-dark transition-colors border-b-2 border-transparent hover:border-luminary-dark pb-1 flex items-center gap-1"
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

          <a href="/#contacto" className="px-6 py-2.5 bg-luminary-dark text-white hover:bg-slate-800 transition-all shadow-sm">Contacto</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-luminary-dark">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
             <div className="flex flex-col p-4 space-y-4">
               <a href="/#inicio" onClick={closeAll} className="text-lg font-medium">Inicio</a>
               <a href="/#nosotros" onClick={closeAll} className="text-lg font-medium">Nosotros</a>
               <Link 
                 to="/servicios"
                 onClick={closeAll}
                 className="text-lg font-medium ml-4 text-luminary-dark"
               >
                 Servicios
               </Link>
               {servicios.map((serv, idx) => (
                 <Link 
                   key={idx}
                   to={`/servicios/${serv.slug}`}
                   onClick={closeAll}
                   className="text-base font-medium ml-4 text-slate-600"
                 >
                   {serv.titulo}
                 </Link>
               ))}
               <a href="/#contacto" onClick={closeAll} className="text-lg font-medium text-luminary-accent">Contacto</a>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
