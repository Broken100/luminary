# Guía Técnica - Luminary Landing Page

## 1. Visión General del Proyecto

**Nombre del Proyecto:** Luminary Regulatory Solutions  
**Tipo:** Landing Page corporativa con sistema de gestión de servicios  
**Objetivo Comercial:** Atraer clientes potenciales para servicios de asesoría regulatoria sanitaria en Ecuador  
**Público Objetivo:** Empresas del sector alimentario, cosmético, farmacéutico y dispositivos médicos que buscan certificación y registro sanitario ante ARCSA

---

## 2. Stack Tecnológico

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| React | 19.0.1 | Framework UI |
| Vite | 6.2.3 | Build tool y dev server |
| Tailwind CSS | 4.1.14 | Framework de estilos |
| React Router | 7.15.0 | Navegación y rutas |
| Motion | 12.23.24 | Animaciones |
| Lucide React | 0.546.0 | Iconos |
| TypeScript | ~5.8.2 | Tipado estático |

---

## 3. Estructura del Proyecto

```
luminary/
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navbar.tsx           # Barra de navegación
│   │   ├── Footer.tsx           # Pie de página
│   │   ├── WhatsAppFloat.tsx    # Botón flotante de WhatsApp
│   │   ├── ServiceCard.tsx      # Card de servicio
│   │   └── FAQItem.tsx          # Item de FAQ
│   ├── sections/          # Secciones de la landing
│   │   ├── HeroSection.tsx      # Hero principal
│   │   ├── StatsSection.tsx     # Estadísticas
│   │   ├── ServicesSection.tsx  # Servicios preview
│   │   ├── ProcessSection.tsx   # Proceso de trabajo
│   │   ├── TestimonialSection.tsx # Testimonios
│   │   ├── FAQSection.tsx       # Preguntas frecuentes
│   │   ├── CTASection.tsx       # Llamada a la acción
│   │   └── ContactSection.tsx   # Formulario de contacto
│   ├── pages/             # Páginas completas
│   │   ├── Home.tsx             # Página principal
│   │   ├── ServiciosPage.tsx    # Grid de servicios
│   │   ├── ServicioDetalle.tsx  # Detalle de servicio (dinámico)
│   │   ├── NotFound.tsx         # Página 404
│   │   └── legal/               # Páginas legales
│   │       ├── AvisoLegal.tsx
│   │       ├── Privacidad.tsx
│   │       ├── Cookies.tsx
│   │       └── Terminos.tsx
│   ├── layouts/           # Layouts
│   │   └── Layout.tsx           # Layout principal (Navbar + Outlet + Footer + WhatsApp)
│   ├── data/              # Datos estáticos
│   │   └── servicesData.ts      # Datos de servicios
│   ├── App.tsx            # Configuración de rutas
│   ├── main.tsx           # Entry point
│   └── index.css          # Estilos globales y theme
├── public/                # Assets estáticos
├── package.json           # Dependencias
├── vite.config.ts         # Configuración de Vite
├── tsconfig.json          # Configuración de TypeScript
└── index.html             # HTML entry point
```

---

## 4. Sistema de Rutas

| Path | Componente | Descripción |
|------|------------|-------------|
| `/` | `Home` | Landing page completa |
| `/servicios` | `ServiciosPage` | Grid con los 6 servicios |
| `/servicios/:slug` | `ServicioDetalle` | Página de detalle dinámica |
| `/legal/aviso-legal` | `AvisoLegal` | Página de aviso legal |
| `/legal/privacidad` | `Privacidad` | Política de privacidad |
| `/legal/cookies` | `Cookies` | Política de cookies |
| `/legal/terminos` | `Terminos` | Términos y condiciones |
| `*` | `NotFound` | Página 404 |

---

## 5. Componentes Principales

### 5.1 Navbar
- **Ubicación:** `src/components/Navbar.tsx`
- **Funcionalidad:**
  - Logo clickeable → `/`
  - Links: Inicio, Nosotros, Servicios (dropdown hover), Contacto
  - Menú mobile con hamburguesa
  - sticky con efecto blur al hacer scroll
- **Rutas:** Usa `/#seccion` para navegación absoluta

### 5.2 Footer
- **Ubicación:** `src/components/Footer.tsx`
- **Contenido:**
  - Logo y descripción
  - Links de navegación (Inicio, Nosotros, Servicios, Contacto)
  - Links legales (Aviso Legal, Privacidad, Cookies, Términos)
  - Información de contacto (dirección, teléfono, email)
  - Redes sociales

### 5.3 WhatsAppFloat
- **Ubicación:** `src/components/WhatsAppFloat.tsx`
- **Funcionalidad:**
  - Botón flotante fijo en esquina inferior derecha
  - Dropdown con 3 mensajes predeterminados
  - Auto-open después de 3 segundos (una vez por sesión)
  - Al seleccionar mensaje → abre WhatsApp con texto pre-llenado

### 5.4 ServiceCard
- **Ubicación:** `src/components/ServiceCard.tsx`
- **Props:**
  - `title`: string
  - `description`: string
  - `icon`: Lucide icon
  - `slug`: string (para navegación)
  - `delay`: number (para animación)
- **Comportamiento:** Click → navega a `/servicios/{slug}`

### 5.5 FAQItem
- **Ubicación:** `src/components/FAQItem.tsx`
- **Props:**
  - `question`: string
  - `answer`: string
- **Comportamiento:** Expandible con animación

