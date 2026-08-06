import Image from "next/image";
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

const fotosGraduacao = [
  { src: "/images/graduacao-kids-1.jpg", alt: "Graduação Lavoyer Kids 2025" },
  { src: "/images/graduacao-kids-2.jpg", alt: "Graduação Lavoyer Kids 2025" },
  { src: "/images/graduacao-kids-3.jpg", alt: "Graduação Lavoyer Kids 2025" },
  { src: "/images/graduacao-kids-4.jpg", alt: "Graduação Lavoyer Kids 2025" },
];

function FotoKids({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-xl border-t-2 border-kids/30 ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
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
            <FotoKids
              src={fotosGraduacao[0].src}
              alt={fotosGraduacao[0].alt}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="min-h-[320px] md:min-h-[420px]"
            />
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
          {fotosGraduacao.slice(1).map((foto, i) => (
            <FadeIn key={foto.src} delay={i * 100}>
              <FotoKids
                src={foto.src}
                alt={foto.alt}
                sizes="(min-width: 768px) 33vw, 100vw"
                className="aspect-[4/3]"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
