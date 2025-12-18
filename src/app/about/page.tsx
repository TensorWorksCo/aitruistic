export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="container py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            About <span className="text-primary">AI</span>
            <span className="text-foreground">truistic</span>
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            We are a volunteer community dedicated to education and discussion about modern AI
            safety, governance, and civilizational risk.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl rounded-lg border bg-muted/50 p-8 md:p-12">
          <h2 className="mb-6 text-3xl font-bold text-center">Our Mission</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              As artificial intelligence rapidly advances, humanity faces both unprecedented
              opportunities and risks. <span className="text-primary">AI</span>
              <span className="text-foreground">truistic</span> exists to ensure that public
              discourse about AI is informed, nuanced, and accessible.
            </p>
            <p>
              We believe that the decisions made about AI development in the coming years will
              shape the future of civilization. These decisions are too important to be left
              solely to technologists and policymakers – they require broad public engagement
              and understanding.
            </p>
            <p>
              Our mission is to bridge the gap between technical AI research and public
              understanding, foster thoughtful discussion about AI&apos;s societal impacts, and
              build a community of engaged citizens who can participate meaningfully in shaping
              AI&apos;s future.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
