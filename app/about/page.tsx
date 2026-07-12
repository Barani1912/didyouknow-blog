import { Metadata } from "next";
import PageHeading from "@/components/PageHeading";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the philosophy, editorial guidelines, and slow-journalism approach of DIDYOUKNOW.",
  keywords: ["about didyouknow", "about did you know", "editorial philosophy", "slow journalism", "digital publication"],
  alternates: {
    canonical: "https://didyouknow.in/about",
  },
  openGraph: {
    title: "About | DIDYOUKNOW",
    description: "Learn about the philosophy, editorial guidelines, and slow-journalism approach of DIDYOUKNOW.",
    url: "https://didyouknow.in/about",
    siteName: "DIDYOUKNOW",
  },
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About DIDYOUKNOW",
    "description": "Learn about the philosophy, editorial guidelines, and slow-journalism approach of DIDYOUKNOW.",
    "url": "https://didyouknow.in/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "DIDYOUKNOW",
      "url": "https://didyouknow.in",
      "description": "An independent, digital publication exploring the intersections of software development, sustainable business practices, minimalist lifestyle choices, and design critique."
    }
  };

  return (
    <div className="space-y-12 max-w-3xl">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />

      <PageHeading
        title="About DIDYOUKNOW"
        description="A publication dedicated to slow-form writing, design clarity, and digital restraint."
      />

      <div className="space-y-6 font-sans text-base md:text-lg leading-relaxed text-black/85">
        <p>
          Founded in 2026, DIDYOUKNOW is an independent, digital publication exploring the intersections of software development, sustainable business practices, minimalist lifestyle choices, and design critique. In an era dominated by hyper-connected feeds, immediate reactions, and sensational clickbait, we advocate for a return to slower, more deliberate journalism that values substance over speed.
        </p>
        <p>
          Our editorial design is intentionally austere. By strictly limiting our visual palette to pure black and pure white, we remove all aesthetic noise and sensory distractions, leaving only the author&apos;s ideas and the reader&apos;s contemplation. We believe that good typography, generous white space, and structural clarity are the ultimate respect we can show to our readers&apos; attention spans.
        </p>
        <p>
          We operate entirely without investor backing or corporate sponsorship, allowing us to maintain complete editorial independence. Every essay, critique, and guide published on our pages is written by experienced professionals and domain experts who care deeply about their craft. Our goals are simple: to build a durable archive of thoughtful writing and to foster a community of readers who appreciate simplicity and quality.
        </p>
      </div>
    </div>
  );
}
