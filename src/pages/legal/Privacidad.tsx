import { Link } from 'react-router-dom';

const Privacidad = () => (
  <div className="min-h-screen bg-white pt-32 pb-24">
    <div className="max-w-4xl mx-auto px-4 md:px-8">
      <div className="mb-12">
        <Link to="/" className="text-luminary-accent font-bold text-sm uppercase tracking-[0.2em] hover:underline">
          ← Volver al inicio
        </Link>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-display font-bold text-luminary-dark mb-8">
        Política de Privacidad
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-slate-500 mb-8 leading-relaxed">
          Luminary Solutions respeta su privacidad y se compromete a proteger sus datos personales 
          conforme a la Ley Orgánica de Protección de Datos Personales (LOPDP) de Ecuador.
        </p>
        
        <div className="bg-luminary-bg p-8 mb-8 border-l-4 border-luminary-accent">
          <h3 className="font-display font-bold text-luminary-dark mb-4">Responsable del Tratamiento</h3>
          <ul className="space-y-2 text-slate-600">
            <li><strong>Entidad:</strong> Luminary Solutions</li>
            <li><strong>Email:</strong> soporte@luminary.com</li>
            <li><strong>Teléfono:</strong> +593 98 221 4081</li>
          </ul>
        </div>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Datos que Recopilamos</h3>
        <p className="text-slate-500 mb-4 leading-relaxed">
          A través de nuestro formulario de contacto recopilamos:
        </p>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Mensaje o consulta</li>
        </ul>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Finalidad del Tratamiento</h3>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li>Atender sus consultas y solicitudes de información</li>
          <li>Enviar información sobre nuestros servicios regulatorios</li>
          <li>Cumplir con obligaciones contractuales y legales</li>
        </ul>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Base Legal</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          El tratamiento de sus datos se basa en su consentimiento expreso, otorgado al marcar 
          la casilla correspondiente en nuestro formulario de contacto.
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Sus Derechos</h3>
        <p className="text-slate-500 mb-4 leading-relaxed">
          Como titular de datos personales, usted tiene derecho a:
        </p>
        <ul className="list-disc pl-6 text-slate-500 mb-8 space-y-2">
          <li>Acceder a sus datos personales</li>
          <li>Rectificar información inexacta</li>
          <li>Solicitar la eliminación de sus datos</li>
          <li>Oponerse al tratamiento de sus datos</li>
          <li>Solicitar la portabilidad de sus datos</li>
        </ul>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Para ejercer estos derechos, envíe un correo a: <strong>soporte@luminary.com</strong>
        </p>

        <h3 className="font-display font-bold text-luminary-dark mb-4">Conservación de Datos</h3>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Sus datos se conservarán mientras se mantenga la relación comercial o durante los plazos 
          legalmente establecidos según la normativa ecuatoriana.
        </p>

        <p className="text-sm text-slate-400 mt-12 pt-8 border-t">
          Última actualización: Mayo 2026
        </p>
      </div>
    </div>
  </div>
);

export default Privacidad;
