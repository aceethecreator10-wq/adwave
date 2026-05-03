import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Videography — Adwave Agency",
  description: "High-production videos for ads, social, and brand storytelling.",
};

export default function VideographyPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Videography
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          High-production videos for ads, social, and brand storytelling.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <video
              src="/VIDEOGRAPHY/video-1.mp4"
              controls
              autoPlay
              muted
              loop
              className="h-full w-full object-contain"
              playsInline
            />
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <video
              src="/VIDEOGRAPHY/video-2.mp4"
              controls
              autoPlay
              muted
              loop
              className="h-full w-full object-contain"
              playsInline
            />
          </div>
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <video
              src="/VIDEOGRAPHY/video-3.mp4"
              controls
              autoPlay
              muted
              loop
              className="h-full w-full object-contain"
              playsInline
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for Videography?</h2>
          <p className="mt-4 text-midgrey">
            From cinematic brand films to high-energy social content, we capture your story in motion.
            Our team handles everything from concept to final cut, delivering videos that make people stop scrolling.
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
