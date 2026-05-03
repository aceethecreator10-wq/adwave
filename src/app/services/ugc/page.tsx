import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "UGC — Adwave Agency",
  description: "Authentic user-generated content that looks like real people love your brand.",
};

export default function UGCPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          User Generated Content (UGC)
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Authentic user-generated content that looks like real people love your brand.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <iframe
              src="https://www.instagram.com/reel/C-VL-3jNP3N/embed/?cr=1&v=14"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <iframe
              src="https://www.instagram.com/reel/C-XDBGnNh9M/embed/?cr=1&v=14"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <iframe
              src="https://www.instagram.com/reel/DXHOw4PDKyv/embed/?cr=1&v=14"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for UGC?</h2>
          <p className="mt-4 text-midgrey">
            Real people, real results. Our UGC strategies build trust and social proof by creating 
            content that blends seamlessly into social feeds and drives genuine engagement.
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
