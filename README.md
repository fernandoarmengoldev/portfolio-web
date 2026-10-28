# Portfolio de Fernando D. Armengol Gonzalez

Portafolio bilingüe y estático construido con Astro 7, Tailwind CSS 4, TypeScript estricto y Bun. La interfaz utiliza componentes Astro, Content Collections y JavaScript de cliente mínimo.

## Requisitos

- Bun 1.3 o posterior.
- Los PDF definitivos del CV y la fotografía real cuando estén disponibles.

## Instalación

```bash
bun install
```

## Desarrollo

El servidor se inicia en segundo plano:

```bash
bun dev
bun run dev:status
bun run dev:logs
bun run dev:stop
```

## Verificación y build

```bash
bun run check
bun run build
bun run preview
```

El build estático se genera en `dist/`.

## Estructura relevante

```text
src/
  assets/images/           Imágenes procesadas por astro:assets
  components/              Componentes compartidos de interfaz
  content/projects/        Proyectos bilingües en Content Collections
  data/                    Perfil, experiencia, formación y tecnologías
  i18n/translations.ts     Textos visibles en español e inglés
  layouts/                 SEO, metadatos y estructura base
  pages/                   Rutas en español (raíz del sitio)
  pages/en/                Rutas en inglés
  styles/global.css        Tokens y estilos globales
public/
  cv/                      PDF del currículum
```

## Añadir o sustituir un proyecto

1. Duplica una entrada de `src/content/projects/` para cada idioma.
2. Mantén la misma `translationKey` en ambas versiones.
3. Usa un `slug` español para `/proyectos/` y otro inglés para `/en/projects/`.
4. Completa todos los campos TODO con información verificable.
5. Guarda la imagen en `src/assets/images/projects/` y referencia su ruta relativa desde el Markdown.
6. Añade URL de GitHub o demo solo si existen. Los enlaces son opcionales.
7. Ejecuta `bun run check && bun run build`.

El esquema se define en `src/content.config.ts`.

## Añadir o corregir una traducción

Los textos de interfaz están en `src/i18n/translations.ts`. Los datos profesionales localizados están en `src/data/`. Todas las versiones deben incluir metadatos, textos alternativos y etiquetas accesibles equivalentes.

Para una nueva traducción de proyecto, crea otra entrada de colección con la misma `translationKey`. El selector de idioma conservará automáticamente el contexto.

## Sustituir imágenes

- Sustituye `src/assets/images/profile-placeholder.webp` por la fotografía definitiva.
- Actualiza el texto alternativo en ambos idiomas.
- Mantén una composición vertical aproximada de 4:5 para el perfil.
- Usa portadas 16:9 para los proyectos.
- Conserva las imágenes dentro de `src/assets/` para que Astro genere AVIF y WebP.
- Elimina las etiquetas TODO de la interfaz cuando el recurso sea definitivo.

## Añadir los PDF del CV

Copia los archivos con estos nombres:

```text
public/cv/Fernando-D-Armengol-Gonzalez-CV-es.pdf
public/cv/Fernando-D-Armengol-Gonzalez-CV-en.pdf
```

Después cambia `esAvailable` o `enAvailable` a `true` en `src/data/profile.ts`. Los botones permanecen deshabilitados mientras el valor sea `false`.

## LinkedIn y disponibilidad

La URL de LinkedIn está centralizada en `linkedinUrl`, dentro de `src/data/profile.ts`. El mismo archivo contiene el mensaje configurable de disponibilidad.

## Despliegue

El proyecto no necesita servidor de aplicación. Ejecuta `bun run build` y publica el contenido de `dist/` en cualquier alojamiento estático. Configura el dominio para servir HTTPS y conserva las rutas con barra final. El sitemap y `robots.txt` se generan o copian durante el build.

Antes de publicar, revisa:

- Que el dominio de `site` en `astro.config.mjs` sea el definitivo.
- Que no queden datos TODO presentados como reales.
- Que los PDF, enlaces sociales y demos existan.
- Que `bun run check` y `bun run build` terminen sin errores.
- Que Lighthouse y la navegación por teclado se verifiquen en producción.
