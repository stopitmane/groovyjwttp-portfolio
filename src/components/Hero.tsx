import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary-foreground shadow-soft">
              <img 
                src={profilePhoto} 
                alt="Ajayi Taiwo John - Full Stack Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground">
              Ajayi Taiwo John
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 font-medium">
              Full Stack Developer
            </p>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Specializing in Python, Django, and modern JavaScript frameworks. 
              Building scalable, high-performance web applications.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="gap-2 shadow-soft hover:scale-105 transition-smooth"
              asChild
            >
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-105 transition-smooth"
              asChild
            >
              <a href="#projects">
                <ExternalLink className="w-5 h-5" />
                View Projects
              </a>
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/stopitmane" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-110"
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://www.linkedin.com/in/ajayi-john-124970265" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:ajayijohn19999@gmail.com"
              className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth hover:scale-110"
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
