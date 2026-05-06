# Guía de Diseño - Luminary Landing Page

## 1. Paleta de Colores

### Colores Principales

| Color | Hex | Uso | Variables Tailwind |
|-------|-----|-----|-------------------|
| **Luminary Dark** | `#1A1A1A` | Textos principales, encabezados, fondos oscuros | `--color-luminary-dark` |
| **Luminary Accent** | `#2563EB` | Links, CTAs, acentos, badges | `--color-luminary-accent` |
| **Luminary BG** | `#FAF9F6` | Fondo general de la página | `--color-luminary-bg` |
| **Luminary Border** | `#E5E7EB` | Bordes, separadores | `--color-luminary-border` |

### Colores Semánticos

| Color | Hex | Uso | Variable CSS |
|-------|-----|-----|-------------|
| **Success (Green)** | `#22C55E` | Botón WhatsApp | custom |
| **Error** | `#EF4444` | Validación de formularios | - |
| **White** | `#FFFFFF` | Fondos de cards, inputs | - |
| **Slate** | `#475569` | Textos secundarios | Tailwind default |
| **Slate Light** | `#94A3B8` | Placeholders | Tailwind default |

### Uso de Colores

```css
/* Texts */
.text-luminary-dark { color: #1A1A1A; }
.text-luminary-accent { color: #2563EB; }

/* Backgrounds */
.bg-luminary-dark { background-color: #1A1A1A; }
.bg-luminary-bg { background-color: #FAF9F6; }
.bg-luminary-accent { background-color: #2563EB; }

/* Borders */
.border-luminary-border { border-color: #E5E7EB; }
```

---

## 2. Tipografía

### Font Families

| Font | Import | Uso | Propósito |
|------|--------|-----|-----------|
| **Space Grotesk** | Google Fonts | Headings, titles | Display, énfasis |
| **Inter** | Google Fonts | Body text, UI | Legibilidad |

### Importación (index.css)

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
```

### Configuración Theme

```css
@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Space Grotesk", sans-serif;
}
```

### Tallas de Fuente

| Elemento | Tailwind Class | Size | Weight |
|----------|---------------|------|--------|
| H1 | `text-5xl` | 3rem (48px) | 700 |
| H2 | `text-4xl` | 2.25rem (36px) | 700 |
| H3 | `text-2xl` | 1.5rem (24px) | 700 |
| Body | `text-base` | 1rem (16px) | 400 |
| Small | `text-sm` | 0.875rem (14px) | 400 |
| Caption | `text-xs` | 0.75rem (12px) | 500 |
| Label | `text-[10px]` | 10px | 700 |

### Tracking y Line Height

```css
/* Headings */
h1, h2, h3, h4 {
  @apply tracking-tight;
}

/* Labels (uppercase) */
.label-uppercase {
  @apply tracking-[0.2em] uppercase;
}
```

---

## 3. Sistema de Diseño

### Spacing

| Token | PX | Uso |
|-------|-----|-----|
| `p-4` | 16px | Padding general |
| `p-8` | 32px | Sections padding |
| `p-12` | 48px | Large sections |
| `gap-4` | 16px | Grid gap |
| `gap-8` | 32px | Section gap |

### Border Radius

| Elemento | Class | Radius |
|----------|-------|--------|
| Buttons | `rounded-none` | 0 (corporativo) |
| Cards | `rounded-xl` | 12px |
| Inputs | `rounded-none` | 0 |
| Badges | `rounded-full` | 9999px |
| Images | `rounded-lg` | 8px |

### Shadows

| Level | Class | Propósito |
|-------|-------|-----------|
| Card | `shadow-xl` | Cards de servicios |
| Button | `shadow-lg` | CTAs principales |
| Floating | `shadow-2xl` | WhatsApp float, dropdowns |
| Input | `shadow-sm` | Inputs focus |

### Breakpoints

| Breakpoint | Min Width | Grid Columns |
|------------|-----------|---------------|
| **sm** | 640px | 1-2 |
| **md** | 768px | 2 |
| **lg** | 1024px | 2-3 |
| **xl** | 1280px | 3-4 |

---

## 4. Componentes UI

### 4.1 Buttons

#### Primary Button
```tsx
<button className="
  px-10 py-5 
  bg-luminary-dark 
  text-white 
  font-bold text-xs uppercase tracking-[0.3em] 
  hover:bg-slate-800 
  transition-all 
  shadow-xl
">
  Contactar Ahora
</button>
```

#### Secondary Button
```tsx
<a href="/servicios" className="
  text-sm font-bold 
  text-luminary-dark 
  flex items-center gap-2 group
">
  Ver todos los servicios 
  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
</a>
```

#### WhatsApp Button
```tsx
<a href="https://wa.me/593991102621" className="
  px-8 py-4 
  bg-green-500 text-white 
  font-bold text-xs uppercase tracking-[0.3em] 
  hover:bg-green-600 
  transition-all shadow-lg
">
  WhatsApp
</a>
```

### 4.2 Cards (ServiceCard)

```tsx
<div className="
  p-8 
  bg-white 
  border border-luminary-border 
  hover:border-luminary-accent 
  hover:shadow-xl 
  transition-all duration-300
">
  <Icon className="w-12 h-12 text-luminary-accent mb-4" />
  <h3 className="text-xl font-display font-bold text-luminary-dark mb-3">
    {title}
  </h3>
  <p className="text-slate-500 text-sm mb-4">{description}</p>
  <ArrowRight className="w-5 h-5 text-luminary-dark" />
