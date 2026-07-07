const SonicRelayPlayConsoleChecklist = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-5xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          SonicRelay
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Play Console Publishing Checklist
        </h1>
        <p className="mt-3 text-muted-foreground">
          Practical checklist for preparing the Flutter Android viewer for Google Play review.
        </p>

        <div className="mt-8 grid gap-6">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Public URLs to use in Play Console</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b text-foreground">
                    <th className="py-3 pr-4 font-semibold">Play Console field</th>
                    <th className="py-3 pr-4 font-semibold">SonicRelay page</th>
                    <th className="py-3 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">Privacy Policy</td>
                    <td className="py-3 pr-4">/sonicrelay/privacy-policy</td>
                    <td className="py-3">Public policy covering account, device, session, signaling, and live audio behavior.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">Data deletion URL</td>
                    <td className="py-3 pr-4">/sonicrelay/account-removal</td>
                    <td className="py-3">External page where users can request account and associated app data deletion.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">Support contact</td>
                    <td className="py-3 pr-4">/sonicrelay/support</td>
                    <td className="py-3">Support, privacy, review contact, and repository references.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">Internal notes</td>
                    <td className="py-3 pr-4">/sonicrelay/data-safety and /sonicrelay/app-access</td>
                    <td className="py-3">Helper pages for completing declarations consistently. Do not paste secrets publicly, because apparently that still needs saying.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Before uploading the Android App Bundle</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Use a release signing key, not the debug signing config.</li>
              <li>Set the final app label to SonicRelay instead of the default package-style label.</li>
              <li>Confirm applicationId/package name: com.vitorhugo.sonicrelay.sonic_relay.</li>
              <li>Confirm versionName/versionCode for the release track.</li>
              <li>Run Flutter release build and smoke test login, token refresh, device registration, session join, and WebRTC receive-only flow.</li>
              <li>Verify that the production backend, WebSocket signaling, TURN/STUN configuration, and reviewer test environment are available.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">App content declarations</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b text-foreground">
                    <th className="py-3 pr-4 font-semibold">Declaration</th>
                    <th className="py-3 pr-4 font-semibold">Suggested answer for reviewed build</th>
                    <th className="py-3 font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-muted-foreground">
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">Ads</td>
                    <td className="py-3 pr-4">No</td>
                    <td className="py-3">No ad SDK, banner, interstitial, rewarded ad, native ad, or ad mediation dependency is documented for the reviewed Flutter build.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">App access</td>
                    <td className="py-3 pr-4">Restricted by login</td>
                    <td className="py-3">Provide reviewer credentials and session instructions privately in Play Console.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">Target audience</td>
                    <td className="py-3 pr-4">Not specifically for children</td>
                    <td className="py-3">Final age groups must match the real distribution strategy.</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-3 pr-4 font-medium text-foreground">Content rating</td>
                    <td className="py-3 pr-4">Complete official questionnaire</td>
                    <td className="py-3">The app is a private utility with login and remote audio playback, not public social content.</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 font-medium text-foreground">High-risk permissions</td>
                    <td className="py-3 pr-4">None identified</td>
                    <td className="py-3">Reviewed Android manifest declares INTERNET and package visibility query for PROCESS_TEXT.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Reviewer test notes to prepare privately</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>Reviewer account email and password.</li>
              <li>Whether account creation is enabled in the reviewed build.</li>
              <li>Backend base URL expected by the Android app.</li>
              <li>Instructions for generating or obtaining a valid temporary session code.</li>
              <li>Fallback instructions if the Windows publisher is offline during review.</li>
              <li>Expected result after joining a session: listener screen, connection state, and receive-only WebRTC audio status.</li>
            </ol>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Known blockers before production review</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>If the app supports in-app account creation, add an in-app account deletion path and keep the external deletion page available.</li>
              <li>If analytics, crash reporting, ads, microphone capture, recording, file upload, contacts, location, or notifications are added, update the privacy policy and Data Safety notes before release.</li>
              <li>If the app requires a live Windows publisher, provide a stable reviewer test environment. A waiting screen alone is not a review strategy, despite humanity&apos;s brave history of waiting screens.</li>
              <li>If WebRTC signaling logs SDP or ICE payloads in production, review logging and privacy declarations before publishing.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Official references</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7 text-muted-foreground">
              <li>
                <a className="font-medium text-primary underline-offset-4 hover:underline" href="https://support.google.com/googleplay/android-developer/answer/9859455" target="_blank" rel="noopener noreferrer">
                  Prepare your app for review
                </a>
              </li>
              <li>
                <a className="font-medium text-primary underline-offset-4 hover:underline" href="https://support.google.com/googleplay/android-developer/answer/10787469" target="_blank" rel="noopener noreferrer">
                  Google Play Data safety form
                </a>
              </li>
              <li>
                <a className="font-medium text-primary underline-offset-4 hover:underline" href="https://support.google.com/googleplay/android-developer/answer/13327111" target="_blank" rel="noopener noreferrer">
                  App account deletion requirements
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayPlayConsoleChecklist;
