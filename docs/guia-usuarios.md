# Guía para Usuarios - Luminary Landing Page

## 1. Introducción

### ¿Qué es Luminary?

Luminary es una empresa de consultoría regulatoria especializada en trámites sanitarios en Ecuador. Nos enfocamos en ayudarte a obtener registros sanitarios, certificaciones y representaciones técnicas ante **ARCSA** (Agencia Nacional de Regulación, Control y Vigilancia Sanitaria).

### ¿Para quién es este servicio?

- **Empresas alimentarias** que necesitan registro sanitario para vender en Ecuador
- **Laboratorios cosméticos** que requieren notificación sanitaria
- **Distribuidores farmacéuticos** que necesitan certificación BPADT
- **Empresas extranjeras** que buscan representación técnica local
- **Cualquier negocio** del sector salud que requiera cumplimiento normativo

---

## 2. Navegación Principal

### Estructura del Menú

```
┌─────────────────────────────────────────────────────────┐
│  LUMINARY ▾                                           │
│  Regulatory                                            │
├─────────────────────────────────────────────────────────┤
│  Inicio  |  Nosotros  |  Servicios ▾  |  [Contacto]    │
└─────────────────────────────────────────────────────────┘
```

### Secciones de la Página Principal

| Sección | Contenido | Acción al hacer click |
|---------|-----------|----------------------|
| **Inicio** | Hero + servicios destacados | Scroll a sección #inicio |
| **Nosotros** | Stats, proceso, equipo | Scroll a sección #nosotros |
| **Servicios** | Dropdown con 6 servicios | Va a /servicios |
| **Contacto** | Formulario + WhatsApp | Scroll a sección #contacto |

### Navegación desde Otras Páginas

Los enlaces usan **rutas absolutas** (`/#servicios`, `/#contacto`) para evitar errores cuando navegas desde páginas como `/servicios/registro-sanitario`.

---

## 3. Exploración de Servicios

### Los 6 Servicios Disponibles

En la página principal verás una preview de los servicios. Para verlos todos:

1. Haz click en **"Servicios"** en el menú de navegación
2. O haz click en **"Ver todos los servicios"** debajo del grid

### Página de Servicios (`/servicios`)

Esta página muestra un **grid de 3 columnas** (en desktop) con todos los servicios:

1. **Registro Sanitario**
2. **Notificación Sanitaria**
3. **Certificación BPADT**
4. **Representación Técnica**
5. **Asesoría Técnica**
6. **Diagnóstico Regulatorio**

Cada card muestra:
- Icono del servicio
- Título
- Descripción breve
- Flecha para ir al detalle

---

## 4. Detalle de Cada Servicio

### Cómo Ver un Servicio Específico

1. Desde la página de servicios, haz click en cualquier card
2. O desde el dropdown de "Servicios" en el navbar, selecciona directamente

### Página de Detalle (`/servicios/{slug}`)

Cada servicio tiene su propia página con:

- **Descripción completa** del servicio
- **Beneficios** que obtendrás
- **Tiempo estimado** del trámite
- **Requisitos** necesarios
- **Testimonios** de clientes atendidos
- **Botón "Contactar Ahora"** para iniciar el proceso

---

## 5. Formas de Contacto

Luminary ofrece **3 formas principales** de contacto:

### 5.1 Formulario de Contacto (Email)

**Ubicación:** Sección #contacto de cualquier página

**Cómo usarlo:**
1. Llena tu nombre
2. Ingresa tu email
3. Escribe tu mensaje
4. Click en "Enviar Requerimiento"

**Resultado:** Se abre tu cliente de email con el mensaje pre-llenado. Solo necesitas hacer click en "Enviar".

**Destinatario:** `luxopjs@gmail.com`

### 5.2 WhatsApp

**Ubicación:** Botón flotante en esquina inferior derecha

**Cómo usarlo:**
1. Click en el botón verde de WhatsApp
2. Se abre un dropdown con 3 opciones de mensaje predeterminado:
   - **Información general**: Preguntar sobre servicios en general
   - **Registro Sanitario**: Consultar sobre proceso de registro
   - **Consulta técnica**: Pregunta técnica específica
3. Selecciona una opción
4. Se abre WhatsApp Web con el mensaje listo para enviar

**Número:** +593 99 110 2621

**Auto-open:** El dropdown se abre automáticamente **3 segundos** después de cargar la página (solo una vez por sesión).

### 5.3 Teléfono

**Número:** +593 99 110 2621

**Horario sugerido:** Lunes a viernes, 9:00 - 18:00 (hora Ecuador)

---

## 6. Pre-llenado de Mensaje desde Registro Sanitario

### Cuándo se Activa

Si navegas desde la página de **Registro Sanitario** y haces click en "Contactar Ahora", el formulario de contacto se pre-llena automáticamente con:

> *"Hola, me interesa obtener información sobre el proceso de Registro Sanitario para mis productos. ¿Cuáles son los requisitos y tiempos estimados? Necesito asesoría para registrar mis productos ante ARCSA."*

### Cómo Llegar

