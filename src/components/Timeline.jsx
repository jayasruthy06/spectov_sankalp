import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award, Briefcase, Users } from "lucide-react";
import { useEffect, useState } from "react";

export const Timeline = () => {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const [lineProgress, setLineProgress] = useState(0);

  const timelineSteps = [
    {
      icon: BookOpen,
      title: "Comprehensive Training Program",
      description: "Embark on your journey with our intensive training program, designed to equip you with essential skills across various courses. Upon completion, you will undergo an interview and project review. Successful candidates will then be selected for a prestigious paid internship.",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      icon: Award, 
      title: "Global Certification and Goodies",
      description: "Receive a globally recognized certification and a selection of exclusive goodies. Spectov, in partnership with Microsoft, is committed to providing top-tier services and ensuring you receive the best in industry standards.",
      color: "from-neon-cyan to-neon-purple"
    },
    {
      icon: Briefcase,
      title: "Paid Internship Opportunity", 
      description: "Secure a paid internship with a stipend of up to ₹10,000. With a 100% chance of landing this opportunity, you will gain invaluable experience and further develop your professional skills in a real-world setting.",
      color: "from-neon-purple to-neon-blue"
    },
    {
      icon: Users,
      title: "Full-Time Employment Potential",
      description: "Impress us with your dedication and exceptional work during your internship, and you will be considered for a full-time position at Spectov. We are always on the lookout for talented individuals to join our team permanently.",
      color: "from-neon-blue to-neon-purple"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setVisibleSteps(prev => [...prev, index]);
              // Update line progress
              setLineProgress(((index + 1) / timelineSteps.length) * 100);
            }, index * 400); // Staggered reveal
          }
        });
      },
      { threshold: 0.3 }
    );

    timelineSteps.forEach((_, index) => {
      const element = document.getElementById(`timeline-step-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [timelineSteps.length]);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-neon-blue rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-neon-cyan rounded-full float opacity-30"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-neon-purple rounded-full glow-pulse opacity-40"></div>
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 pb-3 gradient-text animate-slide-in-up">
            Our Training Program
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto animate-slide-in-up" style={{ animationDelay: '200ms' }}></div>
        </div>

        <div className="relative">
          {/* Animated vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-glass-border/30 transform md:-translate-x-1/2">
            <div 
              className="w-full bg-gradient-to-b from-neon-blue via-neon-cyan to-neon-purple transition-all duration-1000 ease-out"
              style={{ height: `${lineProgress}%` }}
            ></div>
          </div>

          {timelineSteps.map((step, index) => (
            <div 
              key={step.title} 
              id={`timeline-step-${index}`}
              data-index={index}
              className="relative mb-12 last:mb-0"
            >
              {/* Animated timeline dot */}
              <div className={`absolute left-0 md:left-1/2 w-12 h-12 rounded-2xl flex items-center justify-center transform md:-translate-x-1/2 transition-all duration-500 ${
                visibleSteps.includes(index) 
                  ? 'scale-100 opacity-100' 
                  : 'scale-50 opacity-0'
              }`}>
                <div className={`w-full h-full bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center glow-pulse relative`}>
                  <step.icon className="w-6 h-6 text-background relative z-10" />
                  {/* Pulsing ring */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl opacity-50 animate-ping`}></div>
                </div>
              </div>

              {/* Content card with enhanced animation */}
              <div className={`ml-16 md:ml-0 md:w-5/12 transition-all duration-700 ease-out ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } ${
                visibleSteps.includes(index) 
                  ? 'translate-y-0 opacity-100 rotate-0' 
                  : `translate-y-10 opacity-0 ${index % 2 === 0 ? 'rotate-2' : '-rotate-2'}`
              }`}>
                <Card className="glass-card group relative overflow-hidden">
                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Floating icon in background */}
                  <div className="absolute top-2 right-2 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <step.icon className="w-16 h-16 text-neon-blue" />
                  </div>

                  <CardContent className="p-6 relative z-10">
                    <h3 className="text-xl font-bold gradient-text mb-4 group-hover:scale-105 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-md leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {step.description}
                    </p>
                    
                    {/* Step number indicator */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center text-background font-bold text-sm">
                      {index + 1}
                    </div>
                  </CardContent>

                  {/* Animated border on hover */}
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-neon-blue/30 transition-all duration-300"></div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Completion indicator */}
        <div className={`text-center mt-12 transition-all duration-1000 ${
          lineProgress === 100 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}>
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3">
            <div className="w-3 h-3 bg-neon-cyan rounded-full glow-pulse"></div>
            <span className="text-sm gradient-text font-semibold">Journey Complete!</span>
          </div>
        </div>
      </div>
    </section>
  );
};