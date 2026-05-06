const CTASection = () => (
  <section className="py-24 bg-white border-y-8 border-luminary-bg">
    <div className="max-w-5xl mx-auto px-4 md:px-8 text-center py-20 relative overflow-hidden bg-luminary-bg border border-luminary-border">
      <div className="absolute top-0 right-0 w-32 h-32 bg-luminary-accent opacity-5 -translate-y-1/2 translate-x-1/2 rotate-45"></div>
      
      <h2 className="text-4xl md:text-7xl font-display font-light text-luminary-dark mb-10 leading-[1.1] tracking-tight">
        Impulsa tu <span className="font-bold">Negocio.</span>
      </h2>
      <p className="text-slate-500 mb-12 text-lg leading-relaxed max-w-2xl mx-auto font-medium">
        Descubre cómo Luminary transforma la burocracia en una ventaja competitiva de alto rendimiento.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => window.location.href = '#contacto'}
            className="px-12 py-5 bg-luminary-accent text-white font-bold text-xs uppercase tracking-[0.3em] shadow-2xl shadow-luminary-accent/20 hover:bg-blue-700 transition-all"
          >
            Empezar Proyecto
          </button>
      </div>
    </div>
  </section>
);

export default CTASection;
