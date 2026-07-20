import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import CTAButton from "./CTAButton";

const pontos = [
  "Treinadores próprios, capacitados na metodologia Lavoyer",
  "Acompanhamento de evolução, postura e prevenção de lesões",
  "Suporte constante, do primeiro treino à graduação avançada",
];

export default function Acompanhamento() {
  return (
    <section className="bg-surface-light py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:items-center md:gap-x-16 md:px-8">
        <div className="order-1 md:order-1">
          <FadeIn>
            <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Acompanhamento capacitado
            </span>
            <SplitReveal
              as="h2"
              className="mt-3 text-3xl font-bold uppercase text-secondary md:text-4xl"
              lines="Treinadores capacitados, prontos pra você"
            />
            <p className="mt-4 max-w-xl font-body text-neutral-600 md:text-lg">
              Nossos treinadores são formados na metodologia Lavoyer e acompanham de perto a
              evolução de cada aluno — postura, progressão e segurança em cada sessão.
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
