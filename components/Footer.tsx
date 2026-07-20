import Image from "next/image";
import CTAButton from "./CTAButton";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-secondary py-14 text-white">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-10 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
            <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
              <Image
                src="/images/logo.png"
                alt="Lavoyer Calistenia"
                fill
                sizes="48px"
                className="object-cover"
              />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-xl font-bold tracking-wide">LAVOYER</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-primary">
                Calistenia
              </span>
            </div>
          </div>

          <CTAButton size="lg" />
        </div>

        <div className="grid gap-10 pt-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
              Endereço
            </p>
            <p className="mt-2 font-body text-sm text-white/75">{site.endereco}</p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
              Contato
            </p>
            <p className="mt-2 font-body text-sm text-white/75">
              WhatsApp: +{site.whatsapp}
            </p>
            <p className="mt-1 font-body text-sm text-white/75">{site.instagram}</p>
          </div>
          <div>
            <p className="font-heading text-sm font-semibold uppercase tracking-wide text-white/50">
              Lavoyer
            </p>
            <p className="mt-2 font-body text-sm text-white/75">
              {site.anosMercado} de metodologia Lavoyer. Pré-lançamento da unidade Noroeste.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} {site.nomeFantasia}. Todos os direitos reservados.
          </p>
          <a
            href="https://www.universocriativo.me"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/40 transition-colors hover:text-primary"
          >
            Desenvolvido por Universo Criativo
          </a>
        </div>
      </div>
    </footer>
  );
}
