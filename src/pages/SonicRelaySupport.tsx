const SonicRelaySupport = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">SonicRelay</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Support and Contact</h1>
        <p className="mt-3 text-muted-foreground">Help, privacy requests, Play review notes, and project links.</p>

        <div className="mt-8 space-y-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              For support, bug reports, privacy questions, or Play review requests,
              contact:
            </p>
            <a
              className="mt-3 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              href="mailto:vitorhugoalvesferreira@gmail.com"
            >
              vitorhugoalvesferreira@gmail.com
            </a>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Useful links</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li><a className="font-medium text-primary underline-offset-4 hover:underline" href="/sonicrelay/account-removal">Account removal page</a></li>
              <li><a className="font-medium text-primary underline-offset-4 hover:underline" href="https://github.com/vitorhugo-dotnet/flutter_SonicRelay" target="_blank" rel="noopener noreferrer">Flutter Android viewer repository</a></li>
              <li><a className="font-medium text-primary underline-offset-4 hover:underline" href="https://github.com/vitorhugo-java/dotnet_SonicRelay" target="_blank" rel="noopener noreferrer">.NET backend repository</a></li>
              <li><a className="font-medium text-primary underline-offset-4 hover:underline" href="https://github.com/vitorhugo-java/windows_SonicRelay" target="_blank" rel="noopener noreferrer">Windows publisher repository</a></li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelaySupport;
