import Image from "next/image";
import FadeIn from "./FadeIn";

const niveis = [
  { nome: "Fundamentos", desc: "Consciência corporal, mobilidade e base de força." },
  { nome: "Intermediário", desc: "Primeiras habilidades técnicas e progressões de força." },
  { nome: "Avançado", desc: "Elementos estáticos e dinâmicos de alta exigência." },
  { nome: "Elite", desc: "Refinamento técnico e movimentos de assinatura Lavoyer." },
];

export default function Metodologia() {
  return (
    <section id="metodologia" className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:items-center md:px-8 md:gap-16">
        <FadeIn className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src="/images/academia-2.jpg"
            alt="Argolas de calistenia na estrutura Lavoyer"
            fill
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </FadeIn>

        <div>
          <FadeIn>
            <span className="font-body text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Metodologia
            </span>
            <h2 className="mt-3 font-heading text-3xl font-medium uppercase md:text-4xl">
              Uma graduação própria, validada na prática
            </h2>
            <p className="mt-4 max-w-xl font-body text-white/70 md:text-lg">
              Desenvolvemos um sistema de níveis exclusivo da Lavoyer que acompanha a evolução
              real de cada aluno — do primeiro dia sobre o solo até os movimentos técnicos mais
              avançados da calistenia. Cada praticante sabe exatamente onde está e para onde vai.
            </p>
          </FadeIn>

          <div className="mt-9 space-y-4">
            {niveis.map((nivel, i) => (
              <FadeIn key={nivel.nome} delay={i * 100}>
                <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-sm font-medium text-black">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-heading text-sm font-medium uppercase tracking-wide">
                      {nivel.nome}
                    </p>
                    <p className="mt-1 font-body text-sm text-white/60">{nivel.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
