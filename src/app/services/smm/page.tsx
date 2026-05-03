import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "SMM — Adwave Agency",
  description: "Social media management that builds communities, not just follower counts.",
};

export default function SMMPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Social Media Management (SMM)
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Building communities, not just follower counts.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <iframe
              src="https://www.instagram.com/reel/DT5NGXbDOlY/embed/?cr=1&v=14"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src="/SMM/image.png"
              alt="SMM Campaign"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <iframe
              src="https://www.instagram.com/reel/DXwb-qKM7xe/embed/?cr=1&v=14"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for SMM?</h2>
          <p className="mt-4 text-midgrey">
            We don&apos;t just post content; we build movements. Our social media strategies are designed to spark engagement, 
            drive conversations, and turn passive followers into loyal brand advocates. From trend-jacking to community management, 
            we handle it all with a touch of Gen Z magic.
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
