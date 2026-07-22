import Image from "next/image";
import CTAButton from "./CTAButton";
import SplitReveal from "./SplitReveal";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section id="topo" className="relative flex min-h-[92vh] items-end overflow-hidden bg-secondary">
      <Image
        src="/images/hero-capa-mobile.jpg"
        alt="Logo da Lavoyer Calistenia em relevo na parede do CT"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="block object-contain object-top md:hidden"
      />
      <Image
        src="/images/hero-capa-v2.jpg"
        alt="Logo da Lavoyer Calistenia em relevo na parede do CT"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="hidden object-cover object-top grayscale md:block"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/55 to-secondary/10" />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-8 md:pb-20 md:pt-52">
        <FadeIn className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-primary backdrop-blur-sm">
          Pré-lançamento · Setor Noroeste, Brasília
        </FadeIn>

        <SplitReveal
          as="h1"
          delay={100}
          className="mt-6 max-w-3xl text-4xl font-bold uppercase leading-[0.98] text-white sm:text-5xl md:text-6xl lg:text-7xl"
          lines={[
            { text: "A maior calistenia" },
            { text: "da América Latina" },
            { text: "chega a Brasília.", className: "text-primary" },
          ]}
        />

        <FadeIn delay={250} className="mt-6 max-w-md font-body text-base text-white/70 md:text-lg">
          Metodologia própria, graduação por níveis e treinadores capacitados — agora no
          Distrito Federal.
        </FadeIn>

        <FadeIn delay={350} className="mt-10 border-t border-white/10 pt-8">
          <CTAButton size="lg" />
        </FadeIn>
      </div>
    </section>
  );
}
