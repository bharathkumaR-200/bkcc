import { useNavigate } from "react-router-dom";
import { 
  Brain, 
  Target, 
  LineChart, 
  MessageSquare, 
  User, 
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp
} from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const Dashboard = () => {
  const navigate = useNavigate();

  const userName = "Sarah";
  const profileCompletion = 40;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Welcome Card */}
        <Card className="shadow-medium bg-gradient-card border-none animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">
              Hi {userName} 👋
            </CardTitle>
            <CardDescription className="text-base">
              Ready to discover your future career? Let's continue your journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Profile Completion</span>
                <span className="font-semibold text-primary">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-3" />
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card 
            className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group hover:scale-105 border-2 border-primary/20"
            onClick={() => navigate("/quiz/personality")}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <Brain className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Personality Quiz</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Discover your work style, strengths, and personality traits that shape your career preferences.
              </CardDescription>
              <Button className="w-full group-hover:gap-3 gap-2 transition-all">
                Start Quiz
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group hover:scale-105 border-2 border-secondary/20"
            onClick={() => navigate("/quiz/skills")}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:bg-secondary/20 transition-colors">
                  <Target className="w-8 h-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Skills Assessment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                Evaluate your current skills and identify areas for growth in your career journey.
              </CardDescription>
              <Button className="w-full bg-secondary hover:bg-secondary/90 group-hover:gap-3 gap-2 transition-all">
                Take Assessment
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer group hover:scale-105"
            onClick={() => navigate("/career-matches")}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-accent rounded-xl group-hover:bg-accent/80 transition-colors">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Career Matches</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4">
                View AI-powered career recommendations tailored to your unique profile and interests.
              </CardDescription>
              <Button variant="outline" className="w-full group-hover:gap-3 gap-2 transition-all">
                View Matches
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-secondary" />
              Your Next Steps
            </CardTitle>
            <CardDescription>
              Complete these activities to unlock personalized career insights
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Complete Personality Quiz</h4>
                  <p className="text-sm text-muted-foreground">
                    Takes ~5 minutes • Unlocks personalized career matches
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Take Skills Assessment</h4>
                  <p className="text-sm text-muted-foreground">
                    Takes ~7 minutes • Identifies your strengths and growth areas
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/30">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">Explore Career Matches</h4>
                  <p className="text-sm text-muted-foreground">
                    Review AI-powered recommendations and detailed career paths
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardDescription>Quizzes Completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-primary">0</span>
                <span className="text-muted-foreground">/ 2</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardDescription>Career Paths Explored</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-secondary">0</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-3">
              <CardDescription>Reflection Entries</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-accent-foreground">0</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;