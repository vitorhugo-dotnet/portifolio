const SonicRelayAccountRemoval = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">SonicRelay</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Account Removal Request</h1>
        <p className="mt-3 text-muted-foreground">Public web resource for app account removal requests.</p>

        <div className="mt-8 space-y-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">How to request removal</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              To request removal of a SonicRelay account and associated app data,
              send an email from the same address used in the SonicRelay account to:
            </p>
            <a
              className="mt-3 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              href="mailto:vitorhugoalvesferreira@gmail.com?subject=SonicRelay%20Account%20Removal%20Request"
            >
              vitorhugoalvesferreira@gmail.com
            </a>
            <p className="mt-3 leading-7 text-muted-foreground">
              Include the subject “SonicRelay Account Removal Request” and the email
              address linked to the SonicRelay account. Do not send secrets, session
              codes, private stream content, or screenshots containing credentials.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Data covered by the request</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>SonicRelay account record, where supported by the deployed backend.</li>
              <li>Registered viewer and publisher device records linked to the account.</li>
              <li>Active session records linked to the account.</li>
              <li>Refresh sessions or server-side authentication records linked to the account.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Data that may remain temporarily</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Limited operational records may remain for security, abuse prevention,
              backup recovery, legal compliance, or dispute handling. Retained data is
              limited to what is necessary for those purposes and is not used for ads.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Local app data</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Users can remove local SonicRelay data from the Android device by
              clearing app storage in Android system settings or uninstalling the app.
              This removes local tokens and cached viewer device data from that device.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Production app note</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              If the production Android app lets users create accounts inside the app,
              add a clearly discoverable in-app removal entry point and keep this
              external page available for Play Console review.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayAccountRemoval;
