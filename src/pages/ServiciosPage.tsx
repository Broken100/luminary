import { useParams, Navigate } from 'react-router-dom';
import { servicios } from '../data/servicesData';
import Breadcrumbs from '../components/Breadcrumbs';
import ServiciosSidebar from '../components/ServiciosSidebar';
import ServicioDetailPanel from '../components/ServicioDetailPanel';

const ServiciosPage = () => {
  const { slug } = useParams<{ slug?: string }>();
  const activeService = servicios.find((s) => s.slug === slug);

  // If the slug doesn't exist, redirect back to the root services path (which redirects to first slug)
  if (!activeService) {
    return <Navigate to="/servicios" replace />;
  }

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumbs 
          items={[
            { label: 'Servicios', to: '/servicios' },
            { label: activeService.titulo }
          ]} 
        />
        
        <div className="mb-10">
          <p className="text-luminary-accent font-bold uppercase tracking-widest text-[10px] mb-2">
            Servicios Especializados
          </p>
          <h1 className="text-3xl md:text-5xl font-display font-bold text-luminary-dark leading-tight">
            Catálogo de Soluciones ARCSA
          </h1>
        </div>

        {/* Split View Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          <ServiciosSidebar />
          <ServicioDetailPanel servicio={activeService} />
        </div>
      </div>
    </div>
  );
};

export default ServiciosPage;