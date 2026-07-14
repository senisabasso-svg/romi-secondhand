import { Instagram } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function About() {
  return (
    <section id="sobre" className="container-x py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-rosa/60 to-rosa-medio/30 ring-1 ring-white/60">
          <div className="flex h-full flex-col items-center justify-center gap-4 p-8">
            <img src={BRAND.logo} alt="Romi Second Hand" className="h-48 w-48 rounded-full object-cover shadow-xl ring-4 ring-white/70" />
            <p className="font-script text-2xl text-burdeos">~Tienda de ropa🌸</p>
          </div>
        </div>
        <div>
          <p className="eyebrow">Sobre nosotros</p>
          <h2 className="mt-2 text-3xl text-burdeos">Tu tienda de ropa second hand en Salto</h2>
          <p className="mt-4 text-carbon/75">
            Romi Second Hand nació en {BRAND.since} con la idea de Romi Texeira de emprender y hacer la moda
            más accesible. Lo que empezó en Instagram hoy es una tienda con local propio y una comunidad
            que nos elige todos los días.
          </p>
          <p className="mt-3 text-carbon/75">
            Encontrás ropa de mujer y hombre, vestidos, bolsos, carteras, calzado y accesorios — todo
            seleccionado y en buen estado. Si tenés ropa que ya no usás, también la vendemos por vos en consignación.
          </p>
          <a href={BRAND.instagram} target="_blank" className="btn btn-outline mt-6">
            <Instagram className="h-4 w-4" /> Seguinos en @{BRAND.handle}
          </a>
        </div>
      </div>
    </section>
  );
}
