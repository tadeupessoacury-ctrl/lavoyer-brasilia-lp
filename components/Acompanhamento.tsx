import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import CTAButton from "./CTAButton";

const pontos = [
  "Progressão individualizada — o ritmo é seu, não do grupo",
  "Correção em tempo real de postura, respiração e técnica",
  "Acompanhamento próximo, do primeiro treino à graduação",
];

export default function Acompanhamento() {
  return (
    <section id="interacao" className="border-t border-black/5 bg-surface-light py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:items-center md:gap-x-16 md:px-8">
        <div className="order-1 md:order-1">
          <FadeIn>
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
              Treinador · Aluno
            </span>
            <SplitReveal
              as="h2"
              className="mt-3 text-3xl font-bold text-secondary md:text-4xl"
              lines="Cada treino é guiado. Sempre."
            />
            <p className="mt-4 max-w-xl font-body text-neutral-600 md:text-lg">
              Na Lavoyer não existe turma sem acompanhamento. Treinadores formados na nossa
              metodologia conhecem seu nível e sabem quando empurrar — e quando esperar.
            </p>
          </FadeIn>

          <div className="mt-6">
            <ul className="space-y-4">
              {pontos.map((ponto, i) => (
                <FadeIn key={ponto} delay={i * 100}>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                      <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                        <path
                          d="M3 8.5l3 3 7-7"
                          stroke="var(--color-primary)"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-body text-neutral-700">{ponto}</span>
                  </li>
                </FadeIn>
              ))}
            </ul>

            <FadeIn delay={400} className="mt-9">
              <CTAButton size="lg" />
            </FadeIn>
          </div>
        </div>

        <FadeIn
          as="div"
          className="relative order-2 mx-auto aspect-[4/5] w-4/5 overflow-hidden rounded-3xl md:order-2 md:mx-0 md:w-full"
        >
          <Image
            src="/images/personal-2.jpg"
            alt="Treinador Lavoyer acompanhando aluno individualmente"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </FadeIn>
      </div>
    </section>
  );
}
