import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Layout = () => {
  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
