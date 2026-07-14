import { brands } from "@/data/brands";
export default function Brands() {
  return (
    <section className="container-x py-16 text-center">
      <p className="eyebrow">Marcas que suelen pasar por acá</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
        {brands.map((b) => (
          <span key={b} className="font-display text-lg text-carbon/50">{b}</span>
        ))}
      </div>
      <p className="mt-4 text-xs text-carbon/40">*El stock de marcas varía según los ingresos.</p>
    </section>
  );
}
