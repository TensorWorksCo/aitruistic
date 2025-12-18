"use client";

import Link from "next/link";
import { getAllArticleMetadata } from "@/data/articles";

export default function ArticleList() {
  const articles = getAllArticleMetadata();

  return (
    <div className="space-y-6">
      {articles.map((article) => (
        <Link
          key={article.slug}
          href={`/articles/${article.slug}`}
          className="block p-6 rounded-lg border transition-colors hover:bg-muted/50"
        >
          <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            {article.title}
          </h3>
          <p className="text-muted-foreground">
            {article.description}
          </p>
        </Link>
      ))}
    </div>
  );
}
