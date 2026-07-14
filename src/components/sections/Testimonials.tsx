const testimonials = [
  { name: "Valentina", text: "Compro siempre por Instagram y la ropa llega impecable. Los precios son una locura 🌸" },
  { name: "Camila", text: "Romi es un amor, siempre te ayuda a encontrar lo que buscás. Súper recomendada." },
  { name: "Lucía", text: "Dejé ropa en consignación y vendió todo rapidísimo. Ya voy por la segunda tanda." },
];

export default function Testimonials() {
  return (
    <section className="bg-rosa/25 py-20">
      <div className="container-x">
        <div className="mb-10 text-center">
          <p className="eyebrow">Lo que dicen</p>
          <h2 className="mt-2 text-3xl text-burdeos">Nuestra comunidad 🌸</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-rosa/40">
              <p className="text-carbon/75">"{t.text}"</p>
              <footer className="mt-4 text-sm font-semibold text-fucsia">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
