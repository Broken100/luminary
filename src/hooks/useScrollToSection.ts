import { useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = useCallback((sectionId: string) => {
    if (location.pathname === '/') {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  }, [location.pathname, navigate]);

  return scrollToSection;
};

export default useScrollToSection;