import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Trophy } from "lucide-react";

export const Contests = () => {
  const contests = [
    {
      title: "Sankalp Coding Contest 1",
      date: "September 22, 2024",
      startTime: "19:30",
      endTime: "20:30 PM",
      status: "completed"
    },
    {
      title: "Sankalp Contest 2", 
      date: "September 22, 2024",
      startTime: "22:40 PM",
      endTime: "23:40 PM", 
      status: "completed"
    },
    {
      title: "Sankalp Mock Contest",
      date: "July 28, 2025", // Example: Tomorrow's date
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      status: "upcoming" // Example upcoming contest
    },
    {
      title: "Weekly Challenge",
      date: "July 27, 2025", // Example: Today's date
      startTime: "09:00 AM", // Example: Start time before current time
      endTime: "10:00 AM",   // Example: End time after current time
      status: "live" // Example live contest
    }
  ];

  const getStatusBadge = (status) => {
    let colorClass = "";
    let text = "";
    switch (status) {
      case "completed":
        colorClass = "bg-gray-500";
        text = "Completed";
        break;
      case "upcoming":
        colorClass = "bg-blue-500";
        text = "Upcoming";
        break;
      case "live":
        colorClass = "bg-green-500"; // Added a pulse animation for live
        text = "Live";
        break;
      default:
        colorClass = "bg-gray-400";
        text = "Unknown";
    }
    return (
      <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${colorClass} text-white`}>
        {text}
      </span>
    );
  };

  return (
    <section id="contests" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 gradient-text">
            Contests
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contests.map((contest, index) => (
            <Card 
              key={contest.title}
              className="glass-card group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4"> {/* Added justify-between */}
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <Trophy className="w-6 h-6 text-background" />
                    </div>
                    <h3 className="text-xl font-bold gradient-text">{contest.title}</h3>
                  </div>
                  {getStatusBadge(contest.status)} {/* Display status badge */}
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-neon-blue" />
                    {contest.date}
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-neon-cyan" />
                    Start: {contest.startTime} – End: {contest.endTime}
                  </div>
                </div>
                
                {contest.status === "completed" && (
                  <Button 
                    variant="glass" 
                    className="w-full group-hover:neon-glow group-hover:border-neon-blue/70 transition-all duration-300"
                  >
                    Show Result
                  </Button>
                )}
                {contest.status === "upcoming" && (
                  <Button 
                    variant="glass" 
                    className="w-full cursor-not-allowed opacity-70"
                    disabled
                  >
                    Upcoming
                  </Button>
                )}
                {contest.status === "live" && (
                  <Button 
                    variant="glass" 
                    className="w-full neon-glow border-green-500/70 animate-pulse duration-20" // Added bounce animation for live button
                  >
                    Join Contest
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};