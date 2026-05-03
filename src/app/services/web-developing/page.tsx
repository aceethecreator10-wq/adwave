import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Web Developing — Adwave Agency",
  description: "Custom websites and landing pages that look stunning and convert visitors into customers.",
};

export default function WebDevelopingPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Web Developing
        </h1>
        <div className="mt-6 space-y-4 text-lg text-midgrey max-w-3xl leading-relaxed">
          <p>We've expanded into web development as part of our growing digital services.</p>
          <p>From landing pages to full-scale websites, we build fast, modern, and conversion-focused experiences.</p>
          <p>Our own website has been designed and developed in-house — reflecting the quality and approach we bring to every project.</p>
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-charcoal">Ready to build?</h2>
          <p className="mt-4 text-midgrey">
            Whether you need a sleek portfolio, a high-converting landing page, or a full-scale web application, 
            our in-house team ensures your site is built for speed, design, and growth.
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
