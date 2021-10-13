import React from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import IntroSection from './components/IntroSection';
import PortfolioFooter from './components/PortfolioFooter';
import PortfolioNavbar from './components/PortfolioNavbar';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import Devider from './components/Divider';
import Container from 'react-bootstrap/Container';


const App = () => {
  return (
    <>
      <PortfolioNavbar />
      <main>
        <Container>
        <IntroSection />
        <Devider/>
        <SkillsSection />
        <Devider/>
        <ProjectsSection />
        <Devider/>
        <AboutSection />
        <Devider/>
        <ContactSection />
        </Container>
      </main>
      <PortfolioFooter />
    </>
  );
}

export default App;
