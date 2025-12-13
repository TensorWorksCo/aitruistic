import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const team = [
  {
    name: "Founding Team",
    role: "Leadership",
    description: "Dedicated to fostering informed public discourse about AI's impact on society.",
  },
];

const values = [
  {
    title: "Mission-Driven",
    description: "We prioritize long-term human flourishing over short-term gains.",
  },
  {
    title: "Education First",
    description: "Making complex AI topics accessible to everyone, regardless of technical background.",
  },
  {
    title: "Community-Centered",
    description: "Building a thoughtful community of people who care about humanity's future.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">About AItruistic</h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We are a non-profit organization dedicated to education and discussion about modern AI
            safety, altruistic opportunity, and civilizational threats.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="border-y bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold text-center">Our Mission</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                As artificial intelligence rapidly advances, humanity faces both unprecedented
                opportunities and risks. AItruistic exists to ensure that public discourse about
                AI is informed, nuanced, and accessible.
              </p>
              <p>
                We believe that the decisions made about AI development in the coming years will
                shape the future of civilization. These decisions are too important to be left
                solely to technologists and policymakers – they require broad public engagement
                and understanding.
              </p>
              <p>
                Our mission is to bridge the gap between technical AI research and public
                understanding, foster thoughtful discussion about AI's societal impacts, and
                build a community of engaged citizens who can participate meaningfully in shaping
                AI's future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16 md:py-24">
        <h2 className="mb-12 text-3xl font-bold text-center">Our Values</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {values.map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* What We Do */}
      <section className="border-y bg-muted/50">
        <div className="container py-16 md:py-24">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-3xl font-bold text-center">What We Do</h2>
            <div className="space-y-6">
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-semibold mb-2">Educational Content</h3>
                <p className="text-muted-foreground">
                  We produce articles, videos, and interactive demonstrations that explain AI
                  concepts, risks, and opportunities in accessible terms.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-semibold mb-2">Community Discussion</h3>
                <p className="text-muted-foreground">
                  We foster thoughtful conversation about AI's impact across multiple domains,
                  from safety and governance to economics and mental health.
                </p>
              </div>
              <div className="rounded-lg border bg-background p-6">
                <h3 className="text-lg font-semibold mb-2">Media Curation</h3>
                <p className="text-muted-foreground">
                  We curate and contextualize the best AI-related content from across the web,
                  helping our community stay informed about developments in the field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Join Our Community</h2>
          <p className="mb-8 text-muted-foreground">
            Be part of the conversation about AI's future. Create an account to engage with
            content, participate in discussions, and connect with others who share your concerns
            and hopes for AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/auth/signup">
                Create Account
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
