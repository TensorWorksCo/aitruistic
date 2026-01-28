import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mic } from "lucide-react";

export default function DemosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">AI Demos</h1>
          <p className="text-lg text-muted-foreground">
            Explore interactive demonstrations of AI capabilities and safety considerations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Link href="/demos/voiceclone" className="group">
            <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mic className="h-6 w-6" />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Voice Clone Demo
                  </CardTitle>
                </div>
                <CardDescription>
                  Experience real-time voice cloning technology and understand its implications for AI safety and security.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Record your voice, clone it, and interact with an AI agent using your cloned voice in real-time conversations.
                </p>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
