import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import PersonalityQuiz from "./pages/PersonalityQuiz";
import SkillsQuiz from "./pages/SkillsQuiz";
import QuizResults from "./pages/QuizResults";
import CareerMatches from "./pages/CareerMatches";
import Reflection from "./pages/Reflection";
import Profile from "./pages/Profile";
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
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/quiz/personality" element={<PersonalityQuiz />} />
          <Route path="/quiz/skills" element={<SkillsQuiz />} />
          <Route path="/quiz/results" element={<QuizResults />} />
          <Route path="/career-matches" element={<CareerMatches />} />
          <Route path="/reflection" element={<Reflection />} />
          <Route path="/profile" element={<Profile />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
