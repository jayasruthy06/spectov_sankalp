import { Button } from "@/components/ui/button";
import { Sparkles, Rocket, ArrowRight } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background with gradient and glow effects */}
      <div className="absolute inset-0 gradient-hero"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-blue/5 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-neon-cyan rounded-full animate-pulse float"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-neon-blue rounded-full animate-pulse glow-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-neon-purple rounded-full animate-pulse float"></div>
        <div className="absolute top-60 right-1/3 w-1.5 h-1.5 bg-neon-cyan rounded-full animate-pulse"></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center animate-pulse-glow">
              <Rocket className="w-10 h-10 text-background" />
            </div>
            <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-neon-cyan animate-pulse" />
          </div>
        </div>

        {/* Main heading */}
        <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-scale">
          <span className="gradient-text">Ready to Take the Leap?</span>
        </h2>

        {/* Description */}
        <div className="space-y-6 mb-12 animate-slide-in-up">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Whether you're a passionate beginner or an experienced innovator, this is your opportunity to be part of something impactful. By joining us, you'll not only grow your skills but also contribute to meaningful projects, connect with a driven community, and unlock exciting possibilities for your future.
          </p>
          
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-semibold neon-text">
              Don't just watch innovation happen - be the one who drives it.
            </p>
            <p className="text-lg text-foreground">
              Apply now and start your journey with us.
            </p>
           
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center animate-bounce-in">
          <Button 
            variant="neon" 
            size="lg"
            className="text-lg px-12 py-6 rounded-full group shadow-2xl"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Urgency indicator */}
        <div className="mt-8 animate-fade-in-scale">
          <div className="inline-flex items-center gap-2 glass-card px-6 py-3 rounded-full">
            <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-foreground">Limited spots available</span>
          </div>
        </div>
      </div>

      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-gradient-to-t from-neon-blue/20 to-transparent blur-3xl"></div>
    </section>
  );
};