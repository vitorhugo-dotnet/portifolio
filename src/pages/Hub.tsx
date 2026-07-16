import { FileText } from "lucide-react";
import HubCard from "@/components/HubCard";

const hubItems = [
  {
    title: "SonicRelay — Privacy Policy",
    description: "Read how SonicRelay handles account, device, and connection data.",
    path: "/sonicrelay/privacy-policy",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "The Universe Decides — Privacy Policy",
    description: "Read how The Universe Decides handles data and external services.",
    path: "/the-universe-decides/privacy-policy",
    icon: FileText,
    isExternal: false,
  },
  {
    title: "The Universe Decides — Support",
    description: "Find support contact details, troubleshooting, and privacy assistance.",
    path: "/the-universe-decides/support",
    icon: FileText,
    isExternal: false,
  },
];

const Hub = () => {
  return (
    <main className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-12 md:py-16">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight">Hub</h1>
          <p className="mt-2 text-muted-foreground">
            Privacy and support resources for published apps.
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
