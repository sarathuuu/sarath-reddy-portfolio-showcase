
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Contact as ContactIcon, LinkedinIcon, User } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ContactIcon className="h-6 w-6 text-primary" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-foreground/80 leading-relaxed">
                  I'm actively seeking opportunities as a Java Full Stack Developer where I can contribute 
                  to meaningful projects and continue growing professionally. Whether you're a recruiter, 
                  fellow developer, or someone with an exciting project idea, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-background">
                    <User className="h-5 w-5 text-primary" />
                    <span className="font-medium">Venkata Sarath Kumar Reddy Vippala</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-background">
                    <LinkedinIcon className="h-5 w-5 text-primary" />
                    <span>LinkedIn Profile Available</span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">What I'm Looking For:</h3>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Entry-level to junior Java Developer positions</li>
                    <li>• Full Stack Development opportunities</li>
                    <li>• Cybersecurity-focused roles</li>
                    <li>• Collaborative team environments</li>
                    <li>• Companies that value continuous learning</li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-3">Open to:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Full-time</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Contract</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Remote</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Hybrid</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Your Company" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Job Opportunity / Project Collaboration" required />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Tell me about the opportunity or project you'd like to discuss..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-blue-500/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Start Something Great?</h3>
              <p className="text-foreground/80 mb-6">
                I'm excited about the possibility of contributing to your team and helping build 
                innovative solutions that make a real impact.
              </p>
              <Button size="lg" className="mr-4">
                Download Resume
              </Button>
              <Button variant="outline" size="lg">
                Schedule a Call
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
