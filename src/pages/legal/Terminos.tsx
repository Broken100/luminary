import { Link } from 'react-router-dom';

const Terminos = () => (
  <div className="min-h-screen bg-white pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <div className="mb-12">
        <Link to="/" className="text-luminary-accent font-bold text-sm uppercase tracking-[0.2em] hover:underline">
          ← Volver al inicio
        </Link>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark mb-8">
        Términos y Condiciones
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-slate-500 mb-8 leading-relaxed">
          Estos Términos y Condiciones regulan el uso del sitio web de Luminary Solutions. 
          Al acceder y utilizar este sitio, usted acepta cumplir con estos términos.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">1. Uso del Sitio</h3>
        <p className="text-slate-500 mb-4 leading-relaxed">
          Este sitio web tiene finalidad informativa sobre nuestros servicios de asesoría regulatoria 
          y arquitectura sanitaria en Ecuador.
        </p>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li>El contenido es solo para uso informativo</li>
          <li>No constituye asesoría legal vinculante</li>
          <li>Debe ser utilizado de manera lícita</li>
        </ul>

        <h3 className="font-display font-bold text-luminary-dark mb-4">2. Propiedad Intelectual</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Todo el contenido de este sitio (textos, imágenes, logotipos, diseño, código) es propiedad 
          de Luminary Solutions y está protegido por las leyes de propiedad intelectual de Ecuador. 
          Queda prohibida su reproducción, distribución o modificación sin autorización expresa.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">3. Exactitud de la Información</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Nos esforzamos por mantener la información actualizada y precisa. Sin embargo, no 
          garantizamos que toda la información sea completa, exacta o esté libre de errores. 
          Los contenidos pueden sufrir modificaciones sin previo aviso.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">4. Enlaces a Terceros</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Este sitio puede contener enlaces a sitios web de terceros. Luminary Solutions no se hace 
          responsable por el contenido, políticas de privacidad o prácticas de sitios externos.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">5. Limitación de Responsabilidad</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Luminary Solutions no será responsable por daños directos, indirectos, incidentales o 
          consecuentes que surjan del uso de este sitio web o la imposibilidad de acceder al mismo.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">6. Servicios Regulatorios</h3>
        <p className="text-slate-500 mb-4 leading-relaxed">
          Los servicios de registro sanitario, notificación y certificaciones están sujetos a:
        </p>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li>Normativas vigentes de ARCSA</li>
          <li>Disponibilidad de documentación del cliente</li>
          <li>Tiempos de respuesta de autoridades competentes</li>
          <li>Contrato específico de servicios firmado</li>
        </ul>

        <h3 className="font-display font-bold text-luminary-dark mb-4">7. Jurisdicción</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Estos términos se rigen por las leyes de la República del Ecuador. Cualquier controversia 
          será sometida a los tribunales competentes de Quito, Ecuador.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">8. Modificaciones</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Las 
          modificaciones entrarán en vigor al ser publicadas en esta página.
        </p>

        <p className="text-sm text-slate-400 mt-12 pt-8 border-t">
          Última actualización: Mayo 2026
        </p>
      </div>
    </div>
  </div>
);

export default Terminos;
