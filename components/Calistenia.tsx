import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import RingIcon from "./RingIcon";

const pontos = [
  "O corpo é o único equipamento",
  "Desenvolve força, mobilidade e controle",
  "Funciona em qualquer nível, do zero ao avançado",
];

export default function Calistenia() {
  return (
    <section id="calistenia" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <div>
          <FadeIn>
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              O que é calistenia
            </span>
            <SplitReveal
              as="h2"
              className="mt-3 text-3xl font-bold text-secondary md:text-4xl"
              lines="Treino com o peso do próprio corpo."
            />
            <p className="mt-4 max-w-md font-body text-neutral-600 md:text-lg">
              Sem aparelhos, sem pesos externos — só o seu corpo como ferramenta de
              treino. É por isso que funciona pra qualquer pessoa.
            </p>
          </FadeIn>

          <div className="mt-8 space-y-3">
            {pontos.map((ponto, i) => (
              <FadeIn key={ponto} delay={i * 100}>
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary/5 text-secondary">
                    <RingIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-body text-sm text-neutral-700 md:text-base">{ponto}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn delay={150} className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/academia-1.jpg"
            alt="Estrutura de treino da Lavoyer Calistenia"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </FadeIn>
      </div>
    </section>
  );
}
