import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="container-x py-20">
      <div className="mb-8 text-center">
        <p className="eyebrow">Dudas frecuentes</p>
        <h2 className="mt-2 text-3xl text-burdeos">Preguntas frecuentes</h2>
      </div>
      <div className="mx-auto max-w-2xl divide-y divide-rosa/40 rounded-2xl bg-white ring-1 ring-rosa/40">
        {faqs.map((f, i) => (
          <div key={i}>
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
              <span className="font-medium text-burdeos">{f.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-fucsia transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <p className="px-5 pb-4 text-sm text-carbon/70">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
