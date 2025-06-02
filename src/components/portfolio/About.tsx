
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, GraduationCap, Code } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A passionate software developer committed to continuous learning and creating impactful solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <User className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Professional Profile</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I'm a dedicated software developer with a strong foundation in Java and full-stack web development. 
                  My journey in technology is driven by curiosity and a genuine passion for solving real-world problems 
                  through innovative software solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Academic Background</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Currently pursuing my degree while actively building practical experience through internships 
                  and personal projects. I believe in learning by doing and constantly expanding my technical horizons.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Code className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Technical Philosophy</h3>
                <p className="text-foreground/80 leading-relaxed">
                  I approach development with a focus on clean, maintainable code and user-centric design. 
                  My experience spans from backend Java development to cybersecurity implementations, 
                  giving me a well-rounded perspective on software architecture.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Internship Experience</h3>
                <div className="space-y-2">
                  <p className="font-medium">Java Full Stack Developer Intern</p>
                  <p className="text-sm text-muted-foreground">2023</p>
                  <p className="text-foreground/80 text-sm leading-relaxed">
                    Gained hands-on experience in enterprise-level Java development, 
                    working with modern frameworks and contributing to real-world applications 
                    that serve actual users and business needs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">Core Interests</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Full-stack web application development</li>
                  <li>• Cybersecurity and system protection</li>
                  <li>• Software architecture and design patterns</li>
                  <li>• Open-source contribution and collaboration</li>
                  <li>• Emerging technologies and industry trends</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-3">What Drives Me</h3>
                <p className="text-foreground/80 text-sm leading-relaxed">
                  I'm motivated by the potential of technology to solve complex problems and improve lives. 
                  Whether it's building secure applications or optimizing system performance, 
                  I approach each challenge with enthusiasm and a commitment to excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
