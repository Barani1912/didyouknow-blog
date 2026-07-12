"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, categories } from "@/lib/posts-base";

interface HeroCarouselProps {
  posts: Post[];
}

export default function HeroCarousel({ posts }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (posts.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [posts.length]);

  if (!posts || posts.length === 0) return null;

  const currentPost = posts[currentIndex];
  const categoryObj = categories.find((c) => c.slug === currentPost.category);
  const categoryName = categoryObj ? categoryObj.name : currentPost.category;

  return (
    <div className="relative aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-2xl group">
      {/* Current Slide Link */}
      <Link href={`/blog/${currentPost.slug}`} className="block w-full h-full relative">
        <Image
          src={currentPost.image}
          alt={currentPost.title}
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="grayscale-image"
          unoptimized
        />
        {/* Dark overlay gradient to make text readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-300" />
      </Link>

      {/* Floating Content Overlaid at Bottom-Left */}
      <div className="absolute bottom-6 md:bottom-10 left-4 md:left-8 right-4 md:right-8 z-10 space-y-3 pointer-events-none">
        {/* Category capsule overlay */}
        <div className="flex gap-2 pointer-events-auto">
          <Link
            href={`/category/${currentPost.category}`}
            className="border border-[#ffffff]/40 bg-[#000000]/60 hover:bg-[#000000]/90 text-[#ffffff] rounded-full px-3 py-1.5 text-[9px] font-sans uppercase font-bold tracking-widest backdrop-blur-xs transition-colors duration-200"
          >
            {categoryName}
          </Link>
        </div>

        {/* Post Title */}
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-extrabold leading-tight text-[#ffffff] max-w-3xl pointer-events-auto">
          <Link href={`/blog/${currentPost.slug}`} className="hover:underline underline-offset-4 decoration-1">
            {currentPost.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-xs md:text-sm text-[#ffffff]/80 max-w-2xl font-sans line-clamp-2 leading-relaxed hidden sm:block">
          {currentPost.excerpt}
        </p>

        {/* Progress dashes indicators */}
        <div className="flex items-center space-x-2 pt-2 pointer-events-auto">
          {posts.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-0.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex ? "w-8 bg-[#ffffff]" : "w-4 bg-[#ffffff]/40 hover:bg-[#ffffff]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
