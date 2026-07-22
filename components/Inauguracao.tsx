import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import CTAButton from "./CTAButton";

const pontos = [
  "Aula experimental gratuita, sem compromisso",
  "Acompanhamento próximo desde o primeiro treino",
  "7 níveis de progressão, do zero ao avançado",
  "Único centro de calistenia estruturado no Noroeste",
];

export default function Inauguracao() {
  return (
    <section id="inauguracao" className="bg-background py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-8">
        <FadeIn>
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Noroeste · Brasília
          </span>
          <SplitReveal
            as="h2"
            className="mt-3 text-3xl font-bold text-secondary md:text-4xl"
            lines={[{ text: "Seja um" }, { text: "dos primeiros.", className: "italic" }]}
          />
          <p className="mt-4 max-w-md font-body text-neutral-600 md:text-lg">
            A Lavoyer abre em breve no Setor Noroeste. Reserve seu lugar antes da
            inauguração.
          </p>

          <div className="mt-9 border-t border-black/10 pt-8">
            <CTAButton size="lg" label="Reservar minha vaga" />
          </div>
        </FadeIn>

        <FadeIn delay={150} className="flex flex-col justify-center gap-1">
          {pontos.map((ponto) => (
            <div
              key={ponto}
              className="flex items-start gap-3 border-b border-black/10 py-4 first:pt-0 last:border-0"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
              <p className="font-body text-sm text-neutral-700 md:text-base">{ponto}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
