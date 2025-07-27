import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('careers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-blue rounded-full glow-pulse" />
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-neon-cyan rounded-full glow-pulse float" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-purple rounded-full glow-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-slide-in-up">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block neon-text">SANKALP</span>
            <span className="block gradient-text">TRAINING PROGRAM</span>
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Bridging silence, building connections
          </p>
          
          <Button 
            variant="neon" 
            size="lg" 
            onClick={scrollToAbout}
            className="text-lg px-8 py-4 h-auto group"
          >
            Read More
            <ChevronDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neon-blue" />
      </div>
    </section>
  );
};