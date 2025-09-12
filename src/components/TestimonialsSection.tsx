import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Career Compass gave me clarity when I was overwhelmed with choices.",
    author: "Sarah Chen",
    role: "Final-Year Student",
    university: "University of Sydney",
    rating: 5
  },
  {
    quote: "This tool has transformed how I guide students.",
    author: "Dr. Michael Thompson",
    role: "Career Counsellor",
    university: "Griffith University",
    rating: 5
  },
  {
    quote: "As a parent, I feel reassured knowing my child has structured guidance.",
    author: "Jennifer Wilson",
    role: "Parent",
    university: "Supporting daughter at QUT",
    rating: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Trusted by Students & Educators
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how Career Compass is already making a difference in students' lives across Australia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                <p className="text-lg text-foreground leading-relaxed italic pl-6">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-border pt-4">
                <h4 className="font-display font-semibold text-foreground">
                  {testimonial.author}
                </h4>
                <p className="text-primary font-medium">
                  {testimonial.role}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.university}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent">
              1000+
            </div>
            <p className="text-muted-foreground">Students Guided</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent">
              95%
            </div>
            <p className="text-muted-foreground">Satisfaction Rate</p>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-display font-bold bg-gradient-hero bg-clip-text text-transparent">
              50+
            </div>
            <p className="text-muted-foreground">Partner Universities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;