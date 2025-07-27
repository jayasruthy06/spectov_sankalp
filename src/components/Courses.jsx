import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import aiCourse from "@/assets/ai-course.jpg";
import arCourse from "@/assets/ar-course.jpg";
import fullstackCourse from "@/assets/fullstack-course.jpg";
import appDevCourse from "@/assets/app-dev-course.jpg";
import augmentedReality from "@/assets/augmented-reality.png";
import datastructures from "@/assets/datastructures.png";
import fullstack from "@/assets/fullstack.png";
import fullstackdsa from "@/assets/fullstackdsa.png";

export const Courses = () => {
  const courses = [
    {
      title: "SpectoV Special",
      image: fullstackCourse,
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "Artificial Intelligence", 
      image: aiCourse,
      gradient: "from-neon-purple to-neon-blue"
    },
    {
      title: "Augmented Reality",
      image: augmentedReality, 
      gradient: "from-neon-cyan to-neon-purple"
    },
    {
      title: "Logic Building and DSA",
      image: datastructures,
      gradient: "from-neon-blue to-neon-purple"
    },
    {
      title: "DSA and Full Stack Dev",
      image: fullstackdsa,
      gradient: "from-neon-cyan to-neon-blue" 
    },
    {
      title: "Artificial Int and AR / VR",
      image: arCourse,
      gradient: "from-neon-purple to-neon-cyan"
    },
    {
      title: "Full Stack Development", 
      image: fullstack,
      gradient: "from-neon-blue to-neon-cyan"
    },
    {
      title: "App Development",
      image: appDevCourse,
      gradient: "from-neon-cyan to-neon-purple"
    }
  ];

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Check out our Courses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card 
              key={course.title}
              className="glass-card group hover:scale-105 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-lg font-bold gradient-text mb-4 min-h-[3rem] flex items-center">
                  {course.title}
                </h3>
                <Button 
                  variant="glass" 
                  className="w-full group-hover:neon-glow group-hover:border-neon-blue/70 transition-all duration-300"
                >
                  Enroll Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};