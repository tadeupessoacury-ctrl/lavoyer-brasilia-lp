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
            className="mt-3 text-3xl font-bold md:text-4xl"
            lines="Setor Noroeste, Brasília."
          />
          <p className="mt-4 font-body text-white/70 md:text-lg">
            A única academia de calistenia com metodologia própria na região.
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
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth={1.6} />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth={1.6} />
                <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
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
