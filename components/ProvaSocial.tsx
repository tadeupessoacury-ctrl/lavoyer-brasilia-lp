import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";

const stats = [
  { target: 9, suffix: "", label: "Anos de Mercado" },
  { target: 7, suffix: "", label: "Níveis de Graduação" },
  { target: 3, suffix: "", label: "Modalidades de Treino" },
];

export default function ProvaSocial() {
  return (
    <section className="border-y border-black/5 bg-surface-light py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-3 gap-6 md:gap-10">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 100} className="text-center">
              <p className="font-heading text-4xl font-bold text-primary md:text-5xl">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 font-body text-sm text-neutral-600 md:text-base">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
