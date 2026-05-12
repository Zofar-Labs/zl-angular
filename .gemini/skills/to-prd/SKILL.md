---
name: to-prd
description: Genera un Documento de Requisitos del Producto (PRD) en Markdown basado en el contexto actual y lo guarda en la carpeta `/docs`.
---

**Proceso:**

1. **Sintetizar:** Analiza la conversación y el código actual. No entrevistes al usuario; usa la información disponible.
    
2. **Estructurar:** Diseña los módulos principales buscando que sean "deep modules" (mucha funcionalidad bajo una interfaz simple).
    
3. **Generar:** Crea un archivo `.md` dentro del directorio `docs/` (por ejemplo: `docs/PRD-feature-name.md`) con la siguiente estructura:
   
#### Estructura del PRD (Template)

- **Problem Statement:** Describe el problema desde la perspectiva del usuario.
    
- **Solution:** Explica la solución propuesta.
    
- **User Stories:** Lista extensa siguiendo el formato:
    
    *As a [persona], I want [action], so that [benefit]. (Ejemplo: As a user, I want to reset my password, so that I can regain access to my account).*
    
- **Implementation Decisions:** Lista de módulos a crear/modificar, cambios en esquemas o contratos de API. **No incluyas rutas de archivos ni código**, a menos que sea un fragmento esencial de un prototipo (ej. un esquema de base de datos).
    
- **Testing Decisions:** Qué se probará (enfocado en comportamiento externo) y qué módulos tendrán prioridad.
    
- **Out of Scope:** Qué cosas **no** se incluirán en esta versión.
    
- **Further Notes:** Notas adicionales o contexto extra.
    

**Formato de salida:** Markdown.