import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Compass, GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    studentType: ""
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowConfirmation(true);
    setTimeout(() => {
      navigate("/dashboard");
    }, 2000);
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-6">
        <Card className="max-w-md w-full shadow-strong animate-fade-in">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="relative bg-gradient-hero p-4 rounded-2xl">
                <Compass className="w-12 h-12 text-white" />
                <GraduationCap className="w-6 h-6 text-white absolute -top-1 -right-1" />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold">Welcome to Career Compass! 🎉</CardTitle>
            <CardDescription className="text-base mt-2">
              Your account has been created successfully. Let's start your career journey!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground">Redirecting to your dashboard...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Compass className="w-8 h-8 text-primary" />
              <GraduationCap className="w-5 h-5 text-secondary absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-display font-bold">Career Compass</span>
          </div>
          <Button variant="ghost" onClick={() => navigate("/")}>
            Back to Home
          </Button>
        </div>
      </header>

      {/* Sign Up Form */}
      <div className="flex items-center justify-center py-12 px-6">
        <Card className="max-w-md w-full shadow-medium animate-fade-in">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Create Your Account</CardTitle>
            <CardDescription className="text-center mt-2">
              Join thousands of students discovering their perfect career path
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Sarah Johnson"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="sarah@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="studentType">I am a...</Label>
                <Select
                  value={formData.studentType}
                  onValueChange={(value) => setFormData({ ...formData, studentType: value })}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your student type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high-school">High School Student</SelectItem>
                    <SelectItem value="university">University Student</SelectItem>
                    <SelectItem value="graduate">Recent Graduate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground group"
                size="lg"
              >
                Create My Account
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-4">
              By signing up, you agree to our Terms of Service and Privacy Policy
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;