import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import NewHomePage from "./pages/NewHomePage";
import ConditionsPage from "./pages/ConditionsPage";
import ExerciseHub from "./pages/ExerciseHub";
import ToolsPage from "./pages/ToolsPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Disclaimer from "./pages/Disclaimer";
import AcademyPage from "./pages/AcademyPage";
import AboutPage from "./pages/AboutPage";
import BMICalculator from "./pages/tools/BMICalculator";
import ROMCalculator from "./pages/tools/ROMCalculator";
import PainScale from "./pages/tools/PainScale";
import RehabDose from "./pages/tools/RehabDose";
import BackPainCondition from "./pages/BackPainCondition";
import KneePainCondition from "./pages/KneePainCondition";
import ShoulderPainCondition from "./pages/ShoulderPainCondition";
import NeckPainCondition from "./pages/NeckPainCondition";
import OrthopedicPage from "./pages/OrthopedicPage";
import NotFound from "./pages/NotFound";
import KnowledgeCategories from "./pages/KnowledgeCategories";
import CategoryPage from "./pages/CategoryPage";
import ArticlePage from "./pages/ArticlePage";
import BlogPage from "./pages/BlogPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<NewHomePage />} />
            <Route path="/conditions" element={<ConditionsPage />} />
            <Route path="/exercises" element={<ExerciseHub />} />
            <Route path="/pain/exercises" element={<ExerciseHub />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/tools/bmi" element={<BMICalculator />} />
            <Route path="/tools/rom" element={<ROMCalculator />} />
            <Route path="/tools/pain-scale" element={<PainScale />} />
            <Route path="/tools/rehab-dose" element={<RehabDose />} />
            <Route path="/pain/back-pain" element={<BackPainCondition />} />
            <Route path="/pain/knee-pain" element={<KneePainCondition />} />
            <Route path="/pain/shoulder-pain" element={<ShoulderPainCondition />} />
            <Route path="/pain/neck-pain" element={<NeckPainCondition />} />
            <Route path="/knowledge" element={<KnowledgeCategories />} />
            <Route path="/knowledge/:categoryId" element={<CategoryPage />} />
            <Route path="/knowledge/orthopedic" element={<OrthopedicPage />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/academy" element={<AcademyPage />} />
            <Route path="/academy/:universityId" element={<AcademyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
