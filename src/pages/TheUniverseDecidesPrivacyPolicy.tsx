const TheUniverseDecidesPrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          The Universe Decides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-muted-foreground">Last updated: July 6, 2026</p>

        <div className="mt-8 space-y-8 text-muted-foreground">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3 leading-7">
              This Privacy Policy applies to The Universe Decides, package name
              <span className="font-medium text-foreground"> com.hugo.theuniversedecides</span>,
              published by Vitor Hugo Alves Ferreira. The app is a decision utility
              that lets users flip a coin, roll dice, draw cards, draw tarot cards,
              and choose an item from a custom list.
            </p>
            <p className="mt-3 leading-7">
              The app is designed to work without user accounts, advertising SDKs,
              analytics SDKs, purchases, or server-side user profiles.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Data collection</h2>
            <p className="mt-3 leading-7">
              The app does not ask users to create an account and does not intentionally
              collect names, email addresses, phone numbers, location, contacts,
              photos, messages, payment information, health information, advertising
              identifiers, or other personal profile data.
            </p>
            <p className="mt-3 leading-7">
              Custom list options typed inside the app are processed locally on the
              device for the current decision flow. They are not uploaded by the app
              to the developer, stored on a developer server, sold, or used for
              advertising.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Network usage</h2>
            <p className="mt-3 leading-7">
              The app uses an internet connection only for app functionality:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>
                Random.org may be contacted over HTTPS to request random integers.
                The request contains generation parameters such as quantity, minimum,
                and maximum values. If Random.org is unavailable, the app falls back
                to local randomness on the device.
              </li>
              <li>
                GitHub API may be contacted over HTTPS on the About screen to load
                the developer's public GitHub profile and avatar.
              </li>
            </ul>
            <p className="mt-3 leading-7">
              Like any internet request, these third-party services may receive
              standard technical request metadata, such as IP address, user-agent,
              timestamps, or similar connection data according to their own policies.
              The app does not add advertising identifiers, analytics identifiers,
              or user account identifiers to these requests.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Sharing and selling data</h2>
            <p className="mt-3 leading-7">
              The developer does not sell user data. The developer does not share
              personal or sensitive user data with advertisers, data brokers, or
              marketing platforms. The app does not include ads.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Permissions</h2>
            <p className="mt-3 leading-7">
              On Android, the app requests internet access to reach Random.org and
              GitHub API. It also exposes Quick Settings tile services for coin and
              dice shortcuts. These shortcuts are used only to open the app directly
              into the selected action.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Retention and deletion</h2>
            <p className="mt-3 leading-7">
              The app does not create user accounts and does not store personal user
              data on developer-controlled servers. Since the app does not maintain
              server-side user profiles, there is no app account to delete. Users may
              clear local app data through the Android system settings at any time.
            </p>
            <p className="mt-3 leading-7">
              Privacy questions or deletion-related requests can be sent to
              <a
                className="ml-1 font-medium text-primary underline-offset-4 hover:underline"
                href="mailto:vitorhugoalvesferreira@gmail.com"
              >
                vitorhugoalvesferreira@gmail.com
              </a>
              .
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Children</h2>
            <p className="mt-3 leading-7">
              The app is not directed specifically to children. It does not knowingly
              collect personal information from children.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Changes</h2>
            <p className="mt-3 leading-7">
              This policy may be updated when the app changes how it handles data,
              permissions, third-party services, or platform requirements. The latest
              version will be published on this page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TheUniverseDecidesPrivacyPolicy;
