import { BookOpenText, FileText } from "lucide-react";
import HubCard from "@/components/HubCard";

const hubItems = [
  {
    title: "Portfolio Privacy Policy",
    description: "Read how this portfolio handles and protects visitor data.",
    path: "/privacy-policy",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "SonicRelay — Privacy Policy",
    description: "Public app-specific privacy policy for Google Play submission.",
    path: "/sonicrelay/privacy-policy",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "SonicRelay — Data Safety",
    description: "Data Safety notes for account, device, session, and signaling declarations.",
    path: "/sonicrelay/data-safety",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "SonicRelay — Play Listing",
    description: "Draft title, descriptions, tags, and content notes for app publishing.",
    path: "/sonicrelay/play-listing",
    icon: BookOpenText,
    isExternal: false,
  },
  {
    title: "SonicRelay — App Access",
    description: "Reviewer instructions, permissions, ads declaration, and policy notes.",
    path: "/sonicrelay/app-access",
    icon: BookOpenText,
    isExternal: false,
  },
  {
    title: "SonicRelay — Account Removal",
    description: "Public account and app data removal request page for Play Console.",
    path: "/sonicrelay/account-removal",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "SonicRelay — Support",
    description: "Support contact, privacy requests, review notes, and repository links.",
    path: "/sonicrelay/support",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "SonicRelay — Play Console Checklist",
    description: "Release checklist with Play Console fields, public URLs, declarations, and blockers.",
    path: "/sonicrelay/play-console-checklist",
    icon: BookOpenText,
    isExternal: false,
  },
  {
    title: "SonicRelay Flutter Repository",
    description: "Open the Android viewer repository used to prepare these publishing docs.",
    path: "https://github.com/vitorhugo-dotnet/flutter_SonicRelay",
    icon: BookOpenText,
    isExternal: true,
  },
  {
    title: "The Universe Decides — Privacy Policy",
    description: "Public app-specific privacy policy for Google Play submission.",
    path: "/the-universe-decides/privacy-policy",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "The Universe Decides — Data Safety",
    description: "Data Safety notes for Play Console privacy and security declarations.",
    path: "/the-universe-decides/data-safety",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "The Universe Decides — Store Listing",
    description: "Draft title, descriptions, tags, and content notes for the Play Store listing.",
    path: "/the-universe-decides/store-listing",
    icon: BookOpenText,
    isExternal: false,
  },
  {
    title: "The Universe Decides — App Access",
    description: "Reviewer instructions, permissions, ads declaration, and policy notes.",
    path: "/the-universe-decides/app-access",
    icon: BookOpenText,
    isExternal: false,
  },
  {
    title: "The Universe Decides — Support",
    description: "Support contact, account deletion statement, troubleshooting, and repository link.",
    path: "/the-universe-decides/support",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "The Universe Decides Repository",
    description: "Open the source repository used to prepare these publishing docs.",
    path: "https://github.com/vitorhugo-dotnet/the_universe_decides",
    icon: BookOpenText,
    isExternal: true,
  },
];

const Hub = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Hub</h1>
          <p className="mt-2 text-muted-foreground">
            Central access to portfolio pages, Play Store documentation, and external resources.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2">
          {hubItems.map((item) => (
            <HubCard key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Hub;
