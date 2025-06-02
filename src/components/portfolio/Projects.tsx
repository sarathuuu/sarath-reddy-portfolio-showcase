
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Code, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Java-based Chess Game",
      description: "A comprehensive chess game implementation featuring complete game logic, move validation, and an intuitive user interface. Demonstrates object-oriented programming principles and complex algorithm implementation.",
      image: "photo-1486312338219-ce68d2c6f44d",
      technologies: ["Java", "Swing/JavaFX", "OOP", "Game Logic", "Algorithm Design"],
      highlights: [
        "Complete chess rule implementation",
        "Move validation and game state management",
        "Clean, maintainable code architecture",
        "User-friendly graphical interface"
      ],
      type: "Development"
    },
    {
      title: "IT Monitoring Home Lab",
      description: "A sophisticated home laboratory setup for monitoring IT infrastructure, implementing security protocols, and testing cybersecurity measures. Showcases practical knowledge of network security and system administration.",
      image: "photo-1605810230434-7631ac76ec81",
      technologies: ["Network Security", "Linux", "Monitoring Tools", "System Administration", "Security Protocols"],
      highlights: [
        "Real-time system monitoring implementation",
        "Security vulnerability assessment",
        "Network traffic analysis and logging",
        "Automated alert and response systems"
      ],
      type: "Cybersecurity"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing practical applications of my technical skills through real-world projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://images.unsplash.com/${project.image}?w=800&h=450&fit=crop`}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute top-4 left-4">
                  <Badge className={project.type === "Development" ? "bg-blue-500" : "bg-purple-500"}>
                    {project.type === "Development" ? (
                      <Code className="w-3 h-3 mr-1" />
                    ) : (
                      <Settings className="w-3 h-3 mr-1" />
                    )}
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Key Highlights:</h4>
                  <ul className="text-sm text-foreground/80 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4">
                  <Button className="w-full" variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects available upon request
          </p>
          <Button variant="outline" size="lg">
            <Code className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
