"use client";

const REELS = [
  { id: 1, shortcode: "DV-OUaJjOKc", label: "Trending Reels" },
  { id: 2, shortcode: "DXlzcnptFoD", label: "Offers Reels" },
  { id: 3, shortcode: "DXVhI2hCGhO", label: "New Releases" },
  { id: 4, shortcode: "DXJwLMiB6tp", label: "Unique Concept" },
  { id: 5, shortcode: "DWay39kDBQj", label: "Creator Reel" },
  { id: 6, shortcode: "DVjTwh4MelN", label: "Brand Collab & PR" },
];

function ReelEmbed({ shortcode }: { shortcode: string }) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-black aspect-[9/16]">
      <iframe
        src={`https://www.instagram.com/reel/${shortcode}/embed/?cr=1&v=14`}
        className="absolute inset-0 w-full h-full border-0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        scrolling="no"
        title="Instagram Reel"
      />
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-white md:text-4xl">
            Our Work
          </h2>
          <p className="mt-4 text-lightgrey">
            Real reels. Real results. Watch what we create.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REELS.map((reel) => (
            <div
              key={reel.id}
              className="overflow-hidden rounded-2xl bg-charcoal p-4"
            >
              <span className="mb-3 inline-block rounded-full bg-sky/20 px-3 py-1 text-xs font-medium text-sky">
                {reel.label}
              </span>
              <ReelEmbed shortcode={reel.shortcode} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}