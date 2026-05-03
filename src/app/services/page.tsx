import type { Metadata } from "next";
import Link from "next/link";
import { Megaphone, Users, Newspaper, Calendar, Video, Clapperboard, Camera, Scissors, ArrowRight, Globe, Palette } from "lucide-react";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services — Adwave Agency",
  description: "Explore our full range of content and marketing services.",
};

const iconMap: Record<string, React.ElementType> = {
  Megaphone,
  Users,
  Newspaper,
  Calendar,
  Video,
  Clapperboard,
  Camera,
  Scissors,
  Globe,
  Palette,
};

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-offwhite">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Link href="/" className="text-sm text-ocean hover:underline">&larr; Back to Home</Link>
        <h1 className="mt-8 font-heading text-3xl font-bold text-charcoal md:text-4xl">
          Our Services
        </h1>
        <p className="mt-4 text-lg text-midgrey max-w-2xl">
          Full-stack content solutions for brands that want to dominate in the digital age.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <Link
                key={service.title}
                href={`/services/${service.slug}`}
                className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:scale-[1.02]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10 text-ocean">
                  {Icon && <Icon className="h-6 w-6" />}
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-midgrey">{service.description}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-ocean group-hover:gap-2 transition-all">
                  View Work <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}