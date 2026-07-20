import Image from "next/image";
import CTAButton from "./CTAButton";
import SplitReveal from "./SplitReveal";
import { site, slogans } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-secondary pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.2fr] lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            Pré-lançamento · Brasília
          </span>

          <SplitReveal
            as="h1"
            className="text-5xl font-bold uppercase leading-[1.02] text-white sm:text-6xl md:text-7xl"
            lines={[
              { text: "Lavoyer" },
              { text: "Calistenia", className: "text-primary" },
            ]}
          />

          <p className="mx-auto mt-4 max-w-lg font-heading text-lg font-semibold text-white/80 md:text-xl lg:mx-0">
            Calistenia em Brasília — para todos os corpos e todos os níveis
          </p>

          <p className="mx-auto mt-5 max-w-lg font-body text-base text-white/70 md:text-lg lg:mx-0">
            Metodologia própria Lavoyer, feita para quem está começando agora — sem
            pré-requisitos, sem experiência necessária. Você é acompanhado por profissionais
            formados na nossa metodologia durante toda a jornada.
          </p>

          <p className="mx-auto mt-6 max-w-lg font-heading text-lg font-semibold text-primary md:text-xl lg:mx-0">
            {slogans[0] ?? "Venha com o que você tem: o seu corpo"}
          </p>

          <div className="mt-9 flex justify-center lg:justify-start">
            <CTAButton size="lg" />
          </div>
        </div>

        <div className="relative order-1 aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/10 lg:order-2">
          <Image
            src="/images/hero-capa.jpg"
            alt={`Praticante de calistenia em parada de mão na ${site.nomeFantasia}`}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
