"use client";

import { useRef } from "react";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";

const niveis = [
  { n: "01", nome: "Fundamentos", desc: "Consciência corporal, mobilidade e primeiros movimentos com o peso do corpo." },
  { n: "02", nome: "Base", desc: "Barras baixas, remadas e o início da construção de força real." },
  { n: "03", nome: "Intermediário", desc: "Pull-ups, dips e barra fixa — o corpo começa a responder." },
  { n: "04", nome: "Avançado I", desc: "Paralelas, L-sit e controle corporal em alto nível." },
  { n: "05", nome: "Avançado II", desc: "Muscle-up, argolas e força explosiva com técnica apurada." },
  { n: "06", nome: "Elite I", desc: "Front lever e elementos estáticos de altíssima exigência." },
  { n: "07", nome: "Elite II", desc: "Handstand e os movimentos mais técnicos da calistenia." },
];

export default function Niveis() {
  const trackRef = useRef<HTMLDivElement>(null);
  const dragState = useRef({ dragging: false, startX: 0, startLeft: 0 });

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { dragging: true, startX: e.clientX, startLeft: track.scrollLeft };
    track.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragState.current.dragging) return;
    track.scrollLeft = dragState.current.startLeft - (e.clientX - dragState.current.startX);
  };

  const onPointerUp = () => {
    dragState.current.dragging = false;
  };

  return (
    <section id="niveis" className="overflow-hidden bg-secondary py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="max-w-xl">
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            A Metodologia
          </span>
          <SplitReveal
            as="h2"
            className="mt-3 text-3xl font-bold md:text-4xl"
            lines="Do primeiro movimento ao elite."
          />
          <p className="mt-4 font-body text-white/65 md:text-lg">
            Sete níveis próprios da Lavoyer, cada um validado em uma cerimônia de graduação.
            Você sabe sempre onde está e o que vem a seguir.
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={150}>
        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          className="scrollbar-none mt-10 flex cursor-grab gap-4 overflow-x-auto px-5 pb-4 active:cursor-grabbing md:mx-auto md:max-w-[1600px] md:cursor-default md:gap-4 md:overflow-visible md:px-10 lg:px-16"
        >
          {niveis.map((nivel) => (
            <div
              key={nivel.n}
              className="w-[240px] shrink-0 rounded-2xl border border-white/10 bg-white/[0.03] p-6 select-none sm:w-[270px] md:w-0 md:min-w-0 md:flex-1 md:p-5"
            >
              <span className="font-heading text-3xl font-bold text-white/15">{nivel.n}</span>
              <p className="mt-4 font-heading text-lg font-bold uppercase tracking-wide">
                {nivel.nome}
              </p>
              <p className="mt-2 font-body text-sm text-white/55">{nivel.desc}</p>
            </div>
          ))}
        </div>
      </FadeIn>

      <p className="px-5 mt-2 font-body text-xs italic text-white/30 md:hidden">
        Arraste para explorar
      </p>
    </section>
  );
}
