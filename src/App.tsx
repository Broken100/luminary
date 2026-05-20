import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';
import AvisoLegal from './pages/legal/AvisoLegal';
import Privacidad from './pages/legal/Privacidad';
import Cookies from './pages/legal/Cookies';
import Terminos from './pages/legal/Terminos';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/servicios" element={<Navigate to="/servicios/registro-sanitario" replace />} />
          <Route path="/servicios/:slug" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/contacto/:slug" element={<ContactoPage />} />
          <Route path="/legal/aviso-legal" element={<AvisoLegal />} />
          <Route path="/legal/privacidad" element={<Privacidad />} />
          <Route path="/legal/cookies" element={<Cookies />} />
          <Route path="/legal/terminos" element={<Terminos />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
