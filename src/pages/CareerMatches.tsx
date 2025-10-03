import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Sparkles, 
  TrendingUp, 
  DollarSign, 
  Award, 
  BookOpen,
  ArrowRight,
  Filter
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const CareerMatches = () => {
  const navigate = useNavigate();

  const careers = [
    {
      id: 1,
      title: "Data Analyst",
      match: 95,
      salary: "$75,000 - $95,000",
      growth: "High (25% by 2030)",
      education: "Bachelor's in Data Science, Statistics, or related field",
      description: "Analyze complex datasets to help organizations make informed business decisions.",
      whyMatch: "Your analytical thinking and problem-solving skills are perfect for interpreting data patterns and trends.",
      keySkills: ["Data Analysis", "Statistical Methods", "SQL", "Python/R", "Data Visualization"],
      pathways: [
        "Complete a degree in Data Science or Statistics",
        "Learn SQL, Python, and data visualization tools",
        "Build a portfolio of data analysis projects",
        "Consider certifications like Microsoft Data Analyst"
      ]
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      match: 92,
      salary: "$85,000 - $110,000",
      growth: "Very High (35% by 2030)",
      education: "Bachelor's in Cybersecurity, IT, or Computer Science",
      description: "Protect organizations from cyber threats by implementing security measures and monitoring systems.",
      whyMatch: "Strong problem-solving abilities and logical thinking align perfectly with security analysis and threat detection.",
      keySkills: ["Network Security", "Ethical Hacking", "Risk Assessment", "Security Tools", "Problem Solving"],
      pathways: [
        "Study Cybersecurity or IT at university",
        "Gain certifications (CompTIA Security+, CEH)",
        "Practice with cybersecurity labs and CTF challenges",
        "Build experience through internships"
      ]
    },
    {
      id: 3,
      title: "Market Researcher",
      match: 88,
      salary: "$65,000 - $85,000",
      growth: "Medium (18% by 2030)",
      education: "Bachelor's in Marketing, Business, or Statistics",
      description: "Study market conditions to identify potential sales opportunities and consumer preferences.",
      whyMatch: "Your data-driven approach helps understand market trends and consumer behavior effectively.",
      keySkills: ["Research Methods", "Data Analysis", "Survey Design", "Report Writing", "Statistical Software"],
      pathways: [
        "Complete a Marketing or Business degree",
        "Learn market research methodologies",
        "Master statistical analysis tools",
        "Gain experience through market research projects"
      ]
    },
    {
      id: 4,
      title: "Software Developer",
      match: 85,
      salary: "$80,000 - $105,000",
      growth: "High (22% by 2030)",
      education: "Bachelor's in Computer Science or Software Engineering",
      description: "Design, develop, and maintain software applications and systems.",
      whyMatch: "Technical aptitude and systematic thinking make you well-suited for software development.",
      keySkills: ["Programming", "Software Design", "Problem Solving", "Version Control", "Testing"],
      pathways: [
        "Study Computer Science or Software Engineering",
        "Learn multiple programming languages",
        "Build personal coding projects",
        "Contribute to open-source projects"
      ]
    },
    {
      id: 5,
      title: "Business Intelligence Analyst",
      match: 82,
      salary: "$70,000 - $90,000",
      growth: "High (20% by 2030)",
      education: "Bachelor's in Business Analytics or Information Systems",
      description: "Transform data into actionable insights to support business strategy and operations.",
      whyMatch: "Combines your analytical skills with business acumen to drive data-informed decisions.",
      keySkills: ["Business Analysis", "Data Modeling", "BI Tools", "SQL", "Communication"],
      pathways: [
        "Study Business Analytics or IS",
        "Master BI tools (Tableau, Power BI)",
        "Understand business processes",
        "Develop strong communication skills"
      ]
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <Card className="shadow-medium bg-gradient-card border-none animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <Sparkles className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl font-bold">Your AI-Powered Career Matches</CardTitle>
            </div>
            <CardDescription className="text-base">
              Based on your personality type (Analytical Thinker) and skills assessment, we've identified {careers.length} careers that align with your profile.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Careers Grid */}
        <div className="space-y-6">
          {careers.map((career, index) => (
            <Card 
              key={career.id} 
              className="shadow-medium hover:shadow-strong transition-all duration-300 border-2 border-primary/10 hover:border-primary/30"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <CardTitle className="text-2xl">{career.title}</CardTitle>
                      <Badge className="bg-primary text-primary-foreground">
                        {career.match}% Match
                      </Badge>
                    </div>
                    <CardDescription className="text-base mb-4">
                      {career.description}
                    </CardDescription>
                  </div>
                </div>

                {/* Match Progress */}
                <div className="space-y-2 bg-primary/5 p-4 rounded-lg">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">Career Match Score</span>
                    <span className="font-bold text-primary">{career.match}%</span>
                  </div>
                  <Progress value={career.match} className="h-2" />
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                    <DollarSign className="w-5 h-5 text-secondary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Salary Range</p>
                      <p className="font-semibold">{career.salary}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Job Growth</p>
                      <p className="font-semibold">{career.growth}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-accent/50 rounded-lg">
                    <Award className="w-5 h-5 text-accent-foreground mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Education</p>
                      <p className="font-semibold text-sm">{career.education.split(',')[0]}</p>
                    </div>
                  </div>
                </div>

                {/* Why This Matches */}
                <div className="bg-gradient-card p-5 rounded-lg border-l-4 border-primary">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    Why This Matches You
                  </h4>
                  <p className="text-sm text-muted-foreground">{career.whyMatch}</p>
                </div>

                {/* Key Skills */}
                <div>
                  <h4 className="font-semibold mb-3">Key Skills Required</h4>
                  <div className="flex flex-wrap gap-2">
                    {career.keySkills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pathways */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Your Pathway to Success
                  </h4>
                  <div className="space-y-2">
                    {career.pathways.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">
                          {idx + 1}
                        </div>
                        <p className="text-sm text-muted-foreground pt-0.5">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full group" size="lg">
                  Explore {career.title} Career
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <Card className="shadow-medium bg-gradient-hero text-white border-none">
          <CardContent className="p-8 text-center space-y-4">
            <h3 className="text-2xl font-bold">Want More Personalized Insights?</h3>
            <p className="text-white/90">
              Reflect on your career journey and track your progress as you explore these opportunities.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => navigate("/reflection")}
            >
              Start Reflecting
              <ArrowRight className="ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CareerMatches;