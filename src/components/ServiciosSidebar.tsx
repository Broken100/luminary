import { Link, useParams } from 'react-router-dom';
import { servicios } from '../data/servicesData';

const ServiciosSidebar = () => {
  const { slug: activeSlug } = useParams<{ slug?: string }>();

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 lg:sticky lg:top-32 h-fit bg-white border border-luminary-border p-4 lg:p-6 shadow-sm">
      <h2 className="hidden lg:block text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 px-3">
        Nuestras Soluciones
      </h2>
      
      {/* Mobile Horizontal Selector */}
      <div className="flex lg:hidden overflow-x-auto gap-3 pb-2 scrollbar-none -mx-4 px-4 mask-gradient">
        {servicios.map((servicio) => {
          const Icon = servicio.icono;
          const isActive = activeSlug === servicio.slug;
          
          return (
            <Link
              key={servicio.slug}
              to={`/servicios/${servicio.slug}`}
              className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                isActive
                  ? 'bg-luminary-dark text-white border-luminary-dark shadow-md'
                  : 'bg-white text-slate-500 border-luminary-border hover:border-slate-400'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {servicio.titulo}
            </Link>
          );
        })}
      </div>

      {/* Desktop Vertical Menu */}
      <ul className="hidden lg:flex flex-col gap-2">
        {servicios.map((servicio) => {
          const Icon = servicio.icono;
          const isActive = activeSlug === servicio.slug;

          return (
            <li key={servicio.slug}>
              <Link
                to={`/servicios/${servicio.slug}`}
                className={`group flex items-center gap-4 px-4 py-4 border transition-all duration-300 relative overflow-hidden ${
                  isActive
                    ? 'bg-luminary-bg border-luminary-border border-l-4 border-l-luminary-accent shadow-sm'
                    : 'bg-white border-luminary-border border-l-4 border-l-transparent hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <div
                  className={`w-9 h-9 flex items-center justify-center transition-colors duration-300 ${
                    isActive
                      ? 'bg-luminary-accent text-white'
                      : 'bg-slate-100 text-slate-400 group-hover:bg-luminary-accent group-hover:text-white'
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span
                    className={`block text-xs font-bold uppercase tracking-wider transition-colors truncate ${
                      isActive ? 'text-luminary-dark' : 'text-slate-500 group-hover:text-luminary-dark'
                    }`}
                  >
                    {servicio.titulo}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-medium mt-0.5">
                    {servicio.tiempoEstimado}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ServiciosSidebar;
