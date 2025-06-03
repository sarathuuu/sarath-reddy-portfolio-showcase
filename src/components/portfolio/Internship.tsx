
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Code } from 'lucide-react';

const Internship = () => {
  return (
    <section id="internship" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Internship Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional experience gained through hands-on Java full-stack development internship
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-900 border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Briefcase className="h-8 w-8 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white mb-2">Java Full Stack Developer Intern</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>2023</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Technology Company</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-400 border-green-400">
                  Completed
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                Gained comprehensive hands-on experience in enterprise-level Java development, 
                working with modern frameworks and contributing to real-world applications 
                that serve actual users and business needs.
              </p>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-white flex items-center">
                  <Code className="h-5 w-5 mr-2 text-blue-400" />
                  Key Responsibilities & Achievements:
                </h4>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Developed and maintained Java-based web applications using Spring Boot framework</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Implemented RESTful APIs and integrated with frontend React components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Worked with database design and optimization using MySQL and JPA/Hibernate</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Collaborated in agile development environment with version control using Git</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Participated in code reviews and followed software development best practices</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-400 mr-3 mt-1">•</span>
                    <span>Gained experience in testing frameworks and debugging enterprise applications</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs', 'Git', 'Maven', 'JPA/Hibernate', 'JavaScript', 'HTML/CSS'].map((tech, idx) => (
                    <Badge key={idx} variant="outline" className="border-blue-400 text-blue-400">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <h4 className="font-semibold text-white mb-2">Learning Outcomes:</h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  This internship provided invaluable real-world experience in software development lifecycle, 
                  team collaboration, and industry-standard practices. It strengthened my technical skills 
                  while developing professional competencies essential for a successful career in software development.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Internship;
