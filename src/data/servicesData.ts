import { 
  FileText, 
  ShieldCheck, 
  Clock, 
  UserPlus, 
  Headphones, 
  Globe 
} from 'lucide-react';

export interface Servicio {
  slug: string;
  titulo: string;
  descripcionCorta: string;
  descripcionExtendida: string;
  beneficios: string[];
  tiempoEstimado: string;
  requisitos: string[];
  icono: React.ElementType;
  testimonios: Testimonio[];
}

export interface Testimonio {
  nombre: string;
  empresa: string;
  mensaje: string;
}

export const servicios: Servicio[] = [
  {
    slug: 'registro-sanitario',
    titulo: 'Registro Sanitario',
    descripcionCorta: 'Autorización oficial que garantiza calidad, seguridad y eficacia de productos para su comercialización legal en Ecuador.',
    descripcionExtendida: 'El registro sanitario es el trámite fundamental para poder comercializar productos alimenticios, cosméticos, farmacéuticos y dispositivos médicos en Ecuador. Nuestro equipo de especialistas gestiona todo el proceso ante ARCSA, desde la preparación de la documentación técnica hasta la obtención del certificado oficial. Trabajamos con laboratorios acreditados para realizar los análisis fisicoquímicos, microbiológicos y toxicológicos requeridos por la normativa vigente, garantizando que tu producto cumpla con todos los estándares de calidad y seguridad exigidodos.',
    beneficios: [
      'Comercialización legal en todo el territorio ecuatoriano',
      'Validación de calidad y seguridad ante el consumidor final',
      'Acceso a mercados formales y grandes cadenas de distribución',
      'Renovación automática con nuestro servicio de seguimiento',
      'Reducción de tiempos de espera mediante gestión optimizada'
    ],
    tiempoEstimado: '30-90 días hábiles',
    requisitos: [
      'Documentación técnica del producto (ficha técnica, fórmula cuali-cuantitativa)',
      'Certificado de origen y libre venta del país de origen',
      'Análisis de laboratorio según normas INEN o CODEX',
      'Etiquetas y rotulado conforme a normativa ecuatoriana',
      'Poder especial para representación técnica'
    ],
    icono: FileText,
    testimonios: [
      {
        nombre: 'María Fernanda López',
        empresa: 'Nutrición Andina S.A.',
        mensaje: 'Gracias a Luminary obtuvimos el registro de nuestras 3 líneas de productos en solo 45 días. Su gestión fue impecable y totalmente transparente.'
      },
      {
        nombre: 'Roberto Castillo',
        empresa: 'Droguería del Pacífico',
        mensaje: 'Llevábamos 8 meses intentando obtener el registro sin éxito. Luminary lo logró en 60 días hábiles. Profesionalismo de alto nivel.'
      }
    ]
  },
  {
    slug: 'notificacion-sanitaria',
    titulo: 'Notificación Sanitaria',
    descripcionCorta: 'Gestión ágil de registros sanitarios ante autoridades competentes para el ingreso inmediato al mercado.',
    descripcionExtendida: 'La notificación sanitaria es el mecanismo simplificado para productos de bajo riesgo que no requieren un registro sanitario completo. Este proceso es ideal para cosméticos, productos de higiene personal y algunos alimentos procesados. En Luminary agilizamos todo el trámite, preparando el expediente técnico y gestionando la presentación ante ARCSA. Nuestro enfoque estratégico permite obtener la notificación en tiempos record, facilitando tu ingreso inmediato al mercado ecuatoriano con plena validez legal.',
    beneficios: [
      'Tiempo de respuesta significativamente menor que el registro',
      'Costos reducidos comparado con registro sanitario completo',
      'Validez legal para comercialización de productos de bajo riesgo',
      'Trámite 100% digital ante ARCSA',
      'Actualización y renovación simplificada'
    ],
    tiempoEstimado: '15-30 días hábiles',
    requisitos: [
      'Formulario de notificación sanitaria debidamente llenado',
      'Ficha técnica básica del producto',
      'Certificado de libre venta del país de origen',
      'Etiquetas conforme a normativa vigente'
    ],
    icono: ShieldCheck,
    testimonios: [
      {
        nombre: 'Carmen Rodríguez',
        empresa: 'Belleza Natural Ecuador',
        mensaje: 'Necesitábamos lanzar nuestra línea de cosméticos urgentemente. Luminary nos ayudó con la notificación en 20 días. ¡Increíble servicio!'
      }
    ]
  },
  {
    slug: 'certificacion-bpadt',
    titulo: 'Certificación BPADT',
    descripcionCorta: 'Implementación y auditoría de buenas prácticas de almacenamiento, distribución y transporte.',
    descripcionExtendida: 'La certificación de Buenas Prácticas de Almacenamiento, Distribución y Transporte (BPADT) es esencial para empresas que manejan productos sanitarios, alimentos y medicamentos. En Luminary implementamos el sistema completo en tus instalaciones: desde la adecuación física de bodegas y áreas de distribución, hasta la capacitación del personal y la documentación de procesos. Realizamos auditorías previas para garantizar el éxito en la certificación oficial ante ARCSA, asegurando que tu cadena de suministro cumpla con los más altos estándares de calidad.',
    beneficios: [
      'Cumplimiento normativo total en almacenamiento y distribución',
      'Reducción de mermas y pérdidas por manejo inadecuado',
      'Optimización de procesos logísticos internos',
      'Certificación oficial válida para todo el Ecuador',
      'Mejora en la gestión de inventarios y control de cadena de frío'
    ],
    tiempoEstimado: '60-120 días hábiles',
    requisitos: [
      'Instalaciones adecuadas para almacenamiento (temperatura, humedad, ventilación)',
      'Personal capacitado en BPADT',
      'Manual de procedimientos y protocolos documentados',
      'Sistema de gestión de calidad implementado',
      'Infraestructura para cadena de frío (si aplica)'
    ],
    icono: Clock,
    testimonios: [
      {
        nombre: 'Javier Montenegro',
        empresa: 'Distribuidora Médica del Sur',
        mensaje: 'La implementación de BPADT parecía imposible en nuestra bodega antigua. Luminary transformó nuestros procesos y obtuvimos la certificación en 4 meses.'
      },
      {
        nombre: 'Andrea Vásquez',
        empresa: 'Farmacias del Litoral',
        mensaje: 'Su acompañamiento en la auditoría previa nos dio la confianza necesaria. Pasamos la certificación de ARCSA sin observaciones.'
      }
    ]
  },
  {
    slug: 'representacion-tecnica',
    titulo: 'Representación Técnica',
    descripcionCorta: 'Delegación legal ante organismos regulatorios para garantizar el óptimo cumplimiento de la normativa vigente.',
    descripcionExtendida: 'La representación técnica es un requisito legal para empresas extranjeras que deseen comercializar productos en Ecuador. Actuamos como tu representante legal ante ARCSA, asumiendo la responsabilidad técnica de los productos y gestionando todos los trámites regulatorios. Nuestro equipo de profesionales con amplia experiencia en regulación sanitaria te libera de las cargas burocráticas, permitiéndote enfocarte en tu negocio mientras nosotros garantizamos el cumplimiento normativo continuo y las renovaciones oportunas.',
    beneficios: [
      'Cumplimiento legal inmediato como representante técnico autorizado',
      'Gestión de comunicación directa con ARCSA',
      'Renovación automática de registros a tu nombre',
      'Asesoría permanente ante consultas de la autoridad sanitaria',
      'Protección legal total para tu empresa extranjera'
    ],
    tiempoEstimado: '15-30 días hábiles (para activación)',
    requisitos: [
      'Poder especial otorgado ante notario público',
      'Copia de cédula/pasaporte del representado',
      'Formulario de designación de representante técnico',
      'Pago de tasas administrativas de ARCSA'
    ],
    icono: UserPlus,
    testimonios: [
      {
        nombre: 'Thomas Anderson',
        empresa: 'Global Health Products Inc.',
        mensaje: 'Como empresa estadounidense, necesitábamos presencia legal en Ecuador. Luminary nos representa ante ARCSA con total profesionalismo y transparencia.'
      }
    ]
  },
  {
    slug: 'asesoria-tecnica',
    titulo: 'Asesoría Técnica',
    descripcionCorta: 'Soluciones estratégicas adaptadas a normativas sanitarias vigentes para optimizar procesos y reducir tiempos.',
    descripcionExtendida: 'Nuestra asesoría técnica integral te acompaña en cada etapa del ciclo de vida regulatorio de tus productos. Desde la formulación inicial y diseño de etiquetas, hasta la optimización de procesos de manufactura y respuesta a observaciones de ARCSA. Contamos con un equipo multidisciplinario que analiza tu situación particular y diseña estrategias personalizadas que reducen significativamente los tiempos de comercialización, minimizan riesgos legales y maximizan la eficiencia operativa de tu empresa en el sector sanitario.',
    beneficios: [
      'Análisis experto de tu situación regulatoria actual',
      'Diseño de estrategias personalizadas de cumplimiento',
      'Respuesta profesional a observaciones de ARCSA',
      'Adecuación de fórmulas y etiquetas a normativa ecuatoriana',
      'Capacitación especializada para tu equipo técnico'
    ],
    tiempoEstimado: 'Según complejidad (consultoría continua)',
    requisitos: [
      'Información técnica básica del producto o proceso',
      'Descripción de la problemática o necesidad específica',
      'Acceso a instalaciones (si requiere visita técnica)'
    ],
    icono: Headphones,
    testimonios: [
      {
        nombre: 'Lucía Mendoza',
        empresa: 'Laboratorios EcoVida',
        mensaje: 'Su asesoría técnica transformó nuestra forma de trabajar. Redujimos tiempos de registro en un 40% y las observaciones de ARCSA desaparecieron.'
      },
      {
        nombre: 'Fernando Ruiz',
        empresa: 'Agroindustrias del Ecuador',
        mensaje: 'Tuvimos una observación compleja de ARCSA. Luminary nos preparó la respuesta técnica perfecta. Resuelto en 15 días.'
      }
    ]
  },
  {
    slug: 'diagnostico-regulatorio',
    titulo: 'Diagnóstico Regulatorio',
    descripcionCorta: 'Analizamos tu negocio bajo lupa técnica para identificar requisitos específicos y viabilidad de proyectos.',
    descripcionExtendida: 'El diagnóstico regulatorio es el primer paso fundamental para empresas que desean ingresar al mercado ecuatoriano o regularizar su situación actual. Realizamos una auditoría exhaustiva de tus productos, instalaciones, procesos y documentación existente, identificando gaps de cumplimiento y oportunidades de mejora. Te entregamos un informe detallado con hoja de ruta clara: qué registros necesitas, en qué orden tramitarlos, inversiones estimadas y tiempos de ejecución. Es la brújula estratégica que tu empresa necesita para navegar el complejo mundo regulatorio.',
    beneficios: [
      'Visión clara y completa de tu situación regulatoria actual',
      'Identificación de brechas de cumplimiento y riesgos',
      'Hoja de ruta priorizada con inversiones y tiempos',
      'Toma de decisiones estratégicas basada en datos reales',
      'Prevención de sanciones y clausuras por incumplimiento'
    ],
    tiempoEstimado: '15-30 días hábiles',
    requisitos: [
      'Listado de productos a comercializar',
      'Información básica de la empresa y sus instalaciones',
      'Documentación actual disponible (si existe)',
      'Acceso a instalaciones para visita de diagnóstico'
    ],
    icono: Globe,
    testimonios: [
      {
        nombre: 'Diego Martínez',
        empresa: 'Importadora Asiática S.A.',
        mensaje: 'El diagnóstico de Luminary nos ahorró meses de trabajo innecesario. Identificaron exactamente qué registros necesitábamos y en qué orden tramitarlos.'
      }
    ]
  }
];
