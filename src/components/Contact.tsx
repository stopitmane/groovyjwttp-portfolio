import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-accent">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. 
            Feel free to reach out if you'd like to work together!
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <a 
              href="mailto:ajayijohn19999@gmail.com"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-smooth group"
            >
              <Mail className="w-8 h-8 text-primary-foreground mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-sm text-primary-foreground/80 mb-1">Email</p>
              <p className="text-primary-foreground font-medium text-sm">ajayijohn19999@gmail.com</p>
            </a>

            <a 
              href="tel:+2349160650495"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-smooth group"
            >
              <Phone className="w-8 h-8 text-primary-foreground mx-auto mb-3 group-hover:scale-110 transition-smooth" />
              <p className="text-sm text-primary-foreground/80 mb-1">Phone</p>
              <p className="text-primary-foreground font-medium text-sm">+234 (0)9160650495</p>
            </a>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <MapPin className="w-8 h-8 text-primary-foreground mx-auto mb-3" />
              <p className="text-sm text-primary-foreground/80 mb-1">Location</p>
              <p className="text-primary-foreground font-medium text-sm">Lagos, Nigeria</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg"
              variant="secondary"
              className="gap-2 shadow-soft"
              asChild
            >
              <a href="https://www.linkedin.com/in/ajayi-john-124970265" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="gap-2 shadow-soft"
              asChild
            >
              <a href="https://github.com/stopitmane" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="gap-2 shadow-soft"
              asChild
            >
              <a href="https://docs.google.com/document/d/1rBlRbWu7k1_trSVfsEKIC3UTxzctQdj6/edit?usp=sharing&ouid=116009973024344697540&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5" />
                Recommendations
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
