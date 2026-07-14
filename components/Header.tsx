"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CTAButton from "./CTAButton";

const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#metodologia", label: "Metodologia" },
  { href: "#movimentos", label: "Movimentos" },
  { href: "#comunidade", label: "Comunidade" },
  { href: "#localizacao", label: "Localização" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-1 ring-white/20">
            <Image
              src="/images/logo.png"
              alt="Lavoyer Calistenia"
              fill
              sizes="44px"
              className="object-cover"
              priority
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-lg font-bold tracking-wide text-white">
              LAVOYER
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              Calistenia
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] font-semibold leading-none text-white/85 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <CTAButton size="md" />
        </div>

        <button
          type="button"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-base font-medium text-white/85"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-6">
            <CTAButton size="md" className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}
