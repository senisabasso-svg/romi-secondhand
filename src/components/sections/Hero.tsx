import { motion } from "framer-motion";
import { Instagram, Sparkles } from "lucide-react";
import { BRAND, waLink } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-rosa/60 to-crema">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-fucsia/10 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-rosa-medio/30 blur-3xl" />
      <div className="container-x relative grid items-center gap-8 py-20 md:grid-cols-2 md:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <p className="eyebrow flex items-center gap-2">
            <Sparkles className="h-4 w-4" /> {BRAND.bio} · Salto, Uruguay
          </p>
          <h1 className="mt-3 text-4xl leading-tight text-burdeos sm:text-5xl">
            {BRAND.tagline.split(", ")[0]}, <span className="font-script text-fucsia">{BRAND.tagline.split(", ")[1]}</span>
          </h1>
          <p className="mt-4 max-w-md text-carbon/70">
            Ropa second hand seleccionada para mujer y hombre: vestidos, bolsos, calzado y más.
            Comprá, vendé tu ropa en consignación y recibí en todo el país. 🌸
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={waLink("¡Hola Romi! Quiero ver las novedades 🌸")} target="_blank" className="btn btn-primary">
              Ver novedades por WhatsApp
            </a>
            <a href={BRAND.instagram} target="_blank" className="btn btn-outline">
              <Instagram className="h-4 w-4" /> @{BRAND.handle}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto aspect-square w-full max-w-sm"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rosa via-rosa-medio/50 to-crema blur-sm" />
          <div className="relative flex h-full items-center justify-center p-6">
            <img
              src={BRAND.logo}
              alt="Romi Second Hand"
              className="h-full w-full rounded-full object-cover shadow-2xl ring-4 ring-white/80"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
