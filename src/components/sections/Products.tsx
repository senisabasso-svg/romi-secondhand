import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { BRAND, waLink } from "@/lib/constants";
import { obtenerPrendas, type Prenda } from "@/services/api";

export default function Products() {
  const [prendas, setPrendas] = useState<Prenda[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    obtenerPrendas()
      .then(({ prendas }) => setPrendas(prendas))
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : "No se pudieron cargar las prendas"),
      )
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <section id="productos" className="container-x py-20">
      <div className="mb-8 text-center">
        <p className="eyebrow">Nuestra vitrina</p>
        <h2 className="mt-2 text-3xl text-burdeos">Prendas destacadas</h2>
        <p className="mt-2 text-carbon/60">
          El stock rota siempre. Las novedades las subimos primero en{" "}
          <a href={BRAND.instagram} target="_blank" className="font-semibold text-fucsia hover:underline">
            @{BRAND.handle}
          </a>
        </p>
      </div>

      {isLoading && <p className="text-center text-carbon/60">Cargando prendas...</p>}
      {error && <p className="text-center text-burdeos">{error}</p>}
      {!isLoading && !error && prendas.length === 0 && (
        <p className="text-center text-carbon/60">Pronto vamos a publicar nuevas prendas.</p>
      )}
      {!isLoading && !error && prendas.length > 0 && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prendas.map((prenda) => (
            <article key={prenda.orden} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-rosa/40">
              <div className="relative aspect-[4/5] bg-rosa/20">
                {prenda.imagen ? (
                  <img src={prenda.imagen} alt={prenda.nombre} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-carbon/50">Sin imagen</div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-burdeos">{prenda.nombre}</h3>
                {prenda.descripcion && <p className="mt-1 text-sm text-carbon/60">{prenda.descripcion}</p>}
                <div className="mt-3 flex items-center justify-between">
                  <span className="font-display text-lg text-fucsia">$ {prenda.precio}</span>
                  <a href={waLink(`Hola! Me interesa: ${prenda.nombre}`)} target="_blank" className="text-sm font-semibold text-fucsia hover:underline">
                    Consultar
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      <div className="mt-10 text-center">
        <a href={BRAND.instagram} target="_blank" className="btn btn-primary">
          <Instagram className="h-4 w-4" /> Ver todo en Instagram
        </a>
      </div>
    </section>
  );
}
