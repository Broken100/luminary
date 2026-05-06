import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const messages = [
    {
      id: 1,
      text: "Hola, me interesa obtener información sobre los servicios de Luminary Regulatory. ¿Pueden asesorarme?",
      label: "Información general"
    },
    {
      id: 2,
      text: "Hola, necesito información sobre el proceso de Registro Sanitario para mis productos. ¿Cómo puedo empezar?",
      label: "Registro Sanitario"
    },
    {
      id: 3,
      text: "Hola, tengo una consulta técnica sobre regulación sanitaria en Ecuador. ¿Existe asesoría disponible?",
      label: "Consulta técnica"
    }
  ];

  const handleSelectMessage = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/593991102621?text=${encodedMessage}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
          >
            <div className="p-4 bg-green-500 text-white">
              <h4 className="font-bold text-sm">Contáctanos por WhatsApp</h4>
              <p className="text-xs text-green-100 mt-1">Selecciona un mensaje predeterminado</p>
            </div>
            <div className="py-2">
              {messages.map((msg) => (
                <button
                  key={msg.id}
                  onClick={() => handleSelectMessage(msg.text)}
                  className="w-full text-left px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 last:border-0"
                >
                  <p className="text-xs font-bold text-green-600 mb-1">{msg.label}</p>
                  <p className="text-sm text-slate-600 leading-snug">{msg.text}</p>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-5 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        {isOpen ? <X className="w-9 h-9 sm:w-8 sm:h-8" /> : <MessageCircle className="w-9 h-9 sm:w-8 sm:h-8" />}
      </button>
    </div>
  );
};

export default WhatsAppFloat;
