import { useLocation, useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, Target, ArrowRight, CheckCircle2 } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const QuizResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { type, answers } = location.state || { type: "personality", answers: [] };

  const personalityResult = {
    type: "Analytical Thinker",
    icon: "🔍",
    description: "You have a natural talent for problem-solving and data analysis. You prefer logical, structured approaches and excel at breaking down complex issues.",
    strengths: [
      "Strong analytical and critical thinking skills",
      "Detail-oriented and methodical",
      "Excellent problem-solving abilities",
      "Data-driven decision making"
    ],
    careers: [
      {
        title: "Data Analyst",
        match: 95,
        salary: "$75,000 - $95,000",
        growth: "High",
        reason: "Your analytical skills and attention to detail make you perfect for extracting insights from data."
      },
      {
        title: "Cybersecurity Specialist",
        match: 92,
        salary: "$85,000 - $110,000",
        growth: "Very High",
        reason: "Strong problem-solving abilities and logical thinking align perfectly with security analysis."
      },
      {
        title: "Market Researcher",
        match: 88,
        salary: "$65,000 - $85,000",
        growth: "Medium",
        reason: "Your data-driven approach helps understand market trends and consumer behavior."
      }
    ]
  };

  const skillsResult = {
    topSkills: [
      { name: "Problem Solving", level: 4, description: "Strong analytical abilities" },
      { name: "Technical Skills", level: 4, description: "Proficient with technology" },
      { name: "Critical Thinking", level: 5, description: "Expert at objective evaluation" }
    ],
    growthAreas: [
      { name: "Leadership", level: 2, description: "Opportunity to develop" },
      { name: "Communication", level: 3, description: "Good foundation to build on" }
    ]
  };

  const result = type === "personality" ? personalityResult : null;

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="shadow-strong bg-gradient-card border-none animate-fade-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="text-6xl">{type === "personality" ? "🔍" : "📊"}</div>
            </div>
            <CardTitle className="text-3xl font-bold">
              {type === "personality" ? "Your Personality Type" : "Your Skills Profile"}
            </CardTitle>
            {type === "personality" && (
              <CardDescription className="text-xl font-semibold text-primary mt-2">
                {personalityResult.type}
              </CardDescription>
            )}
          </CardHeader>
          <CardContent>
            <p className="text-center text-lg leading-relaxed">
              {type === "personality" 
                ? personalityResult.description
                : "Here's a comprehensive overview of your current skill levels and growth opportunities."
              }
            </p>
          </CardContent>
        </Card>

        {/* Personality Results */}
        {type === "personality" && (
          <>
            {/* Strengths */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                  Your Key Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {personalityResult.strengths.map((strength, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                        ✓
                      </div>
                      <p className="text-sm">{strength}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Career Matches */}
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-6 h-6 text-primary" />
                  Recommended Career Matches
                </CardTitle>
                <CardDescription>
                  Based on your personality profile, here are careers that align with your strengths
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {personalityResult.careers.map((career, index) => (
                  <div key={index} className="p-6 border-2 border-primary/20 rounded-xl hover:shadow-medium transition-shadow bg-gradient-card">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{career.title}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                            {career.match}% Match
                          </Badge>
                          <Badge variant="outline">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {career.growth} Growth
                          </Badge>
                        </div>
                        <p className="text-lg font-semibold text-primary">{career.salary}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{career.reason}</p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => navigate("/career-matches")}
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </>
        )}

        {/* Skills Results */}
        {type === "skills" && (
          <>
            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Your Top Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillsResult.topSkills.map((skill, index) => (
                  <div key={index} className="p-4 bg-primary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <Badge className="bg-primary">Level {skill.level}/5</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-medium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                  Growth Opportunities
                </CardTitle>
                <CardDescription>
                  Focus on these areas to enhance your career prospects
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {skillsResult.growthAreas.map((skill, index) => (
                  <div key={index} className="p-4 bg-secondary/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{skill.name}</h3>
                      <Badge variant="outline">Level {skill.level}/5</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </>
        )}

        {/* Next Steps */}
        <Card className="shadow-medium bg-gradient-hero text-white border-none">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Ready to Explore Your Career Path?</h3>
            <p className="text-white/90">
              {type === "personality" 
                ? "Take the Skills Assessment to get even more personalized recommendations"
                : "View your complete career matches based on both assessments"
              }
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="mt-4"
              onClick={() => navigate(type === "personality" ? "/quiz/skills" : "/career-matches")}
            >
              {type === "personality" ? "Take Skills Assessment" : "View Career Matches"}
              <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default QuizResults;