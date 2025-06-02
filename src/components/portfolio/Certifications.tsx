
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Code, Settings, FileText } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "Java Programming Certification",
      issuer: "Oracle/Academic Institution",
      status: "Completed",
      type: "Programming",
      description: "Comprehensive certification covering Java fundamentals, OOP concepts, and advanced programming techniques."
    },
    {
      title: "Full Stack Web Development",
      issuer: "Industry Training Program",
      status: "Completed",
      type: "Web Development",
      description: "Hands-on training in modern web development technologies including React, Node.js, and database management."
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "Cybersecurity Institute",
      status: "In Progress",
      type: "Security",
      description: "Comprehensive training in network security, vulnerability assessment, and security best practices."
    },
    {
      title: "Spring Framework Certification",
      issuer: "Spring Academy",
      status: "Planned",
      type: "Framework",
      description: "Advanced certification focusing on Spring Boot, Spring Security, and enterprise application development."
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Programming":
        return Code;
      case "Security":
        return Settings;
      case "Web Development":
        return GraduationCap;
      case "Framework":
        return FileText;
      default:
        return GraduationCap;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 hover:bg-green-600";
      case "In Progress":
        return "bg-blue-500 hover:bg-blue-600";
      case "Planned":
        return "bg-gray-500 hover:bg-gray-600";
      default:
        return "bg-gray-500 hover:bg-gray-600";
    }
  };

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & Learning</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous professional development through structured learning and industry-recognized certifications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = getIcon(cert.type);
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3">
                      <IconComponent className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <CardTitle className="text-lg leading-tight">{cert.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(cert.status)}>
                      {cert.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/80 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="mt-3">
                    <Badge variant="outline" className="text-xs">
                      {cert.type}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 max-w-2xl mx-auto">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Learning Philosophy</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-foreground/80 leading-relaxed mb-4">
                I believe in continuous learning and staying updated with the latest industry trends. 
                Each certification represents not just academic achievement, but practical skills 
                that I can apply to real-world challenges.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100+</div>
                  <div className="text-xs text-muted-foreground">Learning Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">4</div>
                  <div className="text-xs text-muted-foreground">Skill Areas</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
