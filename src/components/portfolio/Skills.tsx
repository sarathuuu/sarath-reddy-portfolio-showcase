
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Settings, Briefcase } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Java", "JavaScript", "Python", "SQL", "HTML5", "CSS3", "TypeScript"]
    },
    {
      title: "Frameworks & Technologies",
      icon: Settings,
      skills: ["Spring Boot", "React", "Node.js", "Express.js", "REST APIs", "Hibernate", "JPA"]
    },
    {
      title: "Tools & Platforms",
      icon: Briefcase,
      skills: ["Git", "Maven", "Docker", "MySQL", "PostgreSQL", "Linux", "IntelliJ IDEA"]
    }
  ];

  const cybersecuritySkills = [
    "Network Security", "Vulnerability Assessment", "IT Monitoring", 
    "Security Protocols", "System Hardening", "Incident Response"
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through academic learning, internship experience, and personal projects
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <category.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Cybersecurity Focus */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl flex items-center justify-center gap-2">
                <Settings className="h-8 w-8 text-primary" />
                Cybersecurity Expertise
              </CardTitle>
              <p className="text-muted-foreground">
                Specialized knowledge in security practices and IT infrastructure monitoring
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {cybersecuritySkills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-background/50">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Proficiency Levels */}
        <div className="mt-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-6">Proficiency Highlights</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
              <span className="font-medium">Java Development</span>
              <Badge className="bg-green-500 hover:bg-green-600">Advanced</Badge>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
              <span className="font-medium">Full Stack Development</span>
              <Badge className="bg-blue-500 hover:bg-blue-600">Proficient</Badge>
            </div>
            <div className="flex justify-between items-center p-4 rounded-lg bg-muted/50">
              <span className="font-medium">Cybersecurity</span>
              <Badge className="bg-purple-500 hover:bg-purple-600">Intermediate</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
