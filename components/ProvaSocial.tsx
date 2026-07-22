import FadeIn from "./FadeIn";
import AnimatedCounter from "./AnimatedCounter";
import { site } from "@/lib/site";

const stats = [
  { target: parseInt(site.anosMercado, 10) || 10, suffix: "", label: "Anos de metodologia" },
  { target: 7, suffix: "", label: "Níveis de graduação" },
  { target: 3, suffix: "", label: "Modalidades de treino" },
];

export default function ProvaSocial() {
  return (
    <section id="numeros" className="border-y border-black/5 bg-background py-16 md:py-20">
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
