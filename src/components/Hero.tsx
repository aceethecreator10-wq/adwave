"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STATS } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    const words = headlineRef.current?.querySelectorAll(".word");
    if (words) {
      tl.to(
        words,
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.8,
        },
        0
      );
    }

    tl.to(
      subRef.current,
      { y: 0, opacity: 1, duration: 0.8 },
      "-=0.4"
    ).to(
      ctaRef.current,
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.4"
    ).to(
      statsRef.current,
      { y: 0, opacity: 1, duration: 0.6 },
      "-=0.3"
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-6"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-ocean/20 via-transparent to-accent/10 animate-gradient opacity-30" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <h1
          ref={headlineRef}
          className="font-heading text-5xl font-extrabold text-white md:text-7xl"
        >
          <span className="word inline-block translate-y-60 opacity-0">Let</span>{" "}
          <span className="word inline-block translate-y-60 opacity-0">Your</span>{" "}
          <span className="word inline-block translate-y-60 opacity-0">Brand</span>{" "}
          <span className="word inline-block translate-y-60 opacity-0">Make</span>{" "}
          <span className="word inline-block translate-y-60 opacity-0">The</span>{" "}
          <span className="word inline-block translate-y-60 opacity-0 text-sky">Shor</span>
        </h1>

        <p
          ref={subRef}
          className="mx-auto mt-6 max-w-2xl text-base text-lightgrey md:text-lg leading-relaxed translate-y-20 opacity-0"
        >
          Your brand deserves its own noise in the market — the art of getting recognition.
          Your vision, our provision.
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-wrap justify-center gap-4 translate-y-10 opacity-0"
        >
          <a
            href="#work"
            className="rounded-full bg-ocean px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90"
          >
            See Our Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Talk to Us
          </a>
        </div>

        <div
          ref={statsRef}
          className="mt-16 flex flex-wrap justify-center gap-4 text-sm font-medium text-sky md:gap-8 translate-y-10 opacity-0"
        >
          {STATS.map((stat, i) => (
            <span key={stat.label}>
              {stat.value} {stat.label}
              {i < STATS.length - 1 && (
                <span className="ml-4 md:ml-8 text-lightgrey/50">|</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}