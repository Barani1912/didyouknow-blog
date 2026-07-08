import Link from "next/link";
import Image from "next/image";
import { Post, categories } from "@/lib/posts";

interface PostRiverItemProps {
  post: Post;
  showCategory?: boolean;
}

export default function PostRiverItem({ post, showCategory = true }: PostRiverItemProps) {
  const categoryObj = categories.find((c) => c.slug === post.category);
  const categoryName = categoryObj ? categoryObj.name : post.category;

  return (
    <article className="group flex flex-col space-y-4 transition-all duration-200">
      {/* 1. Layout (Image at the top) */}
      {post.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
          <Link href={`/blog/${post.slug}`} className="block w-full h-full relative">
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="grayscale-image"
              unoptimized
            />
          </Link>
          {showCategory && (
            <div className="absolute bottom-3 left-3 z-10 flex gap-2">
              <Link
                href={`/category/${post.category}`}
                className="border border-white/40 bg-black/60 hover:bg-black/85 text-white rounded-full px-3 py-1.5 text-[9px] font-sans uppercase font-bold tracking-widest backdrop-blur-xs transition-colors duration-200"
              >
                {categoryName}
              </Link>
            </div>
          )}
        </div>
      )}

      {/* 2. Title */}
      <h3 className="text-lg md:text-xl font-sans font-bold leading-snug tracking-tight text-theme-fg line-clamp-3">
        <Link href={`/blog/${post.slug}`} className="link-hover">
          {post.title}
        </Link>
      </h3>

      {/* 3. Description */}
      <p className="text-sm text-theme-muted leading-relaxed line-clamp-3">
        {post.excerpt}
      </p>
    </article>
  );
}
