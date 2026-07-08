import { notFound } from "next/navigation";
import { getCategoryBySlug, getPostsByCategory, categories } from "@/lib/posts";
import PageHeading from "@/components/PageHeading";
import FeaturedPostCard from "@/components/FeaturedPostCard";
import PostRiverItem from "@/components/PostRiverItem";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  return {
    title: category.name,
    description: category.description,
    openGraph: {
      title: `${category.name} | DIDYOUKNOW`,
      description: category.description,
    },
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryPosts = getPostsByCategory(slug);

  return (
    <div className="space-y-16">
      {/* Category Header */}
      <PageHeading title={category.name} description={category.description} />

      {/* Posts Section */}
      {categoryPosts.length > 0 ? (
        <div className="space-y-12">
          {/* Hero treatment for the most recent post */}
          <div className="max-w-4xl mx-auto border-b border-theme-border pb-12">
            <FeaturedPostCard post={categoryPosts[0]} isLead={true} />
          </div>

          {/* Grid list layout for the rest */}
          {categoryPosts.length > 1 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {categoryPosts.slice(1).map((post) => (
                <PostRiverItem key={post.slug} post={post} showCategory={false} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="font-sans text-base text-theme-muted">
            No posts yet in this category.
          </p>
        </div>
      )}

      {/* Back Link */}
      <div className="pt-6">
        <Link
          href="/"
          className="font-sans text-sm uppercase tracking-widest font-semibold text-theme-fg hover:text-theme-muted underline underline-offset-4 decoration-theme-border decoration-1 transition-colors"
        >
          ← Back to All Posts
        </Link>
      </div>
    </div>
  );
}
