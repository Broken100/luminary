const TestimonialSection = () => (
  <section className="py-32 bg-luminary-dark text-white relative">
    <div className="absolute top-0 right-0 w-1/4 h-full bg-white opacity-5"></div>
    <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
      <div className="max-w-4xl">
        <div className="inline-block px-4 py-1.5 bg-luminary-accent text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-12">
          Testimonio
        </div>
        <p className="text-3xl md:text-5xl font-display font-light leading-[1.2] mb-16 tracking-tight">
          "Su seguimiento post-registro fue <span className="font-bold underline decoration-luminary-accent underline-offset-8">clave</span> para crecer sin tropiezos. Hoy no solo tenemos el registro ARCSA, ¡sino que exportamos a 3 países!"
        </p>
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 bg-white flex items-center justify-center text-luminary-dark font-display text-xl font-bold">CR</div>
          <div>
            <p className="font-bold text-lg uppercase tracking-tight">Carlos Rios</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em] mt-1">Fundador de NutriVida Plus</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialSection;
