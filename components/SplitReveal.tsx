"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type Line = { text: string; className?: string };

type SplitRevealProps = {
  lines: string | Line[];
  as?: "h1" | "h2" | "h3" | "span";
  className?: string;
  delay?: number;
};

export default function SplitReveal({
  lines,
  as = "h2",
  className = "",
  delay = 0,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Tag = as;
  const lineList: Line[] = typeof lines === "string" ? [{ text: lines }] : lines;

  const lines_ = lineList.reduce<{ className?: string; words: { word: string; index: number }[] }[]>(
    (acc, line) => {
      const startIndex = acc.reduce((sum, l) => sum + l.words.length, 0);
      const words = line.text
        .split(" ")
        .map((word, i) => ({ word, index: startIndex + i }));
      return [...acc, { className: line.className, words }];
    },
    []
  );

  return (
    <Tag ref={ref as never} className={className}>
      {lines_.map((line, lineIdx) => (
        <span key={lineIdx} className={`block ${line.className ?? ""}`}>
          {line.words.map(({ word, index }, i) => (
            <Fragment key={i}>
              <span className="inline-block overflow-hidden align-top pb-[0.15em] -mb-[0.15em]">
                <span
                  data-split-word
                  data-visible={visible}
                  style={{ transitionDelay: `${delay + index * 70}ms` }}
                  className="inline-block will-change-transform"
                >
                  {word}
                </span>
              </span>
              {i < line.words.length - 1 ? " " : ""}
            </Fragment>
          ))}
        </span>
      ))}
    </Tag>
  );
}
