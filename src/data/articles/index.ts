import { ArticleModule } from "@/types/article";

// Add new articles here - just import and add to the array
import example from "./example";
import example2 from "./example2";

// Add new articles here - add to the array
export const articles: ArticleModule[] = [
  example,
  example2,
];

// Helper to get article by slug
export function getArticleBySlug(slug: string): ArticleModule | undefined {
  return articles.find(a => a.metadata.slug === slug);
}

// Helper to get all metadata (for listings)
export function getAllArticleMetadata() {
  return articles
    .map(a => a.metadata)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
