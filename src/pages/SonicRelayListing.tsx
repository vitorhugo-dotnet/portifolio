const SonicRelayListing = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">SonicRelay</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Play Listing Draft</h1>
        <p className="mt-3 text-muted-foreground">Prepared for app publishing.</p>

        <div className="mt-8 grid gap-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">App identity</h2>
            <dl className="mt-4 grid gap-4 text-muted-foreground md:grid-cols-2">
              <div>
                <dt className="font-semibold text-foreground">App name</dt>
                <dd className="mt-1">SonicRelay</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Package name</dt>
                <dd className="mt-1">com.vitorhugo.sonicrelay.sonic_relay</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Version reviewed</dt>
                <dd className="mt-1">1.0.0+1</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Suggested category</dt>
                <dd className="mt-1">Tools</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Short description</h2>
            <p className="mt-3 rounded-xl bg-muted p-4 text-foreground">
              Listen to your PC audio on your phone with low-latency streaming.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Full description</h2>
            <div className="mt-3 space-y-4 rounded-xl bg-muted p-4 text-foreground">
              <p>
                SonicRelay is a personal audio streaming viewer for listening to a
                paired Windows PC from your Android phone. It is designed for private,
                low-latency sessions where the service handles login, devices,
                temporary session codes, and WebRTC signaling.
              </p>
              <p>
                Use the Windows publisher app to create a stream, then join from the
                Android viewer using the temporary session code. The viewer receives
                the remote audio track and shows connection state, transport mode,
                latency, and jitter.
              </p>
              <p>Features:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Private account-based streaming sessions.</li>
                <li>Viewer device registration and secure local token storage.</li>
                <li>Session join flow using temporary codes.</li>
                <li>Authenticated WebSocket signaling.</li>
                <li>Receive-only WebRTC audio playback.</li>
                <li>Connection dashboard with ICE state, estimated latency, jitter, and direct or relay transport indicator.</li>
                <li>Dark Material 3 interface built with Flutter.</li>
              </ul>
            </div>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">What's new</h2>
            <p className="mt-3 rounded-xl bg-muted p-4 text-foreground">
              Initial Android viewer release with login, secure token storage, device
              registration, session join, signaling contract, and receive-only WebRTC
              audio viewer UI.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Suggested tags and review notes</h2>
            <div className="mt-4 grid gap-4 text-muted-foreground md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground">Tags</h3>
                <p className="mt-2">audio streaming, WebRTC, low latency, remote audio, desktop audio, private session</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Content notes</h3>
                <p className="mt-2">
                  No ads, no in-app purchases, no public social feed, no public user
                  generated content, and no gambling. Streamed content is controlled by
                  the user's paired Windows publisher session.
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayListing;
