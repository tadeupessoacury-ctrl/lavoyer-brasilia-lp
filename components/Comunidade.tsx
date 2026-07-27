import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Comunidade() {
  return (
    <section id="comunidade" className="overflow-hidden bg-[#0C0C0C]">
      <div className="grid gap-px bg-white/5 md:grid-cols-3">
        <FadeIn className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/images/turma-nota.jpeg"
            alt="Turma Lavoyer em treino"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover brightness-90"
          />
        </FadeIn>

        <FadeIn
          delay={100}
          className="flex flex-col justify-center bg-[#141414] px-8 py-16 md:px-10"
        >
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-white/35">
            A Comunidade
          </span>
          <h2 className="mt-5 font-heading text-2xl font-bold italic leading-tight text-white md:text-3xl">
            &ldquo;A turma nota quando você falta.&rdquo;
          </h2>
          <p className="mt-5 font-body text-sm text-white/50 md:text-base">
            O ambiente Lavoyer cria laços. A turma torce quando você avança, e o treinador
            percebe quando você some. Isso não se ensina — acontece.
          </p>
        </FadeIn>

        <FadeIn delay={200} className="relative aspect-[3/4] overflow-hidden">
          <Image
            src="/images/equipe-2.jpg"
            alt="Alunos Lavoyer em treino conjunto"
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover brightness-90"
          />
        </FadeIn>
      </div>
    </section>
  );
}
