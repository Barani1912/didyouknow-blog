import Link from "next/link";
import Image from "next/image";
import { Post, categories } from "@/lib/posts";
import CategoryTag from "./CategoryTag";
import { formatDate } from "@/lib/formatDate";

interface FeaturedPostCardProps {
  post: Post;
  isLead?: boolean;
}

export default function FeaturedPostCard({ post, isLead = true }: FeaturedPostCardProps) {
  const categoryObj = categories.find((c) => c.slug === post.category);
  const categoryName = categoryObj ? categoryObj.name : post.category;

  if (isLead) {
    return (
      <article className="group flex flex-col space-y-5">
        {/* Large Grayscale Image with Hairline Border */}
        {post.image && (
          <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-xl transition-colors duration-300 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="grayscale-image"
              priority
              fetchPriority="high"
              unoptimized
            />
          </Link>
        )}

        <div className="flex flex-col space-y-3">
          {/* Meta row with Category Tag */}
          <div className="flex items-center space-x-3">
            <CategoryTag slug={post.category} name={categoryName} />
            <span className="text-xs uppercase tracking-widest text-theme-muted">
              {formatDate(post.date)}
            </span>
          </div>

          {/* Larger Title */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-sans font-extrabold leading-tight tracking-tight text-theme-fg">
            <Link href={`/blog/${post.slug}`} className="link-hover">
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-base text-theme-muted leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Read Link */}
          <div className="pt-1">
            <Link
              href={`/blog/${post.slug}`}
              className="text-xs uppercase font-bold tracking-widest text-theme-fg link-hover"
            >
              Read Article →
            </Link>
          </div>
        </div>
      </article>
    );
  }

  // Secondary layout: side-by-side with image thumbnail
  return (
    <article className="group flex gap-4 md:gap-6 items-start">
      {post.image && (
        <Link href={`/blog/${post.slug}`} className="block relative w-24 h-24 md:w-32 md:h-32 aspect-square overflow-hidden rounded-xl shrink-0">
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 96px, 128px"
            className="grayscale-image"
            unoptimized
          />
        </Link>
      )}
      <div className="space-y-2 flex-1 min-w-0">
        {/* Meta row with Category Tag */}
        <div className="flex items-center space-x-3">
          <CategoryTag slug={post.category} name={categoryName} />
          <span className="text-[10px] uppercase tracking-widest text-theme-muted">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base md:text-lg font-sans font-bold leading-snug tracking-tight text-theme-fg line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="link-hover">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-xs md:text-sm text-theme-muted leading-relaxed line-clamp-2 hidden sm:block">
          {post.excerpt}
        </p>

        {/* Removed Byline */}
      </div>
    </article>
  );
}
