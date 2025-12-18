import Link from "next/link";

const upcomingEvents = [
  {
    title: "AI Safety Reading Group",
    date: "TBD",
    location: "Online",
    description: "A recurring discussion group on foundational and current work in AI safety and governance.",
  },
  {
    title: "Community Project Kickoff",
    date: "TBD",
    location: "Online",
    description: "A working session to scope and assign initial community agent projects.",
  },
];

export default function EventsPage() {
  return (
    <div className="container py-10 md:py-14">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-wider text-muted-foreground">Community</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">Events</h1>
        <p className="mt-4 text-muted-foreground">
          Talks, reading groups, working sessions, and community meetups.
        </p>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <h2 className="text-xl font-semibold">Upcoming</h2>
          <div className="mt-4 divide-y rounded-lg border">
            {upcomingEvents.map((event, idx) => (
              <div key={idx} className="p-4">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
                  <span className="rounded-sm bg-muted px-2 py-0.5 text-foreground">{event.date}</span>
                  <span>{event.location}</span>
                </div>
                <h3 className="mt-2 font-semibold leading-snug">{event.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="lg:col-span-4">
          <div className="rounded-lg border bg-muted/30 p-4">
            <h3 className="font-semibold">Host an event</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              If you want to propose a talk, reading group, or working session, reach out and we’ll help coordinate.
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
