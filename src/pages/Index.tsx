
import React from 'react';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Certifications from '@/components/portfolio/Certifications';
import Contact from '@/components/portfolio/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
