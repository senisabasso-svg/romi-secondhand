import { Instagram, MapPin, Clock, Truck } from "lucide-react";
import { BRAND } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-burdeos text-crema">
      <div className="container-x grid gap-8 py-12 sm:grid-cols-3">
        <div>
          <img src={BRAND.logo} alt="Romi Second Hand" className="h-16 w-16 rounded-full object-cover" />
          <p className="mt-3 font-script text-xl">{BRAND.bio}</p>
          <p className="mt-2 text-sm text-crema/80">
            Ropa second hand y moda circular en Salto, Uruguay. Desde {BRAND.since}.
          </p>
        </div>
        <div className="space-y-2 text-sm text-crema/90">
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0" /> {BRAND.address}
          </p>
          <p className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0" /> {BRAND.hours}
          </p>
          <p className="flex items-center gap-2">
            <Truck className="h-4 w-4 shrink-0" /> Envíos a todo el país 🇺🇾
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <a href={BRAND.instagram} target="_blank" className="flex items-center gap-2 hover:text-rosa">
            <Instagram className="h-4 w-4" /> @{BRAND.handle}
          </a>
          <a href={BRAND.tiktok} target="_blank" className="hover:text-rosa">
            TikTok @romi_texeira24
          </a>
          <p className="text-crema/70">WhatsApp {BRAND.whatsappDisplay}</p>
        </div>
      </div>
      <div className="border-t border-crema/20 py-4 text-center text-xs text-crema/70">
        © {new Date().getFullYear()} {BRAND.name}. Hecho con 🌸 en Salto.
      </div>
    </footer>
  );
}
