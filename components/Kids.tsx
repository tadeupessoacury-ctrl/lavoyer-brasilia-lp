import FadeIn from "./FadeIn";

const diferenciais = [
  {
    titulo: "Metodologia própria com 7 níveis",
    texto: "A mesma graduação estruturada da Lavoyer, adaptada pra fase de desenvolvimento infantil.",
  },
  {
    titulo: "Treinadores capacitados em calistenia infantil",
    texto: "Formados pra trabalhar didática, progressão e segurança com crianças.",
  },
  {
    titulo: "Graduação Kids",
    texto: "Cerimônias de progressão de nível, com a turma toda torcendo junto.",
  },
  {
    titulo: "Pais treinam ao lado, no mesmo espaço",
    texto: "Enquanto as crianças fazem calistenia, os pais podem treinar musculação — a mesma visita atende a família toda.",
  },
];

function FotoPlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-kids/30 bg-white/40 ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6 text-kids/50" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="9" cy="10.5" r="1.75" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 15l-5-4-4.5 4-2.5-2-6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-heading text-[10px] font-medium uppercase tracking-[0.2em] text-kids/50">
        Foto em breve
      </span>
    </div>
  );
}

export default function Kids() {
  return (
    <section id="kids" className="border-t-[3px] border-kids bg-kids-tint py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-end md:gap-16">
          <FadeIn>
            <span className="inline-flex items-center gap-2 rounded border border-kids/25 bg-kids/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-kids" />
              <span className="font-heading text-[10px] font-normal uppercase tracking-[0.28em] text-kids">
                Modalidade infantil · 5 a 12 anos
              </span>
            </span>
            <h2 className="mt-6 font-heading text-4xl font-black uppercase leading-[0.95] tracking-tight text-secondary md:text-6xl">
              Lavoyer <span className="text-kids">Kids</span>
            </h2>
            <p className="mt-3 font-heading text-lg font-light italic text-neutral-500">
              Calistenia com método, didática e progressão para crianças.
            </p>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="font-body text-sm leading-relaxed text-neutral-600 md:text-base">
              O Lavoyer Kids é uma metodologia estruturada de calistenia infantil, com
              progressão por níveis e graduação — transformando o desenvolvimento físico da
              criança em conquistas reais e celebradas.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8">
          <FadeIn>
            <FotoPlaceholder className="min-h-[320px] border-t-2 border-kids/30 md:min-h-[420px]" />
          </FadeIn>
          <FadeIn delay={100} className="flex flex-col justify-center gap-1 rounded-2xl bg-white p-8">
            {diferenciais.map((item) => (
              <div key={item.titulo} className="flex items-start gap-3 border-b border-black/5 py-4 first:pt-0 last:border-0">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-kids" />
                <div>
                  <p className="font-heading text-sm font-bold text-secondary">{item.titulo}</p>
                  <p className="mt-1 font-body text-sm text-neutral-600">{item.texto}</p>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2">
          {[0, 1, 2].map((i) => (
            <FadeIn key={i} delay={i * 100}>
              <FotoPlaceholder className="aspect-[4/3]" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
