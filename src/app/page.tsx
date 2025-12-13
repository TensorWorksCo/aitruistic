import Link from "next/link";
import {
  Brain,
  Shield,
  Landmark,
  TrendingUp,
  Heart,
  Sparkles,
  Cpu,
  ArrowRight,
  Play,
  FileText,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const topics = [
  {
    name: "AI Safety",
    slug: "ai-safety",
    description: "Alignment, control problems, and existential risk from advanced AI systems",
    icon: Shield,
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    name: "Politics & Governance",
    slug: "politics",
    description: "Regulation, policy frameworks, and international cooperation on AI",
    icon: Landmark,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    name: "Economic Impacts",
    slug: "economics",
    description: "Jobs, automation, UBI, and the future of work in an AI economy",
    icon: TrendingUp,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    name: "Mental Health",
    slug: "mental-health",
    description: "AI companions, social media effects, and digital wellness",
    icon: Heart,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    name: "Altruistic Opportunity",
    slug: "altruism",
    description: "Positive applications of AI for humanity and effective altruism",
    icon: Sparkles,
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    name: "Technology Demos",
    slug: "demos",
    description: "Interactive demonstrations of AI capabilities and limitations",
    icon: Cpu,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
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
      <section className="relative overflow-hidden gradient-mesh">
        <div className="container py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur-sm">
              <Brain className="h-4 w-4 text-primary" />
              <span>Non-profit AI Safety Organization</span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Navigating the Future of{" "}
              <span className="text-primary">Artificial Intelligence</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl">
              AItruistic is dedicated to education and discussion about modern AI safety,
              altruistic opportunity, and civilizational threats. Join us in shaping a
              beneficial future for humanity.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/auth/signup">
                  Join the Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Grid */}
      <section className="container py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Explore Key Topics</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Dive into the critical discussions shaping the future of AI and its impact on humanity
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <Link key={topic.slug} href={`/topics/${topic.slug}`}>
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <CardHeader>
                  <div className={`mb-2 inline-flex h-12 w-12 items-center justify-center rounded-lg ${topic.bgColor}`}>
                    <topic.icon className={`h-6 w-6 ${topic.color}`} />
                  </div>
                  <CardTitle>{topic.name}</CardTitle>
                  <CardDescription>{topic.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="inline-flex items-center text-sm text-primary">
                    Explore topic
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Content */}
      <section className="border-y bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h2 className="mb-2 text-3xl font-bold">Featured Content</h2>
              <p className="text-muted-foreground">
                Latest articles, videos, and discussions from our community
              </p>
            </div>
            <Button variant="outline" asChild className="hidden md:flex">
              <Link href="/content">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featuredContent.map((content, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  {content.type === "video" ? (
                    <Play className="h-12 w-12 text-primary" />
                  ) : (
                    <FileText className="h-12 w-12 text-primary" />
                  )}
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-primary">
                      {content.topic}
                    </span>
                    <span>{content.date}</span>
                  </div>
                  <CardTitle className="text-lg">{content.title}</CardTitle>
                  <CardDescription>{content.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Button variant="outline" asChild>
              <Link href="/content">
                View All Content
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-16 md:py-24">
        <div className="rounded-2xl bg-primary p-8 md:p-12 text-primary-foreground text-center">
          <Users className="mx-auto mb-6 h-12 w-12" />
          <h2 className="mb-4 text-3xl font-bold">Join the Conversation</h2>
          <p className="mx-auto mb-8 max-w-2xl opacity-90">
            Create an account to engage with content, participate in discussions, and connect with
            others who care about the future of AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/auth/signup">Create Free Account</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10"
              asChild
            >
              <Link href="/auth/signin">Sign In</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
