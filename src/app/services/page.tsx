import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export const metadata = {
  title: "Our Services — Adwave Agency",
  description: "Explore our full range of digital content and marketing services.",
};

export default function ServicesIndex() {
  return (
    <div className="min-h-screen bg-offwhite px-6 py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-heading text-4xl font-bold text-charcoal md:text-5xl">
          All Services
        </h1>
        <p className="mt-4 text-lg text-midgrey">
          Explore everything Adwave offers to help your brand grow.
        </p>
      </div>

      <div className="mx-auto mt-12 max-w-5xl">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
            >
              <h3 className="font-heading text-xl font-bold text-charcoal group-hover:text-ocean transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-midgrey">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
