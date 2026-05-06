import { Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-luminary-dark text-white pt-24 pb-12 overflow-hidden relative">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16 mb-12">
      <div className="col-span-1 lg:col-span-1">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-luminary-accent flex items-center justify-center">
              <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <h1 className="text-2xl font-display font-bold tracking-tight">LUMINARY</h1>
        </div>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
          Especialistas en arquitectura regulatoria. Optimizamos el camino técnico para tu éxito comercial en Ecuador.
        </p>
        <div className="flex gap-6">
          <a href="https://linkedin.com/company/luminary" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4" />
          </a>
          <a href="https://facebook.com/luminaryec" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="https://instagram.com/luminaryec" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="https://x.com/luminaryec" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors" aria-label="X (Twitter)">
            <Twitter className="w-4 h-4" />
          </a>
        </div>
      </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Inicio</a></li>
              <li><a href="#nosotros" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Nosotros</a></li>
              <li><Link to="/servicios" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Servicios</Link></li>
               <li><a href="/#contacto" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><Link to="/legal/aviso-legal" className="text-slate-300 hover:text-luminary-accent transition-colors">Aviso Legal</Link></li>
              <li><Link to="/legal/privacidad" className="text-slate-300 hover:text-luminary-accent transition-colors">Privacidad</Link></li>
              <li><Link to="/legal/cookies" className="text-slate-300 hover:text-luminary-accent transition-colors">Cookies</Link></li>
              <li><Link to="/legal/terminos" className="text-slate-300 hover:text-luminary-accent transition-colors">Términos</Link></li>
            </ul>
          </div>

      <div>
        <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Presencia</h4>
        <ul className="space-y-6">
          <li className="flex items-start gap-4">
            <MapPin className="w-4 h-4 text-luminary-accent flex-shrink-0" />
            <span className="text-slate-300 text-sm font-medium">Ecuador — Matriz Quito</span>
          </li>
          <li className="flex items-start gap-4">
            <Mail className="w-4 h-4 text-luminary-accent flex-shrink-0" />
            <span className="text-sm font-medium text-slate-300 break-all">soporte@luminary.com</span>
          </li>
          <li className="flex items-start gap-4">
            <Phone className="w-4 h-4 text-luminary-accent flex-shrink-0" />
            <span className="text-sm font-medium text-slate-300">+593 99 110 2621</span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] tracking-[0.3em] uppercase font-bold">
      <div>© {new Date().getFullYear()} LUMINARY SOLUTIONS</div>
      <div className="flex gap-8">
         <span>Quito EC</span>
         <span>Puntos de Control ARCSA</span>
      </div>
    </div>
  </footer>
);

export default Footer;
