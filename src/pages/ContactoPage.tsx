import { useParams, useLocation } from 'react-router-dom';
import ContactSection from '../sections/ContactSection';
import Breadcrumbs from '../components/Breadcrumbs';

const ContactoPage = () => {
  const { slug } = useParams<{ slug?: string }>();
  const location = useLocation();
  const servicioSlug = slug || (location.state as { servicio?: string } | null)?.servicio;

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Breadcrumbs items={[{ label: 'Contacto' }]} />
        <ContactSection servicioSlug={servicioSlug} />
      </div>
    </div>
  );
};

export default ContactoPage;