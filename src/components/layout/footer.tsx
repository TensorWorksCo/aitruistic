import Link from "next/link";

const topics = [
  { name: "AI Safety", slug: "ai-safety" },
  { name: "Politics & Governance", slug: "politics" },
  { name: "Economic Impacts", slug: "economics" },
  { name: "Mental Health", slug: "mental-health" },
];

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-primary">AI</span>
                <span className="text-foreground">truistic</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A volunteer community dedicated to education and discussion about modern AI
              safety, governance, and civilizational risk.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm">
              <Link href="/newsletter" className="text-muted-foreground hover:text-foreground transition-colors">
                Newsletter
              </Link>
              <Link href="/events" className="text-muted-foreground hover:text-foreground transition-colors">
                Events
              </Link>
              <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Topics</h3>
            <ul className="space-y-2">
              {topics.map((topic) => (
                <li key={topic.slug}>
                  <Link
                    href={`/topics/${topic.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {topic.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contribute" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contribute
                </Link>
              </li>
              <li>
                <Link href="/newsletter" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/guidelines" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-primary">AI</span>
            <span className="text-foreground">truistic</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
