import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { Link } from 'react-router-dom';
import { servicios } from '../data/servicesData';

const ServicesSection = () => (
  <section id="servicios" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <p className="text-luminary-accent font-bold uppercase tracking-widest text-xs mb-4">Servicios Especializados</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark leading-tight">
            Soluciones Integrales para tu Negocio
          </h2>
        </div>
        <Link 
          to="/servicios"
          className="text-sm font-bold text-luminary-dark flex items-center gap-2 group"
        >
          Ver todos los servicios <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
        {servicios.map((service, index) => (
          <ServiceCard 
            key={index}
            title={service.titulo}
            description={service.descripcionCorta}
            icon={service.icono}
            slug={service.slug}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
