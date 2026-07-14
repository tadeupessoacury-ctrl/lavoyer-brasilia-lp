import Image from "next/image";
import FadeIn from "./FadeIn";
import CTAButton from "./CTAButton";

const pontos = [
  "Um personal trainer dedicado a cada aluno, do primeiro dia à graduação avançada",
  "Plano de treino individualizado dentro da metodologia Lavoyer",
  "Acompanhamento próximo de evolução, postura e prevenção de lesões",
  "Atendimento no ritmo e nos horários de quem tem uma rotina exigente",
];

export default function Acompanhamento() {
  return (
    <section className="bg-neutral-50 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 md:items-center md:gap-16 md:px-8">
        <FadeIn className="order-1 md:order-1 md:col-start-1 md:row-start-1">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Acompanhamento exclusivo
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-black md:text-4xl">
            Um personal trainer só seu
          </h2>
          <p className="mt-4 max-w-xl font-body text-neutral-600 md:text-lg">
            Na Lavoyer, treino em grupo não significa treino genérico. Cada aluno é acompanhado
            individualmente por um personal trainer exclusivo — um serviço raro, pensado para
            quem exige o melhor de cada sessão.
          </p>
        </FadeIn>

        <FadeIn
          as="div"
          className="relative order-2 mx-auto aspect-[4/5] w-4/5 overflow-hidden rounded-3xl md:order-2 md:col-start-2 md:row-start-1 md:row-span-2 md:mx-0 md:w-full"
        >
          <Image
            src="/images/personal-2.jpg"
            alt="Personal trainer Lavoyer acompanhando aluno individualmente"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </FadeIn>

        <div className="order-3 md:order-3 md:col-start-1 md:row-start-2">
          <ul className="space-y-4">
            {pontos.map((ponto, i) => (
              <FadeIn key={ponto} delay={i * 100}>
                <li className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-black">
                    <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3">
                      <path
                        d="M3 8.5l3 3 7-7"
                        stroke="#FF8724"
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
    </section>
  );
}
