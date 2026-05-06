import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { servicios } from '../data/servicesData';
import { ArrowRight, CheckCircle, Clock, FileText, ShieldCheck, Headphones } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';

const DETAIL_SECTIONS = [
  { id: 'descripcion', label: 'Descripción' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'requisitos', label: 'Requisitos' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'contactar', label: 'Contactar' },
] as const;

const ServicioDetalle = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const servicio = servicios.find(s => s.slug === slug);
  const [activeDetailSection, setActiveDetailSection] = useState<string>('descripcion');

  useEffect(() => {
    if (!servicio) return;
    const observers: IntersectionObserver[] = [];
    DETAIL_SECTIONS.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveDetailSection(sec.id);
        },
        { rootMargin: '-30% 0px -60% 0px' }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, [servicio]);

  const scrollToDetailSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (!servicio) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-luminary-dark mb-4">Servicio no encontrado</h1>
          <Link to="/servicios" className="text-luminary-accent hover:underline">
            ← Volver a servicios
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = servicio.icono;
  const otrosServicios = servicios.filter(s => s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumbs items={[{ label: 'Servicios', to: '/servicios' }, { label: servicio.titulo }]} />

        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 items-start">
          <div className="w-20 h-20 bg-luminary-bg flex items-center justify-center text-luminary-accent flex-shrink-0">
            <IconComponent className="w-10 h-10" />
          </div>
          <div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-luminary-dark mb-4 leading-[0.9]">
              {servicio.titulo}
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed max-w-3xl">
              {servicio.descripcionCorta}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-luminary-accent/10 text-luminary-accent text-xs font-bold uppercase tracking-[0.2em]">
              <Clock className="w-4 h-4" />
              Tiempo estimado: {servicio.tiempoEstimado}
            </div>
          </div>
        </div>

        {/* Sticky Sub-navigation */}
        <nav aria-label="Secciones del servicio" className="sticky top-[60px] z-30 bg-white border-b border-luminary-border -mx-4 md:-mx-8 px-4 md:px-8 mb-12">
          <ul className="flex gap-6 overflow-x-auto py-3 text-[11px] font-bold uppercase tracking-[0.15em]">
            {DETAIL_SECTIONS.map(sec => (
              <li key={sec.id}>
                <button
                  onClick={() => scrollToDetailSection(sec.id)}
                  className={`whitespace-nowrap pb-1 border-b-2 transition-colors ${
                    activeDetailSection === sec.id
                      ? 'text-luminary-accent border-luminary-accent'
                      : 'text-slate-400 border-transparent hover:text-luminary-dark'
                  }`}
                >
                  {sec.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Descripción Extendida */}
        <div id="descripcion" className="grid lg:grid-cols-3 gap-12 mb-16 scroll-mt-32">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-display font-bold text-luminary-dark mb-6">Descripción Detallada</h2>
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
              <p>{servicio.descripcionExtendida}</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Beneficios */}
            <div id="beneficios" className="bg-luminary-bg p-8 scroll-mt-32">
              <h3 className="font-display font-bold text-luminary-dark mb-4">Beneficios</h3>
              <ul className="space-y-3">
                {servicio.beneficios.map((ben, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-luminary-accent flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 text-sm">{ben}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requisitos */}
            <div id="requisitos" className="bg-white border border-luminary-border p-8 scroll-mt-32">
              <h3 className="font-display font-bold text-luminary-dark mb-4">Requisitos</h3>
              <ul className="space-y-3">
                {servicio.requisitos.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-luminary-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonios */}
        {servicio.testimonios && servicio.testimonios.length > 0 && (
          <div id="testimonios" className="mb-16 bg-slate-50 py-16 px-8 -mx-8 scroll-mt-32">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-luminary-dark mb-8 text-center">
                Casos de Éxito
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {servicio.testimonios.map((test, idx) => (
                  <div key={idx} className="bg-white p-8 border border-luminary-border">
                    <p className="text-slate-600 italic mb-6 leading-relaxed">"{test.mensaje}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-luminary-accent text-white flex items-center justify-center font-bold">
                        {test.nombre.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-luminary-dark">{test.nombre}</p>
                        <p className="text-sm text-slate-500">{test.empresa}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Servicios Relacionados */}
        <div className="pt-12 border-t border-slate-200">
          <h2 className="text-2xl font-display font-bold text-luminary-dark mb-8">
            Otros Servicios
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {otrosServicios.map((servicioRel, idx) => {
              const OtherIcon = servicioRel.icono;
              return (
                <Link
                  key={idx}
                  to={`/servicios/${servicioRel.slug}`}
                  className="group block p-6 bg-white border border-luminary-border hover:shadow-lg transition-all"
                >
                  <div className="w-10 h-10 bg-luminary-bg flex items-center justify-center text-luminary-accent mb-4 group-hover:bg-luminary-accent group-hover:text-white transition-all">
                    <OtherIcon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-luminary-dark mb-2">{servicioRel.titulo}</h3>
                  <p className="text-sm text-slate-500 mb-4">{servicioRel.descripcionCorta}</p>
                  <div className="flex items-center text-xs font-bold text-luminary-accent uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform">
                    Ver detalles <ArrowRight className="w-3 h-3 ml-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div id="contactar" className="mt-16 pt-12 border-t border-slate-200 text-center scroll-mt-32">
          <h3 className="text-2xl font-display font-bold text-luminary-dark mb-4">
            ¿Listo para Comenzar?
          </h3>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y dale a tu negocio el respaldo regulatorio que se merece.
          </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate(`/contacto/${slug}`)}
              className="px-10 py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all shadow-xl"
            >
              Contactar Ahora
            </button>
            <a
              href="https://wa.me/593991102621"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-green-500 text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-green-600 transition-all flex items-center justify-center gap-2"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicioDetalle;