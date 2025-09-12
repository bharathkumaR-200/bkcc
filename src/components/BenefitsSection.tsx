import { Target, BarChart3, Lightbulb, Smartphone, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Personalised career recommendations",
    description: "AI-powered matching based on your unique interests, strengths, and aspirations."
  },
  {
    icon: BarChart3,
    title: "Real-time job market insights",
    description: "Up-to-date data on industry trends, salary expectations, and growth opportunities."
  },
  {
    icon: Lightbulb,
    title: "Tools for self-reflection and growth",
    description: "Guided assessments and exercises to help you discover your true potential."
  },
  {
    icon: Smartphone,
    title: "Accessible anytime, anywhere",
    description: "Access your career guidance on any device, whenever you need it most."
  },
  {
    icon: DollarSign,
    title: "Affordable subscription options",
    description: "Student-friendly pricing with flexible plans that fit your budget."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Why Choose Career Compass?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the powerful features that make Career Compass the smartest choice for your career journey.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-primary-light px-6 py-3 rounded-full text-primary font-semibold">
            <span>Ready to explore your future?</span>
            <span className="animate-bounce">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;