import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Clock, MessageCircle, Instagram } from "lucide-react";
import { BRAND, waLink } from "@/lib/constants";

const schema = z.object({
  name: z.string().min(2, "Ingresá tu nombre"),
  message: z.string().min(5, "Contanos qué buscás"),
});
type FormData = z.infer<typeof schema>;

export default function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    window.open(waLink(`¡Hola Romi! Soy ${data.name}. ${data.message} 🌸`), "_blank");
  };

  return (
    <section id="contacto" className="bg-gradient-to-b from-crema to-rosa/40 py-20">
      <div className="container-x grid gap-10 md:grid-cols-2">
        <div>
          <p className="eyebrow">Contacto</p>
          <h2 className="mt-2 text-3xl text-burdeos">Escribinos 🌸</h2>
          <p className="mt-3 text-carbon/70">
            Renová tu placar, consultá por una prenda o vendé lo que ya no usás. Te respondemos por WhatsApp o Instagram.
          </p>
          <ul className="mt-6 space-y-3 text-carbon/80">
            <li className="flex items-center gap-3">
              <MapPin className="h-5 w-5 shrink-0 text-fucsia" /> {BRAND.address}
            </li>
            <li className="flex items-center gap-3">
              <Clock className="h-5 w-5 shrink-0 text-fucsia" /> {BRAND.hours}
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-5 w-5 shrink-0 text-fucsia" /> WhatsApp {BRAND.whatsappDisplay}
            </li>
            <li className="flex items-center gap-3">
              <Instagram className="h-5 w-5 shrink-0 text-fucsia" /> @{BRAND.handle}
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waLink("¡Hola Romi! Te escribo desde la web 🌸")} target="_blank" className="btn btn-primary">
              WhatsApp
            </a>
            <a href={BRAND.instagram} target="_blank" className="btn btn-outline">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
          <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-rosa/40">
            <iframe
              title="Ubicación Romi Second Hand"
              className="h-56 w-full"
              loading="lazy"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
            />
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-rosa/40">
          <label className="block text-sm font-medium text-burdeos">Tu nombre</label>
          <input
            {...register("name")}
            className="mt-1 w-full rounded-lg border border-rosa/50 px-3 py-2 outline-none focus:border-fucsia"
            placeholder="Ej: María"
          />
          {errors.name && <p className="mt-1 text-xs text-fucsia">{errors.name.message}</p>}

          <label className="mt-4 block text-sm font-medium text-burdeos">Mensaje</label>
          <textarea
            {...register("message")}
            rows={4}
            className="mt-1 w-full rounded-lg border border-rosa/50 px-3 py-2 outline-none focus:border-fucsia"
            placeholder="Ej: Busco un vestido talle S / Quiero dejar ropa en consignación"
          />
          {errors.message && <p className="mt-1 text-xs text-fucsia">{errors.message.message}</p>}

          <button type="submit" className="btn btn-primary mt-6 w-full">
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
