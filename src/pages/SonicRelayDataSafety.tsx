const SonicRelayDataSafety = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">SonicRelay</p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">Google Play Data Safety Notes</h1>
        <p className="mt-3 text-muted-foreground">Last reviewed: July 7, 2026</p>

        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Declaration summary</h2>
          <p className="mt-3 leading-7 text-muted-foreground">
            SonicRelay uses account, device, session, and signaling information to connect an Android viewer to a private Windows publisher stream. The Play Console form should reflect that backend communication exists for app functionality, account management, device registration, security, and real-time connection setup.
          </p>
          <p className="mt-3 leading-7 text-muted-foreground">
            These notes are not a replacement for the final Play Console questionnaire. They are a source of truth for keeping the released Android bundle, public privacy policy, and Data Safety declaration aligned, because inconsistent privacy declarations are how apps get rejected by paperwork wearing a tiny crown.
          </p>
        </section>

        <section className="mt-8 rounded-2xl border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-foreground">Data types to review</h2>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[840px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b text-foreground">
                  <th className="py-3 pr-4 font-semibold">Data area</th>
                  <th className="py-3 pr-4 font-semibold">Likely Play Console category</th>
                  <th className="py-3 pr-4 font-semibold">Purpose</th>
                  <th className="py-3 font-semibold">Reason</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Email address</td>
                  <td className="py-3 pr-4">Personal info / Email address</td>
                  <td className="py-3 pr-4">Account management, app functionality, security</td>
                  <td className="py-3">The user signs in to the SonicRelay backend.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Password / authentication token</td>
                  <td className="py-3 pr-4">App info and performance or account/authentication data, depending on final form options</td>
                  <td className="py-3 pr-4">Account management and security</td>
                  <td className="py-3">Password is submitted to the backend for login; access and refresh tokens are stored locally using secure storage.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">User and device identifiers</td>
                  <td className="py-3 pr-4">Device or other IDs / user identifiers</td>
                  <td className="py-3 pr-4">App functionality, account management, security</td>
                  <td className="py-3">The backend links sessions to an account and registered viewer device.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Session activity</td>
                  <td className="py-3 pr-4">App activity / app interactions</td>
                  <td className="py-3 pr-4">App functionality and security</td>
                  <td className="py-3">Joining, leaving, and signaling are required for private streaming sessions.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">WebRTC signaling</td>
                  <td className="py-3 pr-4">Review as app activity or ephemeral technical processing</td>
                  <td className="py-3 pr-4">App functionality</td>
                  <td className="py-3">SDP and ICE candidates are exchanged to establish the encrypted real-time audio path. They should not be logged in production.</td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 pr-4 font-medium text-foreground">Technical logs</td>
                  <td className="py-3 pr-4">Diagnostics, only if collected by the app or backend</td>
                  <td className="py-3 pr-4">Security, debugging, fraud/abuse prevention</td>
                  <td className="py-3">Server infrastructure may receive IP address, timestamps, user-agent, and request status as normal service logs.</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-foreground">Phone microphone audio</td>
                  <td className="py-3 pr-4">Do not declare for the reviewed viewer build</td>
                  <td className="py-3 pr-4">Not used</td>
                  <td className="py-3">The Android viewer receives remote audio and is not designed to upload local microphone input.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Sharing</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Suggested answer for the reviewed build: data is not sold and is not shared for advertising. Infrastructure providers may process data as service providers for hosting, TLS, DNS, signaling, TURN relay, logging, and deployment. Review this again if any analytics, crash reporting, ads, payment, or third-party telemetry SDK is added.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Security practices</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Use HTTPS for API calls and WSS for signaling in production.</li>
              <li>Use encrypted WebRTC transport for media.</li>
              <li>Keep account tokens and viewer device id in secure local storage.</li>
              <li>Do not log full SDP, ICE candidates, passwords, refresh tokens, or session codes.</li>
              <li>Re-check declarations after any new SDK, permission, telemetry, or storage feature.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Deletion</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              If SonicRelay supports account creation in the released Android build, declare that users can request deletion through the public account removal page and through the in-app account settings path once implemented. Account, device, session, and authentication records linked to the account are in scope for deletion unless limited retention is needed for security, abuse prevention, legal compliance, or backup recovery.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-foreground">Play Console checklist</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Use the SonicRelay privacy policy URL.</li>
              <li>Use the SonicRelay account deletion URL if account creation is enabled.</li>
              <li>Declare that the app does not contain ads unless a future build adds them.</li>
              <li>Declare restricted app access and provide reviewer credentials privately.</li>
              <li>Make sure the Data Safety form matches the released Android App Bundle.</li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayDataSafety;
