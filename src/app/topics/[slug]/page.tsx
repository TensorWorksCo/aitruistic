import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const topicsData = {
  "ai-safety": {
    name: "AI Safety",
    description: "Alignment, control problems, and existential risk from advanced AI systems",
    longDescription:
      "AI Safety research focuses on ensuring that artificial intelligence systems behave in ways that are beneficial to humanity. This includes technical research on alignment, interpretability, robustness, and governance structures to ensure AI development proceeds safely.",
    articles: [
      { title: "Understanding AI Alignment: A Primer", date: "Dec 10, 2024", external: false },
      { title: "The Control Problem Explained", date: "Dec 5, 2024", external: false },
      { title: "Interpretability Research Progress", date: "Nov 28, 2024", external: true },
    ],
    videos: [
      { title: "Introduction to AI Safety", date: "Dec 8, 2024", duration: "15:30" },
      { title: "Alignment Techniques Overview", date: "Nov 25, 2024", duration: "22:45" },
    ],
  },
  politics: {
    name: "Politics & Governance",
    description: "Regulation, policy frameworks, and international cooperation on AI",
    longDescription:
      "As AI systems become more powerful, governments and international bodies are grappling with how to regulate and govern these technologies. This section covers policy proposals, regulatory frameworks, and international cooperation efforts.",
    articles: [
      { title: "AI Policy Frameworks Around the World", date: "Dec 5, 2024", external: false },
      { title: "The EU AI Act Explained", date: "Nov 30, 2024", external: true },
      { title: "US AI Executive Orders Analysis", date: "Nov 20, 2024", external: false },
    ],
    videos: [
      { title: "Global AI Governance Summit Recap", date: "Dec 1, 2024", duration: "28:00" },
    ],
  },
  economics: {
    name: "Economic Impacts",
    description: "Jobs, automation, UBI, and the future of work in an AI economy",
    longDescription:
      "AI and automation are reshaping labor markets and economic systems. This section explores the economic implications of AI, including job displacement, new opportunities, universal basic income proposals, and strategies for economic adaptation.",
    articles: [
      { title: "The Economics of Automation", date: "Dec 8, 2024", external: false },
      { title: "UBI and AI: A Comprehensive Look", date: "Nov 15, 2024", external: false },
    ],
    videos: [
      { title: "Future of Work in the AI Age", date: "Nov 28, 2024", duration: "35:20" },
      { title: "Economic Transition Strategies", date: "Nov 10, 2024", duration: "19:45" },
    ],
  },
  "mental-health": {
    name: "Mental Health",
    description: "AI companions, social media effects, and digital wellness",
    longDescription:
      "AI is increasingly affecting mental health through social media algorithms, AI companions, and digital wellness tools. This section examines both the risks and opportunities AI presents for psychological wellbeing.",
    articles: [
      { title: "AI Companions: Promise and Peril", date: "Dec 3, 2024", external: false },
      { title: "Algorithmic Mental Health Impacts", date: "Nov 22, 2024", external: true },
    ],
    videos: [
      { title: "Digital Wellness in the AI Era", date: "Nov 18, 2024", duration: "24:15" },
    ],
  },
};

type TopicSlug = keyof typeof topicsData;

export default function TopicPage({ params }: { params: { slug: string } }) {
  const topic = topicsData[params.slug as TopicSlug];

  if (!topic) {
    notFound();
  }

  return (
    <div className="container py-8 md:py-12">
      <Link
        href="/"
        className="mb-8 inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
      >
        Back to Home
      </Link>

      <div className="mb-12">
        <div className="mb-4">
          <h1 className="text-3xl font-bold md:text-4xl">{topic.name}</h1>
          <p className="text-lg text-muted-foreground">{topic.description}</p>
        </div>
        <p className="text-muted-foreground max-w-3xl">{topic.longDescription}</p>
      </div>

      <Tabs defaultValue="articles" className="space-y-6">
        <TabsList>
          <TabsTrigger value="articles">Articles</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
        </TabsList>

        <TabsContent value="articles" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topic.articles.map((article, index) => (
              <Card key={index} className="hover:shadow-md hover:border-foreground/10 transition-all cursor-pointer">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {article.title}
                    {article.external && (
                      <span className="text-xs font-normal text-muted-foreground">
                        External
                      </span>
                    )}
                  </CardTitle>
                  <CardDescription>{article.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {topic.articles.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No articles available yet. Check back soon!
            </div>
          )}
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {topic.videos.map((video, index) => (
              <Card key={index} className="hover:shadow-md hover:border-foreground/10 transition-all cursor-pointer">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-md mb-4 flex items-center justify-center relative">
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </span>
                  </div>
                  <CardTitle className="text-lg">{video.title}</CardTitle>
                  <CardDescription>{video.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="w-full">
                    Watch Video
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          {topic.videos.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No videos available yet. Check back soon!
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
