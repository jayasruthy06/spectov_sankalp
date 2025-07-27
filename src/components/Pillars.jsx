import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Lightbulb, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const Pillars = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const pillars = [
    {
      icon: BookOpen,
      title: "Learn",
      description: "At Spectov, continuous learning is at the heart of our culture. We believe that staying ahead in the tech industry requires constant knowledge acquisition and skill development. Our team members are encouraged to pursue new learning opportunities, from formal education and certifications to on-the-job training and knowledge sharing sessions. By fostering a learning environment, we ensure that our team remains at the cutting edge of technology ready to tackle any challenge with fresh perspectives and advanced skills.",
      color: "from-neon-blue to-neon-cyan"
    },
    {
      icon: Lightbulb,
      title: "Innovate", 
      description: "Innovation drives everything we do at Spectov. We are committed to pushing the boundaries of technology and developing creative solutions that address real-world problems. Our innovative spirit is fueled by curiosity and a passion for discovery. Whether it's through pioneering AI applications, developing state-of-the-art AR/VR experiences, or crafting advanced full stack solutions, we strive to break new ground and deliver transformative results. Our culture of innovation empowers our team to think boldly and execute brilliantly.",
      color: "from-neon-purple to-neon-cyan"
    },
    {
      icon: TrendingUp,
      title: "Grow",
      description: "Growth is the ultimate goal at Spectov, not just for our company, but for our clients and our team members. We aim to foster an environment where everyone can thrive and achieve their full potential. This means providing ample opportunities for professional development, encouraging career advancement, and supporting personal growth. For our clients, we focus on delivering scalable solutions that enable their businesses to expand and succeed in a competitive market. At Spectov, growth is a shared journey of success and continuous improvement.",
      color: "from-neon-cyan to-neon-purple"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 300); // Staggered animation
          }
        });
      },
      { threshold: 0.2 }
    );

    pillars.forEach((_, index) => {
      const element = document.getElementById(`pillar-${index}`);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-neon-blue rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/2 right-20 w-3 h-3 bg-neon-cyan rounded-full float opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-neon-purple rounded-full glow-pulse"></div>
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text animate-slide-in-up">
            Our Pillars
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto animate-slide-in-up" style={{ animationDelay: '200ms' }}></div>
        </div>

        <div className="space-y-20">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              id={`pillar-${index}`}
              data-index={index}
              className={`transform transition-all duration-1000 ease-out ${
                visibleCards.includes(index) 
                  ? 'translate-y-0 opacity-100 rotate-0 scale-100' 
                  : 'translate-y-20 opacity-0 rotate-3 scale-95'
              }`}
            >
              <Card className={`glass-card max-w-5xl mx-auto relative overflow-hidden group ${
                visibleCards.includes(index) ? 'animate-pulse-glow' : ''
              }`}>
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Floating icon background */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                  <pillar.icon className="w-32 h-32 text-neon-blue" />
                </div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-8">
                    {/* Icon with enhanced animation */}
                    <div className="flex-shrink-0 relative">
                      <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${pillar.color} flex items-center justify-center group-hover:scale-110 transition-all duration-500 relative z-10`}>
                        <pillar.icon className="w-10 h-10 text-background" />
                      </div>
                      {/* Pulsing ring effect */}
                      <div className={`absolute inset-0 w-20 h-20 rounded-3xl bg-gradient-to-r ${pillar.color} opacity-30 group-hover:animate-none`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl lg:text-4xl font-bold gradient-text mb-6 group-hover:scale-105 transition-transform duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-300">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </CardContent>

                {/* Hover effect border */}
                <div className={`absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${pillar.color} opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};