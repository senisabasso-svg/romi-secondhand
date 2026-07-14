import { PiggyBank, Recycle, Truck, HeartHandshake } from "lucide-react";

const items = [
  { icon: PiggyBank, title: "Precios accesibles", text: "Prendas y calzado de marca a precios que te sorprenden." },
  { icon: Recycle, title: "Moda circular", text: "Cada compra le da una segunda vida a la ropa." },
  { icon: Truck, title: "Envíos a todo el país", text: "Estés donde estés, te llega." },
  { icon: HeartHandshake, title: "Trato cercano", text: "Te atiende Romi, siempre atenta a lo que buscás." },
];

export default function Benefits() {
  return (
    <section className="bg-rosa/25 py-20">
      <div className="container-x">
        <div className="mb-10 text-center">
          <p className="eyebrow">Por qué elegirnos</p>
          <h2 className="mt-2 text-3xl text-burdeos">Beneficios que te van a encantar</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl bg-white p-6 text-center shadow-sm ring-1 ring-rosa/40">
              <Icon className="mx-auto h-9 w-9 text-fucsia" />
              <h3 className="mt-4 font-semibold text-burdeos">{title}</h3>
              <p className="mt-2 text-sm text-carbon/70">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
