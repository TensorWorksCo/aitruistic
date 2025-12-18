"use client";

import { useState } from "react";
import { Play, Pause } from "lucide-react";
import { ArticleModule } from "@/types/article";

function Content() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Full Creative Control</h2>
        <p className="text-muted-foreground mb-6">
          When you self-host, you&apos;re not constrained by platform limitations. You can create 
          unique, branded experiences that truly represent your vision.
        </p>

        <div className="relative overflow-hidden rounded-lg border bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-8 mb-6">
          <div 
            className="absolute inset-0 opacity-20 animate-pulse"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.5) 0%, transparent 50%)',
            }}
          />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-2">Interactive Animations</h3>
            <p className="text-muted-foreground">
              Create engaging visual experiences that capture attention
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Rich Media Integration</h2>
        <p className="text-muted-foreground mb-6">
          Embed videos, interactive demos, and custom components seamlessly into your content.
        </p>

        <div className="relative aspect-video rounded-lg border bg-black/5 dark:bg-white/5 mb-6 overflow-hidden group">
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all transform group-hover:scale-110"
            >
              {isPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Play Demo</span>
                </>
              )}
            </button>
          </div>
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600">
              <div className="text-white text-center">
                <div className="text-6xl mb-4 animate-bounce">🎬</div>
                <p className="text-xl font-semibold">Interactive Video Player</p>
                <p className="text-sm opacity-80">Full control over your media experience</p>
              </div>
            </div>
          )}
        </div>

        <p className="text-sm text-muted-foreground italic">
          Unlike Medium or Substack, you can create fully custom interactive experiences.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Beautiful Code Blocks</h2>
        <p className="text-muted-foreground mb-6">
          Present technical content with syntax highlighting and custom styling that matches your brand.
        </p>

        <div className="rounded-lg border bg-slate-950 p-6 mb-6 overflow-x-auto">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-800">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-400 text-sm ml-4">my-article.tsx</span>
          </div>
          <pre className="text-sm">
            <code className="text-slate-100">
{`// Just create ONE file in src/data/articles/
import { ArticleModule } from "@/types/article";

export const metadata = {
  slug: "my-article",
  title: "My Article Title",
  // ... other fields
};

export function Content() {
  return <div>Your content here!</div>;
}

export default { metadata, Content } as ArticleModule;`}
            </code>
          </pre>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
          <p className="text-sm">
            <strong className="text-blue-600 dark:text-blue-400">Pro Tip:</strong> With self-hosting, 
            you can add copy buttons, line highlighting, and even live code execution.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Key Advantages</h2>
        
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🎨</div>
            <h3 className="font-semibold mb-2">Complete Design Freedom</h3>
            <p className="text-sm text-muted-foreground">
              No template constraints. Build exactly what you envision.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-semibold mb-2">Performance Optimized</h3>
            <p className="text-sm text-muted-foreground">
              Control every aspect of loading, caching, and optimization.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🔒</div>
            <h3 className="font-semibold mb-2">Own Your Data</h3>
            <p className="text-sm text-muted-foreground">
              Full control over analytics, user data, and content distribution.
            </p>
          </div>

          <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-semibold mb-2">No Platform Fees</h3>
            <p className="text-sm text-muted-foreground">
              Keep 100% of your revenue and avoid subscription costs.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t pt-8">
        <h2 className="text-3xl font-semibold mb-4">Conclusion</h2>
        <p className="text-muted-foreground mb-4">
          While platforms like Medium and Substack offer convenience, self-hosting gives you 
          the freedom to create truly unique experiences. With modern frameworks and tools, 
          it&apos;s easier than ever to build, deploy, and maintain your own content platform.
        </p>
        <p className="text-muted-foreground">
          The examples on this page—animations, interactive elements, custom code blocks—are 
          just the beginning. When you control the entire stack, the only limit is your imagination.
        </p>
      </section>
    </div>
  );
}

export const metadata = {
  slug: "example",
  title: "MVP Content? Minimal implementation",
  description: "We can start out like this",
  date: "Dec 18, 2024",
  readTime: "4 min read",
  author: "AITruistic Team",
  tags: ["web-development", "content-strategy", "design"],
};

const article: ArticleModule = { metadata, Content };
export default article;
