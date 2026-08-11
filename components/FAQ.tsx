"use client";

import { useState } from "react";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";

const perguntas = [
  {
    q: "O que é calistenia?",
    a: "Treinamento com o peso do próprio corpo, sem aparelhos nem pesos externos. Desenvolve força, mobilidade e controle corporal de forma progressiva — funciona pra qualquer nível.",
  },
  {
    q: "Preciso ter experiência pra começar?",
    a: "Não. A metodologia Lavoyer começa do zero absoluto. Qualquer pessoa entra no nível 1 e progride no seu próprio ritmo, com acompanhamento de treinadores capacitados.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "Você agenda pelo WhatsApp, conhece o espaço e os treinadores, e faz uma aula completa — sem compromisso.",
  },
  {
    q: "O que é a Graduação Lavoyer?",
    a: "É a cerimônia de progressão de nível: o aluno executa os movimentos do próximo nível diante da comunidade, que acompanha cada conquista.",
  },
  {
    q: "A Lavoyer atende crianças e adultos 60+?",
    a: "Sim. A Lavoyer Kids atende crianças a partir dos 5 anos com metodologia própria, e a graduação por níveis se adapta a qualquer faixa etária e condicionamento.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <FadeIn>
          <span className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Dúvidas frequentes
          </span>
          <SplitReveal
            as="h2"
            className="mt-3 text-3xl font-bold text-secondary md:text-4xl"
            lines="O que as pessoas mais perguntam."
          />
        </FadeIn>

        <div className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {perguntas.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-heading text-base font-bold text-secondary md:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`relative h-4 w-4 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 bg-secondary" />
                    <span className="absolute left-1/2 top-1/2 h-4 w-px -translate-x-1/2 -translate-y-1/2 bg-secondary" />
                  </span>
                </button>
                <div
                  className="grid transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 font-body text-sm leading-relaxed text-neutral-600 md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
