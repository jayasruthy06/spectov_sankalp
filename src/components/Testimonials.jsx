import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Aarav R.",
      role: "Full Stack Intern",
      quote: "SpectoV transformed my career. I gained real-world skills and landed a full-time job!",
      initials: "AR"
    },
    {
      name: "Meera V.", 
      role: "AR Developer",
      quote: "The Sankalp program gave me exposure to AR/VR like never before!",
      initials: "MV"
    },
    {
      name: "Rohan S.",
      role: "AI Specialist", 
      quote: "The mentorship and hands-on projects at SpectoV accelerated my learning journey exponentially.",
      initials: "RS"
    }
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 pb-2 gradient-text">
            What Our Students Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="glass-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-neon-blue mr-3 opacity-60" />
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="w-12 h-12 mr-4 ring-2 ring-neon-blue/30">
                    <AvatarFallback className="bg-gradient-to-r from-neon-blue to-neon-cyan text-background font-semibold">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold gradient-text">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};