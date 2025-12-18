import Link from "next/link";

const articles = [
  {
    slug: "understanding-ai-alignment",
    title: "Understanding AI Alignment: A Primer",
    description: "An accessible introduction to why aligning AI with human values is crucial for the future of humanity.",
    date: "Dec 18, 2024",
    readTime: "5 min read",
  },
  {
    slug: "ai-governance-frameworks",
    title: "AI Governance Frameworks Around the World",
    description: "A comparative analysis of how different nations approach AI regulation and policy.",
    date: "Dec 15, 2024",
    readTime: "8 min read",
  },
  {
    slug: "economics-of-automation",
    title: "The Economics of Automation",
    description: "How AI is reshaping labor markets and what we can do to prepare for the future of work.",
    date: "Dec 12, 2024",
    readTime: "6 min read",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative border-b bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
        <div className="container relative py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              AI Safety & Public Interest
            </p>
            <h1 className="mt-2 text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              <span>
                <span className="text-primary">AI</span>
                <span className="text-foreground">truistic</span>
              </span>
            </h1>
            <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
              A volunteer-driven community advancing understanding of AI safety, governance, and societal impact. 
              We bring together researchers, policymakers, and technologists to ensure AI development aligns 
              with human values.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="container py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold mb-8">Articles</h2>
          
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
        </div>
      </section>
    </div>
  );
}
