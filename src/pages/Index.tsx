
import React from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Internship from '@/components/portfolio/Internship';
import Projects from '@/components/portfolio/Projects';
import Certifications from '@/components/portfolio/Certifications';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
