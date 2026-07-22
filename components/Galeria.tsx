import Image from "next/image";
import FadeIn from "./FadeIn";

const grandes = [
  { src: "/images/academia-3.jpg", alt: "Estrutura Lavoyer Calistenia" },
  { src: "/images/equipe-1.jpg", alt: "Equipe Lavoyer" },
];

const pequenas = [
  { src: "/images/movimento-5.jpg", alt: "Aluna em suspensão nas argolas olímpicas" },
  { src: "/images/movimento-3.jpg", alt: "Aluno em prancha isométrica avançada" },
  { src: "/images/movimento-2.jpg", alt: "Praticante em suspensão com elástico nas argolas" },
];

export default function Galeria() {
  return (
    <section id="galeria" className="border-t border-black/10 bg-white">
      <div className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2">
        {grandes.map((foto, i) => (
          <FadeIn
            key={foto.src}
            delay={i * 100}
            className="group relative aspect-[4/3] overflow-hidden bg-white"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover grayscale transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-400 group-hover:scale-x-100" />
          </FadeIn>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-px bg-black/10">
        {pequenas.map((foto, i) => (
          <FadeIn
            key={foto.src}
            delay={i * 100}
            className="relative aspect-square overflow-hidden bg-white sm:aspect-[4/3]"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              className="object-cover grayscale"
            />
          </FadeIn>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-black/10 px-5 py-5 md:px-8">
        <p className="font-body text-xs italic text-neutral-500">Lavoyer Calistenia</p>
        <span className="font-heading text-[10px] uppercase tracking-[0.28em] text-neutral-400">
          Noroeste · Brasília
        </span>
      </div>
    </section>
  );
}
