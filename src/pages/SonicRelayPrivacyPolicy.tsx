const SonicRelayPrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
          SonicRelay
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-muted-foreground">Last updated: July 6, 2026</p>

        <div className="mt-8 space-y-8 text-muted-foreground">
          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3 leading-7">
              This Privacy Policy applies to SonicRelay, package name
              <span className="font-medium text-foreground"> com.vitorhugo.sonicrelay.sonic_relay</span>,
              published by Vitor Hugo Alves Ferreira. SonicRelay is a mobile viewer
              for a low-latency personal audio streaming suite. It lets an
              authenticated user listen to audio streamed from their paired Windows
              publisher app through a SonicRelay backend, WebSocket signaling, and
              WebRTC media transport.
            </p>
            <p className="mt-3 leading-7">
              The Android app is the viewer. It receives remote audio playback from
              the paired Windows publisher. It does not record the phone microphone,
              does not capture camera/video, does not access location, does not read
              contacts, and does not include advertising or analytics SDKs in the
              reviewed implementation.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Data collected or processed</h2>
            <p className="mt-3 leading-7">
              SonicRelay uses account and device data only to authenticate users,
              register trusted devices, join private streaming sessions, and operate
              the real-time connection. Depending on the backend configuration, the
              following data may be processed:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>Email address and password are submitted to the backend for login.</li>
              <li>Access and refresh tokens are stored locally using secure storage.</li>
              <li>A backend-issued user identifier and device identifier may be used for account, device, and session management.</li>
              <li>Device registration data may include device name, device type, platform, and registration status.</li>
              <li>Session data may include temporary session codes, session identifiers, participant identifiers, join and leave events, and connection status.</li>
              <li>WebRTC signaling may include SDP descriptions and ICE candidates required to establish the audio connection.</li>
              <li>Server infrastructure may receive standard technical metadata such as IP address, timestamps, user-agent, and request logs.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Audio handling</h2>
            <p className="mt-3 leading-7">
              SonicRelay is designed for live audio transport. The Android viewer
              receives and plays a remote audio track from the Windows publisher.
              The Android app does not upload microphone audio from the phone. The
              backend is intended to route authentication, sessions, and signaling;
              media should flow peer-to-peer when possible or through a TURN relay
              when the network requires it.
            </p>
            <p className="mt-3 leading-7">
              Live audio streams are not intended to be recorded, stored, sold, or
              used for advertising by the developer. If future versions add recording,
              analytics, crash reporting, microphone capture, cloud storage, or any
              new third-party SDK, this policy and the Google Play Data safety form
              must be reviewed before release.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">How data is used</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>Authenticate the user and maintain a secure session.</li>
              <li>Register, validate, and revoke devices linked to the user account.</li>
              <li>Allow the user to join a private streaming session by code.</li>
              <li>Route WebSocket signaling messages between authorized participants.</li>
              <li>Establish and maintain the WebRTC audio connection.</li>
              <li>Protect the service against abuse, invalid sessions, and unauthorized access.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Sharing and selling data</h2>
            <p className="mt-3 leading-7">
              The developer does not sell personal or sensitive user data. SonicRelay
              does not include advertising SDKs and does not share personal data with
              advertisers or data brokers. Data may be processed by infrastructure
              providers used to host the backend, WebSocket signaling, TURN relay, DNS,
              TLS, logging, or deployment systems, only as needed to operate and secure
              the service.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Security</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>Production API traffic should use HTTPS and WebSocket traffic should use WSS.</li>
              <li>Authentication tokens and the viewer device identifier are stored through secure storage on the device.</li>
              <li>Session codes are temporary and should expire quickly.</li>
              <li>SDP and ICE candidate payloads should not be written to production logs.</li>
              <li>TURN credentials should be temporary when supported by the deployed backend.</li>
            </ul>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Retention and deletion</h2>
            <p className="mt-3 leading-7">
              Account, device, and session records are kept only as long as needed to
              provide SonicRelay, maintain security, debug issues, satisfy legal
              requirements, or support abuse prevention. Users may request deletion of
              their SonicRelay account and associated app data using the public account
              deletion page or by contacting the privacy contact below.
            </p>
            <p className="mt-3 leading-7">
              Local app data can also be removed from Android system settings by
              clearing the app storage or uninstalling the app.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Children</h2>
            <p className="mt-3 leading-7">
              SonicRelay is not directed specifically to children. It is intended as a
              personal audio utility for users who can manage an account, a Windows
              publisher app, and a mobile viewer app.
            </p>
          </section>

          <section className="rounded-2xl border bg-card p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3 leading-7">
              For privacy questions, deletion requests, or Play Store review support,
              contact:
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
            <h2 className="text-2xl font-semibold text-foreground">Changes</h2>
            <p className="mt-3 leading-7">
              This policy may be updated when SonicRelay changes how it handles data,
              permissions, backend infrastructure, third-party services, or platform
              requirements. The latest version will be published on this page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default SonicRelayPrivacyPolicy;
