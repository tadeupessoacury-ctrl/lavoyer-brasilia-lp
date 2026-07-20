import Image from "next/image";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import CTAButton from "./CTAButton";
import { site } from "@/lib/site";

const servicos = [
  {
    nome: "Semana Experimental",
    descricao:
      "Conheça a metodologia Lavoyer na prática: uma semana para sentir a modalidade antes de decidir.",
    tema: "light" as const,
    destaque: false,
    borderClass: "border-black/10 hover:border-primary/40",
    logo: null,
    logoReservado: false,
    eyebrow: null,
  },
  {
    nome: "Calistenia",
    descricao:
      "Metodologia própria e validada, que acompanha sua evolução desde o primeiro treino.",
    tema: "dark" as const,
    destaque: true,
    borderClass: "border-2 border-primary shadow-xl shadow-primary/25 lg:-translate-y-3",
    logo: {
      src: "/images/logo-calistenia.jpg",
      alt: "Logo Lavoyer Calistenia",
    },
    logoReservado: false,
    eyebrow: null,
  },
  {
    nome: "Calistenia Kids",
    descricao:
      "Desenvolvimento motor, disciplina e diversão em um ambiente seguro e acolhedor, pensado especialmente para os praticantes mais jovens da comunidade.",
    tema: "light" as const,
    destaque: false,
    borderClass: "border-black/10 hover:border-kids",
    logo: {
      src: "/images/logo-kids.jpg",
      alt: "Logo Lavoyer Kids",
    },
    logoReservado: false,
    eyebrow: null,
  },
  {
    nome: "Musculação",
    descricao:
      "Estrutura completa para complementar o treino de calistenia e evoluir sua composição corporal.",
    tema: "dark" as const,
    destaque: false,
    borderClass: "border-white/10 hover:border-fit",
    logo: null,
    logoReservado: true,
    eyebrow: "Lavoyer Fit",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="bg-surface-light py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="font-heading text-lg font-semibold uppercase tracking-[0.2em] text-primary md:text-xl">
            Serviços
          </span>
          <SplitReveal
            as="h2"
            className="mt-3 text-3xl font-bold uppercase text-secondary md:text-4xl"
            lines="Um ecossistema completo de treino"
          />
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
                  servico.tema === "dark" ? "bg-secondary text-white" : "bg-white text-secondary"
                } ${servico.borderClass}`}
              >
                {servico.logo && (
                  <span className="relative mb-4 h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
                    <Image
                      src={servico.logo.src}
                      alt={servico.logo.alt}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </span>
                )}

                {servico.logoReservado && (
                  <span className="mb-4 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border-2 border-dashed border-fit/50" />
                )}

                {servico.eyebrow && (
                  <span className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-fit">
                    {servico.eyebrow}
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

                {servico.destaque && (
                  <span className="mt-5 inline-block rounded-full bg-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-black">
                    Serviço destaque
                  </span>
                )}
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
