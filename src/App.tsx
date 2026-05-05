/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  ChevronDown, 
  Menu, 
  X, 
  CheckCircle2, 
  Clock, 
  Users, 
  FileText, 
  ShieldCheck, 
  UserPlus, 
  Headphones, 
  ArrowRight,
  Globe,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-luminary-border py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-luminary-accent rounded-sm flex items-center justify-center">
             <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-display font-bold text-luminary-dark leading-none tracking-tight">LUMINARY</h1>
            <p className="text-[9px] tracking-[0.3em] font-bold text-slate-400 uppercase">Regulatory</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#inicio" className="hover:text-luminary-dark transition-colors border-b-2 border-transparent hover:border-luminary-dark pb-1">Inicio</a>
          <a href="#nosotros" className="hover:text-luminary-dark transition-colors border-b-2 border-transparent hover:border-luminary-dark pb-1">Nosotros</a>
          <a href="#servicios" className="hover:text-luminary-dark transition-colors border-b-2 border-transparent hover:border-luminary-dark pb-1">Servicios</a>
          <a href="#contacto" className="px-6 py-2.5 bg-luminary-dark text-white hover:bg-slate-800 transition-all shadow-sm">Contacto</a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-luminary-dark">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="flex flex-col p-4 space-y-4">
              <a href="#inicio" onClick={() => setIsOpen(false)} className="text-lg font-medium">Inicio</a>
              <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-lg font-medium">Nosotros</a>
              <a href="#servicios" onClick={() => setIsOpen(false)} className="text-lg font-medium">Servicios</a>
              <a href="#contacto" onClick={() => setIsOpen(false)} className="text-lg font-medium text-luminary-accent">Contacto</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const ServiceCard = ({ title, description, icon: Icon, delay = 0 }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
  >
    <div className="group p-10 bg-white border border-luminary-border hover:shadow-2xl hover:shadow-luminary-accent/5 transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-0 group-hover:h-full bg-luminary-accent transition-all duration-300"></div>
      <div className="w-12 h-12 bg-luminary-bg flex items-center justify-center text-luminary-accent mb-8 group-hover:bg-luminary-accent group-hover:text-white transition-all duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-display font-bold text-luminary-dark mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8">{description}</p>
      <div className="flex items-center text-[10px] font-bold text-luminary-accent uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform cursor-pointer">
        Saber más <ArrowRight className="w-4 h-4 ml-1" />
      </div>
    </div>
  </motion.div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-6 text-left hover:text-luminary-accent transition-colors"
      >
        <span className="text-base font-semibold md:text-lg">{question}</span>
        <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <X className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-slate-500 text-sm md:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-[90vh] flex items-center pt-28 pb-12 overflow-hidden bg-luminary-bg border-b-8 border-white">
        <div className="absolute top-0 right-0 w-5/12 h-full bg-white overflow-hidden hidden lg:block border-l border-luminary-border">
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
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-luminary-accent/10 text-luminary-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-luminary-accent/20">
              Ecuador 2024 • ARCSA
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-light text-luminary-dark leading-[0.9] mb-8">
              Arquitectura <br />
              <span className="font-bold tracking-tighter">REGULATORIA.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-10 max-w-lg leading-relaxed font-medium">
              Diseñamos soluciones dinámicas que combinan cumplimiento técnico puro con agilidad estratégica para empresas líderes en Ecuador.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-10 py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-widest hover:bg-slate-800 transition-all shadow-xl">
                Nuestros Servicios
              </button>
              <button className="px-10 py-5 bg-white text-luminary-dark border border-luminary-border font-bold text-xs uppercase tracking-widest hover:bg-slate-50 transition-all">
                Nuestra Historia
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              <div className="text-5xl md:text-7xl font-display font-bold text-luminary-dark mb-2">+200</div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Usuarios Satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-luminary-accent font-bold uppercase tracking-widest text-xs mb-4">Servicios Especializados</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark leading-tight">
                Soluciones Integrales para tu Negocio
              </h2>
            </div>
            <button className="text-sm font-bold text-luminary-dark flex items-center gap-2 group">
              Ver todos los servicios <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center md:text-left">
            <ServiceCard 
              icon={FileText} 
              delay={0.1}
              title="Registro Sanitario" 
              description="Autorización oficial que garantiza calidad, seguridad y eficacia de productos para su comercialización legal en Ecuador."
            />
            <ServiceCard 
              icon={ShieldCheck} 
              delay={0.2}
              title="Notificación Sanitaria" 
              description="Gestión ágil de registros sanitarios ante autoridades competentes para el ingreso inmediato al mercado."
            />
            <ServiceCard 
              icon={Clock} 
              delay={0.3}
              title="Certificación BPADT" 
              description="Implementación y auditoría de buenas prácticas de almacenamiento, distribución y transporte."
            />
            <ServiceCard 
              icon={UserPlus} 
              delay={0.4}
              title="Representación Técnica" 
              description="Delegación legal ante organismos regulatorios para garantizar el óptimo cumplimiento de la normativa vigente."
            />
            <ServiceCard 
              icon={Headphones} 
              delay={0.5}
              title="Asesoría Técnica" 
              description="Soluciones estratégicas adaptadas a normativas sanitarias vigentes para optimizar procesos y reducir tiempos."
            />
            <ServiceCard 
              icon={Globe} 
              delay={0.6}
              title="Diagnóstico Regulatorio" 
              description="Analizamos tu negocio bajo lupa técnica para identificar requisitos específicos y viabilidad de proyectos."
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              {[
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
              ].map((step, idx) => (
                <div key={idx} className="bg-white p-12 border-b lg:border-b-0 lg:border-r last:border-0 border-luminary-border group hover:bg-slate-50 transition-all">
                  <div className="w-12 h-12 bg-luminary-bg flex items-center justify-center text-luminary-accent mb-8 group-hover:bg-luminary-dark group-hover:text-white transition-all">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-4">Paso {step.id}</h4>
                  <h3 className="text-xl font-display font-bold text-luminary-dark mb-4 uppercase">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
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

      {/* FAQ Section */}
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luminary-dark/80 to-transparent flex flex-col justify-end p-8">
                   <p className="text-white font-bold text-xl mb-2">¿Tienes más preguntas?</p>
                   <button className="text-luminary-accent font-bold text-sm flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      Contáctanos hoy <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <FAQItem 
              question="¿Qué es un registro sanitario?"
              answer="El registro sanitario es el trámite que certifica que tu producto cumple con las normativas y estándares de seguridad vigentes, garantizando su aptitud para la comercialización legal en el país."
            />
            <FAQItem 
              question="¿Por qué es indispensable contar con un registro sanitario?"
              answer="Es esencial para asegurar que los productos no representen un riesgo para la salud pública y para poder operar comercialmente dentro del marco legal, evitando sanciones y clausuras."
            />
            <FAQItem 
              question="¿Cuánto tiempo demora el proceso de registro?"
              answer="El tiempo varía según el tipo de producto y la complejidad técnica, oscilando generalmente entre 30 a 90 días hábiles en procesos estándar de ARCSA."
            />
            <FAQItem 
              question="¿Qué ocurre si mi producto no cumple inicialmente con las normativas?"
              answer="Acompañamos a nuestros clientes en las reformulaciones, adecuación de etiquetas y mejoras en plantas para asegurar que el cumplimiento sea del 100% antes del ingreso del trámite final."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
             <button className="px-12 py-5 bg-luminary-accent text-white font-bold text-xs uppercase tracking-[0.3em] shadow-2xl shadow-luminary-accent/20 hover:bg-blue-700 transition-all">
               Empezar Proyecto
             </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-display font-bold text-luminary-dark mb-8">Tu Cumplimiento Sanitario Empieza Aquí!</h2>
              <p className="text-stone-500 mb-12">En <span className="font-bold text-luminary-dark">Luminary Ecuador</span>, sabemos que cada hora cuenta. Por eso, nuestro equipo de especialistas está disponible para resolver tus dudas críticas.</p>
              
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-luminary-bg rounded-xl flex items-center justify-center text-luminary-dark border border-slate-100">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luminary-dark">Dirección</h4>
                    <p className="text-slate-500">Quito — Ecuador</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-luminary-bg rounded-xl flex items-center justify-center text-luminary-dark border border-slate-100">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luminary-dark">Teléfono</h4>
                    <p className="text-slate-500">+593 99 110 2621</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-luminary-bg rounded-xl flex items-center justify-center text-luminary-dark border border-slate-100">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-luminary-dark">Email</h4>
                    <p className="text-luminary-accent font-bold">soporte@luminary.com</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-12 border-t border-slate-100 flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all"><Facebook className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all"><Instagram className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="bg-white p-12 border border-luminary-border shadow-2xl">
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Nombre</label>
                    <input type="text" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 focus:border-luminary-accent outline-none transition-all text-sm" placeholder="Nombre completo" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Email</label>
                    <input type="email" className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 focus:border-luminary-accent outline-none transition-all text-sm" placeholder="email@compañia.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Mensaje</label>
                  <textarea rows={4} className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 focus:border-luminary-accent outline-none transition-all resize-none text-sm" placeholder="Detalla tu requerimiento técnico..."></textarea>
                </div>
                <button className="w-full py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all">
                  Enviar Requerimiento
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-luminary-dark text-white pt-24 pb-12 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/5 pb-16 mb-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-luminary-accent flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-white rounded-full"></div>
              </div>
              <h1 className="text-2xl font-display font-bold tracking-tight">LUMINARY</h1>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-xs">
              Especialistas en arquitectura regulatoria. Optimizamos el camino técnico para tu éxito comercial en Ecuador.
            </p>
            <div className="flex gap-6">
              <Facebook className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 text-slate-500 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Navegación</h4>
            <ul className="space-y-4">
              <li><a href="#inicio" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Inicio</a></li>
              <li><a href="#nosotros" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Nosotros</a></li>
              <li><a href="#servicios" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Servicios</a></li>
              <li><a href="#contacto" className="text-slate-300 hover:text-luminary-accent transition-colors text-sm font-medium">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Legal</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="text-slate-300 hover:text-luminary-accent transition-colors">Aviso Legal</a></li>
              <li><a href="#" className="text-slate-300 hover:text-luminary-accent transition-colors">Privacidad</a></li>
              <li><a href="#" className="text-slate-300 hover:text-luminary-accent transition-colors">Cookies</a></li>
              <li><a href="#" className="text-slate-300 hover:text-luminary-accent transition-colors">Términos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.3em] mb-10 text-slate-500">Presencia</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-luminary-accent flex-shrink-0" />
                <span className="text-slate-300 text-sm font-medium">Ecuador — Matriz Quito</span>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="w-4 h-4 text-luminary-accent flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300 break-all">hola@luminary.com</span>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="w-4 h-4 text-luminary-accent flex-shrink-0" />
                <span className="text-sm font-medium text-slate-300">+593 99 110 2621</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] tracking-[0.3em] uppercase font-bold">
          <div>© {new Date().getFullYear()} LUMINARY SOLUTIONS</div>
          <div className="flex gap-8">
             <span>Quito EC</span>
             <span>Puntos de Control ARCSA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
