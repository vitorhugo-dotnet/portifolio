const TheUniverseDecidesSupport = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          The Universe Decides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Support and Contact
        </h1>
        <p className="mt-3 text-muted-foreground">
          Help, privacy requests, and app publishing support information.
        </p>

        <div className="mt-8 space-y-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              For support, bug reports, privacy questions, or Play Store review
              requests, contact:
            </p>
            <a
              className="mt-3 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              href="mailto:vitorhugoalvesferreira@gmail.com"
            >
              vitorhugoalvesferreira@gmail.com
            </a>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Account deletion</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              The app does not provide account creation, sign-in, or a developer-hosted
              user profile. Because no app account exists, there is no separate app
              account deletion flow. Users can remove local app data through Android
              system settings.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Troubleshooting</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>If Random.org is unavailable, the app automatically uses local randomness.</li>
              <li>If the About me profile fails to load, check the network connection and retry.</li>
              <li>If Quick Settings shortcuts are unsupported, the Android version or launcher may not support adding tiles from the app.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Project repository</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Source code and release documentation are available on GitHub.
            </p>
            <a
              className="mt-3 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              href="https://github.com/vitorhugo-dotnet/the_universe_decides"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open the repository
            </a>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TheUniverseDecidesSupport;
