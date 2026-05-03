"use client";

import { Megaphone, Users, Newspaper, Calendar, Video, Clapperboard, Camera, Scissors, ArrowRight, Globe, Palette } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Link from "next/link";

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

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-charcoal md:text-4xl">
            What We Do
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-midgrey">
            Full-stack content solutions for brands that want to dominate in the digital age.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
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
    </section>
  );
}