import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Performance Marketing — Adwave Agency",
  description: "Targeted paid campaigns that drive real conversions on Instagram & Facebook.",
};

export default function PerformanceMarketingPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Performance Marketing
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Targeted paid campaigns that drive real conversions on Instagram & Facebook.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-offwhite">
            <Image
              src="/PERFORMANCE MARKETING/1.png"
              alt="Performance Marketing showcase 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-offwhite">
            <Image
              src="/PERFORMANCE MARKETING/2.png"
              alt="Performance Marketing showcase 2"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-offwhite">
            <Image
              src="/PERFORMANCE MARKETING/3.png"
              alt="Performance Marketing showcase 3"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for Performance Marketing?</h2>
          <p className="mt-4 text-midgrey">
            We don&apos;t just run ads — we engineer growth. Every campaign is backed by data,
            optimized for ROI, and scaled for maximum impact across all platforms.
          </p>
          <Link
            href="/#contact"
            className="inline-block mt-6 rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
