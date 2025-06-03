
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Contact as ContactIcon, Mail, User, Download } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Job Opportunity / Project Collaboration');
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\n` +
      `Email: ${formData.email}\n` +
      `Company: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:venkatasarathkumarreddyvippala@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setTimeout(() => {
      toast({
        title: "Email Client Opened!",
        description: "Your email client should now be open with the pre-filled message.",
      });
      setIsSubmitting(false);
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume file path
    link.download = 'Venkata_Sarath_Kumar_Reddy_Resume.pdf';
    link.click();
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Ready to discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <ContactIcon className="h-6 w-6 text-blue-400" />
                  Let's Connect
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  I'm actively seeking opportunities as a Java Full Stack Developer where I can contribute 
                  to meaningful projects and continue growing professionally. Whether you're a recruiter, 
                  fellow developer, or someone with an exciting project idea, I'd love to hear from you.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                    <User className="h-5 w-5 text-blue-400" />
                    <span className="font-medium text-white">Venkata Sarath Kumar Reddy Vippala</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-gray-300">venkatasarathkumarreddyvippala@gmail.com</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="font-semibold mb-3 text-white">What I'm Looking For:</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Entry-level to junior Java Developer positions</li>
                    <li>• Full Stack Development opportunities</li>
                    <li>• Cybersecurity-focused roles</li>
                    <li>• Collaborative team environments</li>
                    <li>• Companies that value continuous learning</li>
                  </ul>
                </div>

                <div className="border-t border-gray-700 pt-6">
                  <h3 className="font-semibold mb-3 text-white">Open to:</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Full-time</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Contract</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Remote</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Hybrid</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-300">First Name</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="John" 
                        required 
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-gray-300">Last Name</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Doe" 
                        required 
                        className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-300">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required 
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-300">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company" 
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-gray-300">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Job Opportunity / Project Collaboration" 
                      required 
                      className="bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-gray-300">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="min-h-[100px] bg-gray-800 border-gray-600 text-white placeholder-gray-400"
                      placeholder="Tell me about the opportunity or project you'd like to discuss..."
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                    {isSubmitting ? "Opening Email Client..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5 bg-gray-900">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4 text-white">Ready to Start Something Great?</h3>
              <p className="text-gray-300 mb-6">
                I'm excited about the possibility of contributing to your team and helping build 
                innovative solutions that make a real impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleResumeDownload}>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
                <Button variant="outline" size="lg" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-gray-900">
                  Schedule a Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
