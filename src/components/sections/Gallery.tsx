import { Instagram } from "lucide-react";
import { galleryHighlights } from "@/data/gallery";
import { BRAND } from "@/lib/constants";

export default function Gallery() {
  return (
    <section id="galeria" className="container-x py-20">
      <div className="mb-8 text-center">
        <p className="eyebrow">Nuestro Instagram</p>
        <h2 className="mt-2 text-3xl text-burdeos">Así se ve Romi 🌸</h2>
        <p className="mt-2 text-carbon/60">
          Vestidos, bolsos, ropa nueva y más — todo lo subimos en @{BRAND.handle}
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {galleryHighlights.map((item) => (
          <a
            key={item.id}
            href={BRAND.instagram}
            target="_blank"
            className={`group relative flex aspect-square flex-col items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} p-4 ring-1 ring-white/50 transition hover:scale-[1.02] hover:shadow-lg`}
          >
            <span className="text-3xl transition group-hover:scale-110">{item.emoji}</span>
            <span className="mt-2 text-center text-xs font-semibold text-burdeos/80">{item.label}</span>
          </a>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href={BRAND.instagram} target="_blank" className="btn btn-primary">
          <Instagram className="h-4 w-4" /> Seguinos en Instagram
        </a>
      </div>
    </section>
  );
}
