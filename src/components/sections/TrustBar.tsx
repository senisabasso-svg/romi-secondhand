import { BRAND } from "@/lib/constants";

const items = [
  `Desde ${BRAND.since}`,
  "Tienda en Salto 🌸",
  "Envíos a todo Uruguay 🇺🇾",
  "Vestidos · Bolsos · Calzado",
  "Débito · Crédito · Efectivo",
];

export default function TrustBar() {
  return (
    <div className="border-y border-rosa/40 bg-white/60">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4 text-sm font-medium text-carbon/70">
        {items.map((i) => (
          <span key={i} className="flex items-center gap-2">🌸 {i}</span>
        ))}
      </div>
    </div>
  );
}
