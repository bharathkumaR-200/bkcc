import { useState } from "react";
import { MessageSquare, Save, Lightbulb, Calendar } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Reflection = () => {
  const { toast } = useToast();
  const [reflection, setReflection] = useState("");
  
  const previousReflections = [
    {
      id: 1,
      date: "2 days ago",
      content: "I discovered that I really enjoy tech problem-solving. The personality quiz confirmed I'm analytical, which makes sense. I want to explore cybersecurity pathways more - the growth rate and salary potential look amazing!"
    },
    {
      id: 2,
      date: "1 week ago",
      content: "Started looking into Data Analyst roles. The combination of problem-solving and helping businesses make decisions appeals to me. Need to learn more about Python and SQL - adding these to my learning goals."
    }
  ];

  const prompts = [
    "What did you discover about yourself from your assessments?",
    "Which career matches excited you the most and why?",
    "What skills do you want to develop in the next 6 months?",
    "How has your career perspective changed since starting?",
    "What's one actionable step you can take this week toward your career goals?"
  ];

  const handleSave = () => {
    if (reflection.trim()) {
      toast({
        title: "Reflection Saved! ✨",
        description: "Your career journey entry has been recorded.",
      });
      setReflection("");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <Card className="shadow-medium bg-gradient-card border-none animate-fade-in">
          <CardHeader>
            <div className="flex items-center gap-3 mb-2">
              <MessageSquare className="w-8 h-8 text-primary" />
              <CardTitle className="text-3xl font-bold">Career Reflection Journal</CardTitle>
            </div>
            <CardDescription className="text-base">
              Document your thoughts, discoveries, and goals as you explore your career path. Regular reflection helps clarify your direction and track your growth.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Reflection Prompts */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Reflection Prompts
            </CardTitle>
            <CardDescription>
              Not sure where to start? Try answering one of these questions:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {prompts.map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setReflection(reflection + "\n" + prompt + "\n")}
                  className="w-full text-left p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors text-sm"
                >
                  <span className="text-primary font-semibold mr-2">Q{index + 1}:</span>
                  {prompt}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* New Reflection */}
        <Card className="shadow-medium">
          <CardHeader>
            <CardTitle>New Reflection Entry</CardTitle>
            <CardDescription>
              What are you thinking about your career journey today?
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Example: I discovered I enjoy tech problem-solving. I want to explore cybersecurity pathways more - the growth rate and salary potential look amazing! Next step: Start learning about network security basics..."
              value={reflection}
              onChange={(e) => setReflection(e.target.value)}
              className="min-h-[200px] text-base"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {reflection.length} characters
              </p>
              <Button 
                onClick={handleSave}
                disabled={!reflection.trim()}
                className="bg-secondary hover:bg-secondary/90"
              >
                <Save className="mr-2 w-4 h-4" />
                Save Reflection
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Previous Reflections */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Previous Reflections
            </CardTitle>
            <CardDescription>
              Look back at your journey and see how far you've come
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {previousReflections.map((entry) => (
              <div 
                key={entry.id} 
                className="p-5 bg-gradient-card rounded-lg border border-border"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="outline">{entry.date}</Badge>
                </div>
                <p className="text-sm leading-relaxed text-foreground/90">
                  {entry.content}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Tips */}
        <Card className="shadow-soft border-secondary/30">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-secondary" />
              Reflection Tips
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Be honest and specific about your thoughts and feelings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Focus on what you've learned and how you've grown</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Set concrete action steps for your next milestones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary">•</span>
                <span>Review past reflections to track your career journey</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Reflection;