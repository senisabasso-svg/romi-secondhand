import { useState } from "react";
import { Instagram } from "lucide-react";
import { products, categories } from "@/data/products";
import { BRAND, waLink } from "@/lib/constants";

const categoryGradient: Record<string, string> = {
  Mujer: "from-rosa to-rosa-medio",
  Hombre: "from-carbon/20 to-rosa/50",
  Calzado: "from-rosa-medio to-crema",
  Carteras: "from-burdeos/50 to-rosa",
  Vestidos: "from-fucsia/70 to-rosa-medio",
  Accesorios: "from-dorado/30 to-rosa",
};

export default function Products() {
  const [cat, setCat] = useState<(typeof categories)[number]>("Todos");
  const list = cat === "Todos" ? products : products.filter((p) => p.category === cat);

  return (
    <section id="productos" className="container-x py-20">
      <div className="mb-8 text-center">
        <p className="eyebrow">Nuestro stock</p>
        <h2 className="mt-2 text-3xl text-burdeos">Productos destacados</h2>
        <p className="mt-2 text-carbon/60">
          El stock rota siempre. Las novedades las subimos primero en{" "}
          <a href={BRAND.instagram} target="_blank" className="font-semibold text-fucsia hover:underline">
            @{BRAND.handle}
          </a>
        </p>
      </div>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${cat === c ? "bg-fucsia text-white" : "bg-rosa/30 text-burdeos hover:bg-rosa/60"}`}
          >
            {c}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <article key={p.id} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-rosa/40">
            <div className={`relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br ${categoryGradient[p.category]}`}>
              <span className="text-5xl">{p.emoji}</span>
              {p.sold && (
                <span className="absolute left-3 top-3 rounded-full bg-burdeos px-3 py-1 text-xs font-semibold text-white">
                  VENDIDO
                </span>
              )}
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-burdeos">{p.name}</h3>
              <p className="text-sm text-carbon/60">
                {p.category}
                {p.size ? ` · Talle ${p.size}` : ""}
              </p>
              <div className="mt-3 flex items-center justify-between">
                {p.price && <span className="font-display text-lg text-fucsia">$ {p.price}</span>}
                {!p.sold && (
                  <a href={waLink(`¡Hola! Me interesa: ${p.name} 🌸`)} target="_blank" className="text-sm font-semibold text-fucsia hover:underline">
                    Consultar
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <a href={BRAND.instagram} target="_blank" className="btn btn-primary">
          <Instagram className="h-4 w-4" /> Ver todo en Instagram
        </a>
      </div>
    </section>
  );
}
