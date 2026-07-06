const SonicRelayDataSafety = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">SonicRelay</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Google Play Data Safety Notes</h1>
        <p className="mt-3 text-muted-foreground">Last reviewed: July 6, 2026</p>

        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Declaration summary</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            SonicRelay uses account, device, session, and signaling information to connect an Android viewer to a private Windows publisher stream. The Play Console form should reflect that backend communication exists for app functionality and account management.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Data types to review</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[780px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b text-foreground">
                  <th className="py-3 pr-4 font-semibold">Area</th>
                  <th className="py-3 pr-4 font-semibold">Declaration guidance</th>
                  <th className="py-3 font-semibold">Reason</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Email address</td>
                  <td className="py-3 pr-4">Declare for account management.</td>
                  <td className="py-3">The user signs in to the SonicRelay backend.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">User and device identifiers</td>
                  <td className="py-3 pr-4">Declare for app functionality and security.</td>
                  <td className="py-3">The backend links sessions to an account and registered viewer device.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Session activity</td>
                  <td className="py-3 pr-4">Review as app activity.</td>
                  <td className="py-3">Joining, leaving, and signaling are required for private streaming.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Audio handling</td>
                  <td className="py-3 pr-4">Do not mark phone audio capture for the reviewed viewer build.</td>
                  <td className="py-3">The Android viewer receives a remote stream and is not designed to upload local microphone input.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Security notes</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Use HTTPS for API calls and WSS for signaling in production.</li>
              <li>Use encrypted WebRTC transport for media.</li>
              <li>Keep account tokens and viewer device id in secure local storage.</li>
              <li>Re-check declarations after any new SDK, permission, or telemetry feature.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Play Console checklist</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Use the SonicRelay privacy policy URL.</li>
              <li>Use the SonicRelay account deletion URL if account creation is enabled.</li>
              <li>Declare that the app does not contain ads unless a future build adds them.</li>
              <li>Make sure the Data safety form matches the released Android bundle.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayDataSafety;
