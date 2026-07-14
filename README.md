# Romi Second Hand — Landing Page

Landing page para **Romi Second Hand** (@romisecondhand.uy), tienda de ropa second hand en Salto, Uruguay.

## Stack
React 19 · Vite · TypeScript · Tailwind CSS · Framer Motion · Lucide React · React Router · React Hook Form · Zod.

## Cómo correr
```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm run preview  # previsualizar el build
```

## Estructura
- `src/components/layout` — Navbar, Footer, WhatsAppFloat
- `src/components/sections` — Hero, TrustBar, About, Benefits, Products, Services, Brands, Gallery, Testimonials, FAQ, Contact
- `src/data` — products, faqs, brands (reemplazar con datos reales)
- `src/lib/constants.ts` — datos de marca y contacto (⚠️ completar los TODO)
- `src/pages/Home.tsx` — arma todas las secciones

## Pendientes antes de publicar (⚠️)
- Confirmar **WhatsApp completo** en `src/lib/constants.ts` (`whatsapp`).
- Confirmar **horario exacto**, **email** y **link de Google Maps**.
- Cargar **logo real** en `public/logo.png` y `favicon.ico`.
- Reemplazar los **placeholders** de fotos (Hero, About, Products, Gallery) por imágenes reales.
- Validar los **HEX de color** en `tailwind.config.ts`.
- Cargar **testimonios reales** en `src/components/sections/Testimonials.tsx`.
- (Opcional) shadcn/ui: `npx shadcn@latest init` si se quieren sus componentes.

> Ver el documento `INVESTIGACION-Romi-Second-Hand.md` para el detalle completo de marca, copys y arquitectura.
