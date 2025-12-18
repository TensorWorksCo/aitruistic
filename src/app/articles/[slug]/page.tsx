"use client";

import { useParams, notFound } from "next/navigation";
import { getArticleBySlug } from "@/data/articles";

export default function ArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const { metadata, Content } = article;

  return (
    <article className="container max-w-4xl py-10 md:py-14">
      <header className="mb-10">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <span>{metadata.date}</span>
          <span>•</span>
          <span>{metadata.readTime}</span>
          {metadata.author && (
            <>
              <span>•</span>
              <span>{metadata.author}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {metadata.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {metadata.description}
        </p>
      </header>

      <Content />
    </article>
  );
}