1. Ve a `/servicios` o haz click en "Servicios" en el menú
2. Click en el card de "Registro Sanitario"
3. En la página de detalle, click en "Contactar Ahora"
4. El mensaje ya estará escrito en el formulario

**Nota:** Este pre-llenado solo funciona para el servicio de **Registro Sanitario**. Para otros servicios, el campo de mensaje estará vacío.

---

## 7. Páginas Legales

### Dónde Encontrarlas

Las páginas legales están en el **Footer** de todas las páginas:

```
Footer
├── Links Rápidos
│   ├── Inicio
│   ├── Nosotros
│   ├── Servicios
│   └── Contacto
├── Legal
│   ├── Aviso Legal
│   ├── Privacidad
│   ├── Cookies
│   └── Términos
```

### Contenido de Cada Página

| Página | Contenido |
|--------|-----------|
| **Aviso Legal** | Información de la empresa, responsabilidades, propiedad intelectual |
| **Privacidad** | Cómo protegemos tus datos, qué información recopilamos |
| **Cookies** | Qué cookies usamos, cómo gestionarlas |
| **Términos** | Condiciones de uso del sitio web |

### URLs Directas
- `/legal/aviso-legal`
- `/legal/privacidad`
- `/legal/cookies`
- `/legal/terminos`

---

## 8. Navegación Móvil

### El Menú Hamburguesa

En dispositivos móviles, el menú se colapsa en un botón de hamburguesa:

```
☰  LUMINARY
```

### Al Hacer Click

Se despliega un menú vertical con todas las opciones:

```
☰  LUMINARY
─────────────────
• Inicio
• Nosotros
• Servicios
  └ Registro Sanitario
  └ Notificación Sanitaria
  └ Certificación BPADT
  └ Representación Técnica
  └ Asesoría Técnica
  └ Diagnóstico Regulatorio
• Contacto
```

### Diferencias con Desktop

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Menú | Horizontal | Vertical (hamburguesa) |
| Servicios | Dropdown hover | Lista expandida |
| Botones | Grande | Mediano adaptativo |
| Footer | 3 columnas | 1 columna |

---

## 9. Navegación desde Otras Páginas

### El Problema Resuelto

Anteriormente, si estabas en `/servicios` y hacías click en "Inicio", ibas a `/servicios#inicio` (¡incorrecto!). Ahora los enlaces usan rutas absolutas:

- `/#inicio` → Siempre va al inicio de la página principal
- `/#nosotros` → Sección nosotros de la página principal
- `/servicios` → Sección servicios (o página de servicios)
- `/#contacto` → Sección contacto

### Ejemplo Práctico

Si estás en `/servicios/registro-sanitario` y haces click en "Contacto", irás a:

```
/#contacto (que es lo mismo que /#contacto)
```

No importa desde qué página navegues, siempre llegarás a la sección correcta.

---

## 10. Errores Comunes y Soluciones

### Página 404 (No Encontrada)

**Síntoma:** Ves "Página no encontrada"

**Causa:** URL incorrecta o página eliminada

**Solución:** 
- Ve a `/` (página principal)
- Usa el menú de navegación

### Formulario No Envía

**Síntoma:** El email no se abre

**Solución:**
- Verifica que tengas un cliente de email configurado
- Intenta usar WhatsApp como alternativa
- Llama directamente al teléfono

### WhatsApp No Se Abre

**Síntoma:** Click en botón no hace nada

**Solución:**
- Verifica que WhatsApp Web esté instalado o usa la app
- Intenta el formulario de contacto como alternativa

---

## 11. Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Tab` | Navegar entre elementos |
| `Enter` | Activar link/button |
| `Esc` | Cerrar dropdowns/modals |

---

## 12. Preguntas Frecuentes de Usuarios

### ¿Cuánto tiempo toma un registro sanitario?

**R:** Entre 30-90 días hábiles, dependiendo del tipo de producto y complejidad.

### ¿Qué necesito para iniciar un trámite?

**R:** Depende del servicio. Cada página de servicio tiene una sección de requisitos específica.

### ¿Puedo usar WhatsApp para consultas rápidas?

**R:** ¡Sí! El botón flotante de WhatsApp está disponible en todo el sitio.

### ¿El servicio incluye seguimiento?

**R:** Sí, todos los servicios incluyen acompañamiento durante todo el proceso.

---

## 13. Accesibilidad

### Para Usuarios con Discapacidad Visual

- Contraste alto entre texto y fondo
- Texto legible en todos los tamaños
- Navegación por teclado completa

### Para Usuarios con Discapacidad Motora

- Botones grandes y táctiles
- Spacing adecuado entre elementos
- Click áreas amplias

---

## 14. ¿Necesitas Ayuda?

Si tienes dificultades navegando o necesitas información adicional:

1. **WhatsApp**: Click en el botón verde, selecciona "Información general"
2. **Teléfono**: +593 99 110 2621
3. **Email**: Usa el formulario de contacto

---

*Guía de Usuario para Luminary Regulatory Solutions*
*Versión: 1.0.0*
