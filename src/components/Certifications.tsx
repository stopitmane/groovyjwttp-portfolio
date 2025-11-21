import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    name: "IBM Full Stack Software Developer",
    issuer: "IBM – Coursera",
    link: "https://drive.google.com/file/d/1gC3aop-lGagw6qEiOrph4uW3UcGhGDKT/view"
  },
  {
    name: "Introduction to Software Engineering",
    issuer: "IBM – Coursera",
    link: "https://drive.google.com/file/d/1esa6X-J4q__5v-x7cfd0Dr6yjQSEXwrF/view"
  },
  {
    name: "Python for Data Science, AI & Development",
    issuer: "IBM – Coursera",
    link: "https://drive.google.com/file/d/1PwL3vDkKYcV6tYXP7kAUOYF5PjSq8pyU/view"
  },
  {
    name: "Developing Back-End Apps with Node.js and Express",
    issuer: "IBM – Coursera",
    link: "https://drive.google.com/file/d/1hjKphv26adKrLzm2FiufD9cQ8uGjeSCv/view"
  },
  {
    name: "Full Stack Web Development Internship",
    issuer: "New Horizons",
    link: "https://drive.google.com/file/d/14CDotRinYQUXkbNr1FRIq5GL44hGqKfY/view"
  },
  {
    name: "Website Development Program",
    issuer: "DON-CLEM LTD",
    link: "https://drive.google.com/file/d/1L0CEvng9_20erC6cFtNCRqn3Z5tq99l9/view"
  },
  {
    name: "Developing AI Applications with Python and Flask",
    issuer: "IBM – Coursera",
    link: "https://drive.google.com/file/d/1Q-bGId5zR0_Pp-fT-TzqpmWnCY-FxfeJ/view"
  },
  {
    name: "Getting Started with Git and GitHub",
    issuer: "IBM – Coursera",
    link: "https://drive.google.com/file/d/1ZI8lJESlOcia2Pot-v4f_yQG5_0uB-UM/view"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Certifications
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-6 shadow-card border border-border hover:shadow-soft transition-smooth flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">
                  {cert.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {cert.issuer}
                </p>
                <Button 
                  size="sm" 
                  variant="outline"
                  asChild
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
