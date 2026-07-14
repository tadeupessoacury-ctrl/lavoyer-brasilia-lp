import FadeIn from "./FadeIn";
import CTAButton from "./CTAButton";
import { site } from "@/lib/site";

const servicos = [
  {
    nome: "Semana Experimental",
    descricao:
      "Conheça a metodologia Lavoyer na prática: uma semana para sentir a modalidade antes de decidir.",
    tema: "light" as const,
    destaque: false,
  },
  {
    nome: "Calistenia",
    descricao:
      "Nosso carro-chefe. Metodologia própria e validada, com graduação por níveis do iniciante ao avançado.",
    tema: "dark" as const,
    destaque: true,
  },
  {
    nome: "Calistenia Kids",
    descricao:
      "Desenvolvimento motor, disciplina e diversão para os praticantes mais jovens da comunidade.",
    tema: "light" as const,
    destaque: false,
  },
  {
    nome: "Musculação",
    descricao:
      "Estrutura completa para complementar o treino de calistenia e evoluir sua composição corporal.",
    tema: "dark" as const,
    destaque: false,
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-lg font-extrabold uppercase tracking-[0.2em] text-primary md:text-xl">
            Serviços
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold uppercase text-black md:text-4xl">
            Um ecossistema completo de treino
          </h2>
          <p className="mt-4 font-body text-neutral-600 md:text-lg">
            De quem está começando ao aluno graduado — a {site.nomeFantasia} oferece o caminho
            certo para cada momento.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {servicos.map((servico, i) => (
            <FadeIn key={servico.nome} delay={i * 100} className="h-full">
              <div
                className={`group relative flex h-full flex-col items-center rounded-2xl border p-7 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  servico.tema === "dark" ? "bg-black text-white" : "bg-white text-black"
                } ${
                  servico.destaque
                    ? "border-2 border-primary shadow-xl shadow-primary/25 lg:-translate-y-3"
                    : servico.tema === "dark"
                      ? "border-white/10 hover:border-primary/50"
                      : "border-black/10 hover:border-primary/40"
                }`}
              >
                {servico.destaque && (
                  <span className="mb-4 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-black">
                    Serviço destaque
                  </span>
                )}
                <h3
                  className={`font-heading font-bold uppercase ${
                    servico.destaque ? "text-2xl" : "text-xl"
                  }`}
                >
                  {servico.nome}
                </h3>
                <p
                  className={`mt-3 font-body text-sm leading-relaxed ${
                    servico.tema === "dark" ? "text-white/75" : "text-neutral-600"
                  }`}
                >
                  {servico.descricao}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14 flex justify-center">
          <CTAButton size="lg" />
        </FadeIn>
      </div>
    </section>
  );
}
