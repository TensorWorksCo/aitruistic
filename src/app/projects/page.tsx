import Link from "next/link";

const projects = [
  {
    title: "Agentic Policy Digest",
    status: "Proposed",
    description:
      "A lightweight agent that monitors policy updates, summarizes them, and posts weekly digests for community discussion.",
  },
  {
    title: "Alignment Reading Assistant",
    status: "Proposed",
    description:
      "A research assistant that builds structured notes from papers and facilitates small-group discussion prompts.",
  },
  {
    title: "Community Moderation Helper",
    status: "Proposed",
    description:
      "A tool to help moderators triage reports and surface relevant context while keeping humans in the loop.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-10 md:py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Build</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Projects</h1>
        <p className="mt-4 text-muted-foreground">
          Practical implementations the community builds together—agents and tools that help the community operate, learn,
          and coordinate.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="text-xl font-semibold">Active & Proposed</h2>
          <div className="mt-4 divide-y rounded-lg border">
            {projects.map((p, idx) => (
              <div key={idx} className="p-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="rounded-sm bg-muted px-2 py-0.5 text-foreground">{p.status}</span>
                </div>
                <h3 className="mt-2 font-semibold leading-snug">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-lg border bg-muted/30 p-4">
            <h3 className="font-semibold">How this works</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Projects are scoped to be real, shippable implementations. Each has a clear goal, minimal surface area,
              and a defined human-in-the-loop workflow.
            </p>
          </div>

          <div className="rounded-lg border bg-muted/30 p-4">
            <h3 className="font-semibold">Propose a project</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Have an idea for an agent/tool that would materially help the community? Send a short proposal and we’ll
              help shape it into a buildable spec.
            </p>
            <div className="mt-4">
              <Link href="/contact" className="text-sm font-medium underline underline-offset-4">
                Contact
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
