import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from './components/Navigation';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Resume from './components/Resume';
import SocialLinks from './components/SocialLinks';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-x-hidden">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <Navigation 
        activeSection={activeSection} 
        scrollToSection={scrollToSection}
      />
      
      <main className="relative z-10">
        {/* About Section (Home) */}
        <section id="home" className="min-h-screen">
          <About />
        </section>

        {/* Skills Section */}
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>

        {/* Experience Section */}
        <section id="experience" className="min-h-screen">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>

      <SocialLinks />
    </div>
  );
}

export default App;