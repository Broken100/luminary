import { Link } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

const AvisoLegal = () => (
  <div className="min-h-screen bg-white pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <Breadcrumbs items={[{ label: 'Aviso Legal' }]} />
      
      <h1 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark mb-8">
        Aviso Legal
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-slate-500 mb-6 leading-relaxed">
          En cumplimiento con la normativa vigente en Ecuador, se informa que:
        </p>
        
        <div className="bg-luminary-bg p-8 mb-8 border-l-4 border-luminary-accent">
          <h3 className="font-display font-bold text-luminary-dark mb-4">Datos Identificativos</h3>
          <ul className="space-y-2 text-slate-600">
            <li><strong>Razón Social:</strong> Luminary Solutions</li>
            <li><strong>Actividad:</strong> Asesoría en regulación sanitaria y arquitectura regulatoria</li>
            <li><strong>Dirección:</strong> Quito — Ecuador</li>
            <li><strong>Email:</strong> soporte@luminary.com</li>
            <li><strong>Teléfono:</strong> +593 98 221 4081</li>
          </ul>
        </div>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Propiedad Intelectual</h3>
        <p className="text-slate-500 mb-6 leading-relaxed">
          Todos los contenidos de este sitio web (textos, imágenes, logotipos, diseño) son propiedad 
          de Luminary Solutions y están protegidos por las leyes de propiedad intelectual. Queda prohibida 
          su reproducción total o parcial sin autorización expresa.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Responsabilidad</h3>
        <p className="text-slate-500 mb-6 leading-relaxed">
          Luminary Solutions no se hace responsable por errores en el contenido o por daños derivados 
          del uso de la información contenida en este sitio web. Los contenidos tienen carácter informativo 
          y no constituyen asesoría legal vinculante.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Modificaciones</h3>
        <p className="text-slate-500 mb-6 leading-relaxed">
          Nos reservamos el derecho de modificar este aviso legal en cualquier momento, publicando la 
          versión actualizada en esta misma página.
        </p>

        <p className="text-sm text-slate-400 mt-12 pt-8 border-t">
          Última actualización: Mayo 2026
        </p>
      </div>
    </div>
  </div>
);

export default AvisoLegal;
