import { ShoppingBag, Tag, Truck } from "lucide-react";
import { waLink } from "@/lib/constants";

const services = [
  {
    icon: ShoppingBag,
    title: "Comprá second hand",
    text: "Ropa, vestidos, bolsos y calzado seleccionados. Reservá por WhatsApp o Instagram y coordiná retiro o envío.",
    cta: "Ver disponibilidad",
    msg: "¡Hola Romi! Quiero comprar 🌸",
  },
  {
    icon: Tag,
    title: "Vendé tu ropa",
    text: "Consignación: traés tu ropa del 15 al 30 de cada mes (excepto enero) y te pagamos lo que se venda.",
    cta: "Quiero vender mi ropa",
    msg: "¡Hola Romi! Quiero dejar ropa en consignación 🌸",
  },
  {
    icon: Truck,
    title: "Envíos a todo Uruguay",
    text: "Coordinamos el envío a tu ciudad, estés donde estés. Consultanos por WhatsApp.",
    cta: "Consultar envío",
    msg: "¡Hola Romi! Consulta por envío al interior 🌸",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-rosa/25 py-20">
      <div className="container-x">
        <div className="mb-10 text-center">
          <p className="eyebrow">Cómo funciona</p>
          <h2 className="mt-2 text-3xl text-burdeos">Comprá, vendé y recibí</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text, cta, msg }) => (
            <div key={title} className="flex flex-col rounded-2xl bg-white p-7 shadow-sm ring-1 ring-rosa/40">
              <Icon className="h-10 w-10 text-fucsia" />
              <h3 className="mt-4 text-xl text-burdeos">{title}</h3>
              <p className="mt-2 flex-1 text-sm text-carbon/70">{text}</p>
              <a href={waLink(msg)} target="_blank" className="btn btn-outline mt-5 self-start">
                {cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
