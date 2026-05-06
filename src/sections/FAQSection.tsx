import FAQItem from '../components/FAQItem';
import { ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "¿Qué es un registro sanitario?",
    answer: "El registro sanitario es el trámite que certifica que tu producto cumple con las normativas y estándares de seguridad vigentes, garantizando su aptitud para la comercialización legal en el país."
  },
  {
    question: "¿Por qué es indispensable contar con un registro sanitario?",
    answer: "Es esencial para asegurar que los productos no representen un riesgo para la salud pública y para poder operar comercialmente dentro del marco legal, evitando sanciones y clausuras."
  },
  {
    question: "¿Cuánto tiempo demora el proceso de registro?",
    answer: "El tiempo varía según el tipo de producto y la complejidad técnica, oscilando generalmente entre 30 a 90 días hábiles en procesos estándar de ARCSA."
  },
  {
    question: "¿Qué ocurre si mi producto no cumple inicialmente con las normativas?",
    answer: "Acompañamos a nuestros clientes en las reformulaciones, adecuación de etiquetas y mejoras en plantas para asegurar que el cumplimiento sea del 100% antes del ingreso del trámite final."
  }
];

const FAQSection = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-16 items-start">
      <div>
        <p className="text-luminary-accent font-bold uppercase tracking-widest text-xs mb-4">Centro de Ayuda</p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark mb-6 leading-tight">FAQ</h2>
        <p className="text-slate-500 mb-8 max-w-md">
          Este conjunto de preguntas y respuestas está diseñado para resolver tus dudas de manera inmediata y clara, brindándote la confianza necesaria para avanzar en el proceso de registro sanitario.
        </p>
        <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 group">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop" 
              alt="Business portrait" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luminary-dark/80 to-transparent flex flex-col justify-end p-8">
               <p className="text-white font-bold text-xl mb-2">¿Tienes más preguntas?</p>
                <button
                  onClick={() => window.location.href = '/#contacto'}
                  className="text-luminary-accent font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform"
                >
                  Contáctanos hoy <ArrowRight className="w-4 h-4" />
               </button>
            </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {faqs.map((faq, idx) => (
          <FAQItem 
            key={idx}
            question={faq.question}
            answer={faq.answer}
          />
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
