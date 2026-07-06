const TheUniverseDecidesDataSafety = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          The Universe Decides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Google Play Data Safety Notes
        </h1>
        <p className="mt-3 text-muted-foreground">Last reviewed: July 6, 2026</p>

        <div className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Recommended declaration summary</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            Based on the current implementation, the app is designed to avoid user
            accounts, ads, analytics SDKs, and developer-controlled storage of
            personal data. Re-check this page before every Play Console submission,
            because one innocent SDK can turn a clean form into policy confetti.
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b text-foreground">
                  <th className="py-3 pr-4 font-semibold">Play Console item</th>
                  <th className="py-3 pr-4 font-semibold">Suggested answer</th>
                  <th className="py-3 font-semibold">Reason</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Data collected</td>
                  <td className="py-3 pr-4">No personal or sensitive user data intentionally collected by the developer</td>
                  <td className="py-3">No login, no account creation, no analytics SDK, no ads SDK, no payment flow, and no developer backend for user profiles.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Data shared</td>
                  <td className="py-3 pr-4">No developer sharing of personal or sensitive user data</td>
                  <td className="py-3">The app only performs functionality requests to Random.org and GitHub API over HTTPS.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Encryption in transit</td>
                  <td className="py-3 pr-4">Yes, network requests use HTTPS</td>
                  <td className="py-3">Random.org and GitHub API URLs are HTTPS endpoints.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Data deletion request mechanism</td>
                  <td className="py-3 pr-4">Not applicable for accounts; support contact is available</td>
                  <td className="py-3">The app has no accounts and no developer-hosted user data. Users can clear local app data in Android settings.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Ads</td>
                  <td className="py-3 pr-4">No</td>
                  <td className="py-3">No ad SDK or in-app advertising behavior was identified in the app docs and dependencies.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Local-only user input</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Custom list options typed by the user are used locally to choose one
              item. They are not uploaded to a developer server and are not used for
              analytics, advertising, profiling, or account management.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Third-party functionality requests</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Random.org receives random generation parameters. GitHub API receives
              requests for the developer's public profile on the About screen. These
              services may receive standard technical request metadata as part of
              normal internet communication.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Permissions to review</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>android.permission.INTERNET for HTTPS requests.</li>
              <li>Quick Settings tile services for coin and dice shortcuts.</li>
              <li>Flutter-generated text processing query visibility entry.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Submission checklist</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Confirm no analytics, crash reporting, or ads SDK was added.</li>
              <li>Confirm the privacy policy URL is public, active, and not a PDF.</li>
              <li>Confirm the Play Console Data safety form matches this page and the app binary.</li>
              <li>Re-run the check after any dependency, permission, or feature change.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TheUniverseDecidesDataSafety;
