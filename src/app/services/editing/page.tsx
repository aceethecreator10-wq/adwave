import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Editing — Adwave Agency",
  description: "Fast turnaround editing for Reels, Shorts, ads, and long-form content.",
};

export default function EditingPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Editing
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Fast turnaround editing for Reels, Shorts, ads, and long-form content.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src="/EDITING/image-1.png"
              alt="Editing showcase 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <iframe
              src="https://www.instagram.com/reel/DCmDQvPNSGU/embed/?cr=1&v=14"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              scrolling="no"
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src="/EDITING/image-2.png"
              alt="Editing showcase 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for Editing?</h2>
          <p className="mt-4 text-midgrey">
            We edit content that keeps people watching. From quick cuts to full color grading, 
            our editors deliver polished, engaging visuals that match your brand&apos;s style.
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
