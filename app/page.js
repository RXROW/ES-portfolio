import AboutSection from "./components/homepage/about";
import HeroSection from "./components/homepage/hero-section";
import Experience from "./components/homepage/experience";
import Skills from "./components/homepage/skills";
import Projects from "./components/homepage/projects";
import Services from "./components/homepage/services";
import Blog from "./blog/page";
import ContactSection from "./components/homepage/contact";
 

export default async function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Services/>
      <Blog/>
      <ContactSection/>
      
     
 
    </>
  );
}
