import Link from "next/link";
import Image from "next/image";
import { Post, categories } from "@/lib/posts";
import CategoryTag from "./CategoryTag";
import { formatDate } from "@/lib/formatDate";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const categoryObj = categories.find((c) => c.slug === post.category);
  const categoryName = categoryObj ? categoryObj.name : post.category;

  return (
    <article className="group flex flex-col space-y-4">
      {/* Grayscale Category Image with Theme-Adaptive Border */}
      <Link href={`/blog/${post.slug}`} className="block relative aspect-video overflow-hidden rounded-xl border border-theme-border group-hover:border-theme-fg/50 transition-colors duration-300">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="grayscale-image transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-col space-y-2">
        {/* Meta row with Category Tag */}
        <div className="flex items-center space-x-3">
          <CategoryTag slug={post.category} name={categoryName} />
          <span className="text-[10px] uppercase tracking-widest text-theme-muted">
            {formatDate(post.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-serif font-normal leading-tight text-theme-fg">
          <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4 decoration-theme-border decoration-1">
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm md:text-base text-theme-muted leading-relaxed line-clamp-2">
          {post.excerpt}
        </p>

        {/* Byline */}
        <p className="text-xs uppercase tracking-wider text-theme-muted/80 pt-1">
          By {post.author}
        </p>
      </div>
    </article>
  );
}