---

## 6. Secciones de la Landing

### 6.1 HeroSection
- Título principal con tagline
- Subtítulo explicativo
- CTA buttons (Servicios, Contacto)
- Stats de la empresa

### 6.2 StatsSection
- Grid con métricas clave:
  - Clientes atendidos
  - Registros obtenidos
  - Años de experiencia
  - Tasa de éxito

### 6.3 ServicesSection
- Preview de los 6 servicios (grid 3 columnas)
- Botón "Ver todos los servicios" → `/servicios`
- Cards clickeables con hover effects

### 6.4 ProcessSection
- Pasos del proceso de trabajo
- Iconos + descripción
- Timeline visual

### 6.5 TestimonialSection
- Carrusel de testimonios
- Imagen, nombre, empresa, mensaje
- Autoplay con pause on hover

### 6.6 FAQSection
- 4-6 preguntas frecuentes
- Expandibles con respuesta
- CTA para contactar

### 6.7 CTASection
- Llamada a la acción final
- Botón para ir a contacto

### 6.8 ContactSection
- Información de contacto (dirección, teléfono, email)
- Formulario de contacto (mailto)
- Redes sociales
- Botón de WhatsApp

---

## 7. Gestión de Datos

### servicesData.ts

```typescript
interface Servicio {
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

interface Testimonio {
  nombre: string;
  empresa: string;
  mensaje: string;
}
```

**Servicios disponibles:**
1. Registro Sanitario (`registro-sanitario`)
2. Notificación Sanitaria (`notificacion-sanitaria`)
3. Certificación BPADT (`certificacion-bpadt`)
4. Representación Técnica (`representacion-tecnica`)
5. Asesoría Técnica (`asesoria-tecnica`)
6. Diagnóstico Regulatorio (`diagnostico-regulatorio`)

---

## 8. Páginas Legales

### Aviso Legal
- Información de la empresa
- Responsabilidades
- Propiedad intelectual
- Links de contacto

### Política de Privacidad
- Datos recopilados
- Uso de datos
- Protección de datos
- Derechos del usuario

### Política de Cookies
- Qué son las cookies
- Tipos utilizados
- Cómo gestionarlas

### Términos y Condiciones
- Uso del sitio
- Servicios ofrecidos
- Limitaciones

---

## 9. Scripts Disponibles

```bash
# Desarrollo
npm run dev           # Inicia dev server en puerto 3000

# Build
npm run build         # Build de producción
npm run preview       # Preview del build

# Limpieza
npm run clean         # Elimina carpeta dist

# Linting
npm run lint          # Verificación TypeScript
```

---

## 10. Build y Despliegue

### Proceso de Build
1. `npm run build` ejecuta `vite build`
2. Genera carpeta `dist/` con archivos optimizados
3. **Output estimado:** ~436 KB JS + ~35 KB CSS (gzipped: ~133 KB)

### Despliegue en Vercel
1. Conectar repositorio GitHub en Vercel
2. Framework preset: Vite (auto-detectado)
3. Build command: `npm run build`
4. Output directory: `dist`
5. Deploy automático en push a main

### Configuración Vercel (vercel.json)
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

---

## 11. Variables de Entorno

Actualmente el proyecto **no utiliza** variables de entorno.

**Para producción futura considerar:**
- `VITE_CONTACT_EMAIL`: Email del formulario
- `VITE_WHATSAPP_NUMBER`: Número de WhatsApp
- `VITE_GA_TRACKING_ID`: Google Analytics

---

## 12. Contenido del Formulario de Contacto

### Mensaje Predeterminado para Registro Sanitario
Cuando el usuario navega desde `/servicios/registro-sanitario` y hace click en "Contactar Ahora", el textarea se pre-llena con:

> "Hola, me interesa obtener información sobre el proceso de Registro Sanitario para mis productos. ¿Cuáles son los requisitos y tiempos estimados? Necesito asesoría para registrar mis productos ante ARCSA."

---

## 13. Métricas y Performance

### Build Actual
- **JavaScript:** ~436 KB (gzipped: ~133 KB)
- **CSS:** ~35 KB (gzipped: ~6.6 KB)
- **Total gzipped:** ~140 KB

### Lighthouse Score (esperado)
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

---

## 14. Convenciones de Código

### Nomenclatura
- Componentes: PascalCase (`Navbar.tsx`, `ServiceCard.tsx`)
- Funciones/constantes: camelCase
- Archivos de datos: camelCase (`servicesData.ts`)
- Rutas: kebab-case (`/servicios/registro-sanitario`)

### Estilos
- Tailwind CSS con configuración en `index.css`
- Custom colors en theme: `luminary-dark`, `luminary-accent`, `luminary-bg`, `luminary-border`
- Fuentes: Space Grotesk (display), Inter (body)

### TypeScript
- Tipos definidos en el mismo archivo cuando son específicos
- Interfaces exportadas cuando se reutilizan
- Props tipadas en componentes

---

## 15. Testing Recomendado

### Unit Tests
- Componentes individuales
- Funciones de utilidad
- Gestión de estado

### E2E Tests
- Flujo de navegación completo
- Formulario de contacto
- Dropdown de WhatsApp
- Rutas de servicios

### Tools Sugeridas
- Vitest (unit tests)
- Playwright (E2E)
- Lighthouse (performance)

---

*Documento generado para Luminary Regulatory Solutions - Landing Page*
*Versión del proyecto: 1.0.0*
