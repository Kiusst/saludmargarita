import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import RegistroDoctor from "./pages/RegistroDoctor";
import Terminos from "./pages/Terminos";
import FAQ from "./pages/FAQ";
import PlanPremium from "./pages/PlanPremium";
import Privacidad from "./pages/Privacidad";
import Soporte from "./pages/Soporte";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/registro-doctor" element={<RegistroDoctor />} />
          <Route path="/terminos" element={<Terminos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/plan-premium" element={<PlanPremium />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/soporte" element={<Soporte />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
