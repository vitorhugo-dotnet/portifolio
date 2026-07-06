const TheUniverseDecidesStoreListing = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          The Universe Decides
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Google Play Store Listing Draft
        </h1>
        <p className="mt-3 text-muted-foreground">Prepared for Play Console publishing.</p>

        <div className="mt-8 grid gap-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">App identity</h2>
            <dl className="mt-4 grid gap-4 text-muted-foreground md:grid-cols-2">
              <div>
                <dt className="font-semibold text-foreground">App name</dt>
                <dd className="mt-1">The Universe Decides</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Package name</dt>
                <dd className="mt-1">com.hugo.theuniversedecides</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Version reviewed</dt>
                <dd className="mt-1">1.3.0+5</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Suggested category</dt>
                <dd className="mt-1">Tools or Entertainment</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Short description</h2>
            <p className="mt-3 rounded-xl bg-muted p-4 text-foreground">
              A mystical decision app for coins, dice, cards, tarot, and custom lists.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Full description</h2>
            <div className="mt-3 space-y-4 rounded-xl bg-muted p-4 text-foreground">
              <p>
                The Universe Decides is a simple decision companion with a dark,
                mystical Material 3 interface. Use it when you need a quick random
                answer without turning a tiny choice into a corporate committee.
              </p>
              <p>
                Flip a coin, roll RPG dice, draw a playing card, draw a tarot card,
                or build a custom list and let the app choose one option for you.
              </p>
              <p>
                Whenever possible, the app uses Random.org for random integer results.
                If the network is unavailable or Random.org does not respond in time,
                the app automatically falls back to local randomness so the feature
                remains usable offline.
              </p>
              <p>
                Features:
              </p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Coin flip screen with animated results.</li>
                <li>RPG dice roller with configurable quantity and sides.</li>
                <li>Playing card draw from a full 52-card deck.</li>
                <li>Tarot draw from a full 78-card deck.</li>
                <li>Custom list picker for everyday decisions.</li>
                <li>Android Quick Settings shortcuts for coin and d20 actions.</li>
                <li>English and Portuguese localization.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">What's new</h2>
            <p className="mt-3 rounded-xl bg-muted p-4 text-foreground">
              Added tarot draw, Android quick access shortcuts, improved localization,
              branded launcher icons, and signed Android release build support.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Suggested tags and review notes</h2>
            <div className="mt-4 grid gap-4 text-muted-foreground md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground">Tags</h3>
                <p className="mt-2">decision maker, coin flip, dice roller, random picker, tarot, cards</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Content notes</h3>
                <p className="mt-2">
                  No real-money gambling, no user-generated public sharing, no ads,
                  no account system, and no in-app purchases.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default TheUniverseDecidesStoreListing;
