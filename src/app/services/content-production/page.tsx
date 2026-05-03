import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Content Production — Adwave Agency",
  description: "Launch events, influencer meetups, and experiential marketing that creates buzz.",
};

export default function ContentProductionPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Content Production
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Launch events, influencer meetups, and experiential marketing that creates buzz.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <Image
              src="/CONTENT PRODUCTION/IMG_20251213_173515.jpg.jpeg"
              alt="Content Production showcase 1"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl bg-charcoal">
            <video
              src="/CONTENT PRODUCTION/VN20260503_035146.mp4"
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
              src="/CONTENT PRODUCTION/597903427_18566026519016259_5675558665370447498_n.heic.jpg.jpeg"
              alt="Content Production showcase 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for Content Production?</h2>
          <p className="mt-4 text-midgrey">
            We bring strategic thinking, creative execution, and measurable results to every project.
            Our team works closely with you to understand your goals and deliver content that resonates with your audience.
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
