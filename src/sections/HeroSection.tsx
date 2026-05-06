import { motion } from 'motion/react';

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center pt-20 sm:pt-24 md:pt-28 pb-12 overflow-hidden bg-luminary-bg border-b-8 border-white">
    <div className="absolute top-0 right-0 w-5/12 h-full bg-white overflow-hidden hidden md:block lg:block border-l border-luminary-border">
      <div className="absolute inset-0 opacity-5">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-luminary-dark rotate-12"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-luminary-accent -rotate-6"></div>
      </div>
      <div className="absolute bottom-12 left-12 bg-white p-6 shadow-2xl border-l-4 border-luminary-accent z-20">
         <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-1">Estatus Regulatorio</p>
         <p className="text-3xl font-display font-bold text-luminary-dark tracking-tighter">EFICIENCIA 100%</p>
      </div>
      <img 
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
        alt="Scientific Laboratory" 
        className="w-full h-full object-cover grayscale opacity-40 hover:grayscale-0 transition-all duration-1000"
        loading="lazy"
      />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-block px-4 py-1.5 bg-luminary-accent/10 text-luminary-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-luminary-accent/20">
          Ecuador 2026 • ARCSA
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-light text-luminary-dark leading-[0.9] mb-8">
          Arquitectura <br />
          <span className="font-bold tracking-tighter">REGULATORIA.</span>
        </h1>
        <p className="text-base sm:text-lg text-slate-500 mb-10 max-w-md sm:max-w-lg leading-relaxed font-medium">
          Diseñamos soluciones dinámicas que combinan cumplimiento técnico puro con agilidad estratégica para empresas líderes en Ecuador.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => {
              const el = document.getElementById('servicios');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl"
          >
            Nuestros Servicios
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('nosotros');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 sm:px-8 md:px-10 py-4 sm:py-5 bg-white text-luminary-dark border border-luminary-border font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all"
          >
            Nuestra Historia
          </button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
