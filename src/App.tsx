
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import TimelinePage from "./pages/TimelinePage";
import ProjectDetail from "./pages/ProjectDetail";
import ResumePage from "./pages/ResumePage";
import AboutPage from "./pages/AboutPage";
import SocialHandlesPage from "./pages/SocialHandlesPage";
import GithubPage from "./pages/GithubPage";
import StackOverflowPage from "./pages/StackOverflowPage";
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
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetail />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/about" element={<AboutPage />} />
          
          {/* Social Media Routes */}
          <Route path="/social/linkedin" element={<SocialHandlesPage />} />
          <Route path="/social/github" element={<GithubPage />} />
          <Route path="/social/stackoverflow" element={<StackOverflowPage />} />
          
          {/* Redirect old linkedin path to new social handles path */}
          <Route path="/linkedin" element={<Navigate to="/social/linkedin" replace />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
