import Image from "next/image";
import FadeIn from "./FadeIn";
import { site } from "@/lib/site";

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative overflow-hidden bg-secondary py-28 md:py-36">
      <Image
        src="/images/academia-2.jpg"
        alt="Estrutura Lavoyer Calistenia"
        fill
        sizes="100vw"
        className="object-cover object-center grayscale"
      />
      <div className="absolute inset-0 bg-secondary/85" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <FadeIn>
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-white/40">
            A Lavoyer
          </span>
          <h2 className="mt-4 font-heading text-3xl font-bold italic leading-[1.05] text-white md:text-5xl">
            Você não constrói isso sozinho.
          </h2>
        </FadeIn>
        <FadeIn delay={150} className="flex flex-col justify-center gap-8">
          <p className="font-body text-base text-white/65 md:text-lg">
            Em {site.anosMercado} de história, a Lavoyer formou uma comunidade que treina
            porque quer estar lá. O método importa — mas o que faz as pessoas ficarem são os
            laços criados dentro do CT.
          </p>
          <div>
            <span className="font-heading text-[10px] font-normal uppercase tracking-[0.3em] text-white/35">
              Presença nacional
            </span>
            <p className="mt-2 font-heading text-sm uppercase tracking-wide text-white/70">
              Porto Velho · Belo Horizonte · Nova Lima · Brasília
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
