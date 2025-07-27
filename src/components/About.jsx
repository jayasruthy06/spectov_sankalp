import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Smartphone, Headphones, Zap } from "lucide-react";

export const About = () => {
  const roles = [
    {
      icon: Headphones,
      title: "AR/VR",
      description: "Spectov is pioneering the future with cutting-edge AR and VR technologies. Our experts create immersive experiences that blend the physical and digital worlds. From virtual training simulations to augmented reality applications, we provide innovative solutions that redefine how users interact with technology."
    },
    {
      icon: Brain,
      title: "Artificial Intelligence", 
      description: "At Spectov, we leverage the power of Artificial Intelligence to transform data into actionable insights. Our AI team specializes in developing intelligent systems that can automate processes, enhance decision-making, and deliver personalized experiences. From machine learning models to natural language processing, we are at the forefront of AI innovation."
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      description: "Our Full Stack Development team at Spectov excels in creating robust and scalable web applications. With expertise in both front-end and back-end technologies, our developers build seamless and efficient systems. Whether it's developing responsive interfaces or designing complex server-side logic, we ensure that our solutions meet the highest standards of performance and usability."
    },
    {
      icon: Smartphone,
      title: "App Development", 
      description: "Spectov's App Development team is dedicated to creating user-friendly and high-performing mobile and web applications. We cover the entire development lifecycle, from concept and design to deployment and maintenance. Our apps are built with the latest technologies and best practices, ensuring they are secure, scalable, and tailored to meet our clients' specific needs."
    },
    {
      icon: Zap,
      title: "Competitive Programmer",
      description: "At Spectov, our focus on Data Structures and Algorithms ensures that our solutions are optimized for efficiency and performance. Our specialists employ advanced DSA techniques to solve complex problems, enabling faster processing and more effective resource management. This foundational expertise is crucial for developing high-performance applications and systems."
    }
  ];

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-in-up">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Careers At <span className="gradient-text">SpectoV</span>
          </h2>
          <p className="text-xl sm:text-2xl text-neon-blue mb-8">
            Empowering Coders, Enabling Dreams
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            At SpectoV Pvt Ltd, we are committed to creating an environment that fosters innovation, learning, and professional growth. Our training programs are designed to bridge the gap between academic learning and industry requirements, ensuring our interns are well-prepared to tackle real-world challenges.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roles.map((role, index) => (
            <Card 
              key={role.title} 
              className="glass-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <role.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="text-xl font-bold gradient-text">{role.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-md">
                  {role.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};