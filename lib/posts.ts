import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Category, Post, categories } from "./posts-base";

export * from "./posts-base";

const POSTS_DIRECTORY = path.join(process.cwd(), "content/posts");
const isProd = process.env.NODE_ENV === "production";

let postsCache: Post[] | null = null;

function loadPosts(): Post[] {
  // Use in-memory cache in production for performance
  if (isProd && postsCache) {
    return postsCache;
  }

  try {
    if (!fs.existsSync(POSTS_DIRECTORY)) {
      return [];
    }

    const fileNames = fs.readdirSync(POSTS_DIRECTORY);
    const allPosts: Post[] = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(POSTS_DIRECTORY, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        
        // Parse YAML frontmatter and body content using gray-matter
        const { data, content: bodyContent } = matter(fileContents);
        
        // Split markdown body into an array of paragraph strings
        const content = bodyContent
          .split(/\r?\n\r?\n/)
          .map((p) => p.trim())
          .filter((p) => p.length > 0);

        return {
          slug,
          title: data.title || "",
          category: data.category || "",
          excerpt: data.excerpt || "",
          content,
          author: data.author || "",
          date: data.date || "",
          featured: Boolean(data.featured),
          image: data.image || ""
        } as Post;
      });

    // Sort posts by date descending
    const sortedPosts = allPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (isProd) {
      postsCache = sortedPosts;
    }

    return sortedPosts;
  } catch (error) {
    console.error("Error loading posts from markdown files:", error);
    return [];
  }
}

// Evaluate at runtime to maintain backward compatibility for direct imports
export const posts: Post[] = loadPosts();

export function getAllPosts(): Post[] {
  return loadPosts();
}

export function getPostBySlug(slug: string): Post | undefined {
  return loadPosts().find((post) => post.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return loadPosts().filter((post) => post.featured);
}

export function getPostsByCategory(categorySlug: string): Post[] {
  return loadPosts().filter((post) => post.category === categorySlug);
}

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}
