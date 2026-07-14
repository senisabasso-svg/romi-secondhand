import { useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { BRAND, waLink } from "@/lib/constants";

const links = [
  { href: "#sobre", label: "Nosotros" },
  { href: "#productos", label: "Productos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#galeria", label: "Galería" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-rosa/40 bg-crema/90 backdrop-blur">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={BRAND.logo} alt="Romi Second Hand" className="h-11 w-11 rounded-full object-cover" />
          <span className="hidden text-xs font-semibold uppercase tracking-widest text-carbon/60 sm:inline">
            Second Hand
          </span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-carbon/80 hover:text-fucsia">
              {l.label}
            </a>
          ))}
          <a href={BRAND.instagram} target="_blank" aria-label="Instagram" className="text-carbon/70 hover:text-fucsia">
            <Instagram className="h-5 w-5" />
          </a>
          <a href={waLink("¡Hola Romi! Quiero consultar por la ropa 🌸")} target="_blank" className="btn btn-primary">
            WhatsApp
          </a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menú">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-rosa/40 bg-crema md:hidden">
          <div className="container-x flex flex-col gap-3 py-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-carbon/80">
                {l.label}
              </a>
            ))}
            <a href={BRAND.instagram} target="_blank" className="flex items-center gap-2 py-1 text-carbon/80">
              <Instagram className="h-4 w-4" /> @{BRAND.handle}
            </a>
            <a href={waLink("¡Hola Romi! Quiero consultar 🌸")} target="_blank" className="btn btn-primary mt-2">
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
