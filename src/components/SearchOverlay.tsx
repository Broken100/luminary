import { useState, useEffect, useRef, useCallback, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { servicios } from '../data/servicesData';

const SearchOverlay = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const results = query.trim()
    ? servicios.filter(s =>
        s.titulo.toLowerCase().includes(query.toLowerCase()) ||
        s.descripcionCorta.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  useEffect(() => {
    const handleOpen = (e: Event) => {
      setIsOpen(true);
      setQuery('');
      setSelectedIndex(-1);
      setTimeout(() => inputRef.current?.focus(), 100);
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
        setQuery('');
        setSelectedIndex(-1);
        if (!isOpen) setTimeout(() => inputRef.current?.focus(), 100);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('open-search', handleOpen);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('open-search', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = useCallback((slug: string) => {
    setIsOpen(false);
    setQuery('');
    navigate(`/servicios/${slug}`);
  }, [navigate]);

  const handleKeyNav = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && selectedIndex >= 0 && selectedIndex < results.length) {
      e.preventDefault();
      handleSelect(results[selectedIndex].slug);
    }
  }, [results, selectedIndex, handleSelect]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-[60]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg mx-4 z-[70] bg-white shadow-2xl border border-luminary-border overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 border-b border-luminary-border">
              <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={e => {
                  setQuery(e.target.value);
                  setSelectedIndex(-1);
                }}
                onKeyDown={handleKeyNav}
                placeholder="Buscar servicios..."
                className="w-full py-4 text-sm outline-none bg-transparent"
                aria-label="Buscar servicios"
              />
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            {query.trim() && (
              <div className="max-h-64 overflow-y-auto">
                {results.length > 0 ? (
                  <ul>
                    {results.map((serv, idx) => {
                      const Icon = serv.icono;
                      return (
                        <li key={serv.slug}>
                          <button
                            onClick={() => handleSelect(serv.slug)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-luminary-bg transition-colors ${
                              idx === selectedIndex ? 'bg-luminary-bg' : ''
                            }`}
                          >
                            <Icon className="w-5 h-5 text-luminary-accent flex-shrink-0" />
                            <div className="min-w-0">
                              <p className="font-bold text-sm text-luminary-dark">{serv.titulo}</p>
                              <p className="text-xs text-slate-500 truncate">{serv.descripcionCorta}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-400 ml-auto flex-shrink-0" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <div className="px-4 py-8 text-center text-sm text-slate-400">
                    No se encontraron servicios para "{query}"
                  </div>
                )}
              </div>
            )}

            {!query.trim() && (
              <div className="px-4 py-3 text-xs text-slate-400 text-center">
                <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] font-mono">↑↓</kbd> navegar
                <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] font-mono ml-2">Enter</kbd> seleccionar
                <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-[10px] font-mono ml-2">Esc</kbd> cerrar
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;