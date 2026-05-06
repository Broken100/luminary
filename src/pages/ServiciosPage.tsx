import { Link } from 'react-router-dom';
import { servicios } from '../data/servicesData';
import { ArrowRight } from 'lucide-react';

const ServiciosPage = () => (
  <div className="min-h-screen bg-white pt-32 pb-24">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="mb-16">
        <Link to="/" className="text-luminary-accent font-bold text-sm uppercase tracking-[0.2em] hover:underline">
          ← Volver al inicio
        </Link>
      </div>
      
      <div className="text-center mb-16">
        <p className="text-luminary-accent font-bold uppercase tracking-widest text-xs mb-4">Servicios Especializados</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-luminary-dark mb-6 leading-[0.9]">
          Todas Nuestras <span className="font-bold">Soluciones</span>
        </h1>
        <p className="text-lg text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Ofrecemos un portafolio completo de servicios regulatorios diseñados para impulsar tu negocio en Ecuador. 
          Cada servicio está respaldado por expertos en ARCSA y años de experiencia comprobada.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicios.map((servicio, index) => {
          const IconComponent = servicio.icono;
          return (
            <Link 
              key={index}
              to={`/servicios/${servicio.slug}`}
              className="group block"
            >
              <div className="p-10 bg-white border border-luminary-border hover:shadow-2xl hover:shadow-luminary-accent/5 transition-all duration-500 relative overflow-hidden h-full">
                <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-luminary-accent transition-all duration-300"></div>
                <div className="w-12 h-12 bg-luminary-bg flex items-center justify-center text-luminary-accent mb-8 group-hover:bg-luminary-accent group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-luminary-dark mb-4 uppercase tracking-tight">{servicio.titulo}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{servicio.descripcionCorta}</p>
                <div className="flex items-center text-[10px] font-bold text-luminary-accent uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                  Ver detalles <ArrowRight className="w-4 h-4 ml-1" />
                </div>
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <p className="text-xs text-slate-400 font-medium">
                    <span className="font-bold text-luminary-dark">Tiempo:</span> {servicio.tiempoEstimado}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-16 pt-16 border-t border-slate-100 text-center">
        <h3 className="text-2xl font-display font-bold text-luminary-dark mb-6">¿Necesitas una Solución Personalizada?</h3>
        <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
          Contáctanos hoy mismo para una asesoría gratuita y descubre cómo podemos ayudarte con tu proyecto regulatorio.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
             href="/#contacto"
             className="px-10 py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all shadow-xl"
           >
            Contactar Ahora
          </a>
          <a 
            href="https://wa.me/593991102621"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-green-500 text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-green-600 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default ServiciosPage;
