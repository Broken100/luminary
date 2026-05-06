# 🌟 Luminary Regulatory Solutions

<div align="center">

**Especialistas en Regulación Sanitaria en Ecuador**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Broken100/luminary)
[![GitHub stars](https://img.shields.io/github/stars/Broken100/luminary?style=social)](https://github.com/Broken100/luminary)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

[🚀 Demo](https://luminary-regulatory.vercel.app) • [📋 Documentación](docs/guia-tecnica.md) • [🎨 Diseño](docs/guia-diseno.md) • [👤 Usuarios](docs/guia-usuarios.md)

</div>

---

## 📋 Descripción

Luminary es una landing page corporativa diseñada para atraer clientes potenciales en el sector de **regulación sanitaria en Ecuador**. Ofrecemos servicios especializados ante **ARCSA** (Agencia Nacional de Regulación, Control y Vigilancia Sanitaria).

### 🎯 ¿Qué hacemos?

- ✅ **Registro Sanitario** para productos alimenticios, cosméticos y farmacéuticos
- ✅ **Notificación Sanitaria** para productos de bajo riesgo
- ✅ **Certificación BPADT** (Buenas Prácticas de Almacenamiento y Distribución)
- ✅ **Representación Técnica** para empresas extranjeras
- ✅ **Asesoría Técnica** especializada
- ✅ **Diagnóstico Regulatorio** completo

---

## 🛠️ Stack Tecnológico

| Tecnología | Versión | Propósito | Badge |
|------------|---------|-----------|-------|
| **React** | 19.0.1 | Framework UI | ![React](https://img.shields.io/badge/React-19.0.1-61DAFB?logo=react) |
| **Vite** | 6.2.3 | Build Tool | ![Vite](https://img.shields.io/badge/Vite-6.2.3-646CFF?logo=vite) |
| **Tailwind CSS** | 4.1.14 | Framework CSS | ![Tailwind](https://img.shields.io/badge/Tailwind%20CSS-4.1.14-06B6D4?logo=tailwindcss) |
| **React Router** | 7.15.0 | Navegación | ![Router](https://img.shields.io/badge/React%20Router-7.15.0-red?logo=reactrouter) |
| **Motion** | 12.23.24 | Animaciones | ![Motion](https://img.shields.io/badge/Motion-12.23.24-pink) |
| **TypeScript** | ~5.8.2 | Tipado | ![TS](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?logo=typescript) |
| **Lucide React** | 0.546.0 | Iconos | ![Lucide](https://img.shields.io/badge/Lucide-0.546.0-orange) |

---

## 🚀 Demo y Deploy

### 🌐 Demo en Vivo
[![Deploy with Vercel](https://vercel.com/button)](https://luminary-regulatory.vercel.app)

### ⚡ Deploy Rápido en Vercel

1. Haz click en **"Deploy with Vercel"** arriba
2. Conecta tu cuenta de GitHub
3. ¡Listo! Se desplegará automáticamente

<details>
<summary>📋 Configuración de Vercel (click para ver)</summary>

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

</details>

---

## 📂 Estructura del Proyecto

```
luminary/
├── 📁 src/
│   ├── 📁 components/        # Componentes reutilizables
│   │   ├── Navbar.tsx           # Barra de navegación
│   │   ├── Footer.tsx           # Pie de página
│   │   ├── WhatsAppFloat.tsx    # Botón flotante WhatsApp
│   │   ├── ServiceCard.tsx      # Card de servicio
│   │   └── FAQItem.tsx          # Item de FAQ
│   ├── 📁 sections/          # Secciones de la landing
│   │   ├── HeroSection.tsx      # Hero principal
│   │   ├── StatsSection.tsx     # Estadísticas
│   │   ├── ServicesSection.tsx  # Servicios preview
│   │   ├── ProcessSection.tsx   # Proceso de trabajo
│   │   ├── TestimonialSection.tsx # Testimonios
│   │   ├── FAQSection.tsx       # Preguntas frecuentes
│   │   ├── CTASection.tsx       # Llamada a la acción
│   │   └── ContactSection.tsx   # Formulario de contacto
│   ├── 📁 pages/             # Páginas completas
│   │   ├── Home.tsx             # Página principal
│   │   ├── ServiciosPage.tsx    # Grid de servicios
│   │   ├── ServicioDetalle.tsx  # Detalle de servicio
│   │   ├── NotFound.tsx         # Página 404
│   │   └── 📁 legal/            # Páginas legales
│   ├── 📁 layouts/           # Layouts
│   │   └── Layout.tsx           # Layout principal
│   ├── 📁 data/              # Datos estáticos
│   │   └── servicesData.ts      # Datos de servicios
│   ├── App.tsx                # Configuración de rutas
│   ├── main.tsx               # Entry point
│   └── index.css              # Estilos globales
├── 📁 docs/                 # Documentación completa
│   ├── guia-tecnica.md       # Para desarrolladores
│   ├── guia-diseno.md        # Para diseñadores
│   ├── guia-usuarios.md      # Para clientes
│   └── escalabilidad.md      # Roadmap y marketing
├── public/                    # Assets estáticos
├── package.json               # Dependencias
├── vite.config.ts             # Configuración Vite
└── README.md                 # Este archivo
```

---

## 🎨 Paleta de Colores

<div align="center">

| Color | Nombre | Hex | Uso |
|-------|--------|-----|-----|
| 🟤 | **Luminary Dark** | `#1A1A1A` | Textos, headings |
| 🔵 | **Luminary Accent** | `#2563EB` | Links, CTAs |
| ⬜ | **Luminary BG** | `#FAF9F6` | Fondo general |
| 🟪 | **Luminary Border** | `#E5E7EB` | Bordes |

</div>

---

## 🚦 Rutas de la Aplicación

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

## 📋 Scripts Disponibles

```bash
# 🔧 Desarrollo local (puerto 3000)
npm run dev

# 🏗️ Build de producción
npm run build

# 👁 Preview del build local
npm run preview

# 🧹 Limpiar carpeta dist
npm run clean

# 🔍 Linting (TypeScript)
npm run lint
```

### 📊 Estadísticas de Build

| Archivo | Tamaño | Gzipped |
|--------|----------|---------|
| **JavaScript** | ~436 KB | ~133 KB |
| **CSS** | ~37 KB | ~7 KB |
| **Total** | ~473 KB | ~140 KB |

---

## ✨ Características Principales

### 🎯 Navegación Inteligente
- ✅ Rutas absolutas para evitar errores (`/#inicio`, `/#contacto`)
- ✅ Dropdown "Servicios" con hover y click a `/servicios`
- ✅ Botón "Legal" eliminado de navbar (solo en Footer)
- ✅ Menú móvil responsive colapsable

### 💬 WhatsApp Integrado
- ✅ Botón flotante en toda la página
- ✅ Dropdown con **3 mensajes predeterminados**:
  1. "Información general"
  2. "Registro Sanitario"
  3. "Consulta técnica"
- ✅ **Auto-open** después de 3 segundos (una vez por sesión)
- ✅ Mensaje pre-llenado para Registro Sanitario

### 📧 Formulario de Contacto
- ✅ Integrado con `mailto:luxopjs@gmail.com`
- ✅ Pre-llenado automático para servicios específicos
- ✅ Diseño responsive mobile-first
- ✅ Validación de campos

### 📱 Responsive Total
- ✅ Mobile-first design
- ✅ Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ✅ Menú hamburguesa en móvil
- ✅ Grid adaptativo (1-3 columnas)

---

## 📚 Documentación Completa

<div align="center">

| Guía | Descripción | Enlace |
|------|-------------|---------|
| 🛠️ **Técnica** | Stack, estructura, rutas, componentes | [Ver guía](docs/guia-tecnica.md) |
| 🎨 **Diseño** | Colores, tipografía, UI, responsive | [Ver guía](docs/guia-diseno.md) |
| 👤 **Usuarios** | Navegación, servicios, contacto | [Ver guía](docs/guia-usuarios.md) |
| 🚀 **Escalabilidad** | Features futuros, marketing, SEO | [Ver guía](docs/escalabilidad.md) |

</div>

---

## 🔮 Implementación a Futuro

<details>
<summary>📋 Roadmap completo (click para ver)</summary>

### Fase 1: Fundamentos (Meses 1-3)
- [ ] Google Analytics 4
- [ ] Google Search Console
- [ ] Sitemap y robots.txt
- [ ] Schema markup básico

### Fase 2: Marketing (Meses 4-6)
- [ ] Blog con 6 artículos
- [ ] Google Ads (brand + servicios)
- [ ] LinkedIn company page
- [ ] Newsletter setup

### Fase 3: Leads (Meses 7-9)
- [ ] Base de datos de leads (Supabase)
- [ ] CRM básico (HubSpot free)
- [ ] Email sequences
- [ ] WhatsApp Business API

### Fase 4: Escalabilidad (Meses 10-12)
- [ ] CMS para legales
- [ ] Chatbot básico con IA
- [ ] Migración a Next.js (opcional)
- [ ] Calculadora de costos

</details>

---

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📞 Contacto

<div align="center">

**Luminary Regulatory Solutions**

📍 Quito, Ecuador  
📞 +593 99 110 2621  
📧 soporte@luminary.com  
💬 [WhatsApp](https://wa.me/593991102621)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?logo=linkedin)](https://linkedin.com/company/luminary)
[![Facebook](https://img.shields.io/badge/Facebook-1877F2?logo=facebook)](https://facebook.com/luminary)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?logo=instagram)](https://instagram.com/luminary)

</div>

---

## 📄 Licencia

Distribuido bajo la Licencia MIT. Ver `LICENSE` para más información.

---

<div align="center">

**⭐ Si este proyecto te ayuda, dale una estrella en GitHub! ⭐**

[![GitHub stars](https://img.shields.io/github/stars/Broken100/luminary?style=social&label=★ Star)](https://github.com/Broken100/luminary)

Hecho con ❤️ por [Luminary Team](https://github.com/Broken100)

</div>
