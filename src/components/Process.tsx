"use client";

import { STEPS } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-midgrey">
            A proven 5-step process that delivers results, every single time.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {STEPS.map((step, i) => (
            <div key={step.number} className="relative">
              {i < STEPS.length - 1 && (
                <div className="absolute left-8 top-16 hidden h-px w-full bg-lightgrey md:block" />
              )}
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ocean text-xl font-bold text-white">
                  {step.number}
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-charcoal">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-midgrey">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}