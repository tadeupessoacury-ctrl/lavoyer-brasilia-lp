import Image from "next/image";
import CTAButton from "./CTAButton";
import { site, slogans } from "@/lib/site";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden bg-black pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
    >
      <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-primary/20 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.2fr] lg:gap-10">
        <div className="order-2 text-center lg:order-1 lg:text-left">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Pré-lançamento · Brasília
          </span>

          <h1 className="font-heading text-5xl font-extrabold uppercase leading-[1.02] text-white sm:text-6xl md:text-7xl">
            Lavoyer
            <span className="block text-primary">Calistenia</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl font-heading text-xl font-semibold text-white/90 md:text-2xl lg:mx-0">
            Academia de Calistenia Premium em Brasília
          </p>

          <p className="mx-auto mt-5 max-w-lg border-l-2 border-primary/50 pl-4 font-body text-base italic text-white/50 md:text-lg lg:mx-0 lg:text-left">
            &ldquo;{slogans[0] ?? "Venha com o que você tem: o seu corpo"}.&rdquo;
          </p>

          <p className="mx-auto mt-5 max-w-lg font-body text-base text-white/70 md:text-lg lg:mx-0">
            Metodologia própria, graduação por níveis e um personal trainer exclusivo para cada
            aluno.
          </p>

          <div className="mt-9 flex justify-center lg:justify-start">
            <CTAButton size="lg" />
          </div>
        </div>

        <div className="relative order-1 aspect-[5/4] w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/60 ring-1 ring-white/10 lg:order-2">
          <Image
            src="/images/hero-capa.jpg"
            alt={`Praticante de calistenia em parada de mão na ${site.nomeFantasia}`}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
}
