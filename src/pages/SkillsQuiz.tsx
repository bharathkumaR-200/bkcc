import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

const SkillsQuiz = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>(new Array(10).fill(3));

  const questions = [
    { skill: "Problem Solving", description: "Analyzing complex issues and finding solutions" },
    { skill: "Communication", description: "Expressing ideas clearly and effectively" },
    { skill: "Technical Skills", description: "Working with technology, software, or tools" },
    { skill: "Creativity", description: "Generating innovative ideas and solutions" },
    { skill: "Leadership", description: "Guiding and motivating others" },
    { skill: "Teamwork", description: "Collaborating effectively with others" },
    { skill: "Time Management", description: "Organizing and prioritizing tasks efficiently" },
    { skill: "Critical Thinking", description: "Evaluating information objectively" },
    { skill: "Adaptability", description: "Adjusting to new situations and challenges" },
    { skill: "Research Skills", description: "Finding and analyzing information" }
  ];

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz completed
      navigate("/quiz/results", { state: { type: "skills", answers } });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSliderChange = (value: number[]) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value[0];
    setAnswers(newAnswers);
  };

  const skillLabels = ["Beginner", "Learning", "Intermediate", "Proficient", "Expert"];

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <Card className="shadow-medium animate-fade-in">
          <CardHeader>
            <div className="flex items-center justify-between mb-2">
              <CardDescription>Skill {currentQuestion + 1} of {questions.length}</CardDescription>
              <span className="text-sm font-semibold text-secondary">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2 mb-4" />
            <CardTitle className="text-2xl">Skills Assessment</CardTitle>
            <CardDescription className="text-base">
              Rate your current level in each skill area
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {questions[currentQuestion].skill}
                </h3>
                <p className="text-muted-foreground">
                  {questions[currentQuestion].description}
                </p>
              </div>

              <div className="space-y-6 py-8">
                <Slider
                  value={[answers[currentQuestion]]}
                  onValueChange={handleSliderChange}
                  min={1}
                  max={5}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm">
                  {skillLabels.map((label, index) => (
                    <span
                      key={index}
                      className={`text-center ${
                        answers[currentQuestion] === index + 1
                          ? "text-primary font-semibold"
                          : "text-muted-foreground"
                      }`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-accent/50 rounded-lg p-4 text-center">
                <p className="font-semibold text-lg text-primary">
                  Current Rating: {skillLabels[answers[currentQuestion] - 1]}
                </p>
              </div>
            </div>

            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="ghost"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                <ArrowLeft className="mr-2" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                className={currentQuestion === questions.length - 1 ? "bg-secondary hover:bg-secondary/90" : ""}
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default SkillsQuiz;