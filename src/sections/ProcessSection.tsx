import { motion } from 'motion/react';
import { CheckCircle2, FileText, Clock } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Diagnóstico",
    desc: "Analizamos tu producto para identificar requisitos específicos según ARCSA.",
    icon: <CheckCircle2 className="w-5 h-5" />
  },
  {
    id: "02",
    title: "Implementación",
    desc: "Transformamos tus instalaciones y procesos para cumplir normativas vigentes.",
    icon: <FileText className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Seguimiento",
    desc: "Mantenemos tu estatus legal con monitoreo continuo y alertas de riesgo.",
    icon: <Clock className="w-5 h-5" />
  }
];

const ProcessSection = () => (
  <section className="py-24 bg-white relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-20">
        <p className="text-luminary-accent font-bold uppercase tracking-widest text-xs mb-4">Metodología</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark">Nuestro Proceso</h2>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block"></div>
        
        <div className="grid lg:grid-cols-3 gap-0 border border-luminary-border shadow-2xl">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx} 
              className="bg-white p-12 border-b lg:border-b-0 lg:border-r last:border-0 border-luminary-border group hover:bg-slate-50 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="w-12 h-12 bg-luminary-bg flex items-center justify-center text-luminary-accent mb-8 group-hover:bg-luminary-dark group-hover:text-white transition-all">
                {step.icon}
              </div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Paso {step.id}</h4>
              <h3 className="text-xl font-display font-bold text-luminary-dark mb-4 uppercase">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
