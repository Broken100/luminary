const StatsSection = () => (
  <section id="nosotros" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-16">
        <p className="text-luminary-accent font-bold uppercase tracking-widest text-xs mb-4">Sobre Nosotros</p>
        <blockquote className="text-2xl md:text-4xl font-display font-medium text-luminary-dark leading-snug max-w-4xl mx-auto italic">
          "Somos especialistas apasionados en regulación sanitaria, dedicados a transformar trámites en ventajas. Con precisión en cumplimiento y enfoque estratégico."
        </blockquote>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-t border-slate-100">
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-display font-bold text-luminary-dark mb-2">05</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Años de Experiencia</p>
        </div>
        <div className="text-center border-y md:border-y-0 md:border-x border-slate-100 py-8 md:py-0">
          <div className="text-5xl md:text-7xl font-display font-bold text-luminary-dark mb-2">+200</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Registros Emitidos</p>
        </div>
        <div className="text-center">
          <div className="text-5xl md:text-7xl font-display font-bold text-luminary-dark mb-2">+500</div>
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Usuarios Satisfechos</p>
        </div>
      </div>
    </div>
  </section>
);

export default StatsSection;
