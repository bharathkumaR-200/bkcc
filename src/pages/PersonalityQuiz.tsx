import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const PersonalityQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "Do you prefer solving problems with data or working with people?",
      options: ["Data-driven analysis", "People-focused collaboration"]
    },
    {
      question: "In group projects, do you tend to lead or support?",
      options: ["Take the lead", "Support the team"]
    },
    {
      question: "Would you rather work on creative projects or structured tasks?",
      options: ["Creative & innovative", "Structured & organized"]
    },
    {
      question: "Do you enjoy working independently or in teams?",
      options: ["Independently", "In teams"]
    },
    {
      question: "Are you more interested in technology or human services?",
      options: ["Technology & systems", "Human services & care"]
    },
    {
      question: "Do you prefer planning ahead or being spontaneous?",
      options: ["Planning ahead", "Being spontaneous"]
    },
    {
      question: "Would you rather analyze information or communicate ideas?",
      options: ["Analyze information", "Communicate ideas"]
    },
    {
      question: "Do you enjoy detail-oriented work or big-picture thinking?",
      options: ["Detail-oriented tasks", "Big-picture strategy"]
    },
    {
      question: "Are you more logical or empathetic in decision-making?",
      options: ["Logical & objective", "Empathetic & considerate"]
    },
    {
      question: "Do you prefer stability or variety in your work?",
      options: ["Stable routine", "Variety & change"]
    }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed - navigate to results
      navigate("/quiz/results", { state: { type: "personality", answers: newAnswers } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-medium animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <CardDescription>Question {currentQuestion + 1} of {questions.length}</CardDescription>
              <span className="text-sm font-semibold text-primary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
            <CardTitle className="text-2xl">Personality Assessment</CardTitle>
            <CardDescription className="text-base">
              {questions[currentQuestion].question}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <Button
                key={index}
                variant={answers[currentQuestion] === option ? "default" : "outline"}
                className="w-full h-auto py-6 text-left justify-start text-base hover:scale-105 transition-transform"
                onClick={() => handleAnswer(option)}
              >
                <div className="flex items-center gap-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                    answers[currentQuestion] === option 
                      ? "bg-primary-foreground text-primary border-primary-foreground" 
                      : "border-muted-foreground"
                  }`}>
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span>{option}</span>
                </div>
              </Button>
            ))}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2" />
                Previous
              </Button>
              {currentQuestion === questions.length - 1 && (
                <Button
                  onClick={() => answers[currentQuestion] && navigate("/quiz/results", { state: { type: "personality", answers } })}
                  disabled={!answers[currentQuestion]}
                  className="bg-secondary hover:bg-secondary/90"
                >
                  See Results
                  <ArrowRight className="ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PersonalityQuiz;