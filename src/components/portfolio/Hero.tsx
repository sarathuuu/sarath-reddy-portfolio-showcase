
import React from 'react';
import { Button } from '@/components/ui/button';
import { Code, Briefcase, Contact } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/20 pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            Venkata Sarath Kumar Reddy Vippala
          </h1>
          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 font-medium">
            Java Full Stack Developer | Cybersecurity Enthusiast | Problem Solver
          </h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate software developer with expertise in Java, full-stack web development, and cybersecurity. 
            Ready to contribute to innovative solutions and grow with forward-thinking organizations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={() => scrollToSection('projects')}
              size="lg" 
              className="w-full sm:w-auto"
            >
              <Code className="mr-2 h-5 w-5" />
              View My Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              size="lg"
              className="w-full sm:w-auto"
            >
              <Contact className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="mt-16 flex justify-center items-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 mr-2" />
              <span>Java Full Stack Intern 2023</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-border"></div>
            <div>
              <span>Available for Full-time Opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
