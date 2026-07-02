import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AI from "@/components/AI";
import Contact from "@/components/Contact";
//import Footer from "@/components/Footer";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <AI />
      <Contact />
      
    </>
  );
}