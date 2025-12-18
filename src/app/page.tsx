import ArticleList from "@/components/ArticleList";

export default function HomePage() {
  return (
    <div>
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
          <ArticleList />
        </div>
      </section>
    </div>
  );
}
