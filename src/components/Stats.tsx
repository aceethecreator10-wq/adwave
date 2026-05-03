"use client";

import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section id="stats" className="bg-tint py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-4xl font-bold text-ocean md:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-midgrey uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}