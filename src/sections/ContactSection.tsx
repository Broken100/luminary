import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, MessageCircle, Linkedin } from 'lucide-react';
import { servicios } from '../data/servicesData';

const getServiceMessage = (slug: string | undefined): string => {
  if (!slug) return '';
  const servicio = servicios.find(s => s.slug === slug);
  if (!servicio) return '';
  return `Hola, me interesa obtener información sobre ${servicio.titulo}. ¿Cuáles son los requisitos y tiempos estimados? Necesito asesoría para gestionar este trámite ante ARCSA.`;
};

interface ContactSectionProps {
  servicioSlug?: string;
}

const ContactSection = ({ servicioSlug }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: servicioSlug ? getServiceMessage(servicioSlug) : ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Consulta desde Luminary Landing Page');
    const body = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Mensaje:\n${formData.message}`
    );
    
    window.location.href = `mailto:luxopjs@gmail.com?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-display font-bold text-luminary-dark mb-8">Tu Cumplimiento Sanitario Empieza Aquí!</h2>
            <p className="text-stone-500 mb-12">
              En <span className="font-bold text-luminary-dark">Luminary Ecuador</span>, sabemos que cada hora cuenta. 
              Por eso, nuestro equipo de especialistas está disponible para resolver tus dudas críticas.
            </p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-luminary-bg rounded-xl flex items-center justify-center text-luminary-dark border border-slate-100">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-luminary-dark">Dirección</h4>
                  <p className="text-slate-500">Quito — Ecuador</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-luminary-bg rounded-xl flex items-center justify-center text-luminary-dark border border-slate-100">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-luminary-dark">Teléfono</h4>
                  <p className="text-slate-500">+593 99 110 2621</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-luminary-bg rounded-xl flex items-center justify-center text-luminary-dark border border-slate-100">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-luminary-dark">Email</h4>
                  <p className="text-luminary-accent font-bold">soporte@luminary.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-slate-100 flex justify-center sm:justify-start gap-6">
              <a href="https://linkedin.com/company/luminary" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="https://facebook.com/luminaryec" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all" aria-label="Facebook">
                <Facebook className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="https://instagram.com/luminaryec" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
              <a href="https://x.com/luminaryec" target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-10 sm:h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-luminary-dark hover:text-white transition-all" aria-label="X (Twitter)">
                <Twitter className="w-6 h-6 sm:w-5 sm:h-5" />
              </a>
            </div>

            <div className="mt-8">
              <a 
                href="https://wa.me/593991102621"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 sm:px-6 py-4 sm:py-3 bg-green-500 text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-green-600 transition-all shadow-lg"
              >
                <MessageCircle className="w-6 h-6 sm:w-5 sm:h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-12 border border-luminary-border shadow-2xl">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-luminary-dark mb-4">¡Gracias por contactarnos!</h3>
                <p className="text-slate-500">
                  Tu cliente de email se ha abierto con el mensaje pre-llenado. 
                  Haz clic en "Enviar" para completar el envío.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Nombre</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 focus:border-luminary-accent outline-none transition-all text-sm" 
                      placeholder="Nombre completo" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Email</label>
                    <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 focus:border-luminary-accent outline-none transition-all text-sm" 
                      placeholder="email@compañia.com" 
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Mensaje</label>
                  <textarea 
                    name="message" 
                    rows={4} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-b-2 border-slate-200 px-4 py-4 focus:border-luminary-accent outline-none transition-all resize-none text-sm" 
                    placeholder="Detalla tu requerimiento técnico..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full py-5 bg-luminary-dark text-white font-bold text-xs uppercase tracking-[0.3em] hover:bg-slate-800 transition-all"
                >
                  Enviar Requerimiento
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;