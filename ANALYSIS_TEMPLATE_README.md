# Analysis Template for Engram Documentation Changes

Este README sirve como plantilla para capturar de forma estructurada los cambios de documentación y las decisiones asociadas, y para guardar esa información en Engram si se desea.

## 1) Plantilla de análisis (estructura para Engram)

- **Contexto y Problema**
  - Contexto que originó el cambio:
  - Problema o necesidad específica:
  - Restricciones relevantes (tiempo, alcance, tecnología):

- **Objetivo**
  - Objetivos claros y medibles:
  - ¿Qué éxito se espera al final?

- **Alcance**
  -Qué incluye el cambio:
  -Qué queda fuera (exclusiones):

- **Supuestos y Dependencias**
  - Supuestos clave que sustentan la planificación:
  - Dependencias técnicas/negocio/terceros:

- **Requisitos y criterios de éxito**
  - Requisitos funcionales y no funcionales:
  - Criterios de aceptación:

- **Opciones y razonamiento**
  - Opciones consideradas para la solución:
  - Pros/Contras y razonamiento:

- **Decisiones y tradeoffs**
  - Decisiones tomadas (qué se eligió y por qué):
  - Tradeoffs aceptados (impactos):

- **Impactos**
  - Impacto técnico (arquitectura, código, despliegue):
  - Impacto de negocio (marketing, ventas, experiencia de usuario):

- **Plan de implementación**
  - Fases/hitos (qué hacer, cuándo):
  - Entregables por fase:
  - Dependencias entre tareas:

- **Pruebas y validación**
  - Pruebas técnicas (unit, integración, end-to-end):
  - Criterios de aceptación:
  - Cómo validar el cumplimiento de requerimientos:

- **Gestión de riesgos**
  - Riesgos principales y mitigación:
  - Probabilidad e impacto:

- **Documentación y entregables**
  - Documentos a generar/actualizar:
  - Archivos/artefactos a entregar:

- **Métricas y monitoreo**
  - KPIs para medir éxito post-implementación:
  - Métodos de recolección de datos:

- **Aprendizajes**
  - Lecciones aprendidas y buenas prácticas:

- **Revisión y siguientes pasos**
  - Revisión programada:
  - Siguientes pasos sugeridos:

---

## 2) Formato de Engram (learning) - Plantilla corta
- **What**: breve descripción de lo hecho
- **Why**: motivación
- **Where**: archivos/paths afectados
- **Learned**: aprendizajes, riesgos, recomendaciones

- **Title**: Título corto y claro
- **Type**: [decision | architecture | pattern | config | learning]
- **Scope**: [project | personal]
- **Topic_key**: clave para evolución de la memoria
- **Content**: contenido estructurado (What/Why/Where/Learned)


## 3) Ejemplo aplicado (Luminary)

- Contexto: Se actualizó el README para convertirlo en guía maestra y enlazar docs/.
- Objetivo: centralizar documentación en docs/ y proveer guía de onboarding.
- Alcance: README + 4 docs en docs/ (guia-tecnica, guia-diseno, guia-usuarios, escalabilidad).
- Decisiones: README como gateway; docs/ como fuente de verdad; Engram para trazabilidad.
- Plan de implementación: crear/docs, actualizar README, sincronizar, documentar en Engram.
- Métricas: adopción de docs, tasa de acceso a guía, feedback de usuarios.
- Aprendizajes: Cadena de suministro de documentación reduce drift y mejora onboarding.

Guarda este README en la raíz para facilitar su reutilización en futuros cambios.
