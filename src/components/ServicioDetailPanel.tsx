import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Servicio } from '../data/servicesData';

interface ServicioDetailPanelProps {
  servicio: Servicio;
}

const ServicioDetailPanel = ({ servicio }: ServicioDetailPanelProps) => {
  const IconComponent = servicio.icono;

  return (
    <motion.div
      key={servicio.slug}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="flex-1 min-w-0"
    >
      {/* Header Info */}
      <div className="flex flex-col sm:flex-row gap-6 mb-8 items-start border-b border-slate-100 pb-8">
        <div className="w-16 h-16 bg-luminary-bg flex items-center justify-center text-luminary-accent flex-shrink-0">
          <IconComponent className="w-8 h-8" />
        </div>
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-luminary-accent/10 text-luminary-accent text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
            <Clock className="w-3.5 h-3.5" />
            Estimado: {servicio.tiempoEstimado}
          </div>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-luminary-dark leading-tight">
            {servicio.titulo}
          </h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-12">
        <div className="xl:col-span-2 space-y-6">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            Descripción del servicio
          </h3>
          <p className="text-slate-600 leading-relaxed text-base font-normal">
            {servicio.descripcionExtendida}
          </p>
          <p className="text-slate-500 leading-relaxed text-sm">
            {servicio.descripcionCorta}
          </p>
        </div>

        <div className="space-y-6">
          {/* Beneficios */}
          <div className="bg-luminary-bg p-6 border border-slate-100">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-luminary-dark mb-4">
              Beneficios Clave
            </h4>
            <ul className="space-y-3">
              {servicio.beneficios.map((ben, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-luminary-accent flex-shrink-0 mt-0.5" />
                  <span className="text-slate-600 text-xs leading-relaxed">{ben}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requisitos */}
          <div className="bg-white border border-luminary-border p-6">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-luminary-dark mb-4">
              Requisitos Básicos
            </h4>
            <ul className="space-y-3">
              {servicio.requisitos.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 bg-luminary-accent rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-slate-600 text-xs leading-relaxed">{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Testimonios */}
      {servicio.testimonios && servicio.testimonios.length > 0 && (
        <div className="border-t border-slate-100 pt-8 mb-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6">
            Casos de Éxito
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicio.testimonios.map((test, idx) => (
              <div key={idx} className="bg-slate-50 p-6 border border-luminary-border flex flex-col justify-between">
                <p className="text-slate-600 italic text-sm mb-4 leading-relaxed">
                  "{test.mensaje}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-luminary-accent text-white flex items-center justify-center font-bold text-sm">
                    {test.nombre.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-xs text-luminary-dark">{test.nombre}</p>
                    <p className="text-[10px] text-slate-400">{test.empresa}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CTA section */}
      <div className="border-t border-slate-100 pt-8 text-center sm:text-left bg-slate-50 p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h3 className="text-lg font-display font-bold text-luminary-dark mb-1">
            ¿Listo para iniciar tu trámite?
          </h3>
          <p className="text-xs text-slate-400">
            Contáctanos hoy mismo para una consultoría técnica especializada.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to={`/contacto/${servicio.slug}`}
            className="px-6 py-3.5 bg-luminary-dark text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-slate-800 transition-all flex items-center gap-1.5"
          >
            Contactar Ahora <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <a
            href="https://wa.me/593991102621"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-green-500 text-white font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-green-600 transition-all"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicioDetailPanel;
