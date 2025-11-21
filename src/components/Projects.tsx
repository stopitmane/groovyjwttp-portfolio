import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Freshcart",
    description: "E-commerce web app using Django REST API and React for seamless shopping experience",
    link: "https://freshcart-candy-com.vercel.app/",
    tags: ["Django", "React", "REST API"]
  },
  {
    title: "Crypto Tracker",
    description: "Real-time cryptocurrency tracker using CoinGecko API and React",
    link: "https://crypto-tracker-wttp.vercel.app/",
    tags: ["React", "API Integration", "Real-time"]
  },
  {
    title: "TimbuCloud Website",
    description: "E-commerce site built with responsive design and optimized UX",
    link: "https://timbucloudwebsite.vercel.app/",
    tags: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Bincom Profile Website",
    description: "Python-based portfolio site showcasing Django and REST integration",
    link: "https://bincom-nine.vercel.app/",
    tags: ["Python", "Django", "REST API"]
  },
  {
    title: "E-Plant Shopping App",
    description: "E-commerce web application built with Node.js and Express.js, featuring responsive design and secure checkout",
    link: "https://stopitmane.github.io/e-plantShopping/",
    tags: ["Node.js", "Express.js", "E-commerce"]
  },
  {
    title: "Blog Platform Backend",
    description: "RESTful backend API built with Node.js and Express.js for managing blog posts, users, and comments",
    link: "https://github.com/stopitmane/blog-platform-backend.git",
    github: "https://github.com/stopitmane/blog-platform-backend.git",
    tags: ["Node.js", "Express.js", "REST API"]
  },
  {
    title: "Product Dashboard",
    description: "E-commerce site built with responsive design and TypeScript for seamless shopping experience",
    link: "https://product-dashboard-task-drab.vercel.app/",
    tags: ["TypeScript", "Dashboard", "E-commerce"]
  },
  {
    title: "Progressive Web App",
    description: "PWA built with Django REST API and TypeScript, featuring offline support and task synchronization",
    link: "https://pwa-task-9.vercel.app/",
    tags: ["PWA", "Django", "TypeScript"]
  },
  {
    title: "CV Builder App",
    description: "Single-page CV Builder web app using Angular and TypeScript",
    link: "https://cv-app-one-sable.vercel.app/",
    tags: ["Angular", "TypeScript", "SPA"]
  },
  {
    title: "Book Review App",
    description: "Full-stack web app with user registration, login, and book reviews with JWT-based authentication",
    link: "https://express-book-reviews-teal.vercel.app/",
    tags: ["Express.js", "MongoDB", "JWT"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="hover:shadow-soft transition-smooth border-border"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button 
                    size="sm" 
                    className="flex-1 gap-2"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </a>
                  </Button>
                  {project.github && (
                    <Button 
                      size="sm" 
                      variant="outline"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
