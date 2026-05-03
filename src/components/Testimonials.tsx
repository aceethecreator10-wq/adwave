"use client";

import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    company: "FitGear Co.",
    text: "Adwave completely transformed our social presence. Their reels strategy took us from 5K to 50K followers in just 3 months.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Menon",
    company: "Bloom Skincare",
    text: "Their Meta Ads team delivered 8x ROAS on our first campaign. Professional, creative, and they actually care about results.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arjun Desai",
    company: "TechNova",
    text: "From UGC to full PR campaigns, Adwave handles everything seamlessly. We've seen a 40% increase in brand awareness.",
    rating: 5,
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    company: "Urban Threads",
    text: "The video quality and turnaround time is insane. They understand Gen Z trends better than anyone we've worked with.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-tint pt-0 pb-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-charcoal md:text-3xl">
            What Our Clients Say
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mt-4 text-sm text-midgrey leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 border-t border-lightgrey pt-4">
                <div className="text-sm font-semibold text-charcoal">{t.name}</div>
                <div className="text-xs text-midgrey">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}