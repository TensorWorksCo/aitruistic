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
              <span>Dec 12, 2024</span>
              <span>•</span>
              <span>6 min read</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              The Economics of Automation
            </h1>
            <p className="text-xl text-muted-foreground">
              How AI is reshaping labor markets and what we can do to prepare for the future of work.
            </p>
          </header>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Artificial intelligence and automation are transforming the global economy at an unprecedented pace. 
              Understanding these changes and preparing for them is crucial for workers, businesses, and 
              policymakers alike.
            </p>

            <h2>The Current Landscape</h2>
            <p>
              AI is already automating tasks across industries—from manufacturing and logistics to customer 
              service and creative work. Unlike previous waves of automation that primarily affected manual labor, 
              AI is now capable of performing cognitive tasks previously thought to require human intelligence.
            </p>

            <h2>Job Displacement and Creation</h2>
            <p>
              While automation will undoubtedly displace some jobs, it will also create new ones. The key question 
              isn't whether there will be work in the future, but whether the new jobs created will be accessible 
              to those whose jobs are displaced, and whether they will provide similar levels of compensation and 
              dignity.
            </p>

            <h2>Policy Responses</h2>
            <p>
              Several policy approaches are being discussed to address automation's economic impacts:
            </p>
            <ul>
              <li><strong>Universal Basic Income (UBI):</strong> Providing all citizens with a regular, unconditional cash payment</li>
              <li><strong>Job retraining programs:</strong> Helping workers transition to new roles and industries</li>
              <li><strong>Education reform:</strong> Preparing future workers for an AI-driven economy</li>
              <li><strong>Work-sharing:</strong> Reducing work hours while maintaining income levels</li>
            </ul>

            <h2>The Productivity Paradox</h2>
            <p>
              Interestingly, despite rapid technological advancement, productivity growth has been relatively 
              modest in recent decades. This "productivity paradox" suggests that realizing AI's economic benefits 
              requires not just technological innovation, but also organizational and societal adaptation.
            </p>

            <h2>Preparing for the Future</h2>
            <p>
              The transition to an AI-driven economy will be challenging, but it also presents opportunities to 
              create a more equitable and prosperous society. Success will require proactive planning, inclusive 
              policy-making, and a commitment to ensuring that technological progress benefits everyone, not just 
              a privileged few.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
