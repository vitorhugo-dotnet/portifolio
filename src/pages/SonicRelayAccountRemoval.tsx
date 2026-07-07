const SonicRelayAccountRemoval = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">SonicRelay</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Account and App Data Removal Request</h1>
        <p className="mt-3 text-muted-foreground">
          Public web resource for SonicRelay account deletion and associated app data deletion requests.
        </p>

        <div className="mt-8 space-y-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">App and developer</h2>
            <dl className="mt-4 grid gap-4 text-muted-foreground md:grid-cols-2">
              <div>
                <dt className="font-semibold text-foreground">App</dt>
                <dd className="mt-1">SonicRelay</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Package name</dt>
                <dd className="mt-1">com.vitorhugo.sonicrelay.sonic_relay</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Developer</dt>
                <dd className="mt-1">Vitor Hugo Alves Ferreira</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Contact</dt>
                <dd className="mt-1">vitorhugoalvesferreira@gmail.com</dd>
              </div>
            </dl>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">How to request deletion</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              To request deletion of a SonicRelay account and associated app data, send an email from the same address used in the SonicRelay account to:
            </p>
            <a
              className="mt-3 inline-flex font-medium text-primary underline-offset-4 hover:underline"
              href="mailto:vitorhugoalvesferreira@gmail.com?subject=SonicRelay%20Account%20Deletion%20Request"
            >
              vitorhugoalvesferreira@gmail.com
            </a>
            <p className="mt-3 leading-7 text-muted-foreground">
              Use the subject “SonicRelay Account Deletion Request” and include the email address linked to the SonicRelay account. Do not send passwords, refresh tokens, session codes, private stream content, or screenshots containing credentials. Humanity already leaks enough secrets without giving it a template.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">In-app deletion path</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              If the released Android app supports account creation, it should also provide a clear in-app path to start account deletion, for example: Account or Settings → Privacy → Delete account. The external email request above remains available for users who no longer have the app installed or cannot access the in-app flow.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Data covered by the request</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>SonicRelay account record, where supported by the deployed backend.</li>
              <li>Email address and account profile fields linked to the SonicRelay account.</li>
              <li>Registered viewer and publisher device records linked to the account.</li>
              <li>Active and historical session records linked to the account.</li>
              <li>Refresh sessions or server-side authentication records linked to the account.</li>
              <li>Support records directly tied to the deletion request, when deletion is legally and operationally possible.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Data that may remain temporarily</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Limited operational records may remain for security, abuse prevention, backup recovery, legal compliance, dispute handling, or fraud prevention. Retained data is limited to what is necessary for those purposes, is not used for ads, and is not sold.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Expected processing time</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Deletion requests are reviewed as soon as reasonably possible after the request is received and the account ownership can be verified. You may receive a confirmation email or a request for additional verification before deletion is completed.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Local app data</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Users can remove local SonicRelay data from the Android device by clearing app storage in Android system settings or uninstalling the app. This removes local tokens and cached viewer device data from that device, but it does not automatically delete server-side account data unless a deletion request is submitted.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayAccountRemoval;
