import { MetadataRoute } from "next";
import { posts, categories } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://didyouknow.com";

  // Policy and institutional routes
  const baseRoutes = [
    "",
    "/unnoticed",
    "/about",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/cookie-policy",
    "/disclaimer",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.5,
  }));

  // Dynamic category landing pages
  const categoryRoutes = categories.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Dynamic blog post pages
  const postRoutes = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...baseRoutes, ...categoryRoutes, ...postRoutes];
}
