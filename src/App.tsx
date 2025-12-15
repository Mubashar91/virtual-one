import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DesignTokensProvider } from "@/components/DesignTokensProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import BlogDetail from "./pages/BlogDetail";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import { BookMeeting } from "./pages/BookMeeting";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash } = useLocation();
  React.useEffect(() => {
    if (!hash) return;
    const id = hash.replace('#', '');
    // Allow DOM to paint after route change
    const t = setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90; // compensate for fixed navbar
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 0);
    return () => clearTimeout(t);
  }, [hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="lux-va-theme">
      <DesignTokensProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <div className="app-shell min-h-screen bg-background text-foreground">
            <BrowserRouter>
              <ScrollToHash />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/book-meeting" element={<BookMeeting />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/case-study/:id" element={<CaseStudyDetail />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </div>
        </TooltipProvider>
      </DesignTokensProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

