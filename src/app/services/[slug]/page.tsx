import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} — Adwave Agency`,
    description: service.description,
  };
}

export default function ServicePage({ params }: PageProps) {
  const service = SERVICES.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm text-ocean hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          {service.title}
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">{service.description}</p>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm max-w-3xl">
          <h2 className="font-heading text-xl font-bold text-charcoal">Why choose Adwave for {service.title}?</h2>
          <p className="mt-4 text-midgrey">
            We bring strategic thinking, creative execution, and measurable results to every {service.title.toLowerCase()} project.
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
