import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, X } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
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

export default FAQItem;
