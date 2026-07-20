import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import CTAButton from "./CTAButton";
import { site } from "@/lib/site";

export default function Localizacao() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    site.endereco
  )}&output=embed`;

  return (
    <section id="localizacao" className="bg-secondary py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8 md:gap-16">
        <FadeIn>
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Localização
          </span>
          <SplitReveal
            as="h2"
            className="mt-3 text-3xl font-bold uppercase md:text-4xl"
            lines="Venha nos conhecer no Noroeste"
          />
          <p className="mt-4 font-body text-white/70 md:text-lg">
            Estrutura completa em uma das regiões mais valorizadas de {site.cidadeEstado}.
            Agende sua semana experimental e conheça o espaço de perto.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-primary">
                <path
                  d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth={1.6}
                />
                <circle cx="12" cy="9.5" r="2.5" stroke="currentColor" strokeWidth={1.6} />
              </svg>
              <p className="font-body text-white/85">{site.endereco}</p>
            </div>
            <div className="flex items-start gap-3">
              <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-primary">
                <path
                  d="M4 5.5C4 4.67 4.67 4 5.5 4h2.72c.6 0 1.13.4 1.3.98l1 3.4a1.36 1.36 0 0 1-.42 1.42l-1.4 1.15a13.5 13.5 0 0 0 5.85 5.85l1.15-1.4a1.36 1.36 0 0 1 1.42-.42l3.4 1a1.36 1.36 0 0 1 .98 1.3v2.72c0 .83-.67 1.5-1.5 1.5h-.75C10.1 21.5 2.5 13.9 2.5 4.75V4"
                  stroke="currentColor"
                  strokeWidth={1.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-body text-white/85">{site.instagram}</p>
            </div>
          </div>

          <div className="mt-9">
            <CTAButton size="lg" />
          </div>
        </FadeIn>

        <FadeIn delay={150} className="aspect-[4/3] w-full overflow-hidden rounded-3xl md:aspect-auto">
          <iframe
            src={mapSrc}
            title={`Mapa de localização da ${site.nomeFantasia}`}
            className="h-full min-h-[340px] w-full border-0 grayscale invert-[92%] contrast-[90%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </FadeIn>
      </div>
    </section>
  );
}
