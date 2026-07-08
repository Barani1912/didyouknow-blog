export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Post {
  slug: string;
  title: string;
  category: string; // The category slug
  excerpt: string;
  content: string[]; // Array of paragraph strings
  author: string;
  date: string; // ISO date string
  featured: boolean;
  image: string; // Color category image path
}

export const categories: Category[] = [
  {
    slug: "trending",
    name: "Trending",
    description: "Real-time updates, current events, and viral topics from India and around the globe."
  },
  {
    slug: "tech",
    name: "Tech",
    description: "Insights into software engineering, programming paradigms, and emerging IT technologies."
  },
  {
    slug: "health",
    name: "Health",
    description: "Reflections, advice, and analysis on physical well-being, medicine, and mental health."
  }
];
