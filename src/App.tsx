import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import Hub from "./pages/Hub.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import SonicRelayAccountRemoval from "./pages/SonicRelayAccountRemoval.tsx";
import SonicRelayPrivacyPolicy from "./pages/SonicRelayPrivacyPolicy.tsx";
import SonicRelaySupport from "./pages/SonicRelaySupport.tsx";
import TheUniverseDecidesPrivacyPolicy from "./pages/TheUniverseDecidesPrivacyPolicy.tsx";
import TheUniverseDecidesSupport from "./pages/TheUniverseDecidesSupport.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hub" element={<Hub />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route
            path="/sonicrelay/privacy-policy"
            element={<SonicRelayPrivacyPolicy />}
          />
          <Route
            path="/sonicrelay/account-removal"
            element={<SonicRelayAccountRemoval />}
          />
          <Route
            path="/sonicrelay/support"
            element={<SonicRelaySupport />}
          />
          <Route
            path="/the-universe-decides/privacy-policy"
            element={<TheUniverseDecidesPrivacyPolicy />}
          />
          <Route
            path="/the-universe-decides/support"
            element={<TheUniverseDecidesSupport />}
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
