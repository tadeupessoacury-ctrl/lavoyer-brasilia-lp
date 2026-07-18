import Image from "next/image";
import FadeIn from "./FadeIn";
import CTAButton from "./CTAButton";

export default function Comunidade() {
  return (
    <section id="comunidade" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Comunidade
          </span>
          <h2 className="mt-3 font-heading text-3xl font-medium uppercase text-black md:text-4xl">
            Mais do que treino, um lugar de pertencimento
          </h2>
          <p className="mt-4 font-body text-neutral-600 md:text-lg">
            A cultura de comunidade é um dos pilares da Lavoyer. Alunos que treinam juntos,
            evoluem juntos e celebram juntos cada conquista dentro e fora da graduação.
          </p>
        </FadeIn>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 md:grid-cols-3 md:grid-rows-2">
          <FadeIn className="relative col-span-2 row-span-2 aspect-[4/3] overflow-hidden rounded-3xl md:aspect-auto">
            <Image
              src="/images/personal-1.jpg"
              alt="Comunidade Lavoyer reunida em confraternização"
              fill
              sizes="(min-width: 768px) 35vw, 100vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={100} className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/equipe-1.jpg"
              alt="Instrutores Lavoyer lado a lado"
              fill
              sizes="(min-width: 768px) 16vw, 50vw"
              className="object-cover"
            />
          </FadeIn>
          <FadeIn delay={200} className="relative aspect-square overflow-hidden rounded-3xl">
            <Image
              src="/images/academia-1.jpg"
              alt="Estrutura de treino da Lavoyer Calistenia"
              fill
              sizes="(min-width: 768px) 16vw, 50vw"
              className="object-cover"
            />
          </FadeIn>
        </div>

        <FadeIn delay={300} className="mt-10 flex justify-center">
          <CTAButton size="lg" />
        </FadeIn>
      </div>
    </section>
  );
}
