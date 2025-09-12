import { Button } from "@/components/ui/button";
import { Compass, GraduationCap, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle flex items-center justify-center px-6 py-12">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <Compass className="w-10 h-10 text-primary" />
              <GraduationCap className="w-6 h-6 text-secondary absolute -top-1 -right-1" />
            </div>
            <span className="text-xl font-display font-semibold text-foreground">Career Compass</span>
          </div>

          {/* Main Headlines */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-display font-bold leading-tight">
              <span className="text-foreground">Career Compass:</span>
              <br />
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Your AI-Powered Career Guide
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed">
              Helping students make confident career choices with personalised, data-driven insights.
            </p>
          </div>

          {/* Benefit Summary */}
          <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft border border-border/50">
            <p className="text-lg text-foreground leading-relaxed">
              A smart, AI-powered career counsellor that matches your interests, strengths, and skills 
              with real-world opportunities—so you can choose your next step with confidence.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              variant="cta" 
              size="lg" 
              className="group"
            >
              Sign up for early access today!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              <span>Australian students focused</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <span>AI-powered insights</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Trusted by educators</span>
            </div>
          </div>
        </div>

        {/* Right Column - Hero Image */}
        <div className="relative animate-fade-in lg:animate-float">
          <div className="relative rounded-3xl overflow-hidden shadow-strong">
            <img 
              src={heroImage} 
              alt="Student using Career Compass AI dashboard with career pathway visualizations" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-secondary/10"></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-float">
            AI-Powered ✨
          </div>
          <div className="absolute -bottom-4 -left-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-medium animate-float" style={{ animationDelay: '1s' }}>
            For Students 🎓
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;