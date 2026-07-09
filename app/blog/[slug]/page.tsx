import { notFound } from "next/navigation";
import { getPostBySlug, getPostsByCategory, posts, categories } from "@/lib/posts";
import CategoryTag from "@/components/CategoryTag";
import PostRiverItem from "@/components/PostRiverItem";
import ScrollProgress from "@/components/ScrollProgress";
import Link from "next/link";
import Image from "next/image";
import { formatDate } from "@/lib/formatDate";
import { Metadata } from "next";
import ShareButtons from "@/components/ShareButtons";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  // Generate category-specific keywords for SEO
  const categoryKeywordsMap: Record<string, string[]> = {
    tech: ["software engineering", "programming", "technology design", "IT trends", "coding standards"],
    health: ["wellness", "mental health", "circadian sleep", "healthy habits", "cognitive longevity"],
    trending: ["viral topics", "trending news", "current events", "latest stories", "cultural perspectives"]
  };
  const categorySpecific = categoryKeywordsMap[post.category] || [];
  const keywords = ["did you know", "didyouknow", post.category, post.title.toLowerCase(), ...categorySpecific];

  return {
    title: post.title,
    description: post.excerpt,
    keywords: keywords,
    alternates: {
      canonical: `https://didyouknow.com/blog/${post.slug}`,
    },
    openGraph: {
      title: `${post.title} | DIDYOUKNOW`,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://didyouknow.com/blog/${post.slug}`,
      siteName: "DIDYOUKNOW",
    },
  };
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Calculate dynamic reading time (words / 200, rounded up)
  const fullText = post.content.join(" ");
  const wordCount = fullText.trim().split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / 200);

  const categoryObj = categories.find((c) => c.slug === post.category);
  const categoryName = categoryObj ? categoryObj.name : post.category;

  // Get related posts (exclude current, filter by same category, slice to 2)
  const relatedPosts = getPostsByCategory(post.category)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  // Get other latest posts for sidebar (exclude current post and related posts)
  const latestSidebarPosts = posts
    .filter((p) => p.slug !== post.slug && !relatedPosts.some((r) => r.slug === p.slug))
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image ? `https://didyouknow.com${post.image}` : undefined,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
    },
    "publisher": {
      "@type": "Organization",
      "name": "DIDYOUKNOW",
      "logo": {
        "@type": "ImageObject",
        "url": "https://didyouknow.com/icon.png",
      },
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://didyouknow.com/blog/${post.slug}`,
    },
  };

  return (
    <div className="relative">
      {/* JSON-LD Article Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgress />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
        {/* Main Article Content (8 columns on large screens) */}
        <article className="lg:col-span-8 space-y-8 md:space-y-12">
          {/* Article Header */}
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-4 text-xs uppercase tracking-widest text-theme-muted">
              <CategoryTag slug={post.category} name={categoryName} />
              <span>•</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span>•</span>
              <span>{readingTime} min read</span>
            </div>

            <h1 className="font-sans text-3xl md:text-5xl lg:text-6xl font-black text-theme-fg leading-tight tracking-tight uppercase">
              {post.title}
            </h1>

            <ShareButtons title={post.title} slug={post.slug} />
          </header>

          {/* Hero Image with Hairline border and true grayscale CSS filter */}
          {post.image && (
            <div className="relative aspect-[21/9] w-full overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="grayscale-image"
                unoptimized
              />
            </div>
          )}

          {/* Article Body Content */}
          <div className="space-y-8 font-sans text-base md:text-lg lg:text-xl leading-relaxed text-theme-fg/95">
            {post.content.map((paragraph, index) => {
              if (index === 0) {
                return (
                  <p key={index} className="drop-cap">
                    {paragraph}
                  </p>
                );
              }

              const showPullQuote = index === 1 && post.content.length > 2;

              return (
                <div key={index} className="contents">
                  <p>{paragraph}</p>
                  {showPullQuote && (
                    <blockquote className="pull-quote">
                      “{post.excerpt}”
                    </blockquote>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4">
            <ShareButtons title={post.title} slug={post.slug} />
          </div>
        </article>

        {/* Sidebar (4 columns on large screens) */}
        <aside className="lg:col-span-4 space-y-10 lg:border-l lg:border-theme-border/10 lg:pl-8">
          {/* Related/Recommended section */}
          {relatedPosts.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xs uppercase font-bold tracking-widest text-theme-muted pb-2 border-b border-theme-border/10">
                Recommended in {categoryName}
              </h3>
              <div className="flex flex-col space-y-6">
                {relatedPosts.map((rPost) => (
                  <article key={rPost.slug} className="group flex gap-4 items-start">
                    {rPost.image && (
                      <Link href={`/blog/${rPost.slug}`} className="block relative w-20 h-20 aspect-square overflow-hidden shrink-0">
                        <Image
                          src={rPost.image}
                          alt={rPost.title}
                          fill
                          sizes="80px"
                          className="grayscale-image"
                          unoptimized
                        />
                      </Link>
                    )}
                    <div className="space-y-1 flex-1 min-w-0">
                      <span className="text-[10px] uppercase font-bold tracking-widest text-theme-muted block">
                        {categoryName}
                      </span>
                      <h4 className="text-sm font-sans font-bold leading-snug text-theme-fg line-clamp-2">
                        <Link href={`/blog/${rPost.slug}`} className="link-hover">
                          {rPost.title}
                        </Link>
                      </h4>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Latest Posts recommendation section */}
          {latestSidebarPosts.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xs uppercase font-bold tracking-widest text-theme-muted pb-2 border-b border-theme-border/10">
                Latest Stories
              </h3>
              <div className="flex flex-col space-y-6">
                {latestSidebarPosts.map((lPost) => {
                  const lCategoryObj = categories.find((c) => c.slug === lPost.category);
                  const lCategoryName = lCategoryObj ? lCategoryObj.name : lPost.category;
                  return (
                    <article key={lPost.slug} className="group flex gap-4 items-start">
                      {lPost.image && (
                        <Link href={`/blog/${lPost.slug}`} className="block relative w-20 h-20 aspect-square overflow-hidden shrink-0">
                          <Image
                            src={lPost.image}
                            alt={lPost.title}
                            fill
                            sizes="80px"
                            className="grayscale-image"
                            unoptimized
                          />
                        </Link>
                      )}
                      <div className="space-y-1 flex-1 min-w-0">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-theme-muted block">
                          {lCategoryName}
                        </span>
                        <h4 className="text-sm font-sans font-bold leading-snug text-theme-fg line-clamp-2">
                          <Link href={`/blog/${lPost.slug}`} className="link-hover">
                            {lPost.title}
                          </Link>
                        </h4>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Footer Navigation Back Link */}
      <div className="pt-6 border-t border-theme-border/10 mt-12">
        <Link
          href="/"
          className="font-sans text-sm uppercase tracking-widest font-semibold text-theme-fg hover:text-theme-muted underline underline-offset-4 decoration-theme-border decoration-1 transition-colors"
        >
          ← Back to Home Page
        </Link>
      </div>
    </div>
  );
}
