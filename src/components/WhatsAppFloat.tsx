import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => (
  <a 
    href="https://wa.me/593991102621"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-5 sm:p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110"
    aria-label="Contactar por WhatsApp"
  >
    <MessageCircle className="w-9 h-9 sm:w-8 sm:h-8" />
  </a>
);

export default WhatsAppFloat;
