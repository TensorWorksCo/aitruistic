"use client";

import { ArticleModule } from "@/types/article";

function Content() {
  return (
    <div>
      <h2>Example 2</h2>
      <p>Your content here...</p>
    </div>
  );
}

export const metadata = {
  slug: "example2",
  title: "Example 2: Minimal Example",
  description: "A minimal example of an article.",
  date: "Dec 18, 2025",
  readTime: "1 min read",
  author: "Eric Stevens",           // optional
  tags: ["topic1", "topic2"],    // optional
};

export default { metadata, Content } as ArticleModule;