import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const NotFound = () => (
  <div className="min-h-screen bg-white flex flex-col items-center justify-center pt-32 px-4">
    <Breadcrumbs items={[{ label: 'Página no encontrada' }]} />
    <div className="text-center max-w-2xl">
      <h1 className="text-9xl font-display font-bold text-luminary-accent mb-4">404</h1>
      <h2 className="text-4xl font-display font-bold text-luminary-dark mb-6">
        Página no encontrada
      </h2>
      <p className="text-slate-500 mb-12 text-lg leading-relaxed">
        La página que buscas no existe o ha sido movida. Por favor, verifica la URL o regresa al inicio.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          to="/"
          className="px-10 py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all"
        >
          Volver al Inicio
        </Link>
        <a
          href="https://wa.me/593991102621"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 bg-green-500 text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-green-600 transition-all flex items-center justify-center gap-2"
        >
          <MessageCircle className="w-5 h-5" />
          WhatsApp
        </a>
      </div>
    </div>
  </div>
);

export default NotFound;
