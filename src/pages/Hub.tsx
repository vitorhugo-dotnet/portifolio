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
