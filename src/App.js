import React from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import IntroSection from './components/IntroSection';
import PortfolioFooter from './components/PortfolioFooter';
import PortfolioNavbar from './components/PortfolioNavbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';


const App = () => {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <IntroSection />
        <div className="divider"/>
        <SkillsSection />
        <div className="divider"/>
        <ProjectsSection />
        <div className="divider"/>
        <AboutSection />
        <div className="divider"/>
        <ContactSection />
      </main>
      <PortfolioFooter />
    </>
  );
}

export default App;
