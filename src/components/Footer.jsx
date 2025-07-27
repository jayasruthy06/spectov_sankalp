import { Instagram, Twitter, Linkedin } from "lucide-react";
import logo from "../assets/1709701994370.jpeg";
export const Footer = () => {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-glass-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div>
              <img src={logo} className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg"></img>
            </div>
              <span className="text-xl font-bold text-white">SpectoV</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:neon-glow hover:scale-110 transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-neon-blue transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:neon-glow hover:scale-110 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-muted-foreground group-hover:text-neon-cyan transition-colors" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-lg glass flex items-center justify-center hover:neon-glow hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-neon-purple transition-colors" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              © 2025 <span className="gradient-text font-semibold">SpectoV</span> – All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};