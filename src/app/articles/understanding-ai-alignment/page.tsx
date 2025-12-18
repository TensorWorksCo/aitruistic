import Link from "next/link";

export default function ArticlePage() {
  return (
    <div className="flex flex-col">
      <article className="container py-10 md:py-14">
        <div className="mx-auto max-w-3xl">
          <Link 
            href="/" 
            className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block"
          >
            ← Back to articles
          </Link>
          
          <header className="mb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
              <span>Dec 18, 2024</span>
              <span>•</span>
              <span>5 min read</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Understanding AI Alignment: A Primer
            </h1>
            <p className="text-xl text-muted-foreground">
              An accessible introduction to why aligning AI with human values is crucial for the future of humanity.
            </p>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              As artificial intelligence systems become more powerful and autonomous, ensuring they remain aligned 
              with human values and intentions becomes increasingly critical. This challenge, known as the AI alignment 
              problem, sits at the heart of AI safety research.
            </p>

            <h2>What is AI Alignment?</h2>
            <p>
              AI alignment refers to the challenge of ensuring that artificial intelligence systems pursue goals and 
              behaviors that are beneficial to humanity. At its core, it's about making sure that as AI systems become 
              more capable, they continue to do what we actually want them to do, rather than what we accidentally 
              programmed them to do.
            </p>

            <h2>Why Does It Matter?</h2>
            <p>
              The alignment problem becomes more critical as AI systems gain in capability. A misaligned superintelligent 
              AI could pursue goals that seem logical from its perspective but are catastrophic from ours. This isn't 
              science fiction—it's a serious concern among AI researchers and safety experts.
            </p>

            <h2>Current Approaches</h2>
            <p>
              Researchers are exploring several approaches to the alignment problem, including:
            </p>
            <ul>
              <li><strong>Value learning:</strong> Teaching AI systems to learn human values through observation and interaction</li>
              <li><strong>Interpretability:</strong> Making AI decision-making processes transparent and understandable</li>
              <li><strong>Robustness:</strong> Ensuring AI systems behave safely even in unexpected situations</li>
              <li><strong>Scalable oversight:</strong> Developing methods to supervise increasingly capable AI systems</li>
            </ul>

            <h2>The Path Forward</h2>
            <p>
              Solving the alignment problem requires collaboration across disciplines—from computer science and 
              mathematics to philosophy and social sciences. It's not just a technical challenge, but a deeply 
              human one that will shape the future of our civilization.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
