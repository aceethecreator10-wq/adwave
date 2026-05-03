import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Photography — Adwave Agency",
  description: "Professional product and lifestyle shoots that make your brand irresistible.",
};

export default function PhotographyPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Photography
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Professional product and lifestyle shoots that make your brand irresistible.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src="/PHOTOGRAPHY/SMK03497 (1).jpg.jpeg"
              alt="Photography showcase 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <video
              src="/PHOTOGRAPHY/video-1.mp4"
              controls
              autoPlay
              muted
              loop
              className="h-full w-full object-contain"
              playsInline
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src="/PHOTOGRAPHY/SMK05819.JPG.jpeg"
              alt="Photography showcase 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for Photography?</h2>
          <p className="mt-4 text-midgrey">
            Our lens captures more than just visuals — it captures the essence of your brand.
            From product flat-lays to lifestyle editorial shots, we deliver imagery that sells.
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
