https://braianruaimi.github.io/Marche-/marche-app/

# Marche!

Sitio publicado: https://braianruaimi.github.io/Marche-/

SPA estática para el negocio Marche!, pensada para vender productos congelados con catálogo Público y Mayorista, carrito, formulario de cliente e integración de pedido por WhatsApp.

La aplicación publicada se sirve desde la carpeta [marche-app](marche-app) y se despliega automáticamente con GitHub Pages mediante GitHub Actions.

## Qué incluye

- Catálogo de productos separado en [marche-app/data.js](marche-app/data.js)
- Interfaz SPA en [marche-app/index.html](marche-app/index.html)
- Cambio instantáneo entre precios Público y Mayorista
- Buscador en tiempo real
- Tabs por categoría
- Carrito con total acumulado
- Persistencia local de carrito, filtros y datos del cliente al recargar
- Ajuste de cantidades desde el carrito y feedback visual en cada producto
- Formulario de pedido con nombre, apellido, email, destino y dirección
- Enlace directo para enviar pedido por WhatsApp con carrito y datos del cliente
- Branding visual con logo, favicon e imagen Open Graph
- Imágenes reales del catálogo PDF integradas en la portada

## Estructura principal

- [marche-app](marche-app): aplicación web publicada
- [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml): workflow de despliegue automático a GitHub Pages
- [marche-app/assets](marche-app/assets): logo, favicon, imagen social e imágenes del catálogo PDF
- [marche-app/data.js](marche-app/data.js): catálogo, teléfono y redes
- [marche-app/index.html](marche-app/index.html): estructura, estilos y lógica vanilla

## Tecnologías

- HTML5
- Tailwind CSS vía CDN
- JavaScript Vanilla
- GitHub Pages
- GitHub Actions

## Registro real con Supabase gratis

La app quedó preparada para guardar métricas reales en Supabase usando la capa gratuita.

### Qué registra

- Views reales
- Clicks reales
- Conversiones reales
- Modo de conversión: Público, Mayorista o Granel
- Importe total convertido por pedido

### Archivos involucrados

- [marche-app/config.js](marche-app/config.js): configuración pública del proyecto Supabase
- [marche-app/supabase-schema.sql](marche-app/supabase-schema.sql): tabla y políticas necesarias
- [marche-app/index.html](marche-app/index.html): envío y lectura de eventos

### Activación en Supabase

1. Crea un proyecto en Supabase en la capa gratuita.
2. Abre el SQL Editor y ejecuta el contenido de [marche-app/supabase-schema.sql](marche-app/supabase-schema.sql).
3. Copia la `Project URL` y la `anon public key` desde Settings > API.
4. Edita [marche-app/config.js](marche-app/config.js) y completa:

```js
window.MARCHE_SUPABASE_CONFIG = {
	enabled: true,
	url: "TU_SUPABASE_URL",
	anonKey: "TU_SUPABASE_ANON_KEY",
	eventsTable: "marche_events"
};
```

### Cómo funciona

- Si `enabled` está en `false`, la app sigue usando sólo almacenamiento local.
- Si `enabled` está en `true`, además del registro local envía eventos reales a Supabase.
- El panel de métricas intenta leer primero el resumen remoto desde Supabase cuando la integración está activa.

### Costo

- La capa gratuita de Supabase alcanza para este proyecto en una etapa inicial.
- La `anon key` es pública por diseño y se puede usar desde el frontend cuando las políticas RLS están bien definidas.

## Edición rápida

### Cambiar productos o precios

Edita [marche-app/data.js](marche-app/data.js).

Ahí se configuran:

- fechaActualizacion
- whatsapp
- instagram
- categorías e items del catálogo

### Cambiar diseño o textos

Edita [marche-app/index.html](marche-app/index.html).

Ahí están:

- layout general
- estilos visuales
- hero
- formulario de pedido
- tabs y cards
- lógica del carrito
- persistencia local del pedido

### Cambiar branding

Edita estos archivos:

- [marche-app/assets/logo-marche.svg](marche-app/assets/logo-marche.svg)
- [marche-app/assets/favicon.svg](marche-app/assets/favicon.svg)
- [marche-app/assets/og-marche.svg](marche-app/assets/og-marche.svg)

## Uso local

Al ser una app estática, puedes abrir [marche-app/index.html](marche-app/index.html) directamente en el navegador.

Si prefieres probarla con servidor local, puedes usar por ejemplo:

```powershell
cd marche-app
python -m http.server 5500
```

Luego abre:

```text
http://localhost:5500
```

## Despliegue

El repositorio ya tiene configurado GitHub Pages con GitHub Actions en [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml).

Cada push a `main`:

1. Ejecuta el workflow
2. Empaqueta el contenido de [marche-app](marche-app)
3. Publica la app en GitHub Pages

## Datos comerciales actuales

- WhatsApp: 5492615908933
- Instagram: https://www.instagram.com/marche.congelados/?hl=es

## Notas

- La publicación usa exclusivamente el contenido de [marche-app](marche-app)
- Si existen otras carpetas en el repo, no forman parte del despliegue de Pages salvo que se cambie el workflow
