import Breadcrumbs from '../../components/Breadcrumbs';

const Cookies = () => (
  <div className="min-h-screen bg-white pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <Breadcrumbs items={[{ label: 'Política de Cookies' }]} />
      
      <h1 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark mb-8">
        Política de Cookies
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-slate-500 mb-8 leading-relaxed">
          Este sitio web utiliza cookies para mejorar su experiencia de navegación y analizar el 
          tráfico del sitio.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">¿Qué son las Cookies?</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando 
          visita un sitio web. Permiten que el sitio reconozca su dispositivo y recuerde información 
          sobre su visita.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Tipos de Cookies que Utilizamos</h3>
        
        <div className="bg-luminary-bg p-6 mb-6 border-l-4 border-luminary-accent">
          <h4 className="font-bold text-luminary-dark mb-2">Cookies Técnicas (Necesarias)</h4>
          <p className="text-slate-500 text-sm">
            Esenciales para el funcionamiento del sitio. Permiten la navegación y utilización de 
            las diferentes opciones o servicios (ej. controlar el tráfico, identificar sesiones).
          </p>
        </div>

        <div className="bg-luminary-bg p-6 mb-6 border-l-4 border-luminary-accent">
          <h4 className="font-bold text-luminary-dark mb-2">Cookies de Análisis</h4>
          <p className="text-slate-500 text-sm">
            Permiten el seguimiento y análisis del comportamiento de los usuarios. La información 
            recopilada se utiliza en la medición de la actividad del sitio web.
          </p>
        </div>

        <div className="bg-luminary-bg p-6 mb-8 border-l-4 border-luminary-accent">
          <h4 className="font-bold text-luminary-dark mb-2">Cookies de Terceros</h4>
          <p className="text-slate-500 text-sm">
            Algunas de nuestras páginas pueden mostrar contenido de servicios externos (ej. Unsplash, 
            Google Fonts). Estos terceros pueden establecer sus propias cookies.
          </p>
        </div>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Gestión de Cookies</h3>
        <p className="text-slate-500 mb-6 leading-relaxed">
          Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la 
          configuración de las opciones del navegador instalado en su dispositivo:
        </p>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
          <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
          <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
          <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
        </ul>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Cookies de Terceros</h3>
        <p className="text-slate-500 mb-6 leading-relaxed">
          Este sitio utiliza recursos de terceros que pueden instalar cookies:
        </p>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li><strong>Google Fonts:</strong> Para la carga de tipografías</li>
          <li><strong>Unsplash:</strong> Para la visualización de imágenes</li>
          <li><strong>Formspree:</strong> Para el procesamiento del formulario de contacto</li>
        </ul>

        <p className="text-sm text-slate-400 mt-12 pt-8 border-t">
          Última actualización: Mayo 2026
        </p>
      </div>
    </div>
  </div>
);

export default Cookies;
