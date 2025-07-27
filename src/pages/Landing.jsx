import { Header } from "../components/Header.jsx";
import { Hero } from "../components/Hero.jsx";
import { About } from "@/components/About.jsx";
import { VideoSection } from "@/components/VideoSection.jsx";
import { Pillars } from "@/components/Pillars.jsx";
import { Timeline } from "@/components/Timeline.jsx";
import { Testimonials } from "@/components/Testimonials.jsx";
import { Courses } from "@/components/Courses.jsx";
import { Contests } from "@/components/Contests.jsx";
import { Footer } from "@/components/Footer.jsx";
import { CallToAction } from "../components/CallToAction.jsx";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoSection />
        <Pillars />
        <Timeline />
        <Testimonials />
        <Courses />
        <Contests />
        <CallToAction/>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;