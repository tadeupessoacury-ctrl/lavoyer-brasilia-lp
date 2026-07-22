import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import { site } from "@/lib/site";

const items = [
  { numero: "01", titulo: "Referência nacional", texto: site.diferencial1 },
  { numero: "02", titulo: "Metodologia própria", texto: site.diferencial2 },
  { numero: "03", titulo: "Graduação por níveis", texto: site.diferencial3 },
  { numero: "04", titulo: "Calistenia + musculação", texto: site.diferencial4 },
];

export default function Diferenciais() {
  return (
    <section id="porque" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="max-w-xl">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Por que a Lavoyer
          </span>
          <SplitReveal
            as="h2"
            className="mt-3 text-3xl font-bold text-secondary md:text-4xl"
            lines="O que não existe em outra academia."
          />
        </FadeIn>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-black/5 bg-black/5 sm:grid-cols-2">
          {items.map((item, i) => (
            <FadeIn key={item.numero} delay={i * 100} className="bg-white p-8">
              <span className="font-heading text-2xl font-bold text-primary">{item.numero}</span>
              <h3 className="mt-3 font-heading text-lg font-bold text-secondary">{item.titulo}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-neutral-600">{item.texto}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
