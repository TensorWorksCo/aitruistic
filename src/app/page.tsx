import Link from "next/link";
import { Button } from "@/components/ui/button";

const topics = [
  {
    name: "AI Safety",
    slug: "ai-safety",
    description: "Alignment, control problems, and existential risk from advanced AI systems",
  },
  {
    name: "Politics & Governance",
    slug: "politics",
    description: "Regulation, policy frameworks, and international cooperation on AI",
  },
  {
    name: "Economic Impacts",
    slug: "economics",
    description: "Jobs, automation, UBI, and the future of work in an AI economy",
  },
  {
    name: "Mental Health",
    slug: "mental-health",
    description: "AI companions, social media effects, and digital wellness",
  },
];

const featuredContent = [
  {
    type: "article",
    title: "Understanding AI Alignment: A Primer",
    description: "An accessible introduction to why aligning AI with human values is crucial",
    topic: "AI Safety",
    date: "Dec 10, 2024",
  },
  {
    type: "video",
    title: "The Economics of Automation",
    description: "How AI is reshaping labor markets and what we can do about it",
    topic: "Economic Impacts",
    date: "Dec 8, 2024",
  },
  {
    type: "article",
    title: "AI Policy Frameworks Around the World",
    description: "A comparative analysis of how different nations approach AI governance",
    topic: "Politics & Governance",
    date: "Dec 5, 2024",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b">
        <div className="container py-10 md:py-14">
          <div className="mx-auto max-w-4xl">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">
              AI Safety & Public Interest
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight md:text-5xl">
              AItruistic
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A nonprofit for education and discussion on modern AI safety, governance, economic
              impacts, and societal risk.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/auth/signup">Join</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">About</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container py-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="text-xl font-semibold">Latest</h2>
              <Button variant="link" asChild className="px-0">
                <Link href="/content">View all</Link>
              </Button>
            </div>

            <div className="mt-4 divide-y rounded-lg border">
              {featuredContent.map((content, index) => (
                <Link
                  key={index}
                  href="/content"
                  className="block p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="rounded-sm bg-muted px-2 py-0.5 text-foreground">
                          {content.topic}
                        </span>
                        <span>{content.date}</span>
                        <span className="uppercase tracking-wide">{content.type}</span>
                      </div>
                      <h3 className="mt-2 font-semibold leading-snug">
                        {content.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div>
              <h2 className="text-xl font-semibold">Topics</h2>
              <div className="mt-4 divide-y rounded-lg border">
                {topics.map((topic) => (
                  <Link
                    key={topic.slug}
                    href={`/topics/${topic.slug}`}
                    className="block p-4 transition-colors hover:bg-muted/50"
                  >
                    <p className="font-medium">{topic.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {topic.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-lg border bg-muted/30 p-4">
              <h3 className="font-semibold">Newsletter</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Occasional digests on new content and major AI developments.
              </p>
              <Button variant="outline" asChild className="mt-4 w-full">
                <Link href="/newsletter">Subscribe</Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
