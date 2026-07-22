import Image from "next/image";
import { instagramHref } from "@/lib/site";

type VideoCardProps = {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
  href?: string;
  aspect?: "portrait" | "wide";
  playSize?: "sm" | "lg";
  showPlayIcon?: boolean;
  grayscale?: boolean;
  className?: string;
  sizes?: string;
};

export default function VideoCard({
  src,
  alt,
  label,
  caption,
  href = instagramHref,
  aspect = "portrait",
  playSize = "sm",
  showPlayIcon = true,
  grayscale = false,
  className = "",
  sizes = "(min-width: 768px) 30vw, 90vw",
}: VideoCardProps) {
  const play = playSize === "lg" ? "h-16 w-16" : "h-11 w-11";
  const triangle = playSize === "lg" ? "h-5 w-5" : "h-3.5 w-3.5";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden ${
        aspect === "portrait" ? "aspect-[9/16]" : "aspect-video"
      } ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover transition-transform duration-700 group-hover:scale-105 ${grayscale ? "grayscale" : ""}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100"
        aria-hidden="true"
      />
      {(showPlayIcon || label || caption) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
          {showPlayIcon && (
            <span
              className={`flex shrink-0 items-center justify-center rounded-full border border-white/35 transition-colors duration-300 group-hover:border-primary ${play}`}
            >
              <svg viewBox="0 0 24 24" fill="none" className={triangle} aria-hidden="true">
                <path d="M6 4l16 8-16 8V4z" fill="rgba(255,255,255,0.85)" />
              </svg>
            </span>
          )}
          {label && (
            <span className="font-heading text-[10px] font-normal uppercase tracking-[0.28em] text-white/55">
              {label}
            </span>
          )}
          {caption && (
            <p className="font-heading text-sm font-bold text-white/85">{caption}</p>
          )}
        </div>
      )}
    </a>
  );
}
