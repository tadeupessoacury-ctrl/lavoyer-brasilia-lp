"use client";

import { useEffect, useRef } from "react";
import FadeIn from "./FadeIn";
import SplitReveal from "./SplitReveal";
import VideoCard from "./VideoCard";

const movimentos = [
  { src: "/images/movimento-1.jpg", alt: "Aluno em L-sit nas paralelas Lavoyer" },
  { src: "/images/movimento-2.jpg", alt: "Praticante em suspensão com elástico nas argolas" },
  { src: "/images/movimento-3.jpg", alt: "Aluno em prancha isométrica avançada" },
  { src: "/images/movimento-4.jpg", alt: "Praticante em inversão total nas argolas" },
  { src: "/images/movimento-5.jpg", alt: "Aluna em suspensão nas argolas olímpicas" },
  { src: "/images/movimento-6.jpg", alt: "Praticante executando barra fixa" },
];

const AUTO_SCROLL_SPEED = 40; // pixels per second
const RESUME_DELAY = 1500; // ms of inactivity before auto-scroll resumes

export default function Movimentos() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let pausedUntil = 0;
    let lastSetLeft = track.scrollLeft;

    const handleScroll = () => {
      if (Math.abs(track.scrollLeft - lastSetLeft) < 1) return;
      pausedUntil = performance.now() + RESUME_DELAY;
    };
    track.addEventListener("scroll", handleScroll, { passive: true });

    let frame: number;
    let lastTime = performance.now();

    const step = (now: number) => {
      const delta = now - lastTime;
      lastTime = now;

      if (now >= pausedUntil) {
        const half = track.scrollWidth / 2;
        let next = track.scrollLeft + (AUTO_SCROLL_SPEED * delta) / 1000;
        if (half > 0 && next >= half) next -= half;
        track.scrollLeft = next;
        lastSetLeft = next;
      }

      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="movimentos" className="overflow-hidden bg-[#0C0C0C] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <FadeIn className="max-w-xl">
          <SplitReveal
            as="h2"
            className="text-3xl font-bold text-white md:text-4xl"
            lines="Calistenia em ação"
          />
        </FadeIn>
      </div>

      <FadeIn delay={150}>
        <div
          ref={trackRef}
          className="scrollbar-none mt-10 flex gap-px overflow-x-auto px-5 pb-4 md:px-8"
        >
          {[...movimentos, ...movimentos].map((mov, i) => (
            <VideoCard
              key={`${mov.src}-${i}`}
              src={mov.src}
              alt={mov.alt}
              showPlayIcon={false}
              className="w-[220px] shrink-0 sm:w-[260px] md:w-[300px]"
              sizes="300px"
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
