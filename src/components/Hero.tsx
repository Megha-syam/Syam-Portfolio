
import React from "react";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex flex-col justify-center items-center text-center">
          <h2 className="text-lg font-medium text-primary mb-2 opacity-90">
            Hello, I'm
          </h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-navy font-heading leading-tight">
            Megha Syam
          </h1>
          <p className="text-xl mb-6 text-foreground/80 max-w-lg">
            Building Scalable Web Applications | Data Analytics Enthusiast | Full Stack Developer
          </p>
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Button asChild>
              <a href="#projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/resume.pdf" download>
                Download CV <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/kambhampati"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/kambhampati"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full border border-border hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
