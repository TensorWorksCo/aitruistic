import { ComponentType } from "react";

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  author?: string;
  tags?: string[];
}

export interface ArticleModule {
  metadata: ArticleMetadata;
  Content: ComponentType;
}
