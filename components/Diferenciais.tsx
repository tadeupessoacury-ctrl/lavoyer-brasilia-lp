import FadeIn from "./FadeIn";
import { site } from "@/lib/site";

const items = [
  {
    numero: "01",
    titulo: "Cultura de comunidade",
    texto: site.diferencial1,
  },
  {
    numero: "02",
    titulo: "Metodologia própria",
    texto: site.diferencial2,
  },
  {
    numero: "03",
    titulo: "Graduação por níveis",
    texto: site.diferencial3,
  },
];

export default function Diferenciais() {
  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-lg font-extrabold uppercase tracking-[0.2em] text-black md:text-xl">
            Por que Lavoyer
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-black md:text-4xl">
            Diferenciais que constroem resultado
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {items.map((item, i) => (
            <FadeIn key={item.numero} delay={i * 120}>
              <div className="h-full rounded-2xl border-2 border-transparent bg-white p-8 shadow-sm transition-all duration-300 hover:border-secondary hover:shadow-lg">
                <span className="font-heading text-4xl font-extrabold text-primary/30">
                  {item.numero}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold uppercase text-black">
                  {item.titulo}
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-neutral-600">
                  {item.texto}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
