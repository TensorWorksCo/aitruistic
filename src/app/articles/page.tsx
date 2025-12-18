import ArticleList from "@/components/ArticleList";

export default function ArticlesPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Articles</h1>
        <p className="text-muted-foreground mb-8">
          Thoughts, ideas, and explorations on AI and technology.
        </p>
        <ArticleList />
      </div>
    </div>
  );
}
