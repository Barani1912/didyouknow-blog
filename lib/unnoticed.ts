import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface UnnoticedItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string[]; // Array of paragraph strings
  author: string;
  date: string; // ISO date string
  image: string; // Image path
}

const UNNOTICED_DIRECTORY = path.join(process.cwd(), "content/unnoticed");
const isProd = process.env.NODE_ENV === "production";

let unnoticedCache: UnnoticedItem[] | null = null;

export function getAllUnnoticedItems(): UnnoticedItem[] {
  // Use in-memory cache in production for performance
  if (isProd && unnoticedCache) {
    return unnoticedCache;
  }

  try {
    if (!fs.existsSync(UNNOTICED_DIRECTORY)) {
      return [];
    }

    const fileNames = fs.readdirSync(UNNOTICED_DIRECTORY);
    const allItems: UnnoticedItem[] = fileNames
      .filter((fileName) => fileName.endsWith(".md"))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, "");
        const fullPath = path.join(UNNOTICED_DIRECTORY, fileName);
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
          excerpt: data.excerpt || "",
          content,
          author: data.author || "",
          date: data.date || "",
          image: data.image || ""
        } as UnnoticedItem;
      });

    // Sort items by date descending
    const sortedItems = allItems.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    if (isProd) {
      unnoticedCache = sortedItems;
    }

    return sortedItems;
  } catch (error) {
    console.error("Error loading unnoticed items from markdown files:", error);
    return [];
  }
}

export function getUnnoticedItemBySlug(slug: string): UnnoticedItem | undefined {
  return getAllUnnoticedItems().find((item) => item.slug === slug);
}
