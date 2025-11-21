import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      <footer className="bg-foreground/5 py-8 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Ajayi Taiwo John. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Index;
