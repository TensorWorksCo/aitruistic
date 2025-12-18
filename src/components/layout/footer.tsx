import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">
                <span className="text-primary">AI</span>
                <span className="text-foreground">truistic</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              A volunteer community dedicated to education and discussion about modern AI
              safety, governance, and civilizational risk.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} <span className="text-primary">AI</span>
            <span className="text-foreground">truistic</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