</div>
```

### 4.3 Inputs

```tsx
<input 
  type="text"
  className="
    w-full 
    bg-slate-50 
    border-b-2 border-slate-200 
    px-4 py-4 
    focus:border-luminary-accent 
    outline-none 
    transition-all 
    text-sm
  "
  placeholder="Nombre completo"
/>
```

### 4.4 Badges

```tsx
<span className="
  text-luminary-accent 
  font-bold uppercase 
  tracking-widest text-xs
">
  Servicios Especializados
</span>
```

---

## 5. Estilos Responsive

### Navbar

```tsx
// Desktop (> 768px)
<nav className="hidden md:flex">...</nav>

// Mobile (< 768px)
<button className="md:hidden">...</button>
<AnimatePresence>
  {isOpen && <motion.div className="md:hidden">...</motion.div>}
</AnimatePresence>
```

### Grids

```tsx
// Servicios - 1 col mobile, 2 col tablet, 3 col desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  ...
</div>

// Contact - 1 col mobile, 2 col desktop
<div className="grid lg:grid-cols-2 gap-16">
  ...
</div>
```

### Typography Responsive

```tsx
<h2 className="text-4xl md:text-5xl font-display font-bold...">
  Title
</h2>
```

---

## 6. Animaciones

### Animations (Motion)

#### Dropdown Navbar
```tsx
<AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      ...
    </motion.div>
  )}
</AnimatePresence>
```

#### WhatsApp Dropdown
```tsx
<motion.div
  initial={{ opacity: 0, y: 20, scale: 0.95 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  exit={{ opacity: 0, y: 20, scale: 0.95 }}
  transition={{ duration: 0.2 }}
>
  ...
</motion.div>
```

#### Mobile Menu
```tsx
<motion.div 
  initial={{ opacity: 0, height: 0 }}
  animate={{ opacity: 1, height: 'auto' }}
  exit={{ opacity: 0, height: 0 }}
>
  ...
</motion.div>
```

#### Hover Effects
```css
.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift:hover {
  transform: translateY(-4px);
}
```

---

## 7. Accesibilidad

### Contraste
- Texto sobre fondo blanco: `#1A1A1A` on `#FFFFFF` ✓ (13.5:1)
- Links: `#2563EB` on `#FFFFFF` ✓ (4.5:1)
- Texto secundario: `#475569` on `#FFFFFF` ✓ (7:1)

### ARIA Labels
```tsx
<button aria-label="Contactar por WhatsApp">
  <MessageCircle />
</button>

<a href="#inicio" aria-label="Ir a Inicio">
  Inicio
</a>
```

### Focus States
```css
input:focus {
  @apply ring-2 ring-luminary-accent ring-offset-2;
}
```

### Keyboard Navigation
- Todos los botones accesibles por teclado
- Links con `:focus-visible` styles
- Skip links para navegación principal

---

## 8. Iconografía (Lucide React)

### Iconos Utilizados

| Icono | Archivo | Uso |
|-------|---------|-----|
| FileText | servicesData.ts | Registro Sanitario |
| ShieldCheck | servicesData.ts | Notificación Sanitaria |
| Clock | servicesData.ts | Certificación BPADT |
| UserPlus | servicesData.ts | Representación Técnica |
| Headphones | servicesData.ts | Asesoría Técnica |
| Globe | servicesData.ts | Diagnóstico Regulatorio |
| ArrowRight | Buttons, Cards | Navegación |
| CheckCircle | Proceso | Paso completado |
| MapPin | ContactSection | Dirección |
| Phone | ContactSection | Teléfono |
| Mail | ContactSection | Email |
| Facebook, Twitter, Instagram | Footer | Redes sociales |
| MessageCircle | WhatsAppFloat | WhatsApp |
| ChevronDown | Navbar | Dropdowns |
| Menu, X | Navbar Mobile | Toggle |
| Calendar | Proceso | Fechas |

---

## 9. Imágenes y Assets

### Imágenes de Testimonios
- Ubicación: URLs externas o `/public/images/`
- Formato: JPG, PNG, WebP
- Tamaño recomendado: 400x400px max
- Border radius: `rounded-full` para avatares

### Logo
- SVG recomendado para scalability
- Colores: `#1A1A1A` + `#2563EB`
- Dimensiones: 32x32px (icono), 128x128px (full)

### Backgrounds
- CSS gradients cuando sea necesario
- Imágenes con `object-fit: cover`
- Lazy loading para imágenes pesadas

---

## 10. Mejores Prácticas de Diseño

### ✅ Hacer
- Usar spacing consistente (múltiplos de 4px)
- Mantener jerarquía visual clara
- Usar colores de la paleta definida
- Incluir estados hover/focus
- Diseño mobile-first

### ❌ Evitar
- Más de 3 fuentes diferentes
- Colores fuera de la paleta
- Textos demasiado largos
- Buttons sin suficiente contraste
- Animaciones excesivas

---

## 11. Theme Extension

Para agregar nuevos tokens al theme en `index.css`:

```css
@theme {
  /* Colores existentes */
  --color-luminary-dark: #1A1A1A;
  --color-luminary-accent: #2563EB;
  --color-luminary-bg: #FAF9F6;
  
  /* Nuevos colores */
  --color-luminary-success: #22C55E;
  --color-luminary-warning: #F59E0B;
  --color-luminary-error: #EF4444;
  
  /* Spacing adicional */
  --spacing-18: 4.5rem;
  --spacing-22: 5.5rem;
}
```

---

*Documento de Diseño para Luminary Regulatory Solutions*
*Versión: 1.0.0*
