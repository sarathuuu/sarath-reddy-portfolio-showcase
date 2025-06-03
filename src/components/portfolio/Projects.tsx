
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Code, Settings, ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Java Chess Game",
      description: "A fully functional chess game built with Java Swing featuring complete game logic, move validation, checkmate detection, and an intuitive graphical user interface. Demonstrates advanced object-oriented programming principles and complex algorithm implementation.",
      image: "photo-1606092195730-5d7b9af1efc5",
      technologies: ["Java", "Swing", "OOP", "Game Logic", "Algorithm Design", "GUI Development"],
      highlights: [
        "Complete chess rule implementation with all piece movements",
        "Advanced move validation and game state management",
        "Checkmate and stalemate detection algorithms",
        "Clean, maintainable code architecture with design patterns",
        "User-friendly graphical interface with drag-and-drop functionality"
      ],
      type: "Development",
      githubLink: "#",
      liveLink: "#"
    },
    {
      title: "IT Monitoring Home Lab",
      description: "A comprehensive home laboratory setup for monitoring IT infrastructure, implementing security protocols, and testing cybersecurity measures using Linux systems and networking tools. Showcases practical knowledge of network security and system administration.",
      image: "photo-1605810230434-7631ac76ec81",
      technologies: ["Linux", "Network Security", "Monitoring Tools", "System Administration", "Security Protocols", "Bash Scripting"],
      highlights: [
        "Real-time system monitoring with custom dashboards",
        "Network traffic analysis and intrusion detection",
        "Automated security vulnerability assessments",
        "Log aggregation and analysis with alerting systems",
        "Performance monitoring and capacity planning tools"
      ],
      type: "Cybersecurity",
      githubLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing practical applications of my technical skills through real-world projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-blue-500/50">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <img
                    src={`https://images.unsplash.com/${project.image}?w=800&h=450&fit=crop`}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
                <div className="absolute top-4 left-4">
                  <Badge className={project.type === "Development" ? "bg-blue-500/90" : "bg-purple-500/90"}>
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
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-white">Key Highlights:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-blue-400 mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gray-600 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 flex gap-3">
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700" size="sm">
                    <Github className="w-4 h-4 mr-2" />
                    Source Code
                  </Button>
                  <Button variant="outline" className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-700" size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            More projects available on my GitHub profile
          </p>
          <Button variant="outline" size="lg" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900">
            <Code className="mr-2 h-4 w-4" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
