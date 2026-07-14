import { getFeaturedPosts, getAllPosts, categories } from "@/lib/posts";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import PostRiverItem from "@/components/PostRiverItem";
import HeroCarousel from "@/components/HeroCarousel";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "DIDYOUKNOW | Tech, Health & Trending Stories",
  description: "Explore thought-provoking essays, perspectives, and did you know facts about technology, health, and trending cultural events at DIDYOUKNOW.",
  keywords: [
    "did you know",
    "didyouknow",
    "DIDYOUKNOW",
    "did you know blog",
    "tech essays",
    "health advice",
    "trending stories",
    "slow journalism",
    "digital minimalism"
  ],
  alternates: {
    canonical: "https://didyouknow.in",
  },
  openGraph: {
    title: "DIDYOUKNOW | Tech, Health & Trending Stories",
    description: "Explore thought-provoking essays, perspectives, and did you know facts about technology, health, and trending cultural events at DIDYOUKNOW.",
    url: "https://didyouknow.in",
    siteName: "DIDYOUKNOW",
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
    title: "DIDYOUKNOW | Tech, Health & Trending Stories",
    description: "Explore thought-provoking essays, perspectives, and did you know facts about technology, health, and trending cultural events at DIDYOUKNOW.",
    images: ["/logo.png"],
  },
};

export default function HomePage() {
  const featuredPosts = getFeaturedPosts();
  const allPosts = getAllPosts();

  // For the right sidebar of the hero, show the first 5 latest posts
  const sidebarPosts = allPosts.slice(0, 5);

  // The rest of the posts for the grid feed (starting from index 5 to avoid duplication of top hero sidebar)
  const feedPosts = allPosts.slice(5);

  // First grid has 8 posts
  const firstGridPosts = feedPosts.slice(0, 8);

  // Break banner post (next post in the list)
  const bannerPost = feedPosts[8];

  // Remaining posts for second grid
  const secondGridPosts = feedPosts.slice(9);

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DIDYOUKNOW",
    "alternateName": ["didyouknow", "did you know", "DID YOU KNOW"],
    "url": "https://didyouknow.in",
    "description": "Ideas, essays, and perspectives on technology, business, and culture."
  };

  return (
    <div className="space-y-16 md:space-y-24">
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <h1 className="sr-only">DIDYOUKNOW - Ideas, essays, and perspectives on technology, business, and culture.</h1>



      {/* 1. Hero Section (Creative Soccer Culture Style) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Carousel (75% width) */}
        <div className="lg:col-span-9">
          <HeroCarousel posts={featuredPosts} />
        </div>

        {/* Right Column: Stacked Sidebar Stories (25% width) */}
        <div className="lg:col-span-3 flex flex-col space-y-6">
          <h2 className="text-xs font-sans uppercase font-bold tracking-widest text-theme-muted pb-1">
            Latest Stories
          </h2>
          <div className="flex flex-col space-y-6">
            {sidebarPosts.map((post) => {
              const catObj = categories.find((c) => c.slug === post.category);
              const catName = catObj ? catObj.name : post.category;
              return (
                <article key={post.slug} className="group flex gap-4 items-start">
                  {post.image && (
                    <Link href={`/blog/${post.slug}`} className="block relative w-16 h-16 aspect-square overflow-hidden shrink-0">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="64px"
                        className="grayscale-image"
                        unoptimized
                      />
                    </Link>
                  )}
                  <div className="space-y-1 flex-1 min-w-0">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-theme-muted block">
                      {catName}
                    </span>
                    <h4 className="text-xs md:text-sm font-sans font-bold leading-snug text-theme-fg line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="link-hover">
                        {post.title}
                      </Link>
                    </h4>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. First Grid (8 posts) */}
      {firstGridPosts.length > 0 && (
        <section className="space-y-10">
          <div className="pb-2">
            <h2 className="font-sans text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-theme-fg uppercase">
              Trending & Latest
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {firstGridPosts.map((post) => (
              <PostRiverItem key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* 3. Break Banner (Full-Width Highlight Post) */}
      {bannerPost && (
        <section className="group w-full relative">
          <Link href={`/blog/${bannerPost.slug}`} className="block w-full relative aspect-[21/9] md:aspect-[3/1] overflow-hidden">
            {bannerPost.image && (
              <Image
                src={bannerPost.image}
                alt={bannerPost.title}
                fill
                sizes="100vw"
                className="grayscale-image"
                unoptimized
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          </Link>
          <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 right-4 md:right-8 z-10 space-y-3 pointer-events-none">
            <div className="flex gap-2 pointer-events-auto">
              <Link
                href={`/category/${bannerPost.category}`}
                className="border border-[#ffffff]/40 bg-[#000000]/60 hover:bg-[#000000]/90 text-[#ffffff] rounded-full px-3 py-1.5 text-[9px] font-sans uppercase font-bold tracking-widest backdrop-blur-xs transition-colors duration-200"
              >
                {categories.find((c) => c.slug === bannerPost.category)?.name || bannerPost.category}
              </Link>
            </div>
            <h2 className="text-xl md:text-3xl lg:text-4xl font-sans font-extrabold leading-tight text-[#ffffff] max-w-4xl pointer-events-auto">
              <Link href={`/blog/${bannerPost.slug}`} className="hover:underline underline-offset-4 decoration-1">
                {bannerPost.title}
              </Link>
            </h2>
            <p className="text-xs md:text-sm text-[#ffffff]/80 max-w-3xl font-sans line-clamp-2 leading-relaxed hidden sm:block">
              {bannerPost.excerpt}
            </p>
          </div>
        </section>
      )}

      {/* 4. Second Grid (Remaining posts) */}
      {secondGridPosts.length > 0 && (
        <section className="space-y-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {secondGridPosts.map((post) => (
              <PostRiverItem key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
