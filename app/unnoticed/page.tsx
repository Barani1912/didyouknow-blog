import { Metadata } from "next";
import Image from "next/image";
import { getAllUnnoticedItems } from "@/lib/unnoticed";
import { formatDate } from "@/lib/formatDate";

export const metadata: Metadata = {
  title: "Unnoticed Stories & Facts",
  description: "Explore the fascinating, gravity-defying, and historically rich facts that slip quietly under the mainstream radar.",
  keywords: [
    "unnoticed stories",
    "didyouknow facts",
    "hidden history",
    "science anomalies",
    "local festivals",
    "living root bridges",
    "magnetic hill"
  ],
  alternates: {
    canonical: "https://didyouknow.in/unnoticed",
  },
  openGraph: {
    title: "Unnoticed Stories & Facts | DIDYOUKNOW",
    description: "Explore the fascinating, gravity-defying, and historically rich facts that slip quietly under the mainstream radar.",
    url: "https://didyouknow.in/unnoticed",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "DIDYOUKNOW Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unnoticed Stories & Facts | DIDYOUKNOW",
    description: "Explore the fascinating, gravity-defying, and historically rich facts that slip quietly under the mainstream radar.",
    images: ["/logo.png"],
  },
};

export default function UnnoticedPage() {
  const items = getAllUnnoticedItems();

  return (
    <div className="max-w-5xl mx-auto py-8 px-2 md:px-4 space-y-16">
      {/* Page Header */}
      <header className="space-y-4 border-b border-theme-border/10 pb-8 text-center md:text-left">
        <span className="eyebrow text-theme-muted">
          Special Feature
        </span>
        <h1 className="font-sans text-4xl md:text-5xl lg:text-6xl font-black text-theme-fg uppercase tracking-tight leading-none">
          Unnoticed
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-theme-muted max-w-3xl leading-relaxed">
          A collection of the fascinating, gravity-defying, and culturally rich facts that slip quietly under the mainstream radar.
        </p>
      </header>

      {/* Stream of Stories */}
      <div className="flex flex-col">
        {items.map((item) => (
          <article 
            key={item.slug} 
            className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-12 first:pt-0 last:border-0 border-b border-theme-border/10"
          >
            {/* Left Side: Image */}
            <div className="md:col-span-5 w-full">
              <div className="relative aspect-[9/12] w-full max-h-[450px] md:max-h-none overflow-hidden rounded-xl border border-theme-border/10 shadow-sm">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="grayscale-image"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Side: Text Content */}
            <div className="md:col-span-7 space-y-4">
              {/* Eyebrow / Metadata */}
              <div className="flex flex-wrap items-center gap-3 text-[10px] uppercase font-bold tracking-widest text-theme-muted">
                <span>Unnoticed</span>
                <span>•</span>
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>

              {/* Title */}
              <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-theme-fg leading-tight tracking-tight">
                {item.title}
              </h2>

              {/* Paragraphs */}
              <div className="space-y-4 font-sans text-sm md:text-base text-theme-fg/90 leading-relaxed">
                {item.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
